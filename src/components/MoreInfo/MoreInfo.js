
import { Component } from "react";

import Effect from '../Effect/Effect';
import * as moreInfoService from '../services/moreInfoService';

class MoreInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            titles: [],
            category: '',
            description: '',
        };
    }

    componentDidMount() {
        moreInfoService.getOne()
            .then((res) => this.setState({ title: res, description: res }))
            .catch((err) => {
                console.log(" 404 Not found!");
            });
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;
        if (prevProps.match.params.category === category) {
            return (
                moreInfoService.getAll({ category })
                    .then((res) => {
                        this.setState({ title: res, description: res })
                    }))
        }

    }
    render() {
        return (
            <section >
                <h1> Влияние на солта върху организма</h1>

                <ul className='type-of-effect'>
                    {this.state.id.map((x) => {
                        return (<Effect key={x.id}{...x} />)
                    })}
                </ul>

            </section>
        )
    }

}

export default MoreInfo;