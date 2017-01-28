import React from 'react';

import s from './deletebutton.scss';

const Animation = require('./deletebutton_anim');

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            pressed: false
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
            <button className={s.delete_button} onClick={this.props.onDeleteClick}>Удалить</button>
        );
    };
    
};

export default Like;