window.onload = () => {
    view.setActiveScreen('register');
}

view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'register':
            document.getElementById('app').innerHTML = components.register;
            break;
    }

}