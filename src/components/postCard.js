import React from 'react';
import { Link } from 'react-router-dom';

export default ({post}) =>{
    return (
        <Link to={`/post/${post.id}`}>
            {post.title}
        </Link>
    )
}