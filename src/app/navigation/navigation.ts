import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'basicData',
        title    : 'Basic Data',
        translate: 'NAV.basicData',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
            {
                id       : 'users',
                title    : 'Users',
                translate: 'NAV.users',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/User'
        
            },
            {
                id       : 'UserAnswer',
                title    : 'UserAnswer',
                translate: 'NAV.UserAnswer',
                type     : 'item',
                icon     : 'question_answer',
                url  : '/generic/UserAnswer'
        
            },
            {
                id       : 'Faq',
                title    : 'Faq',
                translate: 'NAV.Faq',
                type     : 'item',
                icon     : 'Faq',
                url  : '/generic/Faq'
        
            },

          
        ]
    },
    {
        id       : 'controlData',
        title    : 'Control Data',
        translate: 'NAV.controlData',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
          

            {
                id       : 'category',
                title    : 'Category',
                translate: 'NAV.Category',
                type     : 'item',
                icon     : 'category',
                url  : '/generic/Category'
        
            },
            {
                id       : 'form',
                title    : 'Form',
                translate: 'NAV.Form',
                type     : 'item',
                icon     : 'forum',
                url  : '/generic/Form'
        
            },
            {
                id       : 'Page',
                title    : 'Page',
                translate: 'NAV.Page',
                type     : 'item',
                icon     : 'pages',
                url  : '/generic/Page'
        
            },
            {
                id       : 'Section',
                title    : 'Section',
                translate: 'NAV.Section',
                type     : 'item',
                icon     : 'view_carousel',
                url  : '/generic/Section'
        
            },
            {
                id       : 'Question',
                title    : 'Question',
                translate: 'NAV.Question',
                type     : 'item',
                icon     : 'Question',
                url  : '/generic/Question'
        
            },
        ]
    },
    {
        id       : 'SpecializationData',
        title    : 'Specialization Data',
        translate: 'NAV.SpecializationData',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
          

            {
                id       : 'Specialization',
                title    : 'Specialization',
                translate: 'NAV.Specialization',
                type     : 'item',
                icon     : 'Specialization',
                url  : '/generic/Specialization'
        
            },
            {
                id       : 'company',
                title    : 'Company',
                translate: 'NAV.Company',
                type     : 'item',
                icon     : 'Company',
                url  : '/generic/Company'
        
            },
            {
                id       : 'Job',
                title    : 'Job',
                translate: 'NAV.Job',
                type     : 'item',
                icon     : 'Job',
                url  : '/generic/Job'
        
            },
            {
                id       : 'JobTitle',
                title    : 'JobTitle',
                translate: 'NAV.JobTitle',
                type     : 'item',
                icon     : 'JobTitle',
                url  : '/generic/JobTitle'
        
            },
            {
                id       : 'JobCategory',
                title    : 'JobCategory',
                translate: 'NAV.JobCategory',
                type     : 'item',
                icon     : 'view_carousel',
                url  : '/generic/JobCategory'
        
            },
           
            {
                id       : 'CareerInterest',
                title    : 'CareerInterest',
                translate: 'NAV.CareerInterest',
                type     : 'item',
                icon     : 'queue_play_next',
                url  : '/generic/CareerInterest'
        
            },
        ]
    },
    {
        id       : 'placeData',
        title    : 'Place Data',
        translate: 'NAV.placeData',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
          

            {
                id       : 'Currency',
                title    : 'Currency',
                translate: 'NAV.Currency',
                type     : 'item',
                icon     : 'Currency',
                url  : '/generic/Currency'
        
            },
            {
                id       : 'Country',
                title    : 'Country',
                translate: 'NAV.Country',
                type     : 'item',
                icon     : 'Country',
                url  : '/generic/Country'
        
            },
            {
                id       : 'Language',
                title    : 'Language',
                translate: 'NAV.Language',
                type     : 'item',
                icon     : 'queue_play_next',
                url  : '/generic/Language'
        
            },
            {
                id       : 'City',
                title    : 'City',
                translate: 'NAV.City',
                type     : 'item',
                icon     : 'City',
                url  : '/generic/City'
        
            },
         
        ]
    },

];
