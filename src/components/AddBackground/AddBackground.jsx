import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './addbackground.scss';

function AddBackground() {
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
                <input type="file" className={s.addInput} id="fileCover"/>
                <label htmlFor="fileCover" className={s.addLabel}></label>
            </div>
        </div>
    );
}

export default AddBackground;