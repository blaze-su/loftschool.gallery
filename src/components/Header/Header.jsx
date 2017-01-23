import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './header.scss';

function Header() {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.headerTop}>
                    <div className={s.profile}>
                        <div className={s.profilePhoto}>
                        </div>
                        <div className={s.profileInfo}>
                            <h1 className={s.profileName}>Алексей</h1>
                            <p className={s.profileDescription}>Я веб разработчик</p>
                            <div className={s.profileSocial}>
                                <ul className={s.socialList}>
                                    <li className={s.socialItem}>
                                        <a className={s.socialLink}>
                                            <Icon
                                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                                symbolId="soc_vk"
                                                iconClassName={s.socialIcon}
                                            /> 
                                        </a>
                                    </li>
                                    <li className={s.socialItem}>
                                        <a className={s.socialLink}>
                                            <Icon
                                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                                symbolId="soc_fb"
                                                iconClassName={s.socialIcon}
                                            /> 
                                        </a>
                                    </li>
                                    <li className={s.socialItem}>
                                        <a className={s.socialLink}>
                                            <Icon
                                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                                symbolId="soc_twitter"
                                                iconClassName={s.socialIcon}
                                            /> 
                                        </a>
                                    </li>
                                    <li className={s.socialItem}>
                                        <a className={s.socialLink}>
                                            <Icon
                                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                                symbolId="social_google"
                                                iconClassName={s.socialIcon}
                                            /> 
                                        </a>
                                    </li>
                                    <li className={s.socialItem}>
                                        <a className={s.socialLink}>
                                            <Icon
                                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                                symbolId="soc_email"
                                                iconClassName={s.socialIcon}
                                            /> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <div className={s.buttonsWrapper}>
                        <a className={s.buttonEdit} href='#'>
                            <Icon
                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                symbolId="edit"
                                iconClassName={s.circleIcon}
                            />
                            <span className={s.buttonText}>Редактировать</span>
                        </a>
                        <a className={s.buttonLogout} href='#'>
                            <Icon
                                fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                symbolId="off"
                                iconClassName={s.circleIcon}
                            />
                            <span className={s.buttonText}>Выйти</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.search}>
                <div className={s.searchInner}>
                    <form className={s.searchForm} id='form'>
                        <input className={s.searchField} type='search' placeholder='Исследовать мир' />
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;