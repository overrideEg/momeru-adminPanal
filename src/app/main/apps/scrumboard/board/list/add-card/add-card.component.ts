import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrumboardService } from '../../../scrumboard.service';

@Component({
    selector: 'scrumboard-board-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardBoardAddCardComponent {
    formActive: boolean;
    form: FormGroup;

    @Output()
    cardAdded: EventEmitter<any>;

    @ViewChild('nameInput')
    nameInputField;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private service: ScrumboardService
    ) {
        // Set the defaults
        this.formActive = false;
        this.cardAdded = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open the form
     */
    openForm(): void {
        this.form = this._formBuilder.group({
            firstName: '',
            lastName: '',
            email: this._formBuilder.control('', [Validators.email]),
            mobile: '',
        });
        this.formActive = true;
        this.focusNameField();
    }

    /**
     * Close the form
     */
    closeForm(): void {
        this.formActive = false;
    }

    /**
     * Focus to the name field
     */
    focusNameField(): void {
        setTimeout(() => {
            this.nameInputField.nativeElement.focus();
        });
    }

    /**
     * On form submit
     */
    onFormSubmit(): void {
        if (this.form.valid) {
            const cardName = this.form.getRawValue().firstName + "-" + this.form.getRawValue().lastName;        
            this.cardAdded.next(this.form.value);
            this.formActive = false;
        }
    }
}

