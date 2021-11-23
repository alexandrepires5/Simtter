// DOM elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModel = document.querySelector('.login-model');
const loginModelX = document.querySelector('.login-model i');
const loginFormBtn = document.querySelector('.login-form-btn');
//---------------------------------------------
//---------------------------------------------

//Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', (e) => {
    if(e.target.classList[1] === 'main-btn'){
        goToLoginPage();
    }
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');
    if(inputUserInfo.value !== '' && inputPassword.value !== ''){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        goToLoginPage();
        loginModel.style.display = 'block';
    }
});

// Login page
loginModelX.addEventListener('click', () => {
    loginModel.style.display = 'none';
}); 

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo= document.querySelector('.login-user-info');
    const loginUserPassword = document.querySelector('.login-user-password');
    if(loginUserInfo.value !== '' && loginUserPassword.value !== ''){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        loginModel.style.display = 'block';
    }
}); 