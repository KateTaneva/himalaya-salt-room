import * as moreInfoService from '../../components/services/moreInfoService';
import './Feedback.css';

const Feedback = ({
    history,
}) => {

    const onCreateCommentSubmitHandler = (e) => {
        e.preventDefault();

       
        const {name, description, imageURL} = e.target;
        moreInfoService.create(name.value, description.value, imageURL.value)
        .then(() => {
          history.push("/allfeedbacks");
         
        })
        .catch(error => console.log(error));
       
    }
    return (
        <section className="create">
            <form onSubmit={onCreateCommentSubmitHandler} className='create-feedback'>
                <fieldset>
                    <legend>Добави коментар</legend>
                    <p className="field">
                        <label htmlFor="name">Име</label>
                        <span className="input">
                            <input type="text" name="name" id="name"  />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field-description">
                        <label htmlFor="description" >Описание</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                ></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label htmlFor="image">Снимка</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image"  />
                            <span className="actions"></span>
                        </span>
                    </p>
                    
                    <input className="submit" type="submit"  value="Добави " />
                </fieldset>
            </form>
        </section>
    )
};

export default Feedback;