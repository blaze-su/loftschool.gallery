import React from 'react';

import s from './photo.scss';

import PhotoEdit from './Edit/PhotoEdit';

import Icon from 'react-icon-svg-symbol';

const Animation = require('./photo_anim');

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.getBackgroundStyle = this.getBackgroundStyle.bind(this);
        this.state = {
            fullscreen: false
        }
    }

    componentDidMount() {
        Animation.anim(s.active);

    }

    onClickHandler(e) {
        this.setState({fullscreen: !this.state.fullscreen});
    }

    getBackgroundStyle(value) {
      return { backgroundImage: 'url(' + value + ')' };
    }

    render() {
        return (
            <li className={s.item}>
                <a href='#' className={s.image} style={this.getBackgroundStyle(this.props.image)}>
                    <div className={s.imageOverlay} onClick={() => {this.props.onFullScreenOpen(this.props.id);this.onClickHandler}}>
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="loupe"
                            iconClassName={s.iconLoupe}
                        />
                    </div>
                </a>
                <div className={s.photoDescription}>
                    <a href='#' className={s.photoComments}>
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="comments"
                            iconClassName={s.commentsIcon}
                        />
                        <span className={s.quantityComments}>{this.props.comments}</span>
                    </a>
                    <a href='#' className={s.photoLikes}>
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="like"
                            iconClassName={s.likesIcon}
                        />
                        <span className={s.quantityLikes}>{this.props.likes}</span>
                    </a>
                </div>
                <div className={s.footer}>
                    <a href='#' className={s.edit}>
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="edit"
                            iconClassName={s.editIcon}
                        />
                    </a>
                    <span className={s.photoTitle}>{this.props.title}</span>
                </div>
            </li>
        );
    };

};

export default Photo;
