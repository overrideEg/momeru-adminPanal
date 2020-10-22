/* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/
// const uri = 'http://server.overrideeg.net:3010/v1';
// const uri = 'https://server.momeru.com/v1';

const uri = 'http://192.168.1.8:3010/v1';
// const uri = 'http://192.168.43.188:3010/v1';
export const API_URLS = {
  auth: {
    auth: uri + '/auth/login',
    changePassword: uri + '/Auth/changePassword',
    resetPassword: uri + '/Auth/resetPassword',
    register: uri + '/register',
  },
  File: {
    post: uri + '/File/Upload',
    UploadMultiple: uri + '/File/UploadMultiple',
    delete: uri + '/File',
  },
  appsettings: {
    post: uri + '/appsettings',
    get: uri + '/appsettings',
    put: uri + '/appsettings/{entityId}',
    delete: uri + '/appsettings/{entityId}',
  },
  Form: {
    post: uri + '/Form',
    get: uri + '/Form/all',
    getOne: uri + '/Form/{entityId}',
    put: uri + '/Form/{entityId}',
    delete: uri + '/Form/{entityId}',
  },
  Question: {
    post: uri + '/Question',
    get: uri + '/Question/all',
    getOne: uri + '/Question/{entityId}',
    put: uri + '/Question/{entityId}',
    delete: uri + '/Question/{entityId}',
  },
  QuestionOptions: {
    post: uri + '/option',
    get: uri + '/Question/options',
    getOne: uri + '/Options/{entityId}',
    put: uri + '/Options/{entityId}',
    delete: uri + '/Options/{entityId}',
  },
  User: {
    post: uri + '/User',
    get: uri + '/User/all',
    employees: uri + '/User/employee',
    getOne: uri + '/User/{entityId}',
    put: uri + '/User/{entityId}',
    delete: uri + '/User/{entityId}',
    upload: uri + '/User/upload',
  },
  Category: {
    post: uri + '/Category',
    get: uri + '/Category/all',
    getOne: uri + '/Category/{entityId}',
    put: uri + '/Category/{entityId}',
    delete: uri + '/Category/{entityId}',
  },
  Section: {
    post: uri + '/Section',
    get: uri + '/Section/all',
    getOne: uri + '/Section/{entityId}',
    put: uri + '/Section/{entityId}',
    delete: uri + '/Section/{entityId}',
  },
  Job: {
    post: uri + '/Job',
    get: uri + '/Job/all',
    getOne: uri + '/Job/{entityId}',
    put: uri + '/Job/{entityId}',
    delete: uri + '/Job/{entityId}',
  },
  Page: {
    post: uri + '/Page',
    get: uri + '/Page/all',
    getOne: uri + '/Page/{entityId}',
    put: uri + '/Page/{entityId}',
    delete: uri + '/Page/{entityId}',
  },
  UserAnswer: {
    post: uri + '/UserAnswer',
    get: uri + '/UserAnswer/all',
    getOne: uri + '/UserAnswer/{entityId}',
    put: uri + '/UserAnswer/{entityId}',
    delete: uri + '/UserAnswer/{entityId}',
  },
  Specialization: {
    post: uri + '/Specialization',
    get: uri + '/Specialization/all',
    getOne: uri + '/Specialization/{entityId}',
    put: uri + '/Specialization/{entityId}',
    delete: uri + '/Specialization/{entityId}',
  },
  Company: {
    post: uri + '/Company',
    get: uri + '/Company/all',
    getOne: uri + '/Company/{entityId}',
    put: uri + '/Company/{entityId}',
    delete: uri + '/Company/{entityId}',
  },
  JobTitle: {
    post: uri + '/JobTitle',
    get: uri + '/JobTitle/all',
    getOne: uri + '/JobTitle/{entityId}',
    put: uri + '/JobTitle/{entityId}',
    delete: uri + '/JobTitle/{entityId}',
  },
  CareerInterest: {
    post: uri + '/CareerInterest',
    get: uri + '/CareerInterest/all',
    getOne: uri + '/CareerInterest/{entityId}',
    put: uri + '/CareerInterest/{entityId}',
    delete: uri + '/CareerInterest/{entityId}',
  },
  JobCategory: {
    post: uri + '/JobCategory',
    get: uri + '/JobCategory/all',
    getOne: uri + '/JobCategory/{entityId}',
    put: uri + '/JobCategory/{entityId}',
    delete: uri + '/JobCategory/{entityId}',
  },
  Label: {
    post: uri + '/Label',
    get: uri + '/Label/all',
    getOne: uri + '/Label/{entityId}',
    put: uri + '/Label/{entityId}',
    delete: uri + '/Label/{entityId}',
  },

  Faq: {
    post: uri + '/Faq',
    get: uri + '/Faq/all',
    getOne: uri + '/Faq/{entityId}',
    put: uri + '/Faq/{entityId}',
    delete: uri + '/Faq/{entityId}',
  },
  HomePage: {
    post: uri + '/HomePage',
    get: uri + '/HomePage/all',
    getOne: uri + '/HomePage/{entityId}',
    put: uri + '/HomePage/{entityId}',
    delete: uri + '/HomePage/{entityId}',
  },
  UserForm: {
    post: uri + '/UserForm',
    get: uri + '/UserForm/getUserForms',
    getOne: uri + '/UserForm/{entityId}',
    putOne: uri + '/UserForm/{entityId}',
    put: uri + '/UserForm',
    delete: uri + '/UserForm/{entityId}',
    updateFormStatus: uri +'/UserForm/updateFormStatus/{status}'   

  },
  FirstSection: {
    post: uri + '/FirstSection',
    get: uri + '/FirstSection/all',
    getOne: uri + '/FirstSection/{entityId}',
    put: uri + '/FirstSection/{entityId}',
    delete: uri + '/FirstSection/{entityId}',
  },
  SecondSection: {
    post: uri + '/SecondSection',
    get: uri + '/SecondSection/all',
    getOne: uri + '/SecondSection/{entityId}',
    put: uri + '/SecondSection/{entityId}',
    delete: uri + '/SecondSection/{entityId}',
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
  }, AboutUs: {
    post: uri + '/AboutUs',
    get: uri + '/AboutUs/all',
    getOne: uri + '/AboutUs/{entityId}',
    put: uri + '/AboutUs/{entityId}',
    delete: uri + '/AboutUs/{entityId}',
  },
  OurValue: {
    post: uri + '/OurValue',
    get: uri + '/OurValue/all',
    getOne: uri + '/OurValue/{entityId}',
    put: uri + '/OurValue/{entityId}',
    delete: uri + '/OurValue/{entityId}',
  }, Principle: {
    post: uri + '/Principle',
    get: uri + '/Principle/all',
    getOne: uri + '/Principle/{entityId}',
    put: uri + '/Principle/{entityId}',
    delete: uri + '/Principle/{entityId}',
  }, DealCategory: {
    post: uri + '/DealCategory',
    get: uri + '/DealCategory/all',
    getOne: uri + '/DealCategory/{entityId}',
    put: uri + '/DealCategory/{entityId}',
    delete: uri + '/DealCategory/{entityId}',
  }, ManagerTalk: {
    post: uri + '/ManagerTalk',
    get: uri + '/ManagerTalk/all',
    getOne: uri + '/ManagerTalk/{entityId}',
    put: uri + '/ManagerTalk/{entityId}',
    delete: uri + '/ManagerTalk/{entityId}',
  }, Vision: {
    post: uri + '/Vision',
    get: uri + '/Vision/all',
    getOne: uri + '/Vision/{entityId}',
    put: uri + '/Vision/{entityId}',
    delete: uri + '/Vision/{entityId}',
  }, Mission: {
    post: uri + '/Mission',
    get: uri + '/Mission/all',
    getOne: uri + '/Mission/{entityId}',
    put: uri + '/Mission/{entityId}',
    delete: uri + '/Mission/{entityId}',
  },
  Partner: {
    post: uri + '/Partner',
    get: uri + '/Partner/all',
    getOne: uri + '/Partner/{entityId}',
    put: uri + '/Partner/{entityId}',
    delete: uri + '/Partner/{entityId}',
  },
  ServiceRequest: {
    post: uri + '/ServiceRequest',
    get: uri + '/ServiceRequest/all',
    getOne: uri + '/ServiceRequest/{entityId}',
    put: uri + '/ServiceRequest/{entityId}',
    delete: uri + '/ServiceRequest/{entityId}',
  },
  BlogCategory: {
    post: uri + '/BlogCategory',
    get: uri + '/BlogCategory/all',
    getOne: uri + '/BlogCategory/{entityId}',
    put: uri + '/BlogCategory/{entityId}',
    delete: uri + '/BlogCategory/{entityId}',
  },
  Blog: {
    post: uri + '/Blog',
    get: uri + '/Blog/all',
    getOne: uri + '/Blog/{entityId}',
    put: uri + '/Blog/{entityId}',
    delete: uri + '/Blog/{entityId}',
  },




};
