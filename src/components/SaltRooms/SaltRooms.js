import '../services/moreInfoService';

const SaltRooms = ({
    id,
    name,
    duration,
    category,
    people,
}) => {

    return (
        <div className="wrapper">
            <article className="adultsRooms" >
                <h2 className="adultsRoomsTitle">{name}</h2>
                <ul>
                    <li>Продължителност: {duration}</li>
                    <li>Максимален брой души в стаята: {people}</li>
                </ul>
            </article>
            <article className="childrensRooms">
                <h2 className="childrensRoomsTitle">{name}</h2>
                <ul>
                    <li>Продължителност: {duration}</li>
                    <li>Максимален брой души в стаята: {people}</li>
               </ul>
            </article>
        </div>

    );

}
export default SaltRooms;