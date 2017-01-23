import React from 'react';
import s from './main.scss';
import Header from '../../components/Header';
import New from '../../components/New';
import My from '../../components/My';
import Footer from '../../components/Footer';

function Main() {
    return (
        <div className={s.wrapper}>
			<Header />
			<div className={s.contentWrapper}>
				<New />
				<My />
			</div>
			<Footer />
		</div>
    );
};

export default Main;