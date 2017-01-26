import React from 'react';
import Icon from 'react-icon-svg-symbol';
import MainHeaderEdit from '../../components/MainHeaderEdit/MainHeaderEdit';
import SocialIcons from '../../components/SocialIcons';
import s from './header.scss';

function Header(props) {
    const { vk, fb, twitter, google, email } = props.socials === undefined ? '#' : props.socials;

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.headerTop}>
                    <div className={s.profile}>
                        <div className={s.profilePhoto}>
                        </div>
                        <div className={s.profileInfo}>
                            <h1 className={s.profileName}>{props.username}</h1>
                            <p className={s.profileDescription}>{props.description}</p>
                            <SocialIcons />
                        </div>
                    </div>
                </div>
                <MainHeaderEdit uploadImage={ props.uploadImage } id={ props.id } onEditHandler={props.onEditHandler}
                                username={props.username} description={props.description}/>
                <a className={s.buttonLogout} href='#' onClick={props.logout}>
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="off"
                        iconClassName={s.circleIcon}
                    />
                    <span className={s.buttonText}>Выйти</span>
                </a>
            </div>
            <div className={s.search}>
                <div className={s.searchInner}>
                    <form className={s.searchForm} id='form'>
                        <input className={s.searchField} type='search' placeholder='Исследовать мир' />
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="search"
                            iconClassName={s.searchIcon}
                        />
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;