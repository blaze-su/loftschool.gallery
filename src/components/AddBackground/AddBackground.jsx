import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './addbackground.scss';

class AddBackground extends React.Component {
    onInputImage(e) {
        let data = new FormData();
        data.append('files', this[e.target.name].files[0]);
        this.props.uploadImage(data)
            .then(res => {
                if(this.props.type === 'album') this.props.setMainImage(res.data.fileNames[0]);
                else this.props.setBackgroundImage(res.data.fileNames[0]);
            });
    }

    render() { 
        return (
            <div className={s.addWrapper}>
                <div className={s.add}>
                    <div className={s.iconWrapper}>
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="cam"
                            iconClassName={s.addIcon}
                        />
                    </div>
                    <div className={s.iconText}>Изменить фон</div>
                    <input type="file" className={s.addInput} id="fileCover" name="backgroundImage" ref={input => this.backgroundImage=input} onChange={this.onInputImage.bind(this)}/>
                    <label htmlFor="fileCover" className={s.addLabel}></label>
                </div>
            </div>
        );
    }
}

export default AddBackground;