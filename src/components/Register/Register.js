import { auth } from '../../utils/firebase'

const Register =({
    history
})=> {
const onRegisterSubmitHandler = (e) =>{
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    auth.createUserWithEmailAndPassword(username, password)
    .then(userCredential => {
        console.log('Register');
               history.push('/');
    })
    .catch((error) => console.log(error));

}

    return(
        <section className="register">
        <form onSubmit = {onRegisterSubmitHandler}>
            <fieldset>
                <legend>Регистрация</legend>
                <p className="field">
                    <label htmlFor="username">Email</label>
                    <i className="fas fa-user"></i>
                    <span className="input">
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <span className="actions"></span>
                        
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <i className="fas fa-key"></i>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="New Password" />
                        <span className="actions"></span>
                        
                    </span>
                </p>

                {/* <p className="field">
                    <label htmlFor="password">Повтори парола</label>
                    <i className="fas fa-key"></i>
                    <span className="input">
                        <input type="password" name="repeat-password" id="repeat-password" placeholder="Repeat Password" />
                        <span className="actions"></span>
                        
                    </span>
                </p> */}

                <input className="button" type="submit" class="submit" value="Регистрация" />
            </fieldset>
        </form>
    </section>
    )
}

export default Register;