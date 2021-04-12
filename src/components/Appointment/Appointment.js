
const Appointment = (
    history
) => {

    const onAppointmentSubmitHandler = (e) => {
        e.preventDefault();

        console.log('Избраният час е запазен!');


    }
    return (
        <section className="appointment">
            <form onSubmit={onAppointmentSubmitHandler}>
            <label>Свободни часове</label>
                <select type="text" name="free-hours" placeholder="Избери час">
                    <option value="hour">10:00</option>
                    <option value="hour">11:00</option>
                    <option value="hour">12:00</option>
                    <option value="hour">14:00</option>
                    <option value="hour">15:00</option>
                    <option value="hour">16:00</option>
                    <option value="hour">17:00</option>

                </select>

                <label  className="Name">
                    Име и фамилия:
                </label>
                <input className="appointment-button" type="text" className='submit' />
                <input className="appointment-button" type="submit" className='submit' />

            </form>
        </section>

    )
}

export default Appointment;