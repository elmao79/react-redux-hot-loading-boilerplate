
const Path = require('path');
const Express = require('express');
const app = Express();

app.use(Express.static(Path.resolve(__dirname, '../client/public')));

app.listen(3000, _ => {
    console.log('Server listening on port 3000');
});
