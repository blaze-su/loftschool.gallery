import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './footer.scss';

function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.description}>
                    <p className={s.descriptionText}>Перед вами сервис, который поможет вам организовать свои фотографии в альбомы и поделиться ими со всем миром!</p>
                </div>
                <div className={s.toTop}>
                    <a href='#' className={s.topLink}>
                        <Icon
                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                            symbolId="top"
                            iconClassName={s.topIcon}
                        /> 
                    </a>
                </div>
                <div className={s.copyright}>
                    <p className={s.copyrightText}>2016 | Создано командой профессионалов на продвинутом курсе по веб-разработке от LoftSchool</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;