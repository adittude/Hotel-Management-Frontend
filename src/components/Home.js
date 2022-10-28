// import React, { useState, useEffect } from "react";
// import Banner from './Banner';
// import OurRooms from "./OurRooms";
// import Header1 from "./Header1";
// import UserService from "../services/user.service";

// export default class Home extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           content: ""
//       };
//   }
//   componentDidMount() {
//       UserService.getPublicContent().then(
//         response => {
//           this.setState({
//             content: response.data
//           });
//         },
//         error => {
//           this.setState({
//             content:
//               (error.response && error.response.data) ||
//               error.message ||
//               error.toString()
//           });
//         }
//       );
//     }
// render(){
//   return (
//     <Header1></Header1>
//     <div className="container" style={{marginTop:100}}>
//     <Banner />
//     <OurRooms />
// </div>
//     // <div className="container">
//     //   <header className="jumbotron">
//     //     <h3>{content}</h3> 
//     //   </header>
//     // </div>
//   );
// };
// }
// }
// // export default Home;


import React, { Component } from "react";

import UserService from "../services/user.service";
import Banner from './Banner';
import OurRooms from "./OurRooms";
import Header1 from "./Header1";
import Footer from "./Footer";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }
    componentDidMount() {
        UserService.getPublicContent().then(
          response => {
            this.setState({
              content: response.data
            });
          },
          error => {
            this.setState({
              content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            });
          }
        );
      }
    

    render() {
        return (
            <>
            <Header1></Header1>
            <div className="container" style={{marginTop:100}}>
                {/* <header className="jumbotron">
          { <h3>{this.state.content}</h3> }
        </header> */}
                <Banner />
                <OurRooms />
            </div>
            {/* <Footer></Footer> */}
            </>
        );
    }
}
