import * as app from './src/app';
import config from './src/config/server-config';

app.default.use('/', function(req, res) {
    res.status(200).end();
});
// server start
app.default.listen(config.port, () => {
    console.log(`# listening on ${config.port}`);
    console.log('# environments', config);
});

