import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { TranslateService } from '@ngx-translate/core';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityData } from '../../../../../utils/interfaces/entityData';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { MyErrorStateMatcher } from '../../../../../utils/my-error-state-matcher';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadAdapter } from '../editor/upload-adapter';
import { OverrideService } from '../../../../../utils/override.service';
@Component({
  selector: 'editorLocalized',
  templateUrl: './editor-localized.component.html',
  styleUrls: ['./editor-localized.component.scss']
})
export class EditorLocalizedComponent implements OnInit {

  public Editor = ClassicEditor

    public Langs = ['en','ar', 'ms'];
    @Input() field: AbstractField;
    @Input() form: FormGroup;
    @Input() isArray: boolean;
    constructor(public entities: EntitiesService, private router: Router,public translate: TranslateService,private override: OverrideService) {
      
     }
  
    get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched; }
    get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched; }
    entityData: EntityData;
  
    ngOnInit(): void {
      const url = this.router.url;
      let entity = this.entities.allEntities.find(entity => url.startsWith(entity.route))
      this.entityData = entity
      console.log('form', this.entityData, this.form)
    }
    date = Date.now()

  
  public config = {
    language: this.override.currentLang,
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'underline',
        'alignment',
        '|',
        'bulletedList',
        'numberedList',
        'imageUpload',
        '|',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        '|',
        'undo',
        'redo',
        '|',
          'strikethrough', 'code','subscript', 'superscript',
            '|'
            
            
      ],

    },
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },

    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
  

  };
//   onReady(eventData) {
//     eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
//       return new UploadAdapter(loader);
//     };
//   }
  
}
