import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpellCheckerComponent } from './spell-checker/spell-checker.component';
import { WordCorrectorComponent } from './word-corrector/word-corrector.component';
import { CsvCorrectorComponent } from './csv-corrector/csv-corrector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpellCheckerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spell-checker';
}
