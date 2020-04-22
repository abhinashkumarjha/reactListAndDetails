import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllPosts } from "../actions/index";

import PostCard from './../components/postCard';

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchAllPosts()
    }

    renderPosts(posts){
        const data =posts.length > 0 ? posts[0]:[];
        return data.map((post)=><PostCard key={post.id} post={post} />)
    }

    render(){
        const { posts } = this.props;
        return (
            <React.Fragment>
                <div>This is my gome container</div>
                <div className="post-container">
                    {this.renderPosts(posts)}
                </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps = ({ posts }) => {
    return { posts };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);