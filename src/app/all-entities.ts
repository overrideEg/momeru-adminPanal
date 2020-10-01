import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '@override/utils/interfaces/FieldType.enum';
import { Validators } from '@angular/forms';
import { EntityData } from '@override/utils/interfaces/entityData';
import { UtilsService } from '@override/utils/utils.service';
import { DatePipe } from '@angular/common';
import { UserType } from './user-type.enum';

export class AllEntities {
    constructor(
        private _translateService: TranslateService,
        private utils: UtilsService,
        private datePipe: DatePipe

    ) { }
    public entities: EntityData[] = [
        {
            name: {
                single: 'User',
                plural: 'Users',
            },
            apiSelector: 'User',
            route: '/generic/User',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name',
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'email',
                        headerName: this._translateService.instant('email'),
                    },
                    {
                        field: 'password',
                        headerName: this._translateService.instant('password'),
                    },
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.text,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.email,
                        name: 'email',
                        label: this._translateService.instant('email'),
                        required: true,
                        validators: [Validators.required, Validators.email],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.password,
                        name: 'password',
                        label: this._translateService.instant('password'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2
                    },
             
                    {
                        type: FieldType.number,
                        name: 'userRate',
                        label: this._translateService.instant('userRate'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,
                        rows: 2
                    },
                    {
                        type: FieldType.dropdown,
                        name: 'userType',
                        label: this._translateService.instant('userType'),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 2,
                        rows: 2,
                        options: [
                            {
                                value: 'user',
                                label: this._translateService.instant('user')
                            },
                            {
                                value: 'company',
                                label: this._translateService.instant('company')
                            },
                            {
                                value: 'Admin',
                                label: this._translateService.instant('admin')
                            }
                        ]
                    },

                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Category',
                plural: 'Categories',
            },
            apiSelector: 'Category',
            route: '/generic/Category',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+[this.utils.currentLang],
                        headerName: this._translateService.instant('name'),
                    },
                
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,

