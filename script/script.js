const changeTheme = document.querySelector(".change-theme")
const sumbitButton = document.querySelector(".submit-button")
const themeButton = document.querySelector(".change-theme")
const backgound = document.querySelector("body")
const form = document.querySelector(".form-wrapper")
const input = document.querySelectorAll(".input-fields")
const logo = document.querySelector(".logo")
console.log(input.classList);

function getTheme(){
    if(localStorage.getItem('theme')){
        console.log('dark');
        sumbitButton.classList.toggle("dark-theme-font")
        themeButton.classList.toggle("dark-theme-font")
        document.body.style.background = "linear-gradient(90deg,rgb(40, 40, 40),black)";
        form.classList.toggle("dark-form")
        input.forEach((x) => [
            x.classList.toggle("dark-form-input")
        ])
        logo.classList.toggle("dark-logo")
        document.querySelector(".block").classList.toggle("dark-block")
    }
    else{
        console.log('light');
        document.body.style.background = "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)";
    }
}
getTheme();

changeTheme.addEventListener('click', () => {
    if(localStorage.getItem('theme')){
        localStorage.removeItem('theme')
        sumbitButton.classList.toggle("dark-theme-font")
        themeButton.classList.toggle("dark-theme-font")
        form.classList.toggle("dark-form")
        input.forEach((x) => [
            x.classList.toggle("dark-form-input")
        ])
        logo.classList.toggle("dark-logo")
        document.querySelector(".block").classList.toggle("dark-block")
        getTheme();
    }
    else{
        localStorage.setItem('theme','dark')
        getTheme();
    }
})

