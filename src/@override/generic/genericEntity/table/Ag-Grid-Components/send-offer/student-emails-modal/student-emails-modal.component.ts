import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  templateUrl: './student-emails-modal.component.html',
  styleUrls: ['./student-emails-modal.component.scss']
})
export class StudentEmailsModalComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<StudentEmailsModalComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data) { }

  emailForm = new FormGroup({
    to: new FormControl('',[Validators.required]),
    cc: new FormControl('',[Validators.required]),
    messageTtile: new FormControl('',[Validators.required]),
    messageBody: new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
  }
  send(){
    let params = this.data.params as ICellRendererParams
    console.log(params.api.getSelectedRows());
    

  }
}
