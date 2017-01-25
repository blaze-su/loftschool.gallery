import React from 'react';
import Icon from 'react-icon-svg-symbol';

import s from './socialicons.scss';

function SocialIcons() {
    return (
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
    );
}

export default SocialIcons;