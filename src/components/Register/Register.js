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

}

    return(
        <section className="register">
        <form onSubmit = {onRegisterSubmitHandler}>
            <fieldset>
                <legend>Регистрация</legend>
                <p className="field">
                    <label htmlFor="username">Потребителско име</label>
                    <span className="input">
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <span className="actions"></span>
                        <i className="fas fa-user"></i>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Парола</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <span className="actions"></span>
                        <i className="fas fa-key"></i>
                    </span>
                </p>
                <input className="button" type="submit" class="submit" value="Register" />
            </fieldset>
        </form>
    </section>
    )
}

export default Register;