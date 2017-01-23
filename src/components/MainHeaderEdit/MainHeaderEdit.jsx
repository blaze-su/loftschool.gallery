import React from 'react';

import s from './mainheaderedit.scss';

import Button from './../PopupButton/PopupButton';

const Animation = require('./mainheaderedit_anim');

class HeaderEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler() {
        this.setState({active: !this.state.active})
    }


    render() {
        return (
            <div className={s.container}>
                <div className={s.editButton} onClick={this.onClickHandler}>
                    <div className={s.editIcon}></div>
                    <span className={s.editText}>Редактировать</span>
                </div>
                <div className={this.state.active ?
                    s.slideBlock_active
                    :
                    s.slideBlock
                }>
                    <div className={s.slideBlock__overlay} onClick={this.onClickHandler}></div>
                    <div className={s.slideBlock__wrapper}>
                        <div className={this.state.active ?
                            s.slideBlock_top_active
                            :
                            s.slideBlock_top
                            }>
                        </div>
                        <div className={this.state.active ?
                            s.slideBlock_bottom_active
                            :
                            s.slideBlock_bottom
                            }>
                            <div className={s.slideBlock_bottom__buttons}>
                                <Button className="cancel" onClick={this.onClickHandler}/>
                                <Button className="save"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    };
}

export default HeaderEdit;