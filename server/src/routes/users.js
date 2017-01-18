import express from 'express';
import mongoose from 'mongoose';
import passwordHash from 'password-hash';

import { setUpConnection } from '../DataBaseUtils';

const router = express.Router();

setUpConnection();

router.get('/', (req, res) => {
    res.send('users are here');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

export default router;
