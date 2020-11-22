import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { API_URLS } from '../../../../../../assets/constants/API_URLS';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityService } from '../../../../../utils/entity.service';
import { EntityData } from '../../../../../utils/interfaces/entityData';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { MyErrorStateMatcher } from '../../../../../utils/my-error-state-matcher';

@Component({
  selector: 'autoComplete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  constructor(public entities: EntitiesService, private entity: EntityService) { }

  @Input() field: AbstractField;
  @Input() form: FormGroup;
  @Input() isArray: boolean;
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  get isValid() { return this.form.get(this.field.name).valid && !this.options.find((op) => op === this.form.get(this.field.name).value) && this.form.get(this.field.name).touched; }
  get isDirty() { return this.form.get(this.field.name).dirty && this.options.find((op) => op === this.form.get(this.field.name).value) && this.form.get(this.field.name).touched; }
  ngOnInit(): void {
    if (this.field.selectOptions.autoCompleteURL) {
      this.entity.getData(this.field.selectOptions.autoCompleteURL + "").subscribe(res => {
        this.options = res.body
        this.filteredOptions = this.form.get(this.field.name).valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      })
    }
  }
  date = Date.now()
  matcher = new MyErrorStateMatcher();
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  reriveData() {
    this.entity.getData(this.field.selectOptions.autoCompleteURL + this.form.get(this.field.name).value).subscribe(res => {
      this.options = res.body
      this.filteredOptions = this.form.get(this.field.name).valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    })
  }

}
