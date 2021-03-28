import { useEffect, useState } from 'react';

import * as moreInfoService from '../services/moreInfoService';

const MoreInfo = ({
    match
}) => {

    let [info, setInfo] = useState({});
    useEffect(() => {
        moreInfoService.getOne(match.params.infoId)
            .then(res => setInfo(res))
    })

    return (
        <section className="moreInfoExtension">
            < h1 className="moreInfoExtensionTitle"> Влияние на солта върху организма</h1>
            <article className="moreInfoExtensionArticle">
                <h3>{info.name}</h3>
                <p className="description">{info.description}</p>
            </article>
        </section>
    );
}

export default MoreInfo;