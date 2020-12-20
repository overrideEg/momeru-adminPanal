/* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/
const uri = "https://server.momeru.com/v1";
// const uri = 'http://localhost:3010/v1';
// const uri = 'https://edupromise.remabackend.com/v1';
// const uri = 'https://server.momeru.com/v1';
export const API_URLS = {
    auth: {
        auth: uri + "/auth/login",
        changePassword: uri + "/auth/changePassword",
        resetPassword: uri + "/auth/resetPassword/{email}",
        resetPasswordbyCode: uri + "/auth/changePassword/{code}",
        register: uri + "/register",
    },
    File: {
        upload: "https://file.remabackend.com/File/upload?project=momeru",
        UploadMultiple:
            "https://file.remabackend.com/File/uploadMultiple?project=momeru",
        delete: uri + "/File",
    },

    Form: {
        post: uri + "/Form",
        get: uri + "/Form/all",
        getOne: uri + "/Form/{entityId}",
        put: uri + "/Form/{entityId}",
        delete: uri + "/Form/{entityId}",
    },
    ProjectCategory: {
        post: uri + "/ProjectCategory",
        get: uri + "/ProjectCategory/all",
        getOne: uri + "/ProjectCategory/{entityId}",
        put: uri + "/ProjectCategory/{entityId}",
        delete: uri + "/ProjectCategory/{entityId}",
    },

    Project: {
        post: uri + "/Project",
        get: uri + "/Project/all",
        getOne: uri + "/Project/{entityId}",
        put: uri + "/Project/{entityId}",
        delete: uri + "/Project/{entityId}",
    },

    User: {
        post: uri + "/User",
        get: uri + "/User/all",
        getOne: uri + "/User/{entityId}",
        put: uri + "/User/{entityId}",
        delete: uri + "/User/{entityId}",
        upload: uri + "/User/upload",
    },

    JobApp: {
        post: uri + "/JobApp",
        get: uri + "/JobApp/all",
        getOne: uri + "/JobApp/{entityId}",
        put: uri + "/JobApp/{entityId}",
        delete: uri + "/JobApp/{entityId}",
        upload: uri + "/JobApp/upload",
    },

    Article: {
        post: uri + "/Article",
        get: uri + "/Article/all",
        check: uri + "/Article/check?slug=",
        getOne: uri + "/Article/{entityId}",
        put: uri + "/Article/{entityId}",
        delete: uri + "/Article/{entityId}",
    },
const uri = 'https://server.momeru.com/v1';
// const uri = 'http://server.overrideeg.net:3010/v1';
// const uri = 'https://edupromise.remabackend.com/v1';
// const uri = 'https://server.momeru.com/v1';
export const API_URLS = {
  auth: {
    auth: uri + '/auth/login',
    changePassword: uri + '/Auth/changePassword',
    resetPassword: uri + '/Auth/resetPassword',
    register: uri + '/register',
  },
  File: {
    upload: 'http://server.overrideeg.net:3000/File/upload?project=momeru',
    UploadMultiple:  'http://server.overrideeg.net:3000/File/uploadMultiple?project=momeru',
    delete: uri + '/File',
  },

  Form: {
    post: uri + '/Form',
    get: uri + '/Form/all',
    getOne: uri + '/Form/{entityId}',
    put: uri + '/Form/{entityId}',
    delete: uri + '/Form/{entityId}',
  },
  QuestionCategory: {
    post: uri + '/QuestionCategory',
    get: uri + '/QuestionCategory/all',
    getOne: uri + '/QuestionCategory/{entityId}',
    put: uri + '/QuestionCategory/{entityId}',
    delete: uri + '/QuestionCategory/{entityId}',
  },
  Question: {
    post: uri + '/Question',
    get: uri + '/Question/all',
    getOne: uri + '/Question/{entityId}',
    put: uri + '/Question/{entityId}',
    delete: uri + '/Question/{entityId}',
  },
  Agent: {
    post: uri + '/Agent',
    get: uri + '/Agent/all',
    getOne: uri + '/Agent/{entityId}',
    put: uri + '/Agent/{entityId}',
    delete: uri + '/Agent/{entityId}',
  },
  Partner: {
    post: uri + '/Partner',
    get: uri + '/Partner/all',
    getOne: uri + '/Partner/{entityId}',
    put: uri + '/Partner/{entityId}',
    delete: uri + '/Partner/{entityId}',
  },
  ProjectCategory: {
    post: uri + '/ProjectCategory',
    get: uri + '/ProjectCategory/all',
    getOne: uri + '/ProjectCategory/{entityId}',
    put: uri + '/ProjectCategory/{entityId}',
    delete: uri + '/ProjectCategory/{entityId}',
  },
 
  Project: {
    post: uri + '/Project',
    get: uri + '/Project/all',
    getOne: uri + '/Project/{entityId}',
    put: uri + '/Project/{entityId}',
    delete: uri + '/Project/{entityId}',
  },
 
  User: {
    post: uri + '/User',
    get: uri + '/User/all',
    getOne: uri + '/User/{entityId}',
    put: uri + '/User/{entityId}',
    delete: uri + '/User/{entityId}',
    upload: uri + '/User/upload',
  },
 
 
 
  JobApp: {
    post: uri + '/JobApp',
    get: uri + '/JobApp/all',
    getOne: uri + '/JobApp/{entityId}',
    put: uri + '/JobApp/{entityId}',
    delete: uri + '/JobApp/{entityId}',
    upload: uri + '/JobApp/upload',
  },
 
 
  Article: {
    post: uri + '/Article',
    get: uri + '/Article/all',
    check: uri + '/Article/check?slug=',
    getOne: uri + '/Article/{entityId}',
    put: uri + '/Article/{entityId}',
    delete: uri + '/Article/{entityId}',
  },
 
  SeoOptions: {
    post: uri + '/SeoOptions',
    get: uri + '/SeoOptions/all',
    getOne: uri + '/SeoOptions/{entityId}',
    put: uri + '/SeoOptions/{entityId}',
    delete: uri + '/SeoOptions/{entityId}',
  },
  ArticleCategory: {
    post: uri + '/ArticleCategory',
    get: uri + '/ArticleCategory/all',
    getOne: uri + '/ArticleCategory/{entityId}',
    put: uri + '/ArticleCategory/{entityId}',
    delete: uri + '/ArticleCategory/{entityId}',
  },
  Board: {
    post: uri + '/Board',
    get: uri + '/Board/all',
    getOne: uri + '/Board/{entityId}',
    put: uri + '/Board/{entityId}',
    delete: uri + '/Board/{entityId}',
  },
  Card: {
    post: uri + '/Card',
    get: uri + '/Card/all',
    getOne: uri + '/Card/{entityId}',
    put: uri + '/Card/{entityId}',
    delete: uri + '/Card/{entityId}',
  },
  Job: {
    post: uri + '/Job',
    get: uri + '/Job/all',
    getOne: uri + '/Job/{entityId}',
    put: uri + '/Job/{entityId}',
    delete: uri + '/Job/{entityId}',
  },
  ContactUs: {
    post: uri + '/ContactUs',
    get: uri + '/ContactUs/all',
    getOne: uri + '/ContactUs/{entityId}',
    put: uri + '/ContactUs/{entityId}',
    delete: uri + '/ContactUs/{entityId}',
  },
  CeoTalk: {
    post: uri + '/CeoTalk',
    get: uri + '/CeoTalk/all',
    getOne: uri + '/CeoTalk/{entityId}',
    put: uri + '/CeoTalk/{entityId}',
    delete: uri + '/CeoTalk/{entityId}',
  },
  Faq: {
    post: uri + '/Faq',
    get: uri + '/Faq/all',
    getOne: uri + '/Faq/{entityId}',
    put: uri + '/Faq/{entityId}',
    delete: uri + '/Faq/{entityId}',
  },
  Company: {
    post: uri + '/Company',
    get: uri + '/Company/all',
    getOne: uri + '/Company/{entityId}',
    put: uri + '/Company/{entityId}',
    delete: uri + '/Company/{entityId}',
  },
    SeoOptions: {
        post: uri + "/SeoOptions",
        get: uri + "/SeoOptions/all",
        getOne: uri + "/SeoOptions/{entityId}",
        put: uri + "/SeoOptions/{entityId}",
        delete: uri + "/SeoOptions/{entityId}",
    },
    ArticleCategory: {
        post: uri + "/ArticleCategory",
        get: uri + "/ArticleCategory/all",
        getOne: uri + "/ArticleCategory/{entityId}",
        put: uri + "/ArticleCategory/{entityId}",
        delete: uri + "/ArticleCategory/{entityId}",
    },
    Board: {
        post: uri + "/Board",
        get: uri + "/Board/all",
        getOne: uri + "/Board/{entityId}",
        put: uri + "/Board/{entityId}",
        delete: uri + "/Board/{entityId}",
    },
    Card: {
        post: uri + "/Card",
        get: uri + "/Card/all",
        getOne: uri + "/Card/{entityId}",
        put: uri + "/Card/{entityId}",
        delete: uri + "/Card/{entityId}",
    },
    Job: {
        post: uri + "/Job",
        get: uri + "/Job/all",
        getOne: uri + "/Job/{entityId}",
        put: uri + "/Job/{entityId}",
        delete: uri + "/Job/{entityId}",
    },
    ContactUs: {
        post: uri + "/ContactUs",
        get: uri + "/ContactUs/all",
        getOne: uri + "/ContactUs/{entityId}",
        put: uri + "/ContactUs/{entityId}",
        delete: uri + "/ContactUs/{entityId}",
    },
    CeoTalk: {
        post: uri + "/CeoTalk",
        get: uri + "/CeoTalk/all",
        getOne: uri + "/CeoTalk/{entityId}",
        put: uri + "/CeoTalk/{entityId}",
        delete: uri + "/CeoTalk/{entityId}",
    },
    Faq: {
        post: uri + "/Faq",
        get: uri + "/Faq/all",
        getOne: uri + "/Faq/{entityId}",
        put: uri + "/Faq/{entityId}",
        delete: uri + "/Faq/{entityId}",
    },
    Company: {
        post: uri + "/Company",
        get: uri + "/Company/all",
        getOne: uri + "/Company/{entityId}",
        put: uri + "/Company/{entityId}",
        delete: uri + "/Company/{entityId}",
    },

    Page: {
        post: uri + "/Page",
        get: uri + "/Page/all",
        getOne: uri + "/Page/{entityId}",
        put: uri + "/Page/{entityId}",
        delete: uri + "/Page/{entityId}",
    },
    Section: {
        post: uri + "/Section",
        get: uri + "/Section/all",
        getOne: uri + "/Section/{entityId}",
        put: uri + "/Section/{entityId}",
        delete: uri + "/Section/{entityId}",
    },
    Application: {
        transfer: uri + "/Application/transfer",
    },
    Comment: {
        post: uri + "/comment",
        get: uri + "/comment/all",
        getOne: uri + "/comment/{entityId}",
        put: uri + "/comment/{entityId}",
        delete: uri + "/comment/{entityId}",
    },
    Openion: {
        post: uri + "/Openion",
        get: uri + "/Openion/all",
        getOne: uri + "/Openion/{entityId}",
        put: uri + "/Openion/{entityId}",
        delete: uri + "/Openion/{entityId}",
    },
    Vission: {
        post: uri + "/Vission",
        get: uri + "/Vission/all",
        getOne: uri + "/Vission/{entityId}",
        put: uri + "/Vission/{entityId}",
        delete: uri + "/Vission/{entityId}",
    },
    Mission: {
        post: uri + "/Mission",
        get: uri + "/Mission/all",
        getOne: uri + "/Mission/{entityId}",
        put: uri + "/Mission/{entityId}",
        delete: uri + "/Mission/{entityId}",
    },
    Services: {
        post: uri + "/Services",
        get: uri + "/Services/all",
        getOne: uri + "/Services/{entityId}",
        put: uri + "/Services/{entityId}",
        delete: uri + "/Services/{entityId}",
    },
};
