const components = {};
components.register = `
<div class='register-container'>
    <div class = 'form-wrapper'>
        <div class = 'logo'>
            <span> Minh Bui's Chat </span>
        <div>

        <div class = 'form-container'>
            <form id = 'register-form'>
                <div class = 'name-wrapper'>
                    <div class='input-wrapper'>
                        <input class='input' type='text' name='firstName' placeholder='First Name' />
                    </div>
                    <div class='input-wrapper'>
                        <input class='input' type='text' name='lastName' placeholder='Last Name' />
                    </div>
                </div>

                <div class='input-wrapper'>
                    <input class='input' type='email' name='email' placeholder='Email' />
                </div>

                <div class='input-wrapper'>
                    <input class='input' type='password' name='email' placeholder='Password' />
                </div>

                <div class='input-wrapper'>
                    <input class='input' type='password' name='confirmPassword' placeholder='Confirm password' />
                </div>

                <div class='input-wrapper register-footer'>
                    <a id='already-have-an-account'>Already have an account? Log in</a>
                    <button class='btn' type='submit'>
                        <span>Register</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
`