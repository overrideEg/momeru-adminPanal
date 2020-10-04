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
                    }
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
                                value: 'admin',
                                label: this._translateService.instant('admin')
                            }
                        ]
                    },

                ],
                cols: 12,
                localizedAllFields: false
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
                localizedAllFields: false
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
                        multiline:true,
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'instruction',
                        label: this._translateService.instant('instruction'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'advice',
                        label: this._translateService.instant('advice'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline:true,
                        
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'responsibility',
                        label: this._translateService.instant('responsibility'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
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
                localizedAllFields: false
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
                localizedAllFields: false
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
                        field: 'user.name',
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
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'User',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'name' , headerName: this._translateService.instant('Name'), checkboxSelection: false },
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
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'label',
                            fromSelector: 'Question',
                            columns: [
                                { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                                { field: 'label.' + this.utils.currentLang, headerName: this._translateService.instant('label'), checkboxSelection: false },
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
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                   
                ],
                cols: 12,
                localizedAllFields: false
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
                localizedAllFields: false
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
                    // {
                    //     field: 'specialization.name'+this.utils.currentLang,
                    //     headerName: this._translateService.instant('specialization'),
                    // },

                   
                
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
                    // {
                    //     type: FieldType.entity,
                    //     name: 'specialization',
                    //     label: this._translateService.instant('specialization'),
                    //     required: true,
                    //     validators: [Validators.required],
                    //     disabled: false,
                    //     readonly: false,
                    //     cols: 6,
                    //     rows: 2,
                    //     selectOptions: {
                    //         optionName: 'name',
                    //         fromSelector: 'Specialization',
                    //         columns: [
                    //             { field: 'id', headerName: this._translateService.instant('Id'), checkboxSelection: true },
                    //             { field: 'name.' + this.utils.currentLang, headerName: this._translateService.instant('Name'), checkboxSelection: false },
                    //         ]
                    //     },
                    // },
             
                   
                ],
                cols: 12,
                localizedAllFields: false
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
                localizedAllFields: false
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
                localizedAllFields: false
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
                localizedAllFields: false
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
                    {
                        field: 'description.'+this.utils.currentLang,
                        headerName: this._translateService.instant('description'),
                    },
                  
                    {
                        field: 'description.'+this.utils.currentLang,
                        headerName: this._translateService.instant('description'),
                    },
                    {
                        field: 'jobTitle.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('jobTitle'),
                    },
                  
                    {
                        field: 'company.name.'+this.utils.currentLang,
                        headerName: this._translateService.instant('company'),
                    },
                    {
                        field: 'employmentType',
                        headerName: this._translateService.instant('employmentType'),
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
                        type: FieldType.textLocalized,
                        name: 'description',
                        label: this._translateService.instant('description'),
                        required: false,
                        // validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 2
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
                        type: FieldType.dropdown,
                        name: 'employmentType',
                        label: this._translateService.instant('Employment Type'),
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
                            {
                                value: 'freelancer',
                                label: this._translateService.instant('freelancer')
                            },
                            
                        ]
                    },
                   
                   
                ],
                cols: 12,
                localizedAllFields: false
            }
        },     
        {
            name: {
                single: 'Faq',
                plural: 'Faqs',
            },
            apiSelector: 'Faq',
            route: '/generic/Faq',
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
                        field: 'question.'+this.utils.currentLang,
                        headerName: this._translateService.instant('question'),
                    },
                    {
                        field: 'answer.'+this.utils.currentLang,
                        headerName: this._translateService.instant('answer'),
                    },
                   
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'question',
                        label: this._translateService.instant('question'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'answer',
                        label: this._translateService.instant('answer'),
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
                localizedAllFields: false
            }
        },
        {
            name: {
                single: 'Label',
                plural: 'Labels',
            },
            apiSelector: 'Label',
            route: '/generic/Label',
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
                        field: 'title.'+this.utils.currentLang,
                        headerName: this._translateService.instant('title'),
                    },
                    {
                        field: 'color',
                        headerName: this._translateService.instant('color'),
                    },
                   
                  
                   
                
                ]

            },
            form: {
                fields: [
                   
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this._translateService.instant('title'),
                        required: false,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.colorPicker,
                        name: 'color',
                        label: this._translateService.instant('color'),
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                   
                
                   
   
                   
                ],
                cols: 12,
                localizedAllFields: false
            }
        },


        // {
        //     name: {
        //         single: 'Page',
        //         plural: 'Pages',
        //     },
        //     apiSelector: 'Page',
        //     route: '/generic/Page',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 field: 'id',
        //                 headerName: this._translateService.instant('ID'),
        //             },
        //             {
        //                 field: 'title.'+[this.utils.currentLang],
        //                 headerName: this._translateService.instant('title'),
        //             },

                
        //         ]

        //     },
        //     form: {
        //         fields: [
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'title',
        //                 label: this._translateService.instant('title'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,

        //                 cols: 12,
        //                 rows: 2
        //             },
                    
        //             {
        //                 type: FieldType.array,
        //                 name: 'sections',
        //                 label: this._translateService.instant('sections'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,
        //                 rows: 16,
        //                 children: [
        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'title',
        //                         label: this._translateService.instant('title'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 12,
        //                         rows: 2
        //                     },
        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'body',
        //                         label: this._translateService.instant('body'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: true,
        //                         cols: 12,
        //                         rows: 3
        //                     },
        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'linkTitle',
        //                         label: this._translateService.instant('linkTitle'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 12,
        //                         rows: 2
        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'linkUrl',
        //                         label: this._translateService.instant('linkUrl'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.pattern(this.utils.websiteRegExp)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,
        //                         rows: 2
        //                     },
        //                     {
        //                         type: FieldType.text,
        //                         name: 'backgroundColor',
        //                         label: this._translateService.instant('backgroundColor'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiline: false,
        //                         cols: 6,
        //                         rows: 2
        //                     },
        //                     {
        //                         type: FieldType.file,
        //                         name: 'images',
        //                         label: this._translateService.instant('images'),
        //                         required: false,
        //                         // validators: [Validators.required],
        //                         disabled: false,
        //                         multiple: true,
        //                         readonly: false,
        //                         cols: 6,
        //                         rows: 2,
        //                     },
                            
        //                     {
        //                         type: FieldType.array,
        //                         name: 'childs',
        //                         label: this._translateService.instant('childs'),
        //                         required: false,
        //                         // validators: [Validators.required],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 12,
        //                         rows: 10,
        //                         children:[
        //                             {
        //                                 type: FieldType.textLocalized,
        //                                 name: 'title',
        //                                 label: this._translateService.instant('title'),
        //                                 required: false,
        //                                 // validators: [Validators.required, Validators.minLength(3)],
        //                                 disabled: false,
        //                                 readonly: false,
        //                                 cols: 12,
        //                                 rows: 2
        //                             },
        //                             {
        //                                 type: FieldType.textLocalized,
        //                                 name: 'body',
        //                                 label: this._translateService.instant('body'),
        //                                 required: false,
        //                                 // validators: [Validators.required, Validators.minLength(3)],
        //                                 disabled: false,
        //                                 readonly: false,
        //                                 cols: 12,
        //                                 rows: 2
        //                             },
        //                             {
        //                                 type: FieldType.textLocalized,
        //                                 name: 'linkTitle',
        //                                 label: this._translateService.instant('linkTitle'),
        //                                 required: false,
        //                                 // validators: [Validators.required, Validators.minLength(3)],
        //                                 disabled: false,
        //                                 readonly: false,
        //                                 multiline: false,
        //                                 cols: 12,
        //                                 rows: 2
        //                             },
        //                             {
        //                                 type: FieldType.text,
        //                                 name: 'linkUrl',
        //                                 label: this._translateService.instant('linkUrl'),
        //                                 required: false,
        //                                 // validators: [Validators.required, Validators.pattern(this.utils.websiteRegExp)],
        //                                 disabled: false,
        //                                 readonly: false,
        //                                 multiline: false,
        //                                 cols: 6,
        //                                 rows: 2
        //                             },
        //                             {
        //                                 type: FieldType.text,
        //                                 name: 'backgroundColor',
        //                                 label: this._translateService.instant('backgroundColor'),
        //                                 required: false,
        //                                 // validators: [Validators.required, Validators.minLength(3)],
        //                                 disabled: false,
        //                                 readonly: false,
        //                                 multiline: false,
        //                                 cols: 6,
        //                                 rows: 2
        //                             },
        //                             {
        //                                 type: FieldType.file,
        //                                 name: 'images',
        //                                 label: this._translateService.instant('images'),
        //                                 required: false,
        //                                 // validators: [Validators.required, Validators.minLength(3)],
        //                                 disabled: false,
        //                                 readonly: false,
        //                                 multiple: true,
        //                                 cols: 6,
        //                                 rows: 2
        //                             },
                                   

        //                         ]
        //                     }
                           
        //                 ]
        //             },
                   
        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     },
            
        // },
        // {
        //     name: {
        //         single: 'Section',
        //         plural: 'Sections',
        //     },
        //     apiSelector: 'Section',
        //     route: '/generic/Section',
        //     add: true,
        //     edit: true,
        //     delete: true,
        //     view: false,
        //     upload: true,
        //     export: true,
        //     table: {
        //         paginated: true,
        //         paginationPageSize: 15,
        //         pivotMode: false,
        //         columnDefs: [
        //             {
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: true,
        //                 field: 'id',
        //                 headerName: this._translateService.instant('ID'),
        //             },
        //             {
        //                 field: 'title.'+[this.utils.currentLang],
        //                 headerName: this._translateService.instant('title'),
        //             },
        //             {
        //                 field: 'body.'+[this.utils.currentLang],
        //                 headerName: this._translateService.instant('body'),
        //             },
        //             {
        //                 field: 'linkTitle.'+[this.utils.currentLang],
        //                 headerName: this._translateService.instant('linkTitle'),
        //             },
        //             {
        //                 field: 'linkUrl',
        //                 headerName: this._translateService.instant('linkUrl'),
        //             },
        //             {
        //                 field: 'backgroundColor',
        //                 headerName: this._translateService.instant('backgroundColor'),
        //             },

                
        //         ]

        //     },
        //     form: {
        //         fields: [
                 
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'title',
        //                 label: this._translateService.instant('title'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 rows: 2
        //             },
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'body',
        //                 label: this._translateService.instant('body'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: true,
        //                 cols: 12,
        //                 rows: 3
        //             },
        //             {
        //                 type: FieldType.textLocalized,
        //                 name: 'linkTitle',
        //                 label: this._translateService.instant('linkTitle'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 12,
        //                 rows: 2
        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'linkUrl',
        //                 label: this._translateService.instant('linkUrl'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.pattern(this.utils.websiteRegExp)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,
        //                 rows: 2
        //             },
        //             {
        //                 type: FieldType.text,
        //                 name: 'backgroundColor',
        //                 label: this._translateService.instant('backgroundColor'),
        //                 required: true,
        //                 validators: [Validators.required, Validators.minLength(3)],
        //                 disabled: false,
        //                 readonly: false,
        //                 multiline: false,
        //                 cols: 6,
        //                 rows: 2
        //             },
        //             {
        //                 type: FieldType.file,
        //                 name: 'images',
        //                 label: this._translateService.instant('images'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 multiple: true,
        //                 readonly: false,
        //                 cols: 6,
        //                 rows: 2,
        //             },
                    
        //             {
        //                 type: FieldType.array,
        //                 name: 'childs',
        //                 label: this._translateService.instant('childs'),
        //                 required: true,
        //                 validators: [Validators.required],
        //                 disabled: false,
        //                 readonly: false,
        //                 cols: 12,
        //                 rows: 10,
        //                 children:[
        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'title',
        //                         label: this._translateService.instant('title'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 12,
        //                         rows: 2
        //                     },
        //                     {
        //                         type: FieldType.textLocalized,
        //                         name: 'body',
        //                         label: this._translateService.instant('body'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         cols: 12,
        //                         rows: 2
        //                     },
        //                     {
        //                         type: FieldType.file,
        //                         name: 'images',
        //                         label: this._translateService.instant('images'),
        //                         required: true,
        //                         validators: [Validators.required, Validators.minLength(3)],
        //                         disabled: false,
        //                         readonly: false,
        //                         multiple: true,
        //                         cols: 6,
        //                         rows: 2
        //                     },

        //                 ]
        //             }
                   
        //         ],
        //         cols: 12,
        //         localizedAllFields: false
        //     }
        // },

    ];
}
