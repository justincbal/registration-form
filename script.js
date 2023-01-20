const fName = document.querySelector('.fName');
const lName = document.querySelector('.lName');
const email = document.querySelector('.email');
const pass1 = document.querySelector('.pass');
const pass2 = document.querySelector('.passCon');
const btn = document.querySelector('.submit')

btn.addEventListener('click', (e)=> {
    e.preventDefault();

    validateForm();

})

const validateEmail = (email) => {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    return pattern.test(String(email).toLocaleLowerCase());
}

const validateForm = () => {

    if (fName.value === '') {
        setErr(fName, 'First name required!');
    }
    else {
        setSucc(fName);
    }

    if (lName.value === '') {
        setErr(lName, 'Last name required!');
    }
    else {
        setSucc(lName);
    }

    if (email.value === '') {
        setErr(email, 'Email is required');
    }
    else if (!validateEmail(email.value)) {
        setErr(email, 'Invalid email address');
    }
    else {
        setSucc(email);
    }

    if (pass1.value === '') {
        setErr(pass1, 'Enter a password!');
    }
    else {
        setSucc(pass1);
    }

    if (pass2.value !== pass1.value) {
        console.log(pass1.value, pass2.value);
        setErr(pass2, 'Passwords do not match!');
    }
    else {
        setSucc(pass2);
    }

    


}

const setErr = (elm, message) => {
    const element = elm.parentElement;
    const errorMessage = element.querySelector('.error');

    errorMessage.textContent = message;
}

const setSucc = elm => {
    const element = elm.parentElement;
    const remMessage = element.querySelector('.error');
    remMessage.textContent = '';
}