import React, { Component } from "react";
import { connect } from 'react-redux';



const mapStateToProps = state => {
    // console.log("mapStateToProps: ", state);

    return {
        b: state.dishes_R,
        sample: state.sample
    }

}



class Home extends Component {


    // componentDidMount() {
    //     console.log("HomeState : ", this.state);
    //     console.log("HomeProps :", this.props);

    //     this.props.dispatch({
    //         type: 'TEST',
    //         str: "Bohubrihi"

    //     })
    // }

    // componentDidUpdate() {
    //     console.log("Home Props Updated :", this.props)
    // }



    render() {
        document.title = "Bohubrihi Restaurant ";
        return (


            <div>

            </div>
        );
    }

}


export default Home;