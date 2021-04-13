import * as moreInfoService from '../../components/services/moreInfoService';
import { Redirect }from 'react-router-dom';
import './Appointment.css';

const Appointment = (
    history
) => {

    const onAppointmentSubmitHandler = (e) => {
       
        console.log("Избраният час е запазен!");


        const client = e.target;
        moreInfoService.create(client.value)
            .then(()=> {
               <Redirect to='/'/>
            })
        



    }
    return (
        <section className="appointment">
            <article className="appointment-wrapper">

                <form onSubmit={onAppointmentSubmitHandler} >

                    <label htmlFor='hour'>Свободни часове</label>
                    <select type="text" name="free-hours" placeholder="Избери час" className='options'>
                        <option value="hour" ></option>
                        <option value="hour">10:00</option>
                        <option value="hour">11:00</option>
                        <option value="hour">12:00</option>
                        <option value="hour">15:00</option>
                        <option value="hour">16:00</option>
                        <option value="hour">17:00</option>
                        <option value="hour">19:00</option>

                    </select>

                    <label htmlFor='clientName' className="clientName" id='clientName ' value="clientName">
                        Име и фамилия:
                </label>
                    <input className="appointment-text" type="text" />
                    <input className='button' className="appointment-button" type="submit" value="Запази" />
                   
                </form>



            </article >
        </section >

    )
}

export default Appointment;