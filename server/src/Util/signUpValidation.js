import Validator from 'validator';
import { isEmpty } from 'lodash';
import mongoose from 'mongoose';

import '../models/User/User';
const User = mongoose.model('User');

function userValidations(data) {
    let errors = {};

    if(Validator.isEmpty(data.username)) { errors.username = 'Это поле не может быть пустым'; }
    if(!Validator.isEmail(data.email)) { errors.email = 'Значение некорректно'; }
    if(Validator.isEmpty(data.email)) { errors.email = 'Это поле не может быть пустым'; }
    if (Validator.isEmpty(data.password)) { errors.password = 'Это поле не может быть пустым'; }

    return ({
        errors,
        isValid: (isEmpty(errors))
    });
}

export default userValidations;