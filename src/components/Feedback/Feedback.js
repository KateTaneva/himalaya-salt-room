import * as moreInfoService from '../../components/services/moreInfoService';

const Feedback = () => {

    const onCreateCommentSubmitHandler = (e) => {
        e.preventDefault();

        const {name, description, imageURL} = e.target;
        moreInfoService.create(name.value, description.value, imageURL.value);
        
    }
    return (
        <section className="create">
            <form onSubmit={onCreateCommentSubmitHandler}>
                <fieldset>
                    <legend>Добави коментар</legend>
                    <p className="field">
                        <label for="name">Име</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Сподели снимка" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    
                    <input className="button" type="submit" className="submit" value="Add Comment" />
                </fieldset>
            </form>
        </section>
    )
};

export default Feedback;