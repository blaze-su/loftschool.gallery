import React from 'react';

import s from './mainheaderedit.scss';
import Icon from 'react-icon-svg-symbol';
import Button from './../PopupButton/PopupButton';
import AddBackground from './../AddBackground';
import SocialIcons from '../../components/SocialIcons';
const Animation = require('./mainheaderedit_anim');

class HeaderEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            username: '',
            description: '',
            socials: {},
            mainImage: '',
            backgroundImage: '',
            id: props.id
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputImage = this.onInputImage.bind(this);
        this.onSaveHandler = this.onSaveHandler.bind(this);
        this.setBackgroundImage = this.setBackgroundImage.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler() {
        this.setState({active: !this.state.active});
    }

    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onInputImage(e) {
        let data = new FormData();
        data.append('files', this[e.target.name].files[0]);
        this.props.uploadImage(data)
            .then((res) => {
                this.setState({ mainImage: res.data.fileNames[0] });
            })
    }

    onSaveHandler(e) {
        this.props.onEditHandler(this.state).then(() => { this.setState({active: !this.state.active}); });
    }

    setBackgroundImage(image) {
        this.setState({ backgroundImage: image });
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
                            <div className={s.wrapper}>
                                <div className={s.profile}>
                                    <div className={s.photo}>
                                        <div className={s.overlay}>
                                            <Icon
                                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                                symbolId="cam"
                                                iconClassName={s.camIcon}
                                            />
                                            <div className={s.camDescription}>Изменить фото</div>
                                        </div>
                                        <input className={s.inputFile} type="file" ref={input => this.mainImage=input}
                                                id="file" name="mainImage" onChange={this.onInputImage}/>
                                        <label htmlFor="file" className={s.labelFile}></label>
                                    </div>
                                    <div className={s.info}>
                                        <input className={s.nameInput} type="text" name="username" onChange={this.onInputChange} placeholder={this.props.username}/>
                                        <textarea className={s.description}  name="description" onChange={this.onInputChange} placeholder={this.props.description}></textarea>
                                        <SocialIcons />
                                    </div>
                                </div>
                                <AddBackground setBackgroundImage={this.setBackgroundImage} uploadImage={this.props.uploadImage} />
                            </div>
                        </div>
                        <div className={this.state.active ?
                            s.slideBlock_bottom_active
                            :
                            s.slideBlock_bottom
                            }>
                            <div className={s.slideBlock_bottom__buttons}>
                                <Button className="cancel" onClick={this.onClickHandler}/>
                                <Button className="save" onClick={this.onSaveHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    };
}

export default HeaderEdit;