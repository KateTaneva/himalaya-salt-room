
import { Component } from "react";

import * as moreInfoService from '../services/moreInfoService';

class MoreInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            category: '',
            description: '',
        };
    }

    componentDidMount() {
        moreInfoService.getAll()
            .then((res) => this.setState({ title: res, description: res }))
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;
        if (prevProps.match.params.category == category) {
          return
        }
        moreInfoService.getAll(category)
            .then((res) => {
                this.setState({ title: res, description: res })
            })
    }
    render() {
       return(
        <section >
        <h1> Влияние на солта върху организма</h1>
        <article >
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
        </article>
    </section>
       )
    }

}

export default MoreInfo;