                        cols: 12,
                        rows: 2
                    },
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Form',
                plural: 'Forms',
            },
            apiSelector: 'Form',
            route: '/generic/Form',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'description.'+this.utils.currentLang,
                        headerName: this._translateService.instant('description'),
                    },
                    {
                        field: 'instruction.'+this.utils.currentLang,
                        headerName: this._translateService.instant('instruction'),
                    },
                    {
                        field: 'responsibility.'+this.utils.currentLang,
                        headerName: this._translateService.instant('responsibility'),
                    },
                    {
                        field: 'advice.'+this.utils.currentLang,
                        headerName: this._translateService.instant('advice'),
                    },
                    {
                        field: 'assignToRate',
                        headerName: this._translateService.instant('assignToRate'),
                    },
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'description',
                        label: this._translateService.instant('description'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'instruction',
                        label: this._translateService.instant('instruction'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'advice',
                        label: this._translateService.instant('advice'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'responsibility',
                        label: this._translateService.instant('responsibility'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.number,
                        name: 'assignToRate',
                        label: this._translateService.instant('assignToRate'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.array,
                        name: 'questions',
                        label: this._translateService.instant('questions'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 12,
                        children: [
                            {
                                type: FieldType.textLocalized,
                                name: 'label',
                                label: this._translateService.instant('label'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 12,
                                rows: 2
                            },
                            {
                                type: FieldType.dropdown,
                                name: 'type',
                                label: this._translateService.instant('type'),
                                multiple: false,
                                required: false,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 6,
                                rows: 2,
                                options: [
                                    {
                                        value: 'text',
                                        label: this._translateService.instant('text')
                                    },
                                    {
                                        value: 'checkbox',
                                        label: this._translateService.instant('checkbox')
                                    },
                                    {
                                        value: 'date',
                                        label: this._translateService.instant('date')
                                    },
                                    {
                                        value: 'dropdown',
                                        label: this._translateService.instant('dropdown')
                                    },
                                    {
                                        value: 'email',
                                        label: this._translateService.instant('email')
                                    },
                                    {
                                        value: 'file',
                                        label: this._translateService.instant('file')
                                    },
                                    {
                                        value: 'number',
                                        label: this._translateService.instant('number')
                                    },
                                    {
                                        value: 'slider',
                                        label: this._translateService.instant('slider')
                                    },
                                    {
                                        value: 'radio',
                                        label: this._translateService.instant('radio')
                                    },
                                    {
                                        value: 'phonenumber',
                                        label: this._translateService.instant('phonenumber')
                                    },
                                ]
                            },
                           
                            {
                                type: FieldType.dropdown,
                                name: 'required',
                                label: this._translateService.instant('required'),
                                multiple: false,
                                required: false,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 6,
                                rows: 2,
                                options: [
                                    {
                                        value: 'veryhigh',
                                        label: this._translateService.instant('veryhigh')
                                    },
                                    {
                                        value: 'high',
                                        label: this._translateService.instant('high')
                                    },
                                    {
                                        value: 'low',
                                        label: this._translateService.instant('low')
                                    },
                                   
                                   
                                ]
                            },
                            {
                                type: FieldType.checkbox,
                                name: 'multiline',
                                label: this._translateService.instant('multiline'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 3,
                                rows: 2,
                            },
                            {
                                type: FieldType.checkbox,
                                name: 'multipleAnswers',
                                label: this._translateService.instant('multipleAnswers'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 3,
                                rows: 2,
                            },
                            {
                                type: FieldType.entity,
                                name: 'category',
                                label: this._translateService.instant('category'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 4,
                                rows: 2,
                                selectOptions: {
                                    optionName: 'name',
                                    fromSelector: 'Category',
                                    columns: [
                                        { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                        { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                                    ]
                                },
                            },
                            {
                                type: FieldType.array,
                                name: 'options',
                                label: this._translateService.instant('options'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 12,
                                rows: 10,
                                children:[
                                    {
                                        type: FieldType.textLocalized,
                                        name: 'text',
                                        label: this._translateService.instant('text'),
                                        required: true,
                                        validators: [Validators.required, Validators.minLength(3)],
                                        disabled: false,
                                        readonly: false,
                                        cols: 12,
                                        rows: 2
                                    },
                                ]
                            }
                           
                        ]
                    },
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        
        {
            name: {
                single: 'Question',
                plural: 'Questions',
            },
            apiSelector: 'Question',
            route: '/generic/Question',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'label.'+[this.utils.currentLang],
                        headerName: this._translateService.instant('label'),
                    },
                    {
                        field: 'type',
                        headerName: this._translateService.instant('type'),
                    },
                    {
                        field: 'required',
                        headerName: this._translateService.instant('required'),
                    },
                    {
                        field: 'multiline',
                        headerName: this._translateService.instant('multiline'),
                    },
                    {
                        field: 'multipleAnswers',
                        headerName: this._translateService.instant('multipleAnswers'),
                    },
                    {
                        field: 'category.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('category'),
                    },
                
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'label',
                        label: this._translateService.instant('label'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.dropdown,
                        name: 'type',
                        label: this._translateService.instant('type'),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        options: [
                            {
                                value: 'text',
                                label: this._translateService.instant('text')
                            },
                            {
                                value: 'checkbox',
                                label: this._translateService.instant('checkbox')
                            },
                            {
                                value: 'date',
                                label: this._translateService.instant('date')
                            },
                            {
                                value: 'dropdown',
                                label: this._translateService.instant('dropdown')
                            },
                            {
                                value: 'email',
                                label: this._translateService.instant('email')
                            },
                            {
                                value: 'file',
                                label: this._translateService.instant('file')
                            },
                            {
                                value: 'number',
                                label: this._translateService.instant('number')
                            },
                            {
                                value: 'slider',
                                label: this._translateService.instant('slider')
                            },
                            {
                                value: 'radio',
                                label: this._translateService.instant('radio')
                            },
                            {
                                value: 'phonenumber',
                                label: this._translateService.instant('phonenumber')
                            },
                        ]
                    },
                   
                    {
                        type: FieldType.dropdown,
                        name: 'required',
                        label: this._translateService.instant('required'),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        options: [
                            {
                                value: 'veryhigh',
                                label: this._translateService.instant('veryhigh')
                            },
                            {
                                value: 'high',
                                label: this._translateService.instant('high')
                            },
                            {
                                value: 'low',
                                label: this._translateService.instant('low')
                            },
                           
                           
                        ]
                    },
                    {
                        type: FieldType.checkbox,
                        name: 'multiline',
                        label: this._translateService.instant('multiline'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,
                        rows: 2,
                    },
                    {
                        type: FieldType.checkbox,
                        name: 'multipleAnswers',
                        label: this._translateService.instant('multipleAnswers'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,
                        rows: 2,
                    },
                    {
                        type: FieldType.entity,
                        name: 'category',
                        label: this._translateService.instant('category'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Category',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        
        {
            name: {
                single: 'Page',
                plural: 'Pages',
            },
            apiSelector: 'Page',
            route: '/generic/Page',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'element.'+[this.utils.currentLang],
                        headerName: this._translateService.instant('element'),
                    },

                
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'element',
                        label: this._translateService.instant('element'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,

                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.array,
                        name: 'sections',
                        label: this._translateService.instant('sections'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 16,
                        children: [
                            {
                                type: FieldType.textLocalized,
                                name: 'title',
                                label: this._translateService.instant('title'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 12,
                                rows: 2
                            },
                            {
                                type: FieldType.textLocalized,
                                name: 'body',
                                label: this._translateService.instant('body'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                                rows: 3
                            },
                            {
                                type: FieldType.file,
                                name: 'images',
                                label: this._translateService.instant('images'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                multiple: true,
                                readonly: false,
                                cols: 6,
                                rows: 2,
                            },
                            
                            {
                                type: FieldType.array,
                                name: 'childs',
                                label: this._translateService.instant('childs'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 12,
                                rows: 10,
                                children:[
                                    {
                                        type: FieldType.textLocalized,
                                        name: 'title',
                                        label: this._translateService.instant('title'),
                                        required: true,
                                        validators: [Validators.required, Validators.minLength(3)],
                                        disabled: false,
                                        readonly: false,
                                        cols: 12,
                                        rows: 2
                                    },
                                    {
                                        type: FieldType.textLocalized,
                                        name: 'body',
                                        label: this._translateService.instant('body'),
                                        required: true,
                                        validators: [Validators.required, Validators.minLength(3)],
                                        disabled: false,
                                        readonly: false,
                                        cols: 12,
                                        rows: 2
                                    },
                                    {
                                        type: FieldType.file,
                                        name: 'images',
                                        label: this._translateService.instant('images'),
                                        required: true,
                                        validators: [Validators.required, Validators.minLength(3)],
                                        disabled: false,
                                        readonly: false,
                                        multiple: true,
                                        cols: 6,
                                        rows: 2
                                    },
                                   

                                ]
                            }
                           
                        ]
                    },
                   
                ],
                cols: 12,
                localizedAllFields: true
            },
            
        },
        {
            name: {
                single: 'Section',
                plural: 'Sections',
            },
            apiSelector: 'Section',
            route: '/generic/Section',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'title.'+[this.utils.currentLang],
                        headerName: this._translateService.instant('title'),
                    },
                    {
                        field: 'body.'+[this.utils.currentLang],
                        headerName: this._translateService.instant('body'),
                    },

                
                ]

            },
            form: {
                fields: [
                 
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this._translateService.instant('title'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this._translateService.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.file,
                        name: 'images',
                        label: this._translateService.instant('images'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        multiple: true,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                    },
                    
                    {
                        type: FieldType.array,
                        name: 'childs',
                        label: this._translateService.instant('childs'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 10,
                        children:[
                            {
                                type: FieldType.textLocalized,
                                name: 'title',
                                label: this._translateService.instant('title'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                cols: 12,
                                rows: 2
                            },
                            {
                                type: FieldType.textLocalized,
                                name: 'body',
                                label: this._translateService.instant('body'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                cols: 12,
                                rows: 2
                            },
                            {
                                type: FieldType.file,
                                name: 'images',
                                label: this._translateService.instant('images'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                multiple: true,
                                cols: 6,
                                rows: 2
                            },

                        ]
                    }
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },

        {
            name: {
                single: 'UserAnswer',
                plural: 'UserAnswers',
            },
            apiSelector: 'UserAnswer',
            route: '/generic/UserAnswer',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'user.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'question.label.'+this.utils.currentLang,
                        headerName: this._translateService.instant('question'),
                    },
                
                    {
                        field: 'answerValue',
                        headerName: this._translateService.instant('answerValue'),
                    },
                
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.entity,
                        name: 'user',
                        label: this._translateService.instant('user'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'User',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'question',
                        label: this._translateService.instant('question'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Question',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                   
                    {
                        type: FieldType.text,
                        name: 'answerValue',
                        label: this._translateService.instant('answerValue'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Specialization',
                plural: 'Specializations',
            },
            apiSelector: 'Specialization',
            route: '/generic/Specialization',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Company',
                plural: 'Companies',
            },
            apiSelector: 'Company',
            route: '/generic/Company',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'commercialRecordNo',
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'specialization.name'+this.utils.currentLang,
                        headerName: this._translateService.instant('specialization'),
                    },

                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'commercialRecordNo',
                        label: this._translateService.instant('commercialRecordNo'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.entity,
                        name: 'specialization',
                        label: this._translateService.instant('specialization'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Specialization',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
             
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'JobTitle',
                plural: 'JobTitles',
            },
            apiSelector: 'JobTitle',
            route: '/generic/JobTitle',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                  
             
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'CareerInterest',
                plural: 'CareerInterests',
            },
            apiSelector: 'CareerInterest',
            route: '/generic/CareerInterest',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                  
             
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'JobCategory',
                plural: 'JobCategorys',
            },
            apiSelector: 'JobCategory',
            route: '/generic/JobCategory',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                  
             
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Job',
                plural: 'Jobs',
            },
            apiSelector: 'Job',
            route: '/generic/Job',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'aboutCompany',
                        label: this._translateService.instant('aboutCompany'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'jobRequirements',
                        label: this._translateService.instant('jobRequirements'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.text,
                        name: 'jobResponsibilites',
                        label: this._translateService.instant('jobResponsibilites'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                  
             
                    {
                        type: FieldType.entity,
                        name: 'jobCategory',
                        label: this._translateService.instant('jobCategory'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'JobCategory',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'jobTitle',
                        label: this._translateService.instant('jobTitle'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'JobTitle',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                   
                    {
                        type: FieldType.entity,
                        name: 'company',
                        label: this._translateService.instant('company'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Company',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },

                    {
                        type: FieldType.group,
                        name: 'location',
                        label: this._translateService.instant('location'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        children:[
                            {
                                type: FieldType.text,
                                name: 'lng',
                                label: this._translateService.instant('lng'),
                                required: false,
                                // validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: true,
                                multiline: true,
                                cols: 6,
                                rows: 3
                            },
                            {
                                type: FieldType.text,
                                name: 'lat',
                                label: this._translateService.instant('lat'),
                                required: false,
                                // validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: true,
                                multiline: true,
                                cols: 6,
                                rows: 3
                            },
                        ]
                    },

                    {
                        type: FieldType.group,
                        name: 'salaryRange',
                        label: this._translateService.instant('salaryRange'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        children:[
                            {
                                type: FieldType.text,
                                name: 'from',
                                label: this._translateService.instant('from'),
                                required: false,
                                // validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: true,
                                multiline: true,
                                cols: 6,
                                rows: 3
                            },
                            {
                                type: FieldType.text,
                                name: 'to',
                                label: this._translateService.instant('to'),
                                required: false,
                                // validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: true,
                                multiline: true,
                                cols: 6,
                                rows: 3
                            },
                        ]
                    },
                    {
                        type: FieldType.dropdown,
                        name: 'employmentType',
                        label: this._translateService.instant('employmentType'),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        options: [
                            {
                                value: 'full-time',
                                label: this._translateService.instant('full-time')
                            },
                            {
                                value: 'part-time',
                                label: this._translateService.instant('part-time')
                            },
                            {
                                value: 'remotly',
                                label: this._translateService.instant('remotly')
                            },
                            
                        ]
                    },
                   
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Language',
                plural: 'Languages',
            },
            apiSelector: 'Language',
            route: '/generic/Language',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                   
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Currency',
                plural: 'Currencys',
            },
            apiSelector: 'Currency',
            route: '/generic/Currency',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                   
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'Country',
                plural: 'Countries',
            },
            apiSelector: 'Country',
            route: '/generic/Country',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'currency.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('currency'),
                    },
                    {
                        field: 'language.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('language'),
                    },
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.entity,
                        name: 'currency',
                        label: this._translateService.instant('currency'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Currency',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'language',
                        label: this._translateService.instant('language'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Language',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                  
                   
                   
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: 'City',
                plural: 'Cities',
            },
            apiSelector: 'City',
            route: '/generic/City',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('name'),
                    },
                    {
                        field: 'country.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('Country'),
                    },
                   
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this._translateService.instant('name'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.entity,
                        name: 'country',
                        label: this._translateService.instant('country'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Country',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                
                   
   
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },
        {
            name: {
                single: '/v1/Faq',
                plural: '/v1/Faqs',
            },
            apiSelector: '/v1/Faq',
            route: '/generic//v1/Faq',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this._translateService.instant('ID'),
                    },
                    {
                        field: 'question',
                        headerName: this._translateService.instant('question'),
                    },
                    {
                        field: 'answer',
                        headerName: this._translateService.instant('answer'),
                    },
                   
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.text,
                        name: 'question',
                        label: this._translateService.instant('question'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'answer',
                        label: this._translateService.instant('answer'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                   
                
                   
   
                   
                ],
                cols: 12,
                localizedAllFields: true
            }
        },




    ];
}
