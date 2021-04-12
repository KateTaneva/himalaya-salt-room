import './Appointment.css';
import { Link } from 'react-router-dom';



const Appointment = (
    history
) => {

    const onAppointmentSubmitHandler = (e) => {
        e.preventDefault();

        console.log('Избраният час е запазен!');

        // const choosenHour = e.target.hour.value;
        // const client = e.target.clientName.value;
        // let clientList = []

        // if(client && choosenHour){

        // }else{
        //     throw('error')
        // }

    }
    return (
        <section className="appointment">
            <form onSubmit={onAppointmentSubmitHandler}>
                <label htmlFor='hour'>Свободни часове</label>
                <select type="text" name="free-hours" placeholder="Избери час">
                    <option value="hour" ></option>
                    <option value="hour">10:00</option>
                    <option value="hour">11:00</option>
                    <option value="hour">12:00</option>
                    <option value="hour">15:00</option>
                    <option value="hour">16:00</option>
                    <option value="hour">17:00</option>

                </select>

                <label htmlFor='clientName' className="clientName" id='clientName ' value="clientName">
                    Име и фамилия:
                </label>
                <input className="appointment-button" type="text" className='submit' />
                <input className="appointment-button" type="submit" className='submit appointment-button' />

            </form>
        </section>

    )
}

export default Appointment;