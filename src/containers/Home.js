import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllPosts } from "../actions/index";
import PostCard from './../components/postCard';

const styles ={
    header: {
        fontSize: "2em",
        fontWeight: "bold",
        margin: "0px auto",
        display: "table",
        paddingTop: "1.5em",
        paddingBottom: "2em"
    },
    container:{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))'
    }
}

const Home = ({posts, fetchAllPosts}) => {
    
    useEffect(()=>{
        fetchAllPosts()
    },[])

    const renderPosts = (posts) => {
        const data =posts.length > 0 ? posts[0]:[];
        return data.map((post)=><PostCard key={post.id} post={post} />)
    }

    return (
        <React.Fragment>
            <div style={styles.header}>All posts</div>
            <div style={styles.container}>
                {renderPosts(posts)}
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = ({ posts }) => {
    return { posts };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);