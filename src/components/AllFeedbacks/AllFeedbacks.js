import { useEffect, useState } from "react";
import * as moreInfoService from '../services/moreInfoService';
import { Link } from 'react-router-dom';

const AllFeedbacks = (
    match
) =>{

    let [feedback, setFeedback] = useState({});
    useEffect(()=>{
        moreInfoService.update(match.params.feedbackId)
        
        .then(res => setFeedback(res))
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return(
        <section className="all-feedbacks-displayed">
            <h4>{feedback.name}</h4>
            <p>{feedback.description}</p>
            <p className="image">{feedback.imageURL}</p>
            <div className="edit-feedback">
                <Link to={`./allfeedbacks/${feedback.idd}/edit`}><button className="button">Edit Feedback</button></Link>
            </div>
        </section>
    )
}

export default AllFeedbacks;