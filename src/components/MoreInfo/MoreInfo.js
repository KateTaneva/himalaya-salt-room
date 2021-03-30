
// import { Component } from "react";

// import * as moreInfoService from '../services/moreInfoService';

// class MoreInfo extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: '',
//             currentCategory: 'effect',
//             description: '',
//         };
//     }

//     componentDidMount() {
//         moreInfoService.getAll()
//             .then((res) => this.setState({ title: res, description: res }))
//     }

//     componentDidUpdate(prevProps) {
//         const category = this.props.match.params.category;
//         if (prevProps.match.params.category == category) {
//             this.return;
//         }
//         moreInfoService.getAll(category)
//             .then((res) => {
//                 this.setState({ title: res, description: res })
//             })
//     }
//     render() {
//        return(
//         <section >
//         < h1 > Влияние на солта върху организма</h1>
//         <article >
//             <h3>{info.name}</h3>
//             <p >{info.description}</p>
//         </article>
//     </section>
//        )
//     }

// }

// export default MoreInfo;