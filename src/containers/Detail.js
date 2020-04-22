import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost } from "../actions/index";

const Details = (props) =>{
    console.log(props);
    return(
        <div>
            This is the details page
        </div>
    )
}

const mapStateToProps = ({ postDetails }) => {
    return { postDetails };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);