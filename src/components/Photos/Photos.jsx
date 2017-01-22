import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './photos.scss';

function Photos() {
    return (
        <div className={s.photos}>
        	<a href='#' className={s.buttonAdd}>
                <Icon
                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                    symbolId="add"
                    iconClassName={s.addIcon}
                />
                <span className={s.addText}>Добавить</span>
            </a>
            <div className={s.container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a href='#' className={s.image}>
                            <div className={s.imageOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.iconLoupe}
                                /> 
                            </div>
                        </a>
                        <div className={s.footer}>
                            <a href='#' className={s.edit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <a href='' className={s.albumLink}>
                                <h3 className={s.linkText}>Прогулки на лодке</h3>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Photos;