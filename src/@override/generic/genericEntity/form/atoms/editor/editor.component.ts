import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityData } from '../../../../../utils/interfaces/entityData';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { OverrideService } from '../../../../../utils/override.service';
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import '@ckeditor/ckeditor5-build-classic/build/translations/ar';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadAdapter } from './upload-adapter';
import { EntityService } from '../../../../../utils/entity.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public Editor = ClassicEditor

  public config = {
    language: this.override.currentLang,
    //  toolbar: [ [ 'Bold' ] ] ,
    //  uiColor :'#039BE5',
     toolbarCanCollapse :true,
   
     toolbarGroups : [
      { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
      { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
      { name: 'links' },
      { name: 'insert' },
      { name: 'forms' },
      { name: 'tools' },
      { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
      { name: 'others' },
      '/',
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
      { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
      { name: 'styles' },
      { name: 'colors' },
      { name: 'about' }
    ],
  
    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.
    removeButtons : 'Subscript,About',
  
    // Set the most common block elements.
    format_tags : 'p;h1;h2;h3;pre',
  
    // Simplify the dialog windows.
    removeDialogTabs : 'image:advanced;link:advanced'  };
  public watchdog: any;
  public ready = false;

  @Input() field: AbstractField;
  @Input() form: FormGroup;
  @Input() isArray: boolean;
  constructor(public entities: EntitiesService, public translate: TranslateService, public override: OverrideService,private entity: EntityService) { }

  get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched; }
  get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched; }
  entityData: EntityData;

  ngOnInit(): void {
  }


  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      // console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }


}
