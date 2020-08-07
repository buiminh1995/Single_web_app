const controller = {};
controller.register = (registerInfo) => {
	if(!registerInfo.firstName){
		document.getElementById('firstName-error').innerText = 'Please input your first name';
	} else {
		view.setMessage('firstName-error','');
	}
	if(!registerInfo.lastName){
		document.getElementById('lastName-error').innerText = 'Please input your last name';
	} else {
		view.setMessage('lastName-error','');
	}
	if(!registerInfo.email){
		document.getElementById('email-error').innerText = 'Please input your email';
	} else {
		view.setMessage('email-error','');	
	}
	if(!registerInfo.password){
		document.getElementById('password-error').innerText = 'Please input your password';
	} else {
		view.setMessage('password-error','');	
	}
	if(!registerInfo.confirmPassword){
		document.getElementById('confirmPassword-error').innerText = 'Please confirm password';
	} else {
		view.setMessage('confirmPassword-error','');	
	}
}
