function submit(){
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#tel");
    const birthday = document.querySelector("#birthday");
    const classOfInterest = document.querySelector("#class-interest");
    const time = document.querySelector("#audition-time");
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('birthday', birthday.value);
    localStorage.setItem('classOfInterest', classOfInterest.value);
    localStorage.setItem('time', time.value);
}

let used = false;
function calendar(){
    if(!used){
        const input = document.createElement('p');
        const location = document.querySelector('#calendar-link');
        location.appendChild(input);
        const information = document.createTextNode("I didn't actually build a calendar but this seemed like something nice to have on a home page");
        input.appendChild(information);
        used = true;
    }
}

 