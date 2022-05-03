"use strict";

var checkoutForm = function checkoutForm() {
  console.log('hello');
  var email = document.querySelector('[data-js-email]');
  var phone = document.querySelector('[data-js-phone]');
  var fullname = document.querySelector('[data-js-fullname]');
  var address = document.querySelector('[data-js-address]');
  var city = document.querySelector('[data-js-city]');
  var country = document.querySelector('[data-js-country]');
  var postal = document.querySelector('[data-js-postal]');
  var form = document.querySelector('[data-js-checkout-form]');
  /** form validations */
  // email

  email.addEventListener('input', function () {
    email.setCustomValidity('');
    email.checkValidity();
  });
  email.addEventListener('invalid', function () {
    if (email.validity.valueMissing) {
      email.setCustomValidity('Enter your email address');
    } else if (email.validity.typeMismatch) {
      email.setCustomValidity('Entered value needs to be an email address');
    }
  }); // full name

  fullname.addEventListener('input', function () {
    fullname.setCustomValidity('');
    fullname.checkValidity();
  });
  fullname.addEventListener('invalid', function () {
    if (fullname.validity.valueMissing) {
      fullname.setCustomValidity('Enter your full name');
    } else if (fullname.validity.patternMismatch) {
      fullname.setCustomValidity('Your full name can only contain upper and lowercase letters. Try again');
    }
  }); // phone

  phone.addEventListener('input', function () {
    phone.setCustomValidity('');
    phone.checkValidity();
  });
  phone.addEventListener('invalid', function () {
    if (phone.validity.valueMissing) {
      phone.setCustomValidity('Enter your phone number');
    } else if (phone.validity.patternMismatch) {
      phone.setCustomValidity('Invalid phone number. Try again');
    }
  }); // address

  address.addEventListener('input', function () {
    address.setCustomValidity('');
    address.checkValidity();
  });
  address.addEventListener('invalid', function () {
    if (address.validity.valueMissing) {
      address.setCustomValidity('Enter your address');
    }
  }); // city

  city.addEventListener('input', function () {
    city.setCustomValidity('');
    city.checkValidity();
  });
  city.addEventListener('invalid', function () {
    if (city.validity.valueMissing) {
      city.setCustomValidity('Enter your city');
    }
  }); // country

  country.addEventListener('input', function () {
    country.setCustomValidity('');
    country.checkValidity();
  });
  country.addEventListener('invalid', function () {
    if (country.validity.valueMissing) {
      country.setCustomValidity('Enter your country');
    }
  }); // postal

  postal.addEventListener('input', function () {
    postal.setCustomValidity('');
    postal.checkValidity();
  });
  postal.addEventListener('invalid', function () {
    if (postal.validity.valueMissing) {
      postal.setCustomValidity('Enter your postal code');
    }
  }); // let the form submit, if there's no error

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('submit');
    if (!fullname.validity.valid && !email.validity.valid && !phone.validity.valid && !address.validity.valid && !city.validity.valid && !country.validity.valid && !postal.validity.valid) alert('Please answer the form correctly'); // if all is well, submit data here ...

    alert('Validation success!');
  });
};

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') checkoutForm();
});