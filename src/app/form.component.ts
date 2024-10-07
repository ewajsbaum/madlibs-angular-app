import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results.component';

@Component({
    selector: 'form',
    standalone: true,
    imports: [FormsModule, ResultsComponent],
    templateUrl: './form.component.html',
    styleUrl: './app.component.css'
})
export class FormComponent {
    showResults = false;
    entryData: any = {
        name: "",
        country: "",
        city: "",
        adjective1: "",
        adjective2: "",
        adjective3: "",
        adjective4: "",
        adjective5: "",
        adjective6: "",
        verb1: "",
        verb2: "",
        verb3: "",
        adverb1: "",
        adverb2: "",
        friend: "",
        unitOfTime: "",
        number: "",
        bodyPart: "",
        sense: "",
        familyMember: "",
        colour: "",
        emotion: ""
    }

    generateResults() {
        this.showResults = true;
    }

    restart() {
        this.showResults = false;

        for (const key in this.entryData) {
            this.entryData[key] = "";
        }
    }
}