import React from 'react';
import FlipCard from 'react-flipcard';
import Icon from 'react-icon-svg-symbol';
import s from './welcome.scss';


class Welcome extends React.Component{

  constructor(props) {
  super(props);
    this.handleOnFlip = this.handleOnFlip.bind(this);
    this.state = {
    isFlipped: false
    }
  }

  showBack = () => {
    this.setState({
      isFlipped: true
    });
  }

  showFront = () => {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped,T) {
    if (flipped) {
     this.refs.backButton.focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

  componentDidMount() {
    let front = document.getElementsByClassName("ReactFlipCard__Front")[0];
    let back = document.getElementsByClassName("ReactFlipCard__Back")[0];
    front.style.outline='none';
    back.style.outline='none';
  }

  render() {
    return (
        <div className={s.wrapper}>
            <div className={s.contentWrapper}>
                <FlipCard
                  disabled={true}
                  flipped={this.state.isFlipped}
                  onFlip={this.handleOnFlip}
                  onKeyDown={this.handleKeyDown}
                >
                  <div className={s.frontSide}>
                    <h1 className={s.registrationTitle}>Добро пожаловать</h1>
                    <p className={s.registrationDescription}>Перед вами сервис, который поможет вам организовать свои фотографии в альбомы и поделиться ими со всем миром!</p>
                    <form className={s.formLogin}>
                      <label className={s.formLabel}>
                        <input className={s.formInput} placeholder='Электронная почта'/>
                        <Icon
                          fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                          symbolId="envelope"
                          iconClassName={s.mailIcon}
                        />
                      </label>
                      <label className={s.formLabel}>
                        <input className={s.formInput} placeholder='Пароль'/>
                        <Icon
                          fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                          symbolId="password"
                          iconClassName={s.passwordIcon}
                        />
                      </label>
                      <div className={s.error}>
                        <span className={s.errorMessage}>E-mail или пароль не верен</span>
                      </div>
                      <button className={s.submitButton}>Войти</button>
                      <div className={s.formFooter}>
                        <span className={s.description}>Нет аккаунта?</span>
                        <button type="button" onClick={this.showBack} className={s.registration}>Зарегистрироваться</button>
                      </div>
                    </form>
                  </div>
                  <div className={s.backSide}>
                    <h1 className={s.registrationTitle}>Регистрация</h1>
                    <form className={s.formLogin}>
                      <label className={s.formLabel}>
                        <input className={s.formInput} placeholder='Имя'/>
                        <Icon
                          fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                          symbolId="name"
                          iconClassName={s.nameIcon}
                        />
                      </label>
                      <label className={s.formLabel}>
                        <input className={s.formInput} placeholder='Электронная почта'/>
                        <Icon
                          fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                          symbolId="envelope"
                          iconClassName={s.mailIcon}
                        />
                      </label>
                      <label className={s.formLabel}>
                        <input className={s.formInput} placeholder='Пароль'/>
                        <Icon
                          fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                          symbolId="password"
                          iconClassName={s.passwordIcon}
                        />
                      </label>
                      <div className={s.confidentiality}>
                         Ваши данные остаются строго конфеденциальны
                      </div>
                      <button className={s.submitButton}>Создать аккаунт</button>
                      <div className={s.formFooter}>
                        <span className={s.description}>Уже зарегистрированы?</span>
                        <button className={s.loginButton} type="button" ref="backButton" onClick={this.showFront}>Войти</button>
                      </div>
                    </form>
                  </div>
                </FlipCard>
            </div>
            <footer className={s.footer}>
                <p className={s.copyright}>
                    2017 Создано командой профессионалов на продвинутом курсе по веб-разработке от LoftSchool
                </p>
            </footer>
        </div>
    );
  }
};

export default Welcome;