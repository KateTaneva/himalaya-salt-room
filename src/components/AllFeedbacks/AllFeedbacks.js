import React, { useContext, useEffect, useState } from "react";
import * as moreInfoService from '../services/moreInfoService';
import { Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';


function AllFeedbacks() {

    return (
        <section className="all-feedbacks-displayed" >
            <h4>{useContext(Feedback)}</h4>
            <p>{useContext(Feedback)}</p>
            <p className="image">{useContext(Feedback)}</p>
            <div className="edit-feedback">
                <Link to={`./allfeedbacks/${useContext(Feedback)}/edit`}><button className="button">Edit Feedback</button></Link>
            </div>
        </section>
    )
}

export default AllFeedbacks;