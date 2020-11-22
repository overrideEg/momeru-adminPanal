import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { EntitiesService } from '../utils/entities.service';
import { Router, ActivationEnd } from '@angular/router';
import { EntityData } from '../utils/interfaces/entityData';
import { FieldType } from '../utils/interfaces/FieldType.enum';
import { EntityService } from '../utils/entity.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UploadComponent } from './genericEntity/upload/upload.component';
import { CsvExportParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { routingAnimates } from '../animations/routeing-animate';

@Component({
  selector: 'OGeneric',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss'],
  animations:[routingAnimates]
})
export class GenericComponent implements OnChanges, OnDestroy {

  subscrition: Subscription;
  entityData: EntityData;
  constructor(
    private router: Router,
    public entities: EntitiesService,
    private dataService: EntityService,
    private _bottomSheet: MatBottomSheet) {
    router.events.subscribe((val) => {
      // see also 
      let nav: typeof ActivationEnd
      if (val instanceof ActivationEnd) {
        nav = ActivationEnd
        let route = val.snapshot.params.route;

        let entity = this.entities.allEntities.find(entity => entity.route.substr(entity.route.lastIndexOf('/') + 1) === route)

        this.entityData = entity;
      }
    });
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }


  submit() {

    this.entityData.form.fields.forEach((field) => {
      if (field.type === FieldType.number)
        this.entities.form.get(field.name).setValue(+this.entities.form.get(field.name).value);

      if (field.type === FieldType.colorPicker)
        this.entities.form.get(field.name).setValue('#' + this.entities.form.get(field.name).value.hex);

      // if (field.type === FieldType.entity && this.entities.form.get(field.name).value === '') {
      //   this.entities.form.get(field.name).setValue(null);
      // }
    });
    let value = this.entities.form.value;

    if (this.entities.isEditMode !== true) {
      this.save(value)
    } else {
      this.update(value)
    }
  }

  draft() {
    this.entityData.form.fields.forEach((field) => {
      if (field.type === FieldType.number)
        this.entities.form.get(field.name).setValue(+this.entities.form.get(field.name).value);

      if (field.type === FieldType.colorPicker)
        this.entities.form.get(field.name).setValue('#' + this.entities.form.get(field.name).value.hex);

      // if (field.type === FieldType.entity && this.entities.form.get(field.name).value === '') {
      //   this.entities.form.get(field.name).setValue(null);
      // }
    });
    let value = this.entities.form.value;
    this.subscrition = this.dataService.saveDraft(this.entityData.apiSelector, value).subscribe(
      res => {

        if (res['status'] === 200 || res['status'] === 201) {
          this.entities.form.patchValue(res['body']);
          setTimeout(() => this.router.navigate([this.entityData.route]), 1000);
        }
      }
    )
  }


  preview() {
    let id = this.entities.entityId;
    let value = this.entities.form.value;

    if (id) {
      let url = this.entityData.draftViewURL


      if (value.slug) {
        url = url.replace('{slug}', value.slug)
      }
      url = url.replace('{entityId}', id)
      window.open(url)
    }
  }
  save(value: any) {
    this.subscrition = this.dataService.save(this.entityData.apiSelector, value).subscribe(
      res => {
        console.log('save', res);

        if (res['status'] === 200 || res['status'] === 201) {
          this.entities.form.patchValue(res['body']);
          setTimeout(() => this.router.navigate([this.entityData.route]), 1000);
        }
      }
    )
    // if (saved.status === 200 || saved.status === 201) {
    //   this.entities.form.patchValue(saved);
    //   setTimeout(() => this.router.navigate([this.entityData.route]), 1000);
    // }

  }

  update(value: any) {
    this.subscrition = this.dataService.update(this.entityData.apiSelector, value, this.entities.entityId).subscribe(
      res => {
        console.log('update', res);
        if (res['status'] === 200 || res['status'] === 201) {
          this.entities.form.patchValue(res['body']);
          setTimeout(() => this.router.navigate([this.entityData.route]), 1000);
        }
      }
    );
    // if (saved.status === 200 || saved.status === 201) {
    //   this.entities.form.patchValue(saved);
    //   setTimeout(() => this.router.navigate([this.entityData.route]), 1000);
    // }


  }
  openBottomSheet() {
    this._bottomSheet.open(UploadComponent);
  }

  // export to CSV
  export() {
    var params: CsvExportParams = {
      fileName: this.entityData.name.plural + "_" + new Date().toLocaleString(),
      allColumns: true,
    }
    this.entities.gridApi.exportDataAsCsv(params)

  }


  ngOnDestroy(): void {
    console.log('genericDestroy')
    if (this.subscrition) {
      this.subscrition.unsubscribe()
      this.entityData = null;
    }
  }
}
