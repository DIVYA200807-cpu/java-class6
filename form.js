function validation(e) {
    e.preventdefoult();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value; 
    const msgbox = document.getElementById('message').value;

    let message ='';
    if(email ===''){
        message = 'please enter an email';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'please enter your password';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'please enter your age';
        msgbox.style.color = 'red';
    } else {
        message = 'login successfully!';
        msgbox.style.color = 'green';
    }
    msgbox.innerhtml
}
document.getElementById("loginform").onsubmit = validation;

document.getElementById("email").oninput = () => validation({
    preventdefoult: () => {} });
document.getElementById("password").oninput = () => validation({
    preventdefoult: () => { }
});
document.getElementById("age").oninput = () => validation({
    preventdefoult: () => { }
});
