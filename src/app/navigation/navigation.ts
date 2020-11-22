import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id       : 'basicData',
        title    : 'Home Page',
        translate: 'homePage',
        type     : 'item',
        icon     : 'tab_unselected',
        url      : '/apps/dashboards/project'
       
    },  
    {
        id       : 'Applications',
        title    : 'Applications',
        translate: 'Applications',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
            {
                id       : 'Board',
                title    : 'Board',
                translate: 'Board',
                type     : 'item',
                icon     : 'assessment',
                url      : '/apps/scrumboard/boards'
        
        
            },
            {
                id       : 'Applications List',
                title    : 'Applications List',
                translate: 'Applications List',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/Card'
        
            },
         

        ]
    },
   
    {
        id       : 'basicData',
        title    : 'Basic Data',
        translate: 'basicData',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
            {
                id       : 'users',
                title    : 'Users',
                translate: 'users',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/User'
        
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
        children:[
            {
                id       : 'Article Category',
                title    : 'Article Category',
                translate: 'Article Category',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/ArticleCategory'
        
            },
            {
                id       : 'Article',
                title    : 'Article',
                translate: 'Article',
                type     : 'item',
                icon     : 'Article',
                url  : '/generic/Article'
        
            },
           
           
            
        ]
    },
    {
        id       : 'Jobs',
        title    : 'Jobs',
        translate: 'Jobs',
        type     : 'group',
        icon     : 'tab_unselected',
        children : [
            {
                id       : 'Job',
                title    : 'Job',
                translate: 'Job',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/Job'
        
            },
            {
                id       : 'Job Applications',
                title    : 'Job Applications',
                translate: 'Job Applications',
                type     : 'item',
                icon     : 'person_outline',
                url  : '/generic/JobApp'
        
            },
            {
                id       : 'Company',
                title    : 'Company',
                translate: 'Company',
                type     : 'item',
                icon     : 'Tag',
                url  : '/generic/Company'
        
            },
         

        ]
    },
    {
        id       : 'Forms',
        title    : 'Forms',
        translate: 'Forms',
        type     : 'item',
        url  : '/generic/Form'

    },
    {
        id       : 'Contact Us',
        title    : 'Contact Us',
        translate: 'Contact Us',
        type     : 'item',
        url  : '/generic/ContactUs'

    },
 
    {
        id       : 'CEO Talk',
        title    : 'CEO Talk',
        translate: 'CEO Talk',
        type     : 'item',
        url  : '/generic/CeoTalk'

    },
 
    {
        id       : 'FAQs',
        title    : 'FAQs',
        translate: 'FAQs',
        type     : 'item',
        url  : '/generic/Faq'

    },
 

    {
        id       : 'Project',
        title    : 'Project',
        translate: 'Project',
        type     : 'group',
        icon     : 'tab_unselected',
        children:[
            {
                id       : 'ProjectCategory',
                title    : 'Project Categories',
                translate: 'Project Categories',
                type     : 'item',
                url  : '/generic/ProjectCategory'
        
            },
            {
                id       : 'Projects',
                title    : 'Projects',
                translate: 'Projects',
                type     : 'item',
                url  : '/generic/Project'
        
            },
           
            
        ]
    },
   
   
];
