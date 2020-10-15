import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '@override/utils/interfaces/FieldType.enum';
import { Validators } from '@angular/forms';
import { EntityData } from '@override/utils/interfaces/entityData';
import { UtilsService } from '@override/utils/utils.service';
import { DatePipe } from '@angular/common';
import { UserType } from './user-type.enum';
import { OverrideService } from '../@override/utils/override.service';
import { Router } from '@angular/router';

export class AllEntities {
    constructor(
        private translate: TranslateService,
        private utils: UtilsService,
        private datePipe: DatePipe,
        private _override: OverrideService,
        private router: Router

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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name',
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'email',
                        headerName: this.translate.instant('email'),
                    }
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.text,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        label: this.translate.instant('email'),
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
                        label: this.translate.instant('password'),
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
                        label: this.translate.instant('userRate'),
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
                        label: this.translate.instant('userType'),
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
                                label: this.translate.instant('user')
                            },
                            {
                                value: 'company',
                                label: this.translate.instant('company')
                            },
                            {
                                value: 'admin',
                                label: this.translate.instant('admin')
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                single: 'HomePage',
                plural: 'HomePage',
            },
            apiSelector: 'HomePage',
            route: '/generic/HomePage',
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'title.' + [this.utils.currentLang],
                        headerName: this.translate.instant('name'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,

                        cols: 12,
                        rows: 2
                    }, {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,

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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'description.' + this.utils.currentLang,
                        headerName: this.translate.instant('description'),
                    },
                    {
                        field: 'instruction.' + this.utils.currentLang,
                        headerName: this.translate.instant('instruction'),
                    },
                    {
                        field: 'responsibility.' + this.utils.currentLang,
                        headerName: this.translate.instant('responsibility'),
                    },
                    {
                        field: 'advice.' + this.utils.currentLang,
                        headerName: this.translate.instant('advice'),
                    },
                    {
                        field: 'assignToRate',
                        headerName: this.translate.instant('assignToRate'),
                    },
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.dropdown,
                        name: 'type',
                        label: this.translate.instant('Form type'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 2,
                        options: [
                            {
                                label: this.translate.instant('Job'),
                                value: 'job'
                            }, {
                                label: this.translate.instant('Any Other'),
                                value: 'other'
                            }
                        ]
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        label: this.translate.instant('description'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'instruction',
                        label: this.translate.instant('instruction'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'advice',
                        label: this.translate.instant('advice'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,

                        cols: 12,
                        rows: 3
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'responsibility',
                        label: this.translate.instant('responsibility'),
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
                        label: this.translate.instant('assignToRate'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    // {
                    //     type: FieldType.array,
                    //     name: 'questions',
                    //     arrayView:'table',
                    //     label: this.translate.instant('questions'),
                    //     required: true,
                    //     validators: [Validators.required],
                    //     disabled: false,
                    //     readonly: false,
                    //     cols: 12,
                    //     rows: 12,
                    //     children: [
                    //         {
                    //             type: FieldType.textLocalized,
                    //             name: 'label',
                    //             label: this.translate.instant('label'),
                    //             required: true,
                    //             validators: [Validators.required, Validators.minLength(3)],
                    //             disabled: false,
                    //             readonly: false,
                    //             multiline: false,
                    //             cols: 12,
                    //             rows: 2
                    //         },
                    //         {
                    //             type: FieldType.dropdown,
                    //             name: 'type',
                    //             label: this.translate.instant('type'),
                    //             multiple: false,
                    //             required: false,
                    //             validators: [Validators.required],
                    //             disabled: false,
                    //             readonly: false,
                    //             cols: 6,
                    //             rows: 2,
                    //             options: [
                    //                 {
                    //                     value: 'text',
                    //                     label: this.translate.instant('text')
                    //                 },
                    //                 {
                    //                     value: 'checkbox',
                    //                     label: this.translate.instant('checkbox')
                    //                 },
                    //                 {
                    //                     value: 'date',
                    //                     label: this.translate.instant('date')
                    //                 },
                    //                 {
                    //                     value: 'dropdown',
                    //                     label: this.translate.instant('dropdown')
                    //                 },
                    //                 {
                    //                     value: 'email',
                    //                     label: this.translate.instant('email')
                    //                 },
                    //                 {
                    //                     value: 'file',
                    //                     label: this.translate.instant('file')
                    //                 },
                    //                 {
                    //                     value: 'number',
                    //                     label: this.translate.instant('number')
                    //                 },
                    //                 {
                    //                     value: 'slider',
                    //                     label: this.translate.instant('slider')
                    //                 },
                    //                 {
                    //                     value: 'radio',
                    //                     label: this.translate.instant('radio')
                    //                 },
                    //                 {
                    //                     value: 'phonenumber',
                    //                     label: this.translate.instant('phonenumber')
                    //                 },
                    //             ]
                    //         },

                    //         {
                    //             type: FieldType.dropdown,
                    //             name: 'required',
                    //             label: this.translate.instant('required'),
                    //             multiple: false,
                    //             required: false,
                    //             validators: [Validators.required],
                    //             disabled: false,
                    //             readonly: false,
                    //             cols: 6,
                    //             rows: 2,
                    //             options: [
                    //                 {
                    //                     value: 'veryhigh',
                    //                     label: this.translate.instant('veryhigh')
                    //                 },
                    //                 {
                    //                     value: 'high',
                    //                     label: this.translate.instant('high')
                    //                 },
                    //                 {
                    //                     value: 'low',
                    //                     label: this.translate.instant('low')
                    //                 },


                    //             ]
                    //         },
                    //         {
                    //             type: FieldType.checkbox,
                    //             name: 'multiline',
                    //             label: this.translate.instant('multiline'),
                    //             required: true,
                    //             validators: [Validators.required],
                    //             disabled: false,
                    //             readonly: false,
                    //             cols: 3,
                    //             rows: 2,
                    //         },
                    //         {
                    //             type: FieldType.checkbox,
                    //             name: 'multipleAnswers',
                    //             label: this.translate.instant('multipleAnswers'),
                    //             required: true,
                    //             validators: [Validators.required],
                    //             disabled: false,
                    //             readonly: false,
                    //             cols: 3,
                    //             rows: 2,
                    //         },
                    //         {
                    //             type: FieldType.entity,
                    //             name: 'category',
                    //             label: this.translate.instant('category'),
                    //             required: true,
                    //             validators: [Validators.required],
                    //             disabled: false,
                    //             readonly: false,
                    //             cols: 4,
                    //             rows: 2,
                    //             selectOptions: {
                    //                 optionName: 'name',
                    //                 fromSelector: 'Category',
                    //                 columns: [
                    //                     { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                    //                     { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                    //                 ]
                    //             },
                    //         },
                    //         {
                    //             type: FieldType.chip,
                    //             name: 'options',
                    //             label: this.translate.instant('options'),
                    //             required: true,
                    //             arrayAddRow:true,
                    //             validators: [Validators.required],
                    //             disabled: false,
                    //             readonly: false,
                    //             cols: 12,
                    //             rows: 10,
                    //             children: [
                    //                 {
                    //                     type: FieldType.textLocalized,
                    //                     name: 'text',
                    //                     label: this.translate.instant('text'),
                    //                     required: true,
                    //                     validators: [Validators.required, Validators.minLength(3)],
                    //                     disabled: false,
                    //                     readonly: false,
                    //                     cols: 12,
                    //                     rows: 2
                    //                 },
                    //             ]
                    //         }

                    //     ]
                    // },

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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'label.' + [this.utils.currentLang],
                        headerName: this.translate.instant('label'),
                    },
                    {
                        field: 'type',
                        headerName: this.translate.instant('type'),
                    },
                    {
                        field: 'required',
                        headerName: this.translate.instant('required'),
                    },
                    {
                        field: 'multiline',
                        headerName: this.translate.instant('multiline'),
                    },
                    {
                        field: 'multipleAnswers',
                        headerName: this.translate.instant('multipleAnswers'),
                    },
                    {
                        field: 'category.name.' + this.utils.currentLang,
                        headerName: this.translate.instant('category'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'label',
                        label: this.translate.instant('label'),
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
                        label: this.translate.instant('type'),
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
                                label: this.translate.instant('text')
                            },
                            {
                                value: 'checkbox',
                                label: this.translate.instant('checkbox')
                            },
                            {
                                value: 'date',
                                label: this.translate.instant('date')
                            },
                            {
                                value: 'dropdown',
                                label: this.translate.instant('dropdown')
                            },
                            {
                                value: 'email',
                                label: this.translate.instant('email')
                            },
                            {
                                value: 'file',
                                label: this.translate.instant('file')
                            },
                            {
                                value: 'number',
                                label: this.translate.instant('number')
                            },
                            {
                                value: 'slider',
                                label: this.translate.instant('slider')
                            },
                            {
                                value: 'radio',
                                label: this.translate.instant('radio')
                            },
                            {
                                value: 'phonenumber',
                                label: this.translate.instant('phonenumber')
                            },
                        ]
                    },

                    {
                        type: FieldType.dropdown,
                        name: 'required',
                        label: this.translate.instant('required'),
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
                                label: this.translate.instant('veryhigh')
                            },
                            {
                                value: 'high',
                                label: this.translate.instant('high')
                            },
                            {
                                value: 'low',
                                label: this.translate.instant('low')
                            },


                        ]
                    },
                    {
                        type: FieldType.checkbox,
                        name: 'multiline',
                        label: this.translate.instant('multiline'),
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
                        label: this.translate.instant('multipleAnswers'),
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
                        label: this.translate.instant('category'),
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
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'form',
                        label: this.translate.instant('form'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'Form',

                            columns: [
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
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
                single: 'Option',
                plural: 'Options',
            },
            apiSelector: 'QuestionOptions',
            route: '/generic/Options',
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'text.' + [this.utils.currentLang],
                        headerName: this.translate.instant('text'),
                    },
                   

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'text',
                        label: this.translate.instant('text'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                   
                    {
                        type: FieldType.entity,
                        name: 'question',
                        label: this.translate.instant('Question'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        rows: 2,
                        selectOptions: {
                            optionName: 'label',
                            fromSelector: 'Question',

                            columns: [
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'label.' + this.utils.currentLang, headerName: this.translate.instant('label'), checkboxSelection: false },
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'user.name',
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'question.label.' + this.utils.currentLang,
                        headerName: this.translate.instant('question'),
                    },

                    {
                        field: 'answerValue',
                        headerName: this.translate.instant('answerValue'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.entity,
                        name: 'user',
                        label: this.translate.instant('user'),
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
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name', headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'question',
                        label: this.translate.instant('question'),
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
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'label.' + this.utils.currentLang, headerName: this.translate.instant('label'), checkboxSelection: false },
                            ]
                        },
                    },

                    {
                        type: FieldType.text,
                        name: 'answerValue',
                        label: this.translate.instant('answerValue'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },


                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'commercialRecordNo',
                        headerName: this.translate.instant('name'),
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
                        label: this.translate.instant('name'),
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
                        label: this.translate.instant('commercialRecordNo'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'description.' + this.utils.currentLang,
                        headerName: this.translate.instant('description'),
                    },

                    {
                        field: 'description.' + this.utils.currentLang,
                        headerName: this.translate.instant('description'),
                    },
                    {
                        field: 'jobTitle.name.' + this.utils.currentLang,
                        headerName: this.translate.instant('jobTitle'),
                    },

                    {
                        field: 'company.name.' + this.utils.currentLang,
                        headerName: this.translate.instant('company'),
                    },
                    {
                        field: 'employmentType',
                        headerName: this.translate.instant('employmentType'),
                    },



                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
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
                        name: 'description',
                        label: this.translate.instant('description'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.entity,
                        name: 'jobCategory',
                        label: this.translate.instant('jobCategory'),
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
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'jobTitle',
                        label: this.translate.instant('jobTitle'),
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
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.entity,
                        name: 'company',
                        label: this.translate.instant('company'),
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
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.dropdown,
                        name: 'employmentType',
                        label: this.translate.instant('Employment Type'),
                        multiple: false,
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        options: [
                            {
                                value: 'full-time',
                                label: this.translate.instant('full-time')
                            },
                            {
                                value: 'part-time',
                                label: this.translate.instant('part-time')
                            },
                            {
                                value: 'remotly',
                                label: this.translate.instant('remotly')
                            },
                            {
                                value: 'freelancer',
                                label: this.translate.instant('freelancer')
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'question.' + this.utils.currentLang,
                        headerName: this.translate.instant('question'),
                    },
                    {
                        field: 'answer.' + this.utils.currentLang,
                        headerName: this.translate.instant('answer'),
                    },




                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'question',
                        label: this.translate.instant('question'),
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
                        label: this.translate.instant('answer'),
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'color',
                        headerName: this.translate.instant('color'),
                    },




                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        label: this.translate.instant('color'),
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

        {
            name: {
                single: 'ContactUs',
                plural: 'ContactUs',
            },
            apiSelector: 'contact-us',
            route: '/generic/contact-us',
            add: false,
            edit: false,
            delete: true,
            view: false,
            upload: false,
            export: false,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name',
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'email',
                        headerName: this.translate.instant('email'),
                    },
                    {
                        field: 'message',
                        headerName: this.translate.instant('message'),
                    },
                    {
                        field: 'messageType',
                        headerName: this.translate.instant('messageType'),
                    },




                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },

                    {
                        type: FieldType.email,
                        name: 'email',
                        label: this.translate.instant('email'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },

                    {
                        type: FieldType.dropdown,
                        name: 'messageType',
                        label: this.translate.instant('messageType'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        options: [
                            {
                                label: this.translate.instant('question'),
                                value: 'question'
                            },
                            {
                                label: this.translate.instant('interest'),
                                value: 'interest'
                            },
                            {
                                label: this.translate.instant('suggestion'),
                                value: 'suggestion'
                            },
                            {
                                label: this.translate.instant('complaint'),
                                value: 'complaint'
                            },
                        ]
                    },
                    {
                        type: FieldType.text,
                        name: 'message',
                        label: this.translate.instant('message'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'pageType',
                        headerName: this.translate.instant('pageType'),
                    },
                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },





                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },
                    {
                        type: FieldType.dropdown,
                        name: 'pageType',
                        label: this.translate.instant('pageType'),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        rows: 2,
                        options: [
                            {
                                value: 'homePage',
                                label: this.translate.instant('homePage')
                            },
                            {
                                value: 'about',
                                label: this.translate.instant('about')
                            },
                            {
                                value: 'partners',
                                label: this.translate.instant('partners')
                            },
                            {
                                value: 'missionVision',
                                label: this.translate.instant('missionVision')
                            },

                        ]
                    },
                    {
                        type: FieldType.array,
                        name: 'images',
                        label: this.translate.instant('images'),
                        required: false,
                        // validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        arrayAddRow: false,
                        cols: 12,
                        rows: 6,
                        children: [
                            {
                                type: FieldType.textLocalized,
                                name: 'title',
                                label: this.translate.instant('title'),
                                required: false,
                                // validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 12,
                                rows: 2
                            },
                            {
                                type: FieldType.file,
                                name: 'imagePath',
                                label: this.translate.instant('imagePath'),
                                required: false,
                                // validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                multiple: false,
                                cols: 12,
                                rows: 2
                            },

                        ]
                    },
                    {
                        type: FieldType.array,
                        name: 'childs',
                        label: this.translate.instant('childs'),
                        required: false,
                        // validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        arrayAddRow: false,
                        cols: 12,
                        rows: 20,
                        children: [
                            {
                                type: FieldType.textLocalized,
                                name: 'title',
                                label: this.translate.instant('title'),
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
                                label: this.translate.instant('body'),
                                required: true,
                                validators: [Validators.required, Validators.minLength(3)],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,
                                rows: 3
                            },
                            {
                                type: FieldType.dropdown,
                                name: 'pageType',
                                label: this.translate.instant('pageType'),
                                multiple: false,
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 6,
                                rows: 2,
                                options: [
                                    {
                                        value: 'homePage',
                                        label: this.translate.instant('homePage')
                                    },
                                    {
                                        value: 'about',
                                        label: this.translate.instant('about')
                                    },
                                    {
                                        value: 'partenrs',
                                        label: this.translate.instant('partenrs')
                                    },
                                    {
                                        value: 'missionVision',
                                        label: this.translate.instant('missionVision')
                                    },

                                ]
                            },
                            {
                                type: FieldType.array,
                                name: 'images',
                                label: this.translate.instant('images'),
                                required: false,
                                // validators: [Validators.required],
                                disabled: false,
                                readonly: false,
                                cols: 12,
                                rows: 12,
                                children: [
                                    {
                                        type: FieldType.textLocalized,
                                        name: 'title',
                                        label: this.translate.instant('title'),
                                        required: false,
                                        // validators: [Validators.required],
                                        disabled: false,
                                        readonly: false,
                                        multiline: false,
                                        cols: 12,
                                        rows: 2
                                    },
                                    {
                                        type: FieldType.file,
                                        name: 'imagePath',
                                        label: this.translate.instant('imagePath'),
                                        required: false,
                                        // validators: [Validators.required],
                                        disabled: false,
                                        readonly: false,
                                        multiline: false,
                                        multiple: false,
                                        cols: 12,
                                        rows: 2
                                    },

                                ]
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
                single: 'First Section',
                plural: 'First Section',
            },
            apiSelector: 'FirstSection',
            route: '/generic/FirstSection',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },





                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        name: 'subTitle',
                        label: this.translate.instant('subTitle'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },


                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
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
                single: 'Second Section',
                plural: 'Second Section',
            },
            apiSelector: 'SecondSection',
            route: '/generic/SecondSection',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },





                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },


                    {
                        type: FieldType.file,
                        name: 'image1',
                        label: this.translate.instant('image1'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
                        view: 'image',
                        cols: 6,
                        rows: 2
                    },



                    {
                        type: FieldType.file,
                        name: 'image2',
                        label: this.translate.instant('image2'),
                        required: true,
                        view: 'image',
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
                        cols: 6,
                        rows: 2
                    },



                ],
                cols: 12,
                localizedAllFields: false
            }
        },
        {
            name: {
                single: 'Project Category',
                plural: 'Project Categories',
            },
            apiSelector: 'ProjectCategory',
            route: '/generic/ProjectCategory',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },

                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
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
                single: 'Project ',
                plural: 'Project ',
            },
            apiSelector: 'Project',
            route: '/generic/Project',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'category.title.' + this.utils.currentLang,
                        headerName: this.translate.instant('Category'),
                        onCellClicked: (event) => {

                            this.router.navigate(['/generic', 'ProjectCategory', event.data.id])
                        }
                    },
                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },

                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.entity,
                        name: 'category',
                        label: this.translate.instant('Category'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2,
                        selectOptions: {
                            optionName: 'title',
                            fromSelector: 'ProjectCategory',
                            columns: [
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'title.' + this.utils.currentLang, headerName: this.translate.instant('Title'), checkboxSelection: false },
                            ]
                        },
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        label: this.translate.instant('body'),
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
                        name: 'icon',
                        label: this.translate.instant('icon'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
                        cols: 6,
                        rows: 4
                    },

                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
                        cols: 6,
                        rows: 4
                    },




                ],
                cols: 12,
                localizedAllFields: false
            }
        },
        {
            name: {
                single: 'AboutUs ',
                plural: 'AboutUs ',
            },
            apiSelector: 'AboutUs',
            route: '/generic/AboutUs',
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
                        headerName: this.translate.instant('ID'),
                    },


                    {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },

                ]

            },
            form: {
                fields: [



                    {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
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
                single: 'Our Value',
                plural: 'Our Values',
            },
            apiSelector: 'OurValue',
            route: '/generic/OurValue',
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
                        headerName: this.translate.instant('ID'),
                    },


                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },  {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },

                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    }, {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this.translate.instant('body'),
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
                        name: 'icon',
                        label: this.translate.instant('icon'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
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
                single: 'Principle',
                plural: 'Principles',
            },
            apiSelector: 'Principle',
            route: '/generic/Principle',
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
                        headerName: this.translate.instant('ID'),
                    },


                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },  {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },

                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    }, {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 3
                    },
                   

                ],
                cols: 12,
                localizedAllFields: false
            }
        },     {
            name: {
                single: 'DealCategory',
                plural: 'Deal Categories',
            },
            apiSelector: 'DealCategory',
            route: '/generic/DealCategory',
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
                        headerName: this.translate.instant('ID'),
                    },


                    {
                        field: 'text.' + this.utils.currentLang,
                        headerName: this.translate.instant('text'),
                    },  
                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'text',
                        label: this.translate.instant('text'),
                        required: true,
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
        },{
            name: {
                single: 'ManagerTalk',
                plural: 'Manager Talks',
            },
            apiSelector: 'ManagerTalk',
            route: '/generic/ManagerTalk',
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
                        headerName: this.translate.instant('ID'),
                    },


                    {
                        field: 'managerName.' + this.utils.currentLang,
                        headerName: this.translate.instant('Manager Name'),
                    },  
                    {
                        field: 'managerPosition.' + this.utils.currentLang,
                        headerName: this.translate.instant('Manager Position'),
                    },  
                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.editorLocalized,
                        name: 'text',
                        label: this.translate.instant('text'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 10
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'managerName',
                        label: this.translate.instant('managerName'),
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
                        name: 'managerPosition',
                        label: this.translate.instant('managerPosition'),
                        required: true,
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
                single: 'Vision',
                plural: 'Visions',
            },
            apiSelector: 'Vision',
            route: '/generic/Vision',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },





                ]

            },
            form: {
                fields: [
                                  
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },


                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: false,
                        // validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
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
                single: 'Mission',
                plural: 'Missions',
            },
            apiSelector: 'Mission',
            route: '/generic/Mission',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
                    {
                        field: 'body.' + this.utils.currentLang,
                        headerName: this.translate.instant('body'),
                    },





                ]

            },
            form: {
                fields: [
                                  
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
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
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },


                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: false,
                        // validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
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
                single: 'Partner',
                plural: 'Partners',
            },
            apiSelector: 'Partner',
            route: '/generic/Partner',
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },
        
                ]

            },
            form: {
                fields: [
                                  
                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                  
                 

                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: false,
                        // validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        multiple: false,
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
                single: 'ServiceRequest',
                plural: 'ServiceRequest',
            },
            apiSelector: 'ServiceRequest',
            route: '/generic/ServiceRequest',
            add: false,
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
                        headerName: this.translate.instant('ID'),
                    },

                    {
                        field: 'serviceType',
                        headerName: this.translate.instant('serviceType'),
                    },
                    {
                        field: 'typeOfService',
                        headerName: this.translate.instant('typeOfService'),
                    },
                    {
                        field: 'applicantName',
                        headerName: this.translate.instant('applicantName'),
                    },
                    {
                        field: 'email',
                        headerName: this.translate.instant('email'),
                    },
                    {
                        field: 'mobileNumber',
                        headerName: this.translate.instant('mobileNumber'),
                    },
                    {
                        field: 'address',
                        headerName: this.translate.instant('address'),
                    },
                    {
                        field: 'city',
                        headerName: this.translate.instant('city'),
                    },
                    {
                        field: 'region',
                        headerName: this.translate.instant('region'),
                    },
                    {
                        field: 'country',
                        headerName: this.translate.instant('country'),
                    },
                    {
                        field: 'companyName',
                        headerName: this.translate.instant('companyName'),
                    },
                    {
                        field: 'companyBusiness',
                        headerName: this.translate.instant('companyBusiness'),
                    },
        
                ]

            },
            form: {
                fields: [
                                  
                    {
                        type: FieldType.text,
                        name: 'serviceType',
                        label: this.translate.instant('serviceType'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'typeOfService',
                        label: this.translate.instant('typeOfService'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'applicantName',
                        label: this.translate.instant('applicantName'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'email',
                        label: this.translate.instant('email'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'mobileNumber',
                        label: this.translate.instant('mobileNumber'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'address',
                        label: this.translate.instant('address'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'city',
                        label: this.translate.instant('city'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'region',
                        label: this.translate.instant('region'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'country',
                        label: this.translate.instant('country'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'companyName',
                        label: this.translate.instant('companyName'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'companyBusiness',
                        label: this.translate.instant('companyBusiness'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'companySize',
                        label: this.translate.instant('companySize'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'notesAndInquiries',
                        label: this.translate.instant('notesAndInquiries'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'entrepreneurBusiness',
                        label: this.translate.instant('entrepreneurBusiness'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'investorBusiness',
                        label: this.translate.instant('investorBusiness'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'companyOwner',
                        label: this.translate.instant('companyOwner'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'companySector',
                        label: this.translate.instant('companySector'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'nationality',
                        label: this.translate.instant('nationality'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'websiteAddress',
                        label: this.translate.instant('websiteAddress'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    {
                        type: FieldType.text,
                        name: 'partnershipType',
                        label: this.translate.instant('partnershipType'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                        rows: 2
                    },
                    
                  
                 

                   





                ],
                cols: 12,
                localizedAllFields: false
            }
        },

        {
            name: {
                single: 'BlogCategory',
                plural: 'BlogCategories',
            },
            apiSelector: 'BlogCategory',
            route: '/generic/BlogCategory',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: false,
            export: false,
            table: {
                paginated: true,
                paginationPageSize: 15,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        field: 'id',
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('name'),
                    },


                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
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
                single: 'Blog',
                plural: 'Blogs',
            },
            apiSelector: 'Blog',
            route: '/generic/Blog',
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
                        headerName: this.translate.instant('ID'),
                    },
                    {
                        field: 'title.' + this.utils.currentLang,
                        headerName: this.translate.instant('title'),
                    },


                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.textLocalized,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'subTitle',
                        label: this.translate.instant('subTitle'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 12,
                        rows: 2
                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'body',
                        label: this.translate.instant('body'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: true,
                        multiline: true,
                        cols: 12,
                        rows: 4
                    },
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 6,
                        rows: 4
                    },
                    {
                        type: FieldType.entity,
                        name: 'BlogCategory',
                        label: this.translate.instant('BlogCategory'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        rows: 2,
                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'BlogCategory',
                            columns: [
                                { field: 'id', headerName: this.translate.instant('Id'), checkboxSelection: true },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },

                ],
                cols: 12,
                localizedAllFields: false
            }
        },
    ];
}
