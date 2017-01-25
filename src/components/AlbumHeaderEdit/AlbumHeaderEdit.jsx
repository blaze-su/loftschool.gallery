import React from 'react';

import s from './albumheaderedit.scss';
import Icon from 'react-icon-svg-symbol';

import Button from './../PopupButton/PopupButton';
import AddBackground from './../AddBackground';

const Animation = require('./albumheaderedit_anim');

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
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="edit"
                        iconClassName={s.editIcon}
                    />
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
                            <div className={s.user}>
                                <div className={s.userPhoto}></div>
                                <div className={s.userName}>Антон Черепов</div>
                            </div>
                            <div className={s.albumInfo}>
                                <input type="text" className={s.titleInput}/>
                                <textarea className={s.descriptionAlbum}></textarea>
                            </div>
                            <AddBackground />
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