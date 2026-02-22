const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

const registerForm = document.querySelector('#register-form');
const phoneInput = document.querySelector('input[name="business_phone_number"]');
const otpPhoneInput = document.querySelector('.form-box.otp input[name="business_phone_number"]');

const submitBtn = registerForm.querySelector('button');

submitBtn.disabled = true;
submitBtn.innerText = "Processing...";

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(registerForm);

    try{

        const response = await fetch(registerForm.action, {
        method: 'POST',
        body: formData
     });

    if (response.ok) {
        otpPhoneInput.value = phoneInput.value;
        container.classList.add('otp-active');
    } else {
        alert("Registration Failed");
    }

   } catch (error) {
        alert("Network Error");
    }
});

document.querySelector('.form-box.otp').classList.add('otp-error');