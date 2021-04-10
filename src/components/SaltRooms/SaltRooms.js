
const SaltRooms = (
) => {

    return (
        <div className="wrapper">
            <article className="adultsRooms" >
                <h2 className="adultsRoomsTitle">Солна стая за възрастни</h2>
                <ul>
                    <li>Продължителност: 40 мин.</li>
                    <li>Максимален брой души в стаята: 5</li>
                </ul>
            </article>
            <article className="childrensRooms">
                <h2 className="childrensRoomsTitle">Солна стая за деца</h2>
                <ul>
                    <li>Продължителност: 20 мин.</li>
                    <li>Максимален брой души в стаята: 6 деца с 6 придружители</li>
               </ul>
            </article>
        </div>

    );

}
export default SaltRooms;