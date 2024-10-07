import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProperNounPipe } from './properNoun.pipe';

@Component({
  selector: 'results',
  standalone: true,
  imports: [RouterLink, ProperNounPipe],
  templateUrl: './results.component.html',
  styleUrl: './app.component.css'
})
export class ResultsComponent {
  @Input() entries: any;
  @Output() restartEvent = new EventEmitter<any>();

  restart() {
    this.restartEvent.emit();
  }
}