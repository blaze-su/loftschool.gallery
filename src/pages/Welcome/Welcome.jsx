import React from 'react';

import s from './welcome.scss';

function Welcome() {
    return (
        <div className={s.wrapper}>
        	<div className={s.contentWrapper}>
        		
        	</div>
        	<footer className={s.footer}>
	        	<p className={s.copyright}>
	        		2017 Создано командой профессионалов на продвинутом курсе по веб-разработке от LoftSchool
	        	</p>
        	</footer>
        </div>
    );
};

export default Welcome;