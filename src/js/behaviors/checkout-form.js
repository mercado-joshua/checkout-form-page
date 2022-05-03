const checkoutForm = () => {
    console.log('hello');
    const email = document.querySelector('[data-js-email]');
    const phone = document.querySelector('[data-js-phone]');
    const fullname = document.querySelector('[data-js-fullname]');
    const address = document.querySelector('[data-js-address]');
    const city = document.querySelector('[data-js-city]');
    const country = document.querySelector('[data-js-country]');
    const postal = document.querySelector('[data-js-postal]');
    const form = document.querySelector('[data-js-checkout-form]');

    /** form validations */

    // email
    email.addEventListener('input', () => {
        email.setCustomValidity('');
        email.checkValidity();
    });

    email.addEventListener('invalid', () => {
        if ( email.validity.valueMissing ) {
            email.setCustomValidity('Enter your email address');
        }
        else if ( email.validity.typeMismatch ) {
            email.setCustomValidity('Entered value needs to be an email address');
        }
    });

    // full name
    fullname.addEventListener('input', () => {
        fullname.setCustomValidity('');
        fullname.checkValidity();
    });
    
    fullname.addEventListener('invalid', () => {
        if ( fullname.validity.valueMissing ) {
            fullname.setCustomValidity('Enter your full name');
        } else if ( fullname.validity.patternMismatch ) {
            fullname.setCustomValidity('Your full name can only contain upper and lowercase letters. Try again');
        }
    });

    // phone
    phone.addEventListener('input', () => {
        phone.setCustomValidity('');
        phone.checkValidity();
    });
    
    phone.addEventListener('invalid', () => {
        if ( phone.validity.valueMissing ) {
            phone.setCustomValidity('Enter your phone number');
        } else if ( phone.validity.patternMismatch ) {
            phone.setCustomValidity('Invalid phone number. Try again');
        }
    });

    // address
    address.addEventListener('input', () => {
        address.setCustomValidity('');
        address.checkValidity();
    });

    address.addEventListener('invalid', () => {
        if ( address.validity.valueMissing ) {
            address.setCustomValidity('Enter your address');
        }
    });

    // city
    city.addEventListener('input', () => {
        city.setCustomValidity('');
        city.checkValidity();
    });

    city.addEventListener('invalid', () => {
        if ( city.validity.valueMissing ) {
            city.setCustomValidity('Enter your city');
        }
    });

    // country
    country.addEventListener('input', () => {
        country.setCustomValidity('');
        country.checkValidity();
    });

    country.addEventListener('invalid', () => {
        if ( country.validity.valueMissing ) {
            country.setCustomValidity('Enter your country');
        }
    });

    // postal
    postal.addEventListener('input', () => {
        postal.setCustomValidity('');
        postal.checkValidity();
    });

    postal.addEventListener('invalid', () => {
        if ( postal.validity.valueMissing ) {
            postal.setCustomValidity('Enter your postal code');
        }
    });

    // let the form submit, if there's no error
    form.addEventListener('submit', ( event ) => {
        event.preventDefault();

        if ( !fullname.validity.valid && !email.validity.valid && 
            !phone.validity.valid && !address.validity.valid &&
            !city.validity.valid && !country.validity.valid &&
            !postal.validity.valid ) alert( 'Please answer the form correctly' );

        // if all is well, submit data here ...
        alert( 'Validation success!' );
    });
};

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') checkoutForm();
});