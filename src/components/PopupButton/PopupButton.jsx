import React from 'react';

import s from './popupbutton.scss';

const Animation = require('./popupbutton_anim');

class PopupButton extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }


    render() {
        return (
            <button className={
                this.props.className === 'cancel' ? 
                    s.cancel_button + ' ' + 'js-slideBlockCancelButton'
                    :
                    s.save_button + ' ' + 'js-slideBlockSaveButton'
            } onClick={this.props.onClick}>{this.props.className === 'cancel' ? 'Отмена' : 'Сохранить'}</button>
        );
    };
    
};

export default PopupButton;