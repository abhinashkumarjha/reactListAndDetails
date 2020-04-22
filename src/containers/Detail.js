import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost } from "../actions/index";
import { Link, useParams } from 'react-router-dom';

const Details = (props) =>{
    const { id } = useParams()
    useEffect(() => {
        console.log('  i was here ', props, id);
        props.fetchPost(id);
    });

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