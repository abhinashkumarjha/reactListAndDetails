import React from 'react';
import { Link } from 'react-router-dom';

export default ({post}) =>{
    return (
        <Link to={`/post/${post.id}`}>
            <div style={styles.container}>
                <div style={styles.title}>{post.title}</div>
                <div style={styles.innerContainer}>
                    <div>
                        {`Post Id: ${post.id}`}
                    </div>
                    <div>
                        {`by ${post.userId} (user Id)`}
                    </div>
                </div>
            </div>
        </Link>
    )
}

const styles = {
    container: {
        padding: '1em',
        margin: '1em',
        background: '#ffffa2',
        position: 'relative',
        verticalAlign: 'top',
        display: 'block',
        overflow: 'visible',
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        borderRadius: '2px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.1) inset'
    },
    title:{
        color: 'black',
        fontWeight: '500',
        fontSize: '1.2em',
        textDecoration: 'none'
    },
    innerContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}