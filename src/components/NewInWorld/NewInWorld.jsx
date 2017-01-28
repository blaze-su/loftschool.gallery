import React from 'react';
import Icon from 'react-icon-svg-symbol';

import s from './newinworld.scss';

function NewInWorld(props) {
    const image = require(`../../../server/files/${props.image}`);
    const userImage = require(`../../../server/files/${props.userImage}`);
    return (
        <li className={s.albumItem}>
            <a className={s.itemImage} style={{background: `url('${image}') no-repeat 50% 50%`}} >
                <div className={s.itemOverlay}>
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="loupe"
                        iconClassName={s.itemIcon}
                    /> 
                </div>
            </a>
            <div className={s.albumInfo}>
                <div className={s.albumAuthor}>
                    <a className={s.authorPhoto} style={{background: `url('${userImage}') no-repeat 50% 50%`}} >
                        <div className={s.photoOverlay}>
                            <Icon
                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                symbolId="more"
                                iconClassName={s.photoIcon}
                            />
                        </div>
                    </a>
                </div>
                <div className={s.albumCaption}>
                    <p className={s.albumTitle}>{props.title}</p>
                    <div className={s.albumDescription}>
                        <a href='#' className={s.albumComments}>
                            <Icon
                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                symbolId="comments"
                                iconClassName={s.commentsIcon}
                            />
                            <span className={s.quantityComments}>{props.commentsCount}</span>
                        </a>
                        <a href='#' className={s.albumLikes}>
                            <Icon
                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                symbolId="like"
                                iconClassName={s.likesIcon}
                            />
                            <span className={s.quantityLikes}>{props.likesCount}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.albumFooter}>
                <a href='#' className={s.albumLink}>
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="album"
                        iconClassName={s.albumIcon}
                    />
                    <h3 className={s.albumMain}>{props.albumTitle}</h3>
                </a>
            </div>
        </li>
    );
}

export default NewInWorld;