const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'register':
            //mount register screen
            document.getElementById('app').innerHTML = components.register;

            //add register button listener
            document.getElementById('already-have-an-account').addEventListener('click', () => {
                view.setActiveScreen('login');
            });
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const registerInfo = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }

                controller.register(registerInfo)
            });
            break;
    }

}
view.setMessage = (elementId, message ='') => {
    console.log(2);
    document.getElementById(id).innerText = message;
}