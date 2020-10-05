import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    
    {
        id       : 'homePage',
        title    : 'Home Page',
        translate: 'homePage',
        type     : 'group',
        icon     : 'home',
        children : [
            {
                id       : 'homePage',
                title    : 'homePage',
                translate: 'homePage',
                type     : 'item',
                icon     : 'home',
                url  : '/apps/dashboards/analytics'
        
            },
            {
                id       : 'websiteHomePage',
                title    : 'Website Home Page',
                translate: 'Website Home Page',
                type     : 'item',
                icon     : 'home',
                url  : '/generic/HomePage'
        
            },
            {
                id       : 'scrumboard',
                title    : 'Applications',
                translate: 'Applications',
                type     : 'item',
                icon     : 'apps',
                url  : '/apps/scrumboard'
        
            },
          
        ]
    },
    
    {
        id       : 'basicData',
        title    : 'Basic Data',
        translate: 'basicData',
        type     : 'group',
        icon     : 'data_usage',
        children : [
            {
                id       : 'users',
                title    : 'Users',
                translate: 'users',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/User'
        
            },
            {
                id       : 'UserAnswer',
                title    : 'UserAnswer',
                translate: 'UserAnswer',
                type     : 'item',
                icon     : 'question_answer',
                url  : '/generic/UserAnswer'
        
            },
            {
                id       : 'Label',
                title    : 'Label',
                translate: 'Label',
                type     : 'item',
                icon     : 'question_answer',
                url  : '/generic/Label'
        
            },
            {
                id       : 'Faq',
                title    : 'Faq',
                translate: 'Faq',
                type     : 'item',
                icon     : 'Faq',
                url  : '/generic/Faq'
        
            },

          
        ]
    },
    {
        id       : 'controlData',
        title    : 'Control Data',
        translate: 'controlData',
        type     : 'group',
        icon     : 'control_point',
        children : [
          

            {
                id       : 'category',
                title    : 'Category',
                translate: 'Category',
                type     : 'item',
                icon     : 'category',
                url  : '/generic/Category'
        
            },
            {
                id       : 'form',
                title    : 'Form',
                translate: 'Form',
                type     : 'item',
                icon     : 'forum',
                url  : '/generic/Form'
        
            },
            {
                id       : 'Page',
                title    : 'Page',
                translate: 'Page',
                type     : 'item',
                icon     : 'pages',
                url  : '/generic/Page'
        
            },
            {
                id       : 'Section',
                title    : 'Section',
                translate: 'Section',
                type     : 'item',
                icon     : 'view_carousel',
                url  : '/generic/Section'
        
            },
            {
                id       : 'Question',
                title    : 'Question',
                translate: 'Question',
                type     : 'item',
                icon     : 'Question',
                url  : '/generic/Question'
        
            },
        ]
    },
    {
        id       : 'SpecializationData',
        title    : 'Specialization Data',
        translate: 'SpecializationData',
        type     : 'group',
        icon     : 'developer_board',
        children : [
          

            {
                id       : 'Specialization',
                title    : 'Specialization',
                translate: 'Specialization',
                type     : 'item',
                icon     : 'Specialization',
                url  : '/generic/Specialization'
        
            },
            {
                id       : 'company',
                title    : 'Company',
                translate: 'Company',
                type     : 'item',
                icon     : 'Company',
                url  : '/generic/Company'
        
            },
            {
                id       : 'Job',
                title    : 'Job',
                translate: 'Job',
                type     : 'item',
                icon     : 'Job',
                url  : '/generic/Job'
        
            },
            {
                id       : 'JobTitle',
                title    : 'JobTitle',
                translate: 'JobTitle',
                type     : 'item',
                icon     : 'JobTitle',
                url  : '/generic/JobTitle'
        
            },
            {
                id       : 'JobCategory',
                title    : 'JobCategory',
                translate: 'JobCategory',
                type     : 'item',
                icon     : 'view_carousel',
                url  : '/generic/JobCategory'
        
            },
           
            {
                id       : 'CareerInterest',
                title    : 'CareerInterest',
                translate: 'CareerInterest',
                type     : 'item',
                icon     : 'queue_play_next',
                url  : '/generic/CareerInterest'
        
            },
        ]
    },
  

];
