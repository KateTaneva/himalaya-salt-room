import { useEffect, useState } from 'react';
import * as moreInfoService from '../services/moreInfoService';


const EditFeedback = ({
    match,
    history
}) => {

    const [feedback, setFeedback] = useState({});

    useEffect(() => {
        moreInfoService.getOne(match.params.feedbackId)
            .then(res => setFeedback(res));
    }, [])

    const onDescriptionEditHandler = (e) => {
      e.preventDefault();

      let updatedDescription = {...feedback, description: e.target.description.value}

      moreInfoService.update(match.params.feedback.id, updatedDescription)
        .then(()=> {
            history.push(`./allfeedbacks/${feedback.id}/edit`)

        })
    }

    return (
        <section className='editedPet'>
            <h4>{feedback.name}</h4>
            <p>{feedback.description}</p>
            <p className="image">{feedback.imageURL}</p>
            <form>
                        <textarea type='text' name='description' onBlur = {onDescriptionEditHandler} defaultValue={feedback.description}></textarea>
            <button className='button'>Запази промените</button>
            </form>
        </section>
    )
}
export default EditFeedback;