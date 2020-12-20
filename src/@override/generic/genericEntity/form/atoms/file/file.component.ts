import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityService } from '../../../../../utils/entity.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ImageViewComponent } from './image-view/image-view.component';
import { Subscription } from 'rxjs';
import { API_URLS } from '../../../../../../assets/constants/API_URLS';
import { OverrideService } from '../../../../../utils/override.service';
// import { API_URLS } from 'assets/constants/API_URLS';


@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss','../../generic-form/bootstrap.css']
})
export class FileComponent implements OnInit,OnDestroy {
  uploadSubscription: Subscription;


  constructor(public entities: EntitiesService, private entity: EntityService, private translate: TranslateService,
    private _bottomSheet: MatBottomSheet,
    private override: OverrideService
  ) { }
  ngOnDestroy(): void {
    if (this.uploadSubscription){
      this.uploadSubscription.unsubscribe()
    }
  }

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
      this.uploadSubscription =   this.entity.save(API_URLS.File.upload, formData, this.override.AuthHeaders, 'multipart/form-data').subscribe((res:any)=>{
        console.log(res);
        
        this.form.get(this.field.name).setValue(res.body?.path)
      })

    } else {
      const files = event.target.files;

      const formData = new FormData();


      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        formData.append('files', element);
      }



      this.uploadSubscription =  this.entity.save(API_URLS.File.UploadMultiple, formData,this.override.AuthHeaders).subscribe((res:any)=>{

        if (res) {
          this.entity.showSuccessToast(this.translate.instant('Uploaded'))
        }
        let vals = []
        res.body?.forEach(elem => {
          vals.push(elem.path)
        })
        
        this.form.get(this.field.name).setValue(vals);
      })


    }


  }
  async deleteFile(url: any) {
    this.form.get(this.field.name).setValue(null);
  }
  viewImage(url) {
    //   console.log('url', url   )
    const bottomSheetRef = this._bottomSheet.open(ImageViewComponent, {
      ariaLabel: 'image',
      data: url,
      autoFocus: true
    });
  }
}
