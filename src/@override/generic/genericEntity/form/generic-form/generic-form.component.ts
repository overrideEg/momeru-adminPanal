import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { EntitiesService } from '../../../../utils/entities.service';
import { OverrideService } from '../../../../utils/override.service';
import { EntityData } from '../../../../utils/interfaces/entityData';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntityService } from '../../../../utils/entity.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html'
})
export class GenericFormComponent implements OnInit, DoCheck, OnDestroy {

  entityData: EntityData;
  form: FormGroup;
  isEditMode: boolean;
  constructor(
    router: Router,
    public entities: EntitiesService,
    public override: OverrideService,
    private dataService: EntityService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    router.events.subscribe((val) => {
      // see also 
      let nav: typeof ActivationEnd
      if (val instanceof ActivationEnd) {
        nav = ActivationEnd
        let route = val.snapshot.params.route
        
        let entity = this.entities.allEntities.find(entity => 
        entity.route.substr(entity.route.indexOf("/",2)+1) === route        )
        
        this.entityData = entity;


      }
    });
  }
  ngOnDestroy(): void {
    this.entities.isEditMode = false;
    this.entities.saved = false
  }

  ngDoCheck(): void {
    this.entities.form = this.form
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
      let record = await this.dataService.getOne(this.entityData.apiSelector, this.entities.entityId)
      this.entities.i = 1
      this.form.patchValue(record);
    
  }

}
