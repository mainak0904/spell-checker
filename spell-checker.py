from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from collections import Counter
import csv
import io

app = Flask(__name__)
CORS(app)  # Apply CORS globally to all routes

import pandas as pd


def load_corpus():
    """Loads a corpus from a CSV file, handling potential errors."""
    corpus_dict = {}
    try:
        df = pd.read_csv('legal_text_classification.csv', on_bad_lines='skip', engine='python', encoding='utf-8')
        text_data = ' '.join(df['case_text'].dropna().astype(str).tolist())
    except FileNotFoundError:
        print("Error: Could not find file 'legal_text_classification.csv'")
        return corpus_dict  # Return empty dictionary on file not found

    for word in text_data.split():
        word = word.lower()
        corpus_dict[word] = corpus_dict.get(word, 0) + 1
    return corpus_dict

corpus = load_corpus()


def corpus_based_correction(input_word):
    """Corrects a word based on the corpus, providing suggestions and similarity."""
    input_word = input_word.lower()

    if input_word in corpus:
        return {
            'input_word': input_word,
            'corrected_word': input_word,
            'match_percentage': 100.0
        }

    # Improved closest word search with Levenshtein distance for better accuracy
    closest_match, min_distance = None, float('inf')
    for word in corpus:
        if word.startswith(input_word[0]):
            distance = levenshtein_distance(input_word, word)
            if distance < min_distance:
                min_distance = distance
                closest_match = word

    if closest_match:
        similarity = round((corpus[closest_match] / sum(corpus.values())) * 100, 2)
        return {
            'input_word': input_word,
            'corrected_word': closest_match if similarity > 0 else "",  # Return empty string if score is 0
            'match_percentage': similarity
        }
    else:
        return {
            'input_word': input_word,
            'corrected_word': "",  # Return empty string if no closest match found
            'match_percentage': 0.0
        }


# Function to calculate Levenshtein distance (optional import)
def levenshtein_distance(a, b):
    """Calculates the Levenshtein distance between two strings."""
    from nltk.metrics import edit_distance
    return edit_distance(a, b)


@app.route('/bulk_correct', methods=['POST'])
def batch_correct():
    data = request.get_json()

    words = [item['original'] for item in data]

    if not words:
        return jsonify({'error': 'No words provided'}), 400

    corrected_words = []

    for word in words:
        corrected = corpus_based_correction(word)
        corrected_words.append({
            "original_word": corrected['input_word'],
            "corrected_word": corrected['corrected_word'],
            "match_score": corrected['match_percentage']
        })

    return jsonify(corrected_words)


@app.route('/corrected', methods=['POST'])
def corrected():
    data = request.get_json()

    original = data.get('original', '')

    if original:
        corrected = corpus_based_correction(original)
        return jsonify(corrected)

    return jsonify({'error': 'No input word provided'}), 400


if __name__ == '__main__':
    app.run(debug=True)
