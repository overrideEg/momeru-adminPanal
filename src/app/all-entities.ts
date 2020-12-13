import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '@override/utils/interfaces/FieldType.enum';
import { Validators } from '@angular/forms';
import { EntityData } from '@override/utils/interfaces/entityData';
import { UtilsService } from '@override/utils/utils.service';
import { DatePipe } from '@angular/common';
import { UserType } from './user-type.enum';
import { OverrideService } from '../@override/utils/override.service';
import { API_URLS } from '../assets/constants/API_URLS';
import { EntitiesService } from '../@override/utils/entities.service';

export class AllEntities {
    constructor(
        private utils: UtilsService,
        private override: OverrideService,
        private datePipe: DatePipe,
        private translate: TranslateService,
        private _entities: EntitiesService
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
                        // field: 'id',
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name',
                        headerName: this.translate.instant('name'),
                    },
                    {
                        field: 'email',
                        headerName: this.translate.instant('email'),
                    },
                    // {
                    //     field: 'password',
                    //     headerName: this.translate.instant('password'),
                    // },
                    {
                        field: 'mobile',
                        headerName: this.translate.instant('mobile'),
                    },
                    {
                        field: 'userType',
                        headerName: this.translate.instant('userType'),
                    },
                    {
                        field: 'isActive',
                        headerName: this.translate.instant('isActive'),
                    },
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
                        cols: 3

                    },
                    {
                        type: FieldType.email,
                        name: 'email',
                        label: this.translate.instant('Email'),
                        required: true,
                        validators: [Validators.required, Validators.email],
                        disabled: false,
                        readonly: false,
                        cols: 3,

                    },
                    {
                        type: FieldType.text,
                        name: 'mobile',
                        label: this.translate.instant('phoneNumber'),
                        required: true,
                        validators: [Validators.required, Validators.pattern(this.utils.phoneNumberRegExp)],
                        disabled: false,
                        readonly: false,
                        cols: 3,

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
                        cols: 3,

                        options: [
                            {
                                value: 'user',
                                label: this.translate.instant('user')
                            },
                            {
                                value: 'admin',
                                label: this.translate.instant('Admin')
                            },
                            {
                                value: 'employee',
                                label: this.translate.instant('Employee')
                            },
                            {
                                value: 'company',
                                label: this.translate.instant('Company')
                            },

                        ]
                    },
                    {
                        type: FieldType.checkbox,
                        name: 'isActive',
                        label: this.translate.instant('isActive'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.number,
                        name: 'capability',
                        label: this.translate.instant('Applications Capapility'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,

                    },
                    {
                        type: FieldType.password,
                        name: 'password',
                        label: this.translate.instant('Password'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 3,

                    },
                    {
                        type: FieldType.entity,
                        name: 'company',
                        label: this.translate.instant('Company'),
                        required: false,
                        validators: [],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        selectOptions: {
                            fromSelector: 'Company',
                            columns: [
                                { field: 'name', checkboxSelection: true },
                                { field: 'email' },
                                { field: 'phone' }
                            ],
                            options: ['name']
                        }

                    },
                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
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
                        cols: 12,

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

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'welcomeMessage',
                        label: this.translate.instant('welcomeMessage'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'notes',
                        label: this.translate.instant('notes'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'instructions',
                        label: this.translate.instant('instructions'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

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

                    },


                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
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
                        cols: 12,

                    },


                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Article Category',
                plural: 'Article Categories',
            },
            apiSelector: 'ArticleCategory',
            route: '/generic/ArticleCategory',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
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

                    },


                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Project',
                plural: 'Projects',
            },
            apiSelector: 'Project',
            route: '/generic/Project',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
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
                        cols: 12,

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

                    },
                    {
                        type: FieldType.entity,
                        name: 'category',
                        label: this.translate.instant('category'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 4,
                        selectOptions: {
                            fromSelector: 'ProjectCategory',
                            optionName: 'title',
                            columns: [
                                {
                                    field: 'title.' + this.override.currentLang,
                                    headerName: this.translate.instant('Title'),
                                    checkboxSelection: true
                                }
                            ]
                        }

                    },
                    {
                        type: FieldType.file,
                        name: 'logo',
                        label: this.translate.instant('logo'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 4,
                        view: 'image'

                    },
                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('image'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 4,
                        view: 'image'

                    },


                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'jobTitle.' + this.override.currentLang,
                        headerName: this.translate.instant('job Title'),
                    },
                    {
                        field: 'jobCategory.' + this.override.currentLang,
                        headerName: this.translate.instant('job Category'),
                    },
                    {
                        field: 'jobType.' + this.override.currentLang,
                        headerName: this.translate.instant('job Type'),
                    },

                    {
                        field: 'company.name',
                        headerName: this.translate.instant('Company'),
                    },
                    {
                        field: 'salaryFrom',
                        headerName: this.translate.instant('salary From'),
                    },
                    {
                        field: 'salaryTo',
                        headerName: this.translate.instant('salary To'),
                    },
                    {
                        field: 'location.' + this.override.currentLang,
                        headerName: this.translate.instant('location'),
                    }

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.entity,
                        name: 'company',
                        label: this.translate.instant('company'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        selectOptions: {
                            fromSelector: 'Company',
                            columns: [
                                {
                                    checkboxSelection: true,
                                    field: 'name'
                                },
                                {

                                    field: 'email'
                                }
                            ],
                            options: ['name']
                        }

                    },
                    {
                        type: FieldType.dropdown,
                        name: 'jobType',
                        label: this.translate.instant('jobType'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        options: [
                            { value: 'fullTime', label: 'Full Time' },
                            { value: 'partTime', label: 'Part Time' },
                            { value: 'freelancing', label: 'Freelancing' },
                            { value: 'remote', label: 'Remote' },
                        ],
                        cols: 6

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'jobTitle',
                        label: this.translate.instant('jobTitle'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12

                    },




                    {
                        type: FieldType.textLocalized,
                        name: 'jobDescription',
                        label: this.translate.instant('jobDescription'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'certificate',
                        label: this.translate.instant('certificate'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,

                    },


                    {
                        type: FieldType.textLocalized,
                        name: 'location',
                        label: this.translate.instant('location'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'experience',
                        label: this.translate.instant('experience'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'industry',
                        label: this.translate.instant('industry'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.textLocalized,
                        name: 'jobResponsibilities',
                        label: this.translate.instant('jobResponsibilities'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },
                    {
                        type: FieldType.number,
                        name: 'salaryFrom',
                        label: this.translate.instant('salary From'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                    },
                    {
                        type: FieldType.number,
                        name: 'salaryTo',
                        label: this.translate.instant('salary To'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                    },

                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin, UserType.company],
                edit: [UserType.admin, UserType.company],
                view: [UserType.admin, UserType.company]
            }
        },
        {
            name: {
                single: 'Job Application',
                plural: 'Job Applications',
            },
            apiSelector: 'JobApp',
            route: '/generic/JobApp',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name',
                        headerName: this.translate.instant('Applier Name'),
                    },
                    {
                        field: 'job.jobTitle',
                        headerName: this.translate.instant('job Title'),
                    },
                    {
                        field: 'job.jobCategory',
                        headerName: this.translate.instant('job Category'),
                    },
                    {
                        field: 'job.jobType',
                        headerName: this.translate.instant('job Type'),
                    },


                    {
                        field: 'job.salary',
                        headerName: this.translate.instant('salary'),
                    },
                    {
                        field: 'job.location',
                        headerName: this.translate.instant('location'),
                    }

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.entity,
                        name: 'job',
                        label: this.translate.instant('Job'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 4,
                        selectOptions: {
                            fromSelector: 'Job',
                            columns: [
                                {
                                    checkboxSelection: true,
                                    headerCheckboxSelection: true,
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1"
                                },
                                {
                                    field: 'jobTitle',
                                    headerName: this.translate.instant('job Title'),
                                },
                                {
                                    field: 'jobCategory',
                                    headerName: this.translate.instant('job Category'),
                                },
                                {
                                    field: 'jobType',
                                    headerName: this.translate.instant('job Type'),
                                },

                                {
                                    field: 'company.name',
                                    headerName: this.translate.instant('Company'),
                                },
                                {
                                    field: 'salary',
                                    headerName: this.translate.instant('salary'),
                                },
                                {
                                    field: 'location',
                                    headerName: this.translate.instant('location'),
                                }

                            ],
                            options: ['jobTitle']
                        }

                    },


                    {
                        type: FieldType.text,
                        name: 'name',
                        label: this.translate.instant('name'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'email',
                        label: this.translate.instant('email'),
                        required: true,
                        validators: [Validators.required, Validators.email],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'mobile',
                        label: this.translate.instant('mobile'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,

                    },

                    {
                        type: FieldType.text,
                        name: 'file',
                        label: this.translate.instant('CV'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 6,
                    },



                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin, UserType.company],
                edit: [UserType.admin, UserType.company],
                view: [UserType.admin, UserType.company]
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name',
                        headerName: this.translate.instant('Name'),
                    },
                    {
                        field: 'email',
                        headerName: this.translate.instant('email'),
                    },

                    {
                        field: 'phone',
                        headerName: this.translate.instant('Phone'),
                    },
                    {
                        field: 'location',
                        headerName: this.translate.instant('location'),
                    }

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.text,
                        name: 'name',
                        label: this.translate.instant('Name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                    },

                    {
                        type: FieldType.file,
                        name: 'logo',
                        label: this.translate.instant('Logo'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.text,
                        name: 'email',
                        label: this.translate.instant('email'),
                        required: true,
                        validators: [Validators.required, Validators.email],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'phone',
                        label: this.translate.instant('phone'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,

                    },

                    {
                        type: FieldType.text,
                        name: 'location',
                        label: this.translate.instant('location'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,
                    },



                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Contact Us Form',
                plural: 'Contact Us Forrms',
            },
            apiSelector: 'ContactUs',
            route: '/generic/ContactUs',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'messageType',
                        headerName: this.translate.instant('Message Type'),
                    },


                    {
                        field: 'name',
                        headerName: this.translate.instant('Name'),
                    },
                    {
                        field: 'email',
                        headerName: this.translate.instant('email'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.text,
                        name: 'name',
                        label: this.translate.instant('Name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        cols: 4,

                    },

                    {
                        type: FieldType.text,
                        name: 'email',
                        label: this.translate.instant('Email'),
                        required: true,
                        validators: [Validators.required, Validators.email],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'messageType',
                        label: this.translate.instant('Message Type'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'message',
                        label: this.translate.instant('message'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },




                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'CEO Talk',
                plural: 'CEO Talk',
            },
            apiSelector: 'CeoTalk',
            route: '/generic/CeoTalk',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },


                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('Name'),
                    },
                    {
                        field: 'position.' + this.utils.currentLang,
                        headerName: this.translate.instant('position'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'name',
                        label: this.translate.instant('Name'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        cols: 6,

                    },

                    {
                        type: FieldType.textLocalized,
                        name: 'position',
                        label: this.translate.instant('position'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 6,

                    },
                    {
                        type: FieldType.editorLocalized,
                        name: 'body',
                        label: this.translate.instant('Message'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,

                    },




                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'FAQ',
                plural: 'FAQs',
            },
            apiSelector: 'Faq',
            route: '/generic/Faq',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },


                    {
                        field: 'question.' + this.utils.currentLang,
                        headerName: this.translate.instant('Question'),
                    },
                    {
                        field: 'answer.' + this.utils.currentLang,
                        headerName: this.translate.instant('Answer'),
                    },

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'question',
                        label: this.translate.instant('question'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        cols: 6,

                    },

                    {
                        type: FieldType.textLocalized,
                        name: 'answer',
                        label: this.translate.instant('answer'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: true,
                        multiline: false,
                        cols: 6,

                    },




                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },


        {
            name: {
                single: 'Article',
                plural: 'Articles',
            },
            apiSelector: 'Article',
            route: '/generic/Article',
            add: true,
            edit: true,
            delete: true,
            draft: true,
            draftView: true,
            draftViewURL: 'https://momeru.com/articles/view/{slug}/{entityId}',
            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 100,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'lang',
                        headerName: this.translate.instant('language'),

                    },
                    {
                        field: 'published',
                        headerName: this.translate.instant('Published'),
                        // cellRenderer: (node) => {
                        //     console.log('par',node);

                        //     let val
                        //     node.value === true ? val = this.translate.instant('Yes') : val = this.translate.instant('No');
                        //     return val ;
                        // }
                    },
                    {
                        field: 'title',
                        headerName: this.translate.instant('Title'),
                    },


                    {
                        field: 'author',
                        headerName: this.translate.instant('author'),
                    }, {
                        field: 'category.name.' + this.utils.currentLang,
                        headerName: this.translate.instant('Category'),
                    },


                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.dropdown,
                        name: 'lang',
                        label: this.translate.instant('Language'),
                        multiple: false,
                        required: false,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                        options: [
                            {
                                value: 'ar',
                                label: this.translate.instant('Arabic')
                            },
                            {
                                value: 'en',
                                label: this.translate.instant('English')
                            }
                        ]
                    },
                    {
                        type: FieldType.entity,
                        name: 'category',
                        label: this.translate.instant('category'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,

                        selectOptions: {
                            optionName: 'name',
                            fromSelector: 'ArticleCategory',
                            columns: [
                                {
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1", checkboxSelection: true
                                },
                                { field: 'name.' + this.utils.currentLang, headerName: this.translate.instant('Name'), checkboxSelection: false },
                            ]
                        },
                    },

                    {
                        type: FieldType.text,
                        name: 'title',
                        label: this.translate.instant('title'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.autoComplete,
                        name: 'slug',
                        label: this.translate.instant('Slug'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        selectOptions: {
                            autoCompleteURL: API_URLS.Article.check
                        }
                    },


                    {
                        type: FieldType.file,
                        name: 'image',
                        label: this.translate.instant('Image'),
                        required: false,
                        validators: [],
                        disabled: false,
                        readonly: false,
                        cols: 12,

                    },
                    {
                        type: FieldType.text,
                        name: 'imageAlt',
                        label: this.translate.instant('Image Alt'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 4,

                    },

                    {
                        type: FieldType.text,
                        name: 'author',
                        label: this.translate.instant('author'),
                        required: false,
                        validators: [],
                        disabled: false,
                        readonly: false,
                        cols: 8,

                    },
                    {
                        type: FieldType.divider,
                        cols: 12
                    },
                    {
                        type: FieldType.editor,
                        name: 'body',
                        label: this.translate.instant('Article'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },
                    {
                        type: FieldType.divider,
                        cols: 12
                    },
                    {
                        type: FieldType.group,
                        name: 'seo',
                        label: this.translate.instant('SEO'),
                        required: false,
                        // validators: [ Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 12,
                        children: [
                            {
                                type: FieldType.text,
                                name: 'pageTitle',
                                label: this.translate.instant('Page Title'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,

                            },
                            {
                                type: FieldType.chips,
                                name: 'keyWords',
                                label: this.translate.instant('Keywords'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 6,

                            },
                            {
                                type: FieldType.text,
                                name: 'metaDescription',
                                label: this.translate.instant('meta Description'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,

                            },
                            {
                                type: FieldType.text,
                                name: 'ogTtile',
                                label: this.translate.instant('Open Graph Title (og:title)'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,

                            },
                            {
                                type: FieldType.text,
                                name: 'ogImage',
                                label: this.translate.instant('Open Graph Image URL (og:image)'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,

                            },
                            {
                                type: FieldType.text,
                                name: 'ogType',
                                label: this.translate.instant('Open Graph Type (og:typt)'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: false,
                                cols: 4,

                            },
                            {
                                type: FieldType.text,
                                name: 'ogDescription',
                                label: this.translate.instant('Open Graph Description (og:description)'),
                                required: false,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                multiline: true,
                                cols: 12,

                            },
                        ]
                    },

                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },

        {
            name: {
                single: 'Vission',
                plural: 'Vissions',
            },
            apiSelector: 'Vission',
            route: '/generic/Vission',
            add: true,
            edit: true,
            delete: true,

            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 100,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'body.' + this.override.currentLang,
                        headerName: this.translate.instant('Vission'),

                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.editorLocalized,
                        name: 'body',
                        label: this.translate.instant('Vission'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },


                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
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
                paginationPageSize: 100,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'body.' + this.override.currentLang,
                        headerName: this.translate.instant('Mission'),

                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.editorLocalized,
                        name: 'body',
                        label: this.translate.instant('Mission'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },


                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
        {
            name: {
                single: 'Service',
                plural: 'Services',
            },
            apiSelector: 'Services',
            route: '/generic/Services',
            add: true,
            edit: true,
            delete: true,

            view: false,
            upload: true,
            export: true,
            table: {
                paginated: true,
                paginationPageSize: 100,
                pivotMode: false,
                columnDefs: [
                    {
                        checkboxSelection: true,
                        headerCheckboxSelection: true,
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'body.' + this.override.currentLang,
                        headerName: this.translate.instant('Mission'),

                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.editorLocalized,
                        name: 'body',
                        label: this.translate.instant('Mission'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiline: true,
                        cols: 12,

                    },


                ],
                cols: 12,
                localizedAllFields: true
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },

    
        {
            name: {
                single: 'Question Category',
                plural: 'Question Categories',
            },
            apiSelector: 'QuestionCategory',
            route: '/generic/QuestionCategory',
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'name.' + this.utils.currentLang,
                        headerName: this.translate.instant('Group Name'),
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

                    }



                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
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
                        headerName: '#',
                        valueGetter: "node.rowIndex + 1"
                    },
                    {
                        field: 'label.' + this.utils.currentLang,
                        headerName: this.translate.instant('Question Label'),
                    },
                    {
                        field: 'required',
                        headerName: this.translate.instant('Required Status'),
                    },
                    {
                        field: 'multiline',
                        headerName: this.translate.instant('Multiple Lines'),
                        cellRenderer: (param) => {
                            switch (param.value) {
                                case true:
                                    return 'Yes';
                                default:
                                    return 'No'
                            }
                        }
                    },
                    {
                        field: 'multipleAnswers',
                        headerName: this.translate.instant('Multiple Answers'),
                        cellRenderer: (param) => {
                            switch (param.value) {
                                case true:
                                    return 'Yes';
                                default:
                                    return 'No'
                            }
                        }
                    },
                    {
                        field: 'category.name.' + this.utils.currentLang,
                        headerName: this.translate.instant('Category')
                    }

                ]

            },
            form: {
                fields: [
                    {
                        type: FieldType.textLocalized,
                        name: 'label',
                        label: this.translate.instant('Question Label'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 12,
                        details: this.translate.instant('Enter Question Label in arabic And Its Automaticallly Translattes Into 3 languages')

                    },
                    {
                        type: FieldType.dropdown,
                        name: 'type',
                        label: this.translate.instant('Question Type'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options: [
                            {
                                value: 'text',
                                label: this.translate.instant('Text')
                            },
                            {
                                value: 'checkbox',
                                label: this.translate.instant('Check Box')
                            },
                            {
                                value: 'date',
                                label: this.translate.instant('Date')
                            },
                            {
                                value: 'dropdown',
                                label: this.translate.instant('Drop Down')
                            },
                            {
                                value: 'email',
                                label: this.translate.instant('Email')
                            },
                            {
                                value: 'file',
                                label: this.translate.instant('File')
                            },
                            {
                                value: 'number',
                                label: this.translate.instant('Number')
                            },
                            {
                                value: 'onlyNumber',
                                label: this.translate.instant('Text With Only Numbers')
                            },
                            {
                                value: 'phoneNumber',
                                label: this.translate.instant('Phone Number')
                            },
                            {
                                value: 'slider',
                                label: this.translate.instant('Slider')
                            },
                            {
                                value: 'url',
                                label: this.translate.instant('URL')
                            },
                            {
                                value: 'radio',
                                label: this.translate.instant('Radio Buttons')
                            },
                        ]

                    },
                    {
                        type: FieldType.dropdown,
                        name: 'required',
                        label: this.translate.instant('Required Level'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        cols: 6,
                        options: [
                            {
                                value: 'veryhigh',
                                label: this.translate.instant('Very High')
                            },
                            {
                                value: 'high',
                                label: this.translate.instant('High')
                            },
                            {
                                value: 'medium',
                                label: this.translate.instant('Medium')
                            },
                            {
                                value: 'low',
                                label: this.translate.instant('Low')
                            },

                        ]

                    },
                    {
                        type: FieldType.checkbox,
                        name: 'multiline',
                        label: this.translate.instant('Multiple Lines'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        initialValue: false,
                        cols: 6,
                        displayIf: () => { return this._entities.form?.get('type')?.value === 'text' }
                    },
                    {
                        type: FieldType.checkbox,
                        name: 'multipleAnswers',
                        label: this.translate.instant('Multiple Answers'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        initialValue: false,
                        cols: 6,
                        displayIf: () => { return this._entities.form?.get('type')?.value === 'dropdown' || this._entities.form?.get('type')?.value === 'radio' }
                    },
                    {
                        type: FieldType.entity,
                        name: 'forms',
                        label: this.translate.instant('Forms'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        multiple: true,
                        initialValue: false,
                        cols: 6,
                        selectOptions: {
                            fromSelector: 'Form',
                            optionName: 'title',
                            
                            columns: [
                                {
                                    checkboxSelection: true,
                                    headerCheckboxSelection: true,
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1"
                                },
                                {

                                    headerName: this.translate.instant('Title'),
                                    field: 'title.' + this.utils.currentLang
                                }

                            ]
                        }
                    },
                    {
                        type: FieldType.entity,
                        name: 'category',
                        label: this.translate.instant('Category'),
                        required: true,
                        validators: [Validators.required],
                        disabled: false,
                        readonly: false,
                        initialValue: false,
                        cols: 6,
                        selectOptions: {
                            fromSelector: 'QuestionCategory',
                            optionName: 'name',
                            columns: [
                                {
                                    checkboxSelection: true,
                                    headerCheckboxSelection: true,
                                    headerName: '#',
                                    valueGetter: "node.rowIndex + 1"
                                },
                                {

                                    headerName: this.translate.instant('name'),
                                    field: 'name.' + this.utils.currentLang
                                }

                            ]
                        }
                    },
                    {
                        type: FieldType.array,
                        name: 'options',
                        label: this.translate.instant('Options'),
                        required: true,
                        validators: [],
                        disabled: false,
                        readonly: false,
                        initialValue: false,
                        arrayView: 'table',
                        arrayAddRow: true,
                        cols: 12,
                        displayIf: () => { return this._entities.form?.get('type')?.value === 'dropdown' || this._entities.form?.get('type')?.value === 'radio' },
                        children: [
                            {
                                type: FieldType.textLocalized,
                                name: 'text',
                                label: this.translate.instant('Option Text'),
                                required: true,
                                validators: [],
                                disabled: false,
                                readonly: false,
                                cols: 12,
        
                            }
                        ]
                    }


                ],
                cols: 12,
                localizedAllFields: false
            },
            permissions: {
                add: [UserType.admin],
                edit: [UserType.admin],
                view: [UserType.admin]
            }
        },
    ];
}
