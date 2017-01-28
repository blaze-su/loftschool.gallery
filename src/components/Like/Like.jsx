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

        this.onClickHandler= this.onClickHandler.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler(e) {
        if (this.state.liked) {
            this.props.onLike('remove');
        } else {
            this.props.onLike('add');
        }
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
                <span>{this.props.likes}</span>
            </button>
        );
    };
    
};

export default Like;