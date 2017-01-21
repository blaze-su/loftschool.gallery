import React from 'react';

import s from './like.scss';

const Animation = require('./like_anim');

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            liked: false
        }
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler(e) {
        this.setState({liked: !this.state.liked});
    } 


    render() {
        return (
            <button className={s.likeButton} onClick={this.onClickHandler}>
                <div className={this.state.liked ?
                    s.like_active
                    :
                    s.like
                }></div>
                <span>0</span>
            </button>
        );
    };
    
};

export default Like;