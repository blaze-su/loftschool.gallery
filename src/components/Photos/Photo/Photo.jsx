import React from 'react';

import s from './photo.scss';

import PhotoEdit from './Edit/PhotoEdit'

const Animation = require('./photo_anim');

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            fullscreen: false
        }
    }

    componentDidMount() {
        Animation.anim(s.active);
        
    }

    onClickHandler(e) {
        this.setState({fullscreen: !this.state.liked});
    } 


    render() {
        return (
            <div className={s.photo}>
                <div className={s.image} onClick={() => {this.props.onFullScreenOpen(this.props.id, this.props.title)}}>
                    <img src={this.props.image} alt={this.props.title}/>
                    <div className={s.comments}>{this.props.comments}</div>
                    <div className={s.likes}>{this.props.likes}</div>
                </div>
                <div className={s.info}>
                    <PhotoEdit/>
                    <div className="">
                        <span className={s.title}>{this.props.title}</span>
                    </div>
                </div>
            </div>
        );
    };
    
};

export default Like;