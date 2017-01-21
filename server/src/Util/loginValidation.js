import Validator from 'validator';
import { isEmpty } from 'lodash';

function userValidation(data) {
    let errors = {};

    if(Validator.isEmpty(data.username)) errors.username = 'Введите имя пользователя';
    if(Validator.isEmpty(data.password)) errors.password = 'Введите пароль';

    return ({
        errors,
        isValid: isEmpty(errors)
    });
}

export default userValidation;