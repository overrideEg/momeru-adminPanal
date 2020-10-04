import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { EntitiesService } from '../../../../../utils/entities.service';
import { MyErrorStateMatcher } from '@override/utils/my-error-state-matcher';
@Component({
  selector: 'colorPicker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor(public entities: EntitiesService) { }

  @Input() field: AbstractField;
  @Input() form: FormGroup;
  @Input() isArray: boolean;

  get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched;  }
  get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched;  }
  ngOnInit(): void {
    }
  touchUi;
  date = Date.now()
  matcher = new MyErrorStateMatcher();
  

}
