import { auth } from '../../utils/firebase';
import './Login.css';
const Login = ({
    history
}) => {

    const onLoginFormSubmitHandler = (e) => {
       

        const username = e.target.username.value;
        const password = e.target.password.value;

        var userCredential = {
            username,
            password,
        }
        console.log(username, password);

        auth.userCredential(username, password)
            .then((userCredential) => {
                if (username && password) {
                    history.push('/characteristics');
                }

            })
            .catch((error) => {
                if (!username && !password) {
                    console.log(error)
                    throw (`You don't add username and password!`)
                } else if (username && !password) {
                    throw (`Password is not correct!`)
               
                } else if (!username && password) {
                    throw (`Username is not correct!`)
                } else if (password.length < 10) {
                    console.log(error)
                    throw ("Password is too short!")
                }
            });



    }
    return (
        <section className="login">
            <form onSubmit={onLoginFormSubmitHandler}>
                <fieldset>
                    <legend>Влизане</legend>
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
                    <input className="button" type="submit" class="submit" value="Login" />
                </fieldset>
            </form>
        </section>)
}

export default Login;