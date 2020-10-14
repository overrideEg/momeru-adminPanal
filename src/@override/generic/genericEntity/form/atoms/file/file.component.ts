import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityService } from '../../../../../utils/entity.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ImageViewComponent } from './image-view/image-view.component';
// import { API_URLS } from 'assets/constants/API_URLS';


@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {


  constructor(public entities: EntitiesService, private entity: EntityService, private translate: TranslateService,
    private _bottomSheet: MatBottomSheet
  ) { }

  @Input() field: AbstractField;
  @Input() form: FormGroup;
  @Input() isArray: boolean;

  get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched; }
  get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched; }
  ngOnInit(): void {
  }
  date = Date.now()

  async uploadFile(event) {
    if (!this.field.multiple) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      let uploaded = await this.entity.save('File', formData, undefined, 'multipart/form-data')

      this.form.get(this.field.name).setValue(uploaded.body.path)
    } else {
      const files = event.target.files;

      const formData = new FormData();


      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        formData.append('files', element);
      }



      let uploaded = await this.entity.save(environment.serverUrl + '/File/UploadMultiple', formData);

      if (uploaded) {
        this.entity.showSuccessToast(this.translate.instant('Uploaded'))
      }
      let vals = []
      uploaded.body.forEach(elem => {
        vals.push(elem.path)
      })
      this.form.get(this.field.name).setValue(vals);

    }


  }
  async deleteFile(url: any) {
    this.form.get(this.field.name).setValue(null);
  }
  viewImage(url) {
    const bottomSheetRef = this._bottomSheet.open(ImageViewComponent, {
      ariaLabel: 'image',
      data: url,
      autoFocus: true
    });
  }
}
