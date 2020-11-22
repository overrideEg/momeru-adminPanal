import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { EntityService } from '../../../../../utils/entity.service';
import { StudentEmailsModalComponent } from './student-emails-modal/student-emails-modal.component';

@Component({
  selector: 'app-send-offer',
  templateUrl: './send-offer.component.html',
  styleUrls: ['./send-offer.component.scss']
})
export class SendOfferComponent implements ICellRendererAngularComp {
  constructor(private entity: EntityService, private _bottomSheet: MatBottomSheet) { }
  params: any;
  getLabelFunction: any;
  cell: { row: any; col: any };

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.getLabelFunction = this.params.getLabelFunction;
    this.cell = { row: params.value, col: params.colDef.field };
  }

  refresh(params?: any): boolean {
    return true;
  }
  isPopup(): boolean {
    return false;
  }
  onClick($event) {

    this._bottomSheet.open(StudentEmailsModalComponent, { data: { cell: this.cell ,params: this.params} })


  }
}
