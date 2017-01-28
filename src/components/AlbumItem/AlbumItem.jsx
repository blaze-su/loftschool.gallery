import React from 'react';
import Icon from 'react-icon-svg-symbol';
import { Link, browserHistory } from 'react-router';

import AlbumEdit from './../../components/AlbumEdit/AlbumEdit';
import s from './albumitem.scss';

class AlbumItem extends React.Component {
    render() {
        const image = require(`../../../server/files/${this.props.mainImage}`);
        return (
            <li className={s.myItem} >
                <Link to={`/album?album=${this.props._id}`} className={s.myImage} style={{background: `url('${image}') no-repeat 50% 50%`}}>
                    <div className={s.myOverlay}>
                        <div className={s.myText}>
                            <div className={s.myDescription}>{this.props.description}</div>
                            <div className={s.myWrapper}>
                                <span className={s.myNumber}>{this.props.imagesCount}</span>
                                <span className={s.myPhoto}> Фотографий</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className={s.myFooter}>
                    <AlbumEdit/>
                    <a href='' className={s.myLink}>
                        <h3 className={s.linkText}>{this.props.title}</h3>
                    </a>
                </div>
            </li>
        );
    }
}

export default AlbumItem;