import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityData } from '../../../../../utils/interfaces/entityData';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ChipList',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  constructor(
    public entities: EntitiesService,
    private fb: FormBuilder,
    private translate: TranslateService,
    private router: Router) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }


  @Input() field: AbstractField;
  @Input() form: FormGroup;
  @Input() isArray: boolean;

  get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched; }
  get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched; }
  i = 0;
  entityData: EntityData;

  ngOnInit(): void {
    const url = this.router.url;
    let entity = this.entities.allEntities.find(entity => url.startsWith(entity.route))
    this.entityData = entity;
  }
  ngDoCheck(): void {
    if (
      this.entities.isEditMode &&
      this.form.value[this.field.name].length > 1 &&
      this.i === 0
    ) {
      let newValues = this.form.value[this.field.name] as any[];

      if (this.Forms.length < newValues.length) {
        newValues.forEach((element) => {
          const fieldsCtrls = {};
          for (const key in element) {
            if (element.hasOwnProperty(key)) {
              for (let f of this.field.children) {

                if (f.name == key) {
                  fieldsCtrls[f.name] = this.entities.DetectField(f)
                }
              }
            }

          }
          const newGroup = this.fb.group(fieldsCtrls);
          this.Forms.push(newGroup);

        });
      }
      if (this.Forms.length > newValues.length) {
        let val = this.Forms.value as [];
        const index = val.findIndex((value) => !newValues.includes(value));
        this.Forms.removeAt(index);
        this.Forms.removeAt(0);
      }
      this.i++;
    }
  }
  get Forms() {
    return this.form.controls[this.field.name] as FormArray;
  }


  addRow() {
    let ctrls = {}
    let newGroup;
    for (let f of this.field.children) {
      ctrls[f.name] = this.entities.DetectField(f)
      newGroup = this.fb.group(ctrls);
    }
    this.Forms.push(newGroup);


  }
  removeRow(i) {
    if (confirm(this.translate.instant('Are You Sure ?'))) {
      this.Forms.removeAt(i);
      // if (this.Forms.length === 0)
      // this.addRow()
    }


  }



  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;



  add(event: MatChipInputEvent): void {
    console.log(event, this.Forms);
    if (this.Forms.value === "")
      this.Forms.setValue([])
    this.Forms.value.push({ text: { ar: event.value } })

    // const input = event.input;
    // const value = event.value;

    // // Add our fruit
    // if ((value || '').trim()) {
    //   this.fruits.push(value.trim());
    // }

    // // Reset the input value
    // if (input) {
    //   input.value = '';
    // }

    // this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
