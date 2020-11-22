import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { __await } from 'tslib';
import { EntityService } from '../../../../../../../@override/utils/entity.service';
import { API_URLS } from '../../../../../../../assets/constants/API_URLS';
import { ScrumboardService } from '../../../scrumboard.service';

@Component({
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: any;
  TransferSubscription: Subscription;

  constructor(
    private scrumService: ScrumboardService,
    private entity: EntityService,
    private router: Router,
    public dialogRef: MatDialogRef<BoardListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  selectedValue: any
  async ngOnInit(): Promise<void> {
    this.boards = await this.scrumService.getBoards()


  }

  transfer() {
    let req = {
      card: this.data.card,
      fromBoard: this.scrumService.board,
      fromList: this.data.list,
      toBoard: this.selectedValue
    }
    // this.TransferSubscription = this.entity.save(API_URLS.Application.transfer, req).subscribe(res => {
    // })
    
    this.dialogRef.close()
    this.router.navigate(['apps','scrumboard','boards'])

  }

  ngOnDestroy(): void {
    if (this.TransferSubscription)
      this.TransferSubscription.unsubscribe()
  }

}
