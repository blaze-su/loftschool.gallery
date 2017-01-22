import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import users from './routes/users';
import files from './routes/files';

const app = Express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/users', users);
app.use('/files', files);

app.get('/', (req, res) => {
    res.send('Everything\'s good');
});

app.listen(8080, () => console.log('listening on 8080')); 