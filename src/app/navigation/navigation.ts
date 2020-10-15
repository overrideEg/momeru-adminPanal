import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id: 'homePage',
        title: 'Home Page',
        translate: 'homePage',
        type: 'group',
        icon: 'home',
        children: [
            {
                id: 'homePage',
                title: 'homePage',
                translate: 'homePage',
                type: 'item',
                icon: 'home',
                url: '/apps/dashboards/analytics'

            },
            {
                id: 'scrumboard',
                title: 'Applications',
                translate: 'Applications',
                type: 'item',
                icon: 'apps',
                url: '/apps/scrumboard'

            },

        ]
    },

    {
        id: 'basicData',
        title: 'Basic Data',
        translate: 'basicData',
        type: 'group',
        icon: 'data_usage',
        children: [
            {
                id: 'users',
                title: 'Users',
                translate: 'Users',
                type: 'item',
                icon: 'person_outline',
                url: '/generic/User'

            },

            {
                id: 'Label',
                title: 'Label',
                translate: 'Label',
                type: 'item',
                icon: 'question_answer',
                url: '/generic/Label'

            },
            {
                id: 'Faq',
                title: 'Faq',
                translate: 'Faq',
                type: 'item',
                icon: 'Faq',
                url: '/generic/Faq'

            },


        ]
    },
    {
        id: 'controlData',
        title: 'Control Data',
        translate: 'controlData',
        type: 'group',
        icon: 'control_point',
        children: [


            {
                id: 'category',
                title: 'Category',
                translate: 'Category',
                type: 'item',
                icon: 'category',
                url: '/generic/Category'

            },
            {
                id: 'form',
                title: 'Form',
                translate: 'Form',
                type: 'item',
                icon: 'forum',
                url: '/generic/Form'

            },

            {
                id: 'Question',
                title: 'Question',
                translate: 'Question',
                type: 'item',
                icon: 'Question',
                url: '/generic/Question'

            },
            {
                id: 'Options',
                title: 'Options',
                translate: 'Options',
                type: 'item',
                icon: 'Options',
                url: '/generic/Options'

            },
        ]
    },
    {
        id: 'SpecializationData',
        title: 'Specialization Data',
        translate: 'SpecializationData',
        type: 'group',
        icon: 'developer_board',
        children: [


            {
                id: 'Specialization',
                title: 'Specialization',
                translate: 'Specialization',
                type: 'item',
                icon: 'Specialization',
                url: '/generic/Specialization'

            },
            {
                id: 'company',
                title: 'Company',
                translate: 'Company',
                type: 'item',
                icon: 'Company',
                url: '/generic/Company'

            },
            {
                id: 'Job',
                title: 'Job',
                translate: 'Job',
                type: 'item',
                icon: 'Job',
                url: '/generic/Job'

            },
            {
                id: 'JobTitle',
                title: 'JobTitle',
                translate: 'JobTitle',
                type: 'item',
                icon: 'JobTitle',
                url: '/generic/JobTitle'

            },
            {
                id: 'JobCategory',
                title: 'JobCategory',
                translate: 'JobCategory',
                type: 'item',
                icon: 'view_carousel',
                url: '/generic/JobCategory'

            },

            // {
            //     id: 'CareerInterest',
            //     title: 'CareerInterest',
            //     translate: 'CareerInterest',
            //     type: 'item',
            //     icon: 'queue_play_next',
            //     url: '/generic/CareerInterest'

            // },
        ]
    },
    {
        id: 'website',
        title: 'website',
        translate: 'website',
        type: 'group',
        icon: 'web',
        children: [

            {
                id: 'Blog',
                title: 'Blog',
                translate: 'Blog',
                type: 'group',
                icon: 'Section',
                url: '/generic/Section',
                children: [
                    {
                        id: 'BlogCategory',
                        title: 'BlogCategory',
                        translate: 'BlogCategory',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/BlogCategory'
                    }, {
                        id: 'Blog',
                        title: 'Blog',
                        translate: 'Blog',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/Blog'
                    },
                    
                ]
            },
            {
                id: 'homePage',
                title: 'homePage',
                translate: 'homePage',
                type: 'group',
                icon: 'Section',
                url: '/generic/Section',
                children: [
                    {
                        id: 'FirstSection',
                        title: 'FirstSection',
                        translate: 'FirstSection',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/FirstSection'
                    }, {
                        id: 'SecondSection',
                        title: 'SecondSection',
                        translate: 'SecondSection',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/SecondSection'
                    }, {
                        id: 'Projects',
                        title: 'Projects',
                        translate: 'Projects',
                        type: 'group',
                        icon: 'Section',
                        children: [
                            {
                                id: 'ProjectCategory',
                                title: 'ProjectCategory',
                                translate: 'ProjectCategory',
                                type: 'item',
                                icon: 'Section',
                                url: '/generic/ProjectCategory'
                            }, {
                                id: 'Project',
                                title: 'Project',
                                translate: 'Project',
                                type: 'item',
                                icon: 'Section',
                                url: '/generic/Project'
                            }
                        ]
                    },
                ]
            },
            {
                id: 'about',
                title: 'about',
                translate: 'About',
                type: 'group',
                icon: 'Section',
                children: [
                    {
                        id: 'AboutUs',
                        title: 'AboutUs',
                        translate: 'AboutUs',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/AboutUs'
                    }, {
                        id: 'OurValue',
                        title: 'OurValue',
                        translate: 'OurValue',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/OurValue'
                    }, {
                        id: 'Principle',
                        title: 'Principle',
                        translate: 'Principle',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/Principle'
                    }, {
                        id: 'DealCategory',
                        title: 'DealCategory',
                        translate: 'DealCategory',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/DealCategory'
                    }, {
                        id: 'ManagerTalk',
                        title: 'ManagerTalk',
                        translate: 'ManagerTalk',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/ManagerTalk'
                    },
                ]
            },
            {
                id: 'VisionMission',
                title: 'Vision And Mission',
                translate: 'VisionMission',
                type: 'group',
                icon: 'Section',
                children: [
                    {
                        id: 'Vision',
                        title: 'Vision',
                        translate: 'Vision',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/Vision'
                    }, {
                        id: 'Mission',
                        title: 'Mission',
                        translate: 'Mission',
                        type: 'item',
                        icon: 'Section',
                        url: '/generic/Mission'
                    },
                ]
            },
            {
                id: 'Partner',
                title: 'Partner',
                translate: 'Partner',
                type: 'item',
                icon: 'Section',
                url: '/generic/Partner'
            },
            {
                id: 'ServiceRequest',
                title: 'ServiceRequest',
                translate: 'ServiceRequest',
                type: 'item',
                icon: 'Section',
                url: '/generic/ServiceRequest'
            },


        ]
    },


];
