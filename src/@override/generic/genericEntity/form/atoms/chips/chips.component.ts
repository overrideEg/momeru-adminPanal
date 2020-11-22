import { EntityData } from './../../../../../utils/interfaces/entityData';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EntitiesService } from '../../../../../utils/entities.service';
import { AbstractField } from '../../../../../utils/interfaces/field';

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl = new FormControl();
    filteredFruits: Observable<string[]>;
    words: string[] = [];
    allFruits: string[] = [];
  
    @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;
  
    @Input() field: AbstractField;
    @Input() form: FormGroup;
    @Input() isArray: boolean;
    
    
  get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched; }
  get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched; }
  i = 0;
  entityData: EntityData;
    constructor(
        public entities: EntitiesService,
        private fb: FormBuilder,
        private translate: TranslateService,
        private router: Router
    ) {
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
          startWith(null),
          map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }
    ngOnInit(): void {
        const url = this.router.url;
        let entity = this.entities.allEntities.find(entity => url.startsWith(entity.route))
        this.entityData = entity;
        this.form.get(this.field.name).setValue([]) 
    }
  
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
       
       
        console.log(value);
        
      // Add our fruit
      if ((value || '').trim()) {
        this.words.push(value.trim());
      this.form.get(this.field.name).value.push(value.trim())
      console.log(this.form.value[this.field.name]);
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
  
      this.fruitCtrl.setValue(null);
    }
  
    remove(fruit: string): void {
      const index = this.form.get(this.field.name).value.indexOf(fruit);
  
      if (index >= 0) {
        this.form.get(this.field.name).value.splice(index, 1);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.words.push(event.option.viewValue);
      this.chipInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

}
