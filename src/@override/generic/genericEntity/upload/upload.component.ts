import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ExcelService } from '../../../utils/excel.service'
import { EntityService } from '../../../utils/entity.service';
import { EntitiesService } from '../../../utils/entities.service';
import { EntityData } from '../../../utils/interfaces/entityData';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit ,OnDestroy{
  fileName: any;
  entityData: EntityData;
  subscription: Subscription;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<UploadComponent>,
    private excel: ExcelService,
    private dataService: EntityService,
    private entities: EntitiesService,
    private router: Router) { }
 

  ngOnInit(): void {
    const url = this.router.url;
    let entity = this.entities.allEntities.find(entity => url.startsWith(entity.route))
    this.entityData = entity;
  }


   uploadFile(event) {
    var array: any[];
    this.fileName = event.target.files[0].name;
     this.excel.fromExcelToJson(event)
    setTimeout( () => {
      this._bottomSheetRef.dismiss()
      array = this.excel.json;
       this.subscription = this.dataService.upload(this.entityData.apiSelector, array).subscribe(
          res => {

              this.entities.gridApi.applyTransaction({ add: res['body'] });
          }
      )

    })


  }

    ngOnDestroy(): void {
        console.log('upload destroy ' );
        
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
