import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    res.send('Everything\'s good');
});

app.listen(8080, () => console.log('listening on 8080')); 