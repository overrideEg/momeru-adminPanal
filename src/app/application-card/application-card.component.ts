import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { EntityService } from '../../@override/utils/entity.service';
import { OverrideService } from '../../@override/utils/override.service';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss']
})
export class ApplicationCardComponent implements OnInit {
  card: any;

  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder, private entity: EntityService, public override: OverrideService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    let entityId = this.route.snapshot.paramMap.get('entityId');
    this.entity.getOne('Card', entityId).subscribe(res => {
      this.card = res['body'];
      setTimeout(() => {
        this.card.applyForm.forEach(q => {
          this.form.addControl(q.question, new FormControl(q.answer))
        })

        console.log(this.form);
        
        
      })


    })



  }
  form: FormGroup = this._formBuilder.group({});


  // Private
  private _unsubscribeAll: Subject<any>;

  /**


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

 
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }



}
