import React, { useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost } from "../actions/index";
import { useHistory, useParams } from 'react-router-dom';

const styles = {
    loading:{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    container:{
        padding: '2em',
        maxWidth: '750px',
        margin: 'auto'
    },
    title:{
        fontSize: '2em',
        paddingBottom: '1em'
    },
    innercontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2em',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'cornflowerblue'
    },
    back: {
        color: 'blue',
        fontWeight: 'bold',
        cursor: 'pointer',
        paddingTop: '1em'
    }
}

const Details = (props) =>{
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        props.fetchPost(id);
    },[]);


    const { postDetails } = props;

    if(Object.keys(postDetails)<2){
        return <div style={styles.loading}>Loading...</div>
    }
    return(
        <Fragment>
            <div 
                style={styles.back} 
                onClick={() => history.goBack()}
            >
                Go back
            </div>
            <div style={styles.container}>
                <div style={styles.title}>{postDetails.title}</div>
                <div  style={styles.innercontainer}>
                    <div>
                        {`Post Id: ${postDetails.id}`}
                    </div>
                    <div>
                        {`by ${postDetails.userId} (user Id)`}
                    </div>
                </div>
                <div style={styles.details}>{postDetails.body}</div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ postDetails }) => {
    return { postDetails };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);