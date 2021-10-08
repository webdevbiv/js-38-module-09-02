/**
 * Make registration
 * Make authorization
 * Build result in one ES5 bundle
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import './public/index.css';
import $ from 'jquery';

import 'bootstrap';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import registrationHandler from './registrationHandler';

registrationHandler();

$('.toast').toast({
  delay: 5000,
});

// class MyUser {
//   set value(val) {
//     this._val = val
//   }
// }

// class Customer extends MyUser {}

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './public/index.css';
// import $ from 'jquery';

// import 'bootstrap';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// import registrationHandler from './registrationHandler';
// import authHandler from './authHandler';

// registrationHandler();
// authHandler();

// $('.toast').toast({
//   delay: 5000,
// });
