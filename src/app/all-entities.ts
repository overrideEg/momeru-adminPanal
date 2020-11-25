import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '@override/utils/interfaces/FieldType.enum';
import { Validators } from '@angular/forms';
import { EntityData } from '@override/utils/interfaces/entityData';
import { UtilsService } from '@override/utils/utils.service';
import { DatePipe } from '@angular/common';
import { UserType } from './user-type.enum';
import { OverrideService } from '../@override/utils/override.service';
import { API_URLS } from '../assets/constants/API_URLS';

export class AllEntities {
    constructor(
        private utils: UtilsService,
        private override: OverrideService,
        private datePipe: DatePipe,
        private translate: TranslateService,
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
                        cols: 3,
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
                            options:['name']
                        }

                    },
                    {
                        type: FieldType.text,
                        name: 'jobTitle',
                        label: this.translate.instant('jobTitle'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        cols: 3

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
                            { value: 'Full Time', label: 'Full Time' },
                            { value: 'Part Time', label: 'Part Time' },
                            { value: 'Freelancing', label: 'Freelancing' },
                            { value: 'Remote', label: 'Remote' },
                        ],
                        cols: 3

                    },

                    {
                        type: FieldType.text,
                        name: 'jobCategory',
                        label: this.translate.instant('jobCategory'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 3

                    },
                    {
                        type: FieldType.text,
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
                        type: FieldType.text,
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
                        type: FieldType.number,
                        name: 'salary',
                        label: this.translate.instant('salary'),
                        required: true,
                        validators: [Validators.required, Validators.min(0)],
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
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'experience',
                        label: this.translate.instant('experience'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
                        disabled: false,
                        readonly: false,
                        multiline: false,
                        cols: 4,

                    },
                    {
                        type: FieldType.text,
                        name: 'industry',
                        label: this.translate.instant('industry'),
                        required: true,
                        validators: [Validators.required, Validators.minLength(3)],
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
                single: 'Card',
                plural: 'Cards',
            },
            apiSelector: 'Card',
            route: '/generic/Card',
            add: true,
            edit: true,
            delete: true,
            view: false,
            upload: false,
            export: true,
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
                        field: 'form.name.' + this.utils.currentLang,
                        headerName: this.translate.instant('form name'),
                    },



                ]

            },
            form: {
                fields: [

                    {
                        type: FieldType.group,
                        name: 'applyForm',
                        cols: 12,
                        label: this.translate.instant('Application'),
                        children: [
                            {
                                type: FieldType.group,
                                name: 'personal',
                                label: this.translate.instant('personal'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [
                                    {
                                        type: FieldType.text,
                                        name: 'fullName',
                                        label: this.translate.instant('fullName'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'gender',
                                        label: this.translate.instant('gender'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'dateOfBirth',
                                        label: this.translate.instant('dateOfBirth'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'placeOfBirth',
                                        label: this.translate.instant('placeOfBirth'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'state',
                                        label: this.translate.instant('state'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'city',
                                        label: this.translate.instant('city'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'country',
                                        label: this.translate.instant('country'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'height',
                                        label: this.translate.instant('height'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'weight',
                                        label: this.translate.instant('weight'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'healthStatus',
                                        label: this.translate.instant('healthStatus'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'diseases',
                                        label: this.translate.instant('diseases'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'desiredPreferredJob',
                                        label: this.translate.instant('desiredPreferredJob'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

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
                                        cols: 4,

                                    },
                                ]

                            },
                            {
                                type: FieldType.group,
                                name: 'official',
                                label: this.translate.instant('official'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [
                                    {
                                        type: FieldType.text,
                                        name: 'passportNumber',
                                        label: this.translate.instant('passportNumber'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'civilNumber',
                                        label: this.translate.instant('civilNumber'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'passportImg',
                                        label: this.translate.instant('passportImg'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'permanentResidenceAddress',
                                        label: this.translate.instant('permanentResidenceAddress'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'state',
                                        label: this.translate.instant('state'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'city',
                                        label: this.translate.instant('city'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'country',
                                        label: this.translate.instant('country'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'bankName',
                                        label: this.translate.instant('bankName'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'bankCountry',
                                        label: this.translate.instant('bankCountry'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'bankAccountNumber',
                                        label: this.translate.instant('bankAccountNumber'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                ]

                            },

                            {
                                type: FieldType.group,
                                name: 'family',
                                label: this.translate.instant('family'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [
                                    {
                                        type: FieldType.checkbox,
                                        name: 'fatherPresent',
                                        label: this.translate.instant('fatherPresent'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'fatherAge',
                                        label: this.translate.instant('fatherAge'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'fatherYearOfBirth',
                                        label: this.translate.instant('fatherYearOfBirth'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'fatherheadquarters',
                                        label: this.translate.instant('fatherheadquarters'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'fatherempolyername',
                                        label: this.translate.instant('fatherempolyername'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'fatherCountry',
                                        label: this.translate.instant('fatherCountry'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'fatherOccupation',
                                        label: this.translate.instant('fatherOccupation'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.checkbox,
                                        name: 'motherPresent',
                                        label: this.translate.instant('motherPresent'),
                                        required: true,
                                        validators: [Validators.required],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'motherAge',
                                        label: this.translate.instant('motherAge'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'motherYearOfBirth',
                                        label: this.translate.instant('motherYearOfBirth'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'motherHeadquarters',
                                        label: this.translate.instant('motherHeadquarters'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'motherEmpolyerName',
                                        label: this.translate.instant('motherEmpolyerName'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'motherCountry',
                                        label: this.translate.instant('motherCountry'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'motherOccupation',
                                        label: this.translate.instant('motherOccupation'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'familyBrotherSisters',
                                        label: this.translate.instant('familyBrotherSisters'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'numberOfBrothers',
                                        label: this.translate.instant('numberOfBrothers'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'numberOfsisters',
                                        label: this.translate.instant('numberOfsisters'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'arrangementInFamily',
                                        label: this.translate.instant('arrangementInFamily'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'applicantMartialStatus',
                                        label: this.translate.instant('applicantMartialStatus'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'husbandName',
                                        label: this.translate.instant('husbandName'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'husbandGender',
                                        label: this.translate.instant('husbandGender'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'husbandDateOfBirth',
                                        label: this.translate.instant('husbandDateOfBirth'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'employmentStatus',
                                        label: this.translate.instant('employmentStatus'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'headquartersOfTheOrganization',
                                        label: this.translate.instant('headquartersOfTheOrganization'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'organizationCountry',
                                        label: this.translate.instant('organizationCountry'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'organizationOccupation',
                                        label: this.translate.instant('organizationOccupation'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'numberOfChildren',
                                        label: this.translate.instant('numberOfChildren'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'numberOfGirls',
                                        label: this.translate.instant('numberOfGirls'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.chips,
                                        name: 'babyNames',
                                        label: this.translate.instant('babyNames'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,
                                        arrayView: 'chip',

                                    },


                                ]

                            },


                            {
                                type: FieldType.group,
                                name: 'qualifications',
                                label: this.translate.instant('qualifications'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [

                                    {
                                        type: FieldType.text,
                                        name: 'name',
                                        label: this.translate.instant('name'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'specialization',
                                        label: this.translate.instant('specialization'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'instituteName',
                                        label: this.translate.instant('instituteName'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'durationStudy',
                                        label: this.translate.instant('durationStudy'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'numberOfMonths',
                                        label: this.translate.instant('numberOfMonths'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'numberOfYears',
                                        label: this.translate.instant('numberOfYears'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'graduationYear',
                                        label: this.translate.instant('graduationYear'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'country',
                                        label: this.translate.instant('country'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'city',
                                        label: this.translate.instant('city'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'levelOfQualification',
                                        label: this.translate.instant('levelOfQualification'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },





                                ]

                            },

                            {
                                type: FieldType.group,
                                name: 'experiences',
                                label: this.translate.instant('experiences'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [

                                    {
                                        type: FieldType.text,
                                        name: 'job',
                                        label: this.translate.instant('job'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'nameOfInstitute',
                                        label: this.translate.instant('nameOfInstitute'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'department',
                                        label: this.translate.instant('department'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'from',
                                        label: this.translate.instant('from'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'to',
                                        label: this.translate.instant('to'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'destinationArea',
                                        label: this.translate.instant('destinationArea'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'country',
                                        label: this.translate.instant('country'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'baseSalary',
                                        label: this.translate.instant('baseSalary'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'totalSalary',
                                        label: this.translate.instant('totalSalary'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'mainFunctions',
                                        label: this.translate.instant('mainFunctions'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },





                                ]

                            },

                            {
                                type: FieldType.group,
                                name: 'ambition',
                                label: this.translate.instant('ambition'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [

                                    {
                                        type: FieldType.text,
                                        name: 'lessThanYear',
                                        label: this.translate.instant('lessThanYear'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'within3Years',
                                        label: this.translate.instant('within3Years'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'educationalAspect',
                                        label: this.translate.instant('educationalAspect'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'educationalAspect3Years',
                                        label: this.translate.instant('educationalAspect3Years'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'financialAspect',
                                        label: this.translate.instant('financialAspect'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'financialAspect3Years',
                                        label: this.translate.instant('financialAspect3Years'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'financialSocialSide',
                                        label: this.translate.instant('financialSocialSide'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },






                                ]

                            },


                            {
                                type: FieldType.group,
                                name: 'communicate',
                                label: this.translate.instant('communicate'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [

                                    {
                                        type: FieldType.text,
                                        name: 'number1',
                                        label: this.translate.instant('number1'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'number2',
                                        label: this.translate.instant('number2'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'email',
                                        label: this.translate.instant('email'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'facebook',
                                        label: this.translate.instant('facebook'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'instagram',
                                        label: this.translate.instant('instagram'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'experiences',
                                        label: this.translate.instant('experiences'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'contactNumber',
                                        label: this.translate.instant('contactNumber'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'name',
                                        label: this.translate.instant('name'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },






                                ]

                            },

                            {
                                type: FieldType.group,
                                name: 'importantQuestions',
                                label: this.translate.instant('importantQuestions'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [

                                    {
                                        type: FieldType.text,
                                        name: 'preferedJob',
                                        label: this.translate.instant('The job you prefer'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'WorkedInMicroSystem',
                                        label: this.translate.instant('Do you want to work in the micro system?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'WorkedWithFerryEagle',
                                        label: this.translate.instant('Do you want to work with the Ferry Eagle?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'workedOutsideCountry',
                                        label: this.translate.instant('Do you want to work outside your country?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'countryPrefairWork',
                                        label: this.translate.instant('What countries would you like to travel to and work in, if any?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'acceptToStartInvestingPartner',
                                        label: this.translate.instant('Do you accept to start your own project with an investing partner from the beginning?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'profitsAfterSeveralMonthsOrAyear',
                                        label: this.translate.instant('Are you ready to partner with a project and receive returns and profits after several months or a year?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'selfEmployedOwnBusiness',
                                        label: this.translate.instant('Do you want to be self-employed and have your own business?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'startYourOwnBusiness',
                                        label: this.translate.instant('Do you want to start your own business on your own as a first step?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'immigrateToAcountry',
                                        label: this.translate.instant('Do you want to immigrate to a country? Or a number of countries?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'countriesDoYouWishToImmigrate',
                                        label: this.translate.instant('What countries do you wish to immigrate to, if any?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'takeAcharacterAnalysisQuiz',
                                        label: this.translate.instant('Did you take a character analysis quiz?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'analysisTest',
                                        label: this.translate.instant('What is the name of the analysis test that you did?Did you take a character analysis quiz?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'whatPersonalityType',
                                        label: this.translate.instant('What is your personality type in your analysis?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'takeIntelligenceTest',
                                        label: this.translate.instant('Did you take an intelligence test or measure habits?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'nameOfTheIQTest',
                                        label: this.translate.instant('What is the name of the IQ test that you did?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'youScoreOnAnIQIest',
                                        label: this.translate.instant('How did you score on an IQ test?'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 6,

                                    },






                                ]

                            },

                            {
                                type: FieldType.group,
                                name: 'skills',
                                label: this.translate.instant('skills'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [

                                    {
                                        type: FieldType.chips,
                                        name: 'spokenLanguages',
                                        label: this.translate.instant('spokenLanguages'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,
                                        arrayView: 'chip'


                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'writingAR',
                                        label: this.translate.instant('writing Arabic'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'readingAR',
                                        label: this.translate.instant('reading Arabic'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'speakingAR',
                                        label: this.translate.instant('speaking Arabic'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'writingEN',
                                        label: this.translate.instant('writing English'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'readingEN',
                                        label: this.translate.instant('reading English'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'speakingEN',
                                        label: this.translate.instant('speaking English'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'writingMS',
                                        label: this.translate.instant('writing Ms'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'readingMS',
                                        label: this.translate.instant('reading Ms'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'speakingMS',
                                        label: this.translate.instant('speaking Ms'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'writingAnother',
                                        label: this.translate.instant('writing Another'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'readingAnother',
                                        label: this.translate.instant('reading Another'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.number,
                                        name: 'speakingAnother',
                                        label: this.translate.instant('speaking Another'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },
                                    {
                                        type: FieldType.text,
                                        name: 'hobbies',
                                        label: this.translate.instant('hobbies'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },






                                ]

                            },
                            {
                                type: FieldType.group,
                                name: 'workData',
                                label: this.translate.instant('workData'),
                                required: true,
                                validators: [Validators.required],
                                disabled: false,
                                readonly: true,
                                multiline: false,
                                cols: 12,
                                children: [


                                    {
                                        type: FieldType.text,
                                        name: 'question',
                                        label: this.translate.instant('question'),
                                        required: false,
                                        validators: [],
                                        disabled: false,
                                        readonly: true,
                                        multiline: false,
                                        cols: 4,

                                    },






                                ]

                            },
                        ]

                    }






                ],
                cols: 12,
                localizedAllFields: false
            }
        },



    ];
}
