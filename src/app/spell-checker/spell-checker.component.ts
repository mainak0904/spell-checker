import { Component } from '@angular/core';
import { WordCorrectorComponent } from '../word-corrector/word-corrector.component';
import { CsvCorrectorComponent } from '../csv-corrector/csv-corrector.component';

@Component({
  selector: 'app-spell-checker',
  standalone: true,
  imports: [WordCorrectorComponent, CsvCorrectorComponent],
  templateUrl: './spell-checker.component.html',
  styleUrl: './spell-checker.component.scss'
})
export class SpellCheckerComponent {

}
