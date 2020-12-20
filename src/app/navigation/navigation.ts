import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id       : 'basicData',
        title    : 'Home Page',
        translate: 'homePage',
        type     : 'item',
        icon     : 'tab_unselected',
        url      : '/apps/dashboards/project',
        permission : ['admin', 'company','employee'],
    },  
    {
        id       : 'Applications',
        title    : 'Applications',
        translate: 'Applications',
        type     : 'group',
        icon     : 'tab_unselected',
        permission : ['admin',  'employee'],
        children : [
            {
                id       : 'Board',
                title    : 'Board',
                translate: 'Board',
                type     : 'item',
                icon     : 'assessment',
                url      : '/apps/scrumboard/boards',
                permission : ['admin',  'employee'],
        
        
            }
         

        ]
    },
   
    {
        id       : 'basicData',
        title    : 'Basic Data',
        translate: 'basicData',
        type     : 'group',
        icon     : 'tab_unselected',
        permission : ['admin' ],
        children : [
            {
                id       : 'users',
                title    : 'Users',
                translate: 'users',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/User',
                permission : ['admin' ],
            },
            // {
            //     id       : 'SeoOptions',
            //     title    : 'SeoOptions',
            //     translate: 'SeoOptions',
            //     type     : 'item',
            //     icon     : 'Tag',
            //     url  : '/generic/SeoOptions'
        
            // },
         

        ]
    },
    {
        id       : 'Blog',
        title    : 'Blog',
        translate: 'Blog',
        type     : 'group',
        icon     : 'tab_unselected',
        permission : ['admin',],
        children:[
            {
                id       : 'Article Category',
                title    : 'Article Category',
                translate: 'Article Category',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/ArticleCategory',
                permission : ['admin', ],
        
            },
            {
                id       : 'Article',
                title    : 'Article',
                translate: 'Article',
                type     : 'item',
                icon     : 'Article',
                url  : '/generic/Article',
                permission : ['admin', ],
        
            },
           
           
            
        ]
    },
    {
        id       : 'Jobs',
        title    : 'Jobs',
        translate: 'Jobs',
        type     : 'group',
        icon     : 'tab_unselected',
        permission : ['admin'],
        children : [
            {
                id       : 'Job',
                title    : 'Job',
                translate: 'Job',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/Job',
                permission : ['admin'],
        
            },
            {
                id       : 'Job Applications',
                title    : 'Job Applications',
                translate: 'Job Applications',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/JobApp',
                permission : ['admin'],
        
            },
            {
                id       : 'Company',
                title    : 'Company',
                translate: 'Company',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/Company',
                permission : ['admin'  ],
        
            },
         

        ]
    },
    {
        id       : 'Forms',
        title    : 'Forms',
        translate: 'Forms',
        type     : 'group',
        url  : '/generic/Form',
        permission : ['admin' ],
        children:[
            {
                id       : 'Form',
                title    : 'Form',
                translate: 'Form',
                type     : 'item',
                url  : '/generic/Form',
                permission : ['admin' ],
        
            },
            {
                id       : 'Question Category',
                title    : 'Question Category',
                translate: 'Question Category',
                type     : 'item',
                url  : '/generic/QuestionCategory',
                permission : ['admin' ],
        
            },
            {
                id       : 'Questions',
                title    : 'Questions',
                translate: 'Questions',
                type     : 'item',
                url  : '/generic/Question',
                permission : ['admin' ],
        
            },
        ]
    },
    {
        id       : 'Contact Us',
        title    : 'Contact Us',
        translate: 'Contact Us',
        type     : 'item',
        url  : '/generic/ContactUs',
        permission : ['admin' ],

    },
 
    {
        id       : 'CEO Talk',
        title    : 'CEO Talk',
        translate: 'CEO Talk',
        type     : 'item',
        url  : '/generic/CeoTalk',
        permission : ['admin'],

    },
 
    {
        id       : 'FAQs',
        title    : 'FAQs',
        translate: 'FAQs',
        type     : 'item',
        url  : '/generic/Faq',
        permission : ['admin' ],

    },
 

    {
        id       : 'Project',
        title    : 'Project',
        translate: 'Project',
        type     : 'group',
        icon     : 'tab_unselected',
        permission : ['admin', ],
        children:[
            {
                id       : 'ProjectCategory',
                title    : 'Project Categories',
                translate: 'Project Categories',
                type     : 'item',
                url  : '/generic/ProjectCategory',
                permission : ['admin', ],
        
            },
            {
                id       : 'Projects',
                title    : 'Projects',
                translate: 'Projects',
                type     : 'item',
                url  : '/generic/Project',
                permission : ['admin', ],
        
            },
           
            
        ]
    },
   
    {
        id       : 'Mission&Vission',
        title    : 'Mission&Vission',
        translate: 'Mission&Vission',
        type     : 'group',
        icon     : 'tab_unselected',
        permission : ['admin', ],
        children:[
            {
                id       : 'Mission',
                title    : 'Mission',
                translate: 'Mission',
                type     : 'item',
                url  : '/generic/Mission',
                permission : ['admin', ],
        
            },
            {
                id       : 'Vission',
                title    : 'Vission',
                translate: 'Vission',
                type     : 'item',
                url  : '/generic/Vission',
                permission : ['admin',  ],
        
            },
            {
                id       : 'Services',
                title    : 'Services',
                translate: 'Services',
                type     : 'item',
                url  : '/generic/Services',
                permission : ['admin',  ],
        
            },
            {
                id       : 'Agents',
                title    : 'Agents',
                translate: 'Agents',
                type     : 'item',
                url  : '/generic/Agent',
                permission : ['admin',  ],
        
            },
            {
                id       : 'Partner',   
                title    : 'Partner',
                translate: 'Partner',
                type     : 'item',
                url  : '/generic/Partner',
                permission : ['admin',  ],
        
            },
           
            
        ]
    },
   
   
];
