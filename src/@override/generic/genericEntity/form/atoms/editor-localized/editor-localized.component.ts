import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TranslateService } from '@ngx-translate/core';
import { EntitiesService } from '../../../../../utils/entities.service';
import { EntityData } from '../../../../../utils/interfaces/entityData';
import { AbstractField } from '../../../../../utils/interfaces/field';
import { MyErrorStateMatcher } from '../../../../../utils/my-error-state-matcher';

@Component({
  selector: 'editorLocalized',
  templateUrl: './editor-localized.component.html',
  styleUrls: ['./editor-localized.component.scss']
})
export class EditorLocalizedComponent implements OnInit {

  Lang = ['en','ar','ms'];
  @Input() field: AbstractField;
  @Input() form: FormGroup;
  @Input() isArray: boolean;
  constructor(public entities: EntitiesService, private router: Router,public translate: TranslateService) { }

  get isValid() { return this.form.get(this.field.name).valid && this.form.get(this.field.name).touched; }
  get isDirty() { return this.form.get(this.field.name).dirty && this.form.get(this.field.name).touched; }
  entityData: EntityData;

  ngOnInit(): void {
    const url = this.router.url;
    let entity = this.entities.allEntities.find(entity => url.startsWith(entity.route))
    this.entityData = entity;
  }
  date = Date.now()
  matcher = new MyErrorStateMatcher();
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

}
