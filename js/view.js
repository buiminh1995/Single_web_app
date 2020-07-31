const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'register':
            console.log(1);
            //mount register screen
            document.getElementById('app').innerHTML = components.register;

            //add register button listener
            document.getElementById('already-have-an-account').addEventListener('click', () => {
                view.setActiveScreen('login');
            
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {})
            });
            break;
    }

}