import React from 'react';
import { Link } from 'react-router-dom';

export default (post) =>{
    return (
        <Link to={`/post/${post.item.id}`}>
            {post.item.title}
        </Link>
    )
}