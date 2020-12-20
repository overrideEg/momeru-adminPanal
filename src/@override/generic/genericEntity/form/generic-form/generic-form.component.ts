import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { EntitiesService } from '../../../../utils/entities.service';
import { OverrideService } from '../../../../utils/override.service';
import { EntityData } from '../../../../utils/interfaces/entityData';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntityService } from '../../../../utils/entity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./bootstrap.css']
})
export class GenericFormComponent implements OnInit, DoCheck, OnDestroy {

  subscription: Subscription
  entityData: EntityData;
  form: FormGroup;
  isEditMode: boolean;
  constructor(
    public router: Router,
    public entities: EntitiesService,
    public override: OverrideService,
    private dataService: EntityService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
        
      this.entities.i = 1;
      let routeName ;
    router.events.subscribe((val) => {
      // see also 
      let nav: typeof ActivationEnd
      if (val instanceof ActivationEnd) {
        nav = ActivationEnd
        let route = val.snapshot.params.route
        
        let entity = this.entities.allEntities.find(entity => entity.route.substr(entity.route.indexOf("/",2)+1) === route )
        // console.log(route,entity);
        
        this.entityData = entity;

        // if (this.entities.isEdit) {
        //     this.isEditMode = true;
        //     setTimeout( () => {
        //       this.entities.entityId = this.route.snapshot.paramMap.get('entityId');
        //       if (this.this.subscriptionId  this.entities.i === 1) {
        //         this.entities.isEditMode.subscribe() = true;
        //         await this.getFormData();
        //       }
        //     });
        //   }

      }
    });
  }
 

  ngDoCheck(): void {
    this.entities.form = this.form
    // console.log(this.entities.form)
  }
  ngOnInit(): void {
    this.createForm();   

    this.entities.saved = false;
    // create form group


  }

  createForm() {
    let fieldsCtrls = {}
    this.entities.entityData = this.entityData;
    for (let f of this.entityData.form.fields) {
      fieldsCtrls[f.name] = this.entities.DetectField(f)
    }
    this.form = this.fb.group(fieldsCtrls);
    
    this.entities.entityId = this.route.snapshot.paramMap.get('entityId');
    if (this.entities.entityId) {
      this.entities.isEditMode = true;
      this.getFormData() ;
    }
    
  }

  async getFormData() {

     this.dataService.getOne(this.entityData.apiSelector, this.entities.entityId).subscribe(res=>{
       
      this.entities.record = res['body']

      setTimeout(() => {
        this.form.patchValue(res['body']);
  
      });
    });

  }
//   checkFields(record: any) {
//     for (const key in record) {
//       if (Object.prototype.hasOwnProperty.call(record, key)) {
//         const element = record[key];

//         if (isArray(element) && element.length > 0 && Object.prototype.hasOwnProperty.call(element[0], 'id') && this.form.get(key).value.length < element.length) {
//           for (let i = 0; i < element.length - 1; i++) {
//             this.entities.arrayComponent.addRow()
//           }
//         }

//       }
//     }
//   }




   ngOnDestroy(): void {
    this.entities.isEditMode = false;
    this.entities.saved = false;
    // console.log('generic Form Destroy')
    if (this.subscription) {
        this.subscription.unsubscribe();
        this.entities.i = 1
    }
  }


}
