import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';
import { EntitiesService } from '../../../utils/entities.service';
import { OverrideService } from '../../../utils/override.service';
import { EntityService } from '../../../utils/entity.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteRendererComponent } from "./Ag-Grid-Components/delete-renderer/delete-renderer.component";
import { EntityData } from '../../../utils/interfaces/entityData';
import { Subscription } from 'rxjs';
import { SendOfferComponent } from './Ag-Grid-Components/send-offer/send-offer.component';
@Component({
  selector: 'app-table',

  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy {
  loading = true;
  subscriotion: Subscription;
  gridColumnApi: any;
  selectedRows: any[];
  entityData: EntityData;
  overlayLoadingTemplate;
  constructor(
    private router: Router,
    public entities: EntitiesService,
    private translate: TranslateService,
    public override: OverrideService,
    private entity: EntityService,
    private _snackBar: MatSnackBar
  ) {
    this.overlayLoadingTemplate = `<span class="ag-overlay-loading-center">data is loading...</span>`
    router.events.subscribe((val) => {
      this.loading = true;
      // see also  
      let nav: typeof ActivationEnd
      if (val instanceof NavigationEnd) {
        this.init()
      }
      if (val instanceof ActivationEnd) {
        nav = ActivationEnd
        let route = val.snapshot.params.route
        let entity = this.entities.allEntities.find(entity => entity.route.substr(entity.route.indexOf('/', 2) + 1) === route);
        console.log(entity);
        
        this.entityData = entity;
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscriotion) {

      this.subscriotion.unsubscribe()
    }
  }

  init(): void {

    if (this.entityData.delete && !this.entityData.table.columnDefs.find(column => column.cellRenderer === 'deleteRender')) {
      this.entityData.table.columnDefs.push({
        headerName: this.translate.instant("delete"),
        cellRenderer: "deleteRender",
        cellRendererParams: {
          onClick: this.onDeleteClick.bind(this),
        }
      })
    }
    if (!this.entityData.table.rowData)
      this.getData()
  }
  rowData = []

  defaultColDef = {
    editable: false,
    enableRowGroup: true,
    enablePivot: false,
    enableValue: false,
    sortable: true,
    resizable: true,
    filter: true,
    enableCellChangeFlash: true,
  };

  onGridReady(params) {
    this.entities.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  frameworkComponents = {
    deleteRender: DeleteRendererComponent,
    sendOffer: SendOfferComponent,
    // approve: AgGridButtonApproveComponent,
    // resetPasswordRenderer: AgGridResetPasswordComponent,
  };

  cellEditingStopped(event) {
    const data = event.data;
    event.colDef.type == "number" ? (event.data[event.colDef.field] = +event.data[event.colDef.field]) : event.data[event.colDef.field];
    // if (API_URLS[`${this.entityData.name}`]["put"]) {

    this.subscriotion = this.entity.update(this.entityData.apiSelector, data, data._id).subscribe(res => {

      this.entities.gridApi.applyTransaction({ update: [res['body']] }).update;
      this.loading = false
    })


  }
  onDeleteClick(event) {
    const data = event.rowData.data;
    if (confirm(this.translate.instant("sure?")) && this.entityData) {      
      console.log('this',this.entityData);
      
      this.subscriotion = this.entity.delete(this.entityData.apiSelector, data, data._id).subscribe(res => {

        if (res['status'] == 200)
          this.entities.gridApi.applyTransaction({ remove: [data] });
        this.loading = false
      })
    }
  }

  onSelectionChanged() {
    this.selectedRows = this.entities.gridApi.getSelectedRows();
  }

  rowSelected(event) {
    this.entities.entityId = event.data._id
  }

  onPaginationChanged() { }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  getData() {
    this.subscriotion = this.entity.getAll(this.entityData.apiSelector).subscribe(res => {
      this.rowData = res['body']
      this.loading = false
    })
  }
  searchValue: any
  filter() {
    this.entities.gridApi.setQuickFilter(this.searchValue)
  }


}

