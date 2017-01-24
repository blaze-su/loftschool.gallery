import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import users from './routes/users';
import files from './routes/files';
import albums from './routes/albums';
import images from './routes/images';
import { setUpConnection } from './Util/DataBaseUtils';

const app = Express();
setUpConnection();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/users', users);
app.use('/files', files);
app.use('/albums', albums);
app.use('/images', images);

app.get('/', (req, res) => {
    res.send('Everything\'s good');
});

app.listen(8080, () => console.log('listening on 8080')); 