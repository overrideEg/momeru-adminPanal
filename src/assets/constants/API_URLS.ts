/* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/
// const uri = 'http://server.overrideeg.net:3010/v1';
const uri = 'https://server.momeru.com/v1';
// const uri = 'http://192.168.43.188:3010/v1';
// const uri = 'http://192.168.1.17:3010/v1';
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
  User: {
    post: uri + '/User',
    get: uri + '/User/all',
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
    get: uri + '/UserForm/all',
    getOne: uri + '/UserForm/{entityId}',
    put: uri + '/UserForm/{entityId}',
    delete: uri + '/UserForm/{entityId}',
  },


 

};
