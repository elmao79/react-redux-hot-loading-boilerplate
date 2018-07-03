
const Path = require('path');

module.exports = {
    entry: Path.resolve(__dirname, 'src/client/private'),
    output: {
        path: Path.resolve(__dirname, 'src/client/public/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: [ Path.resolve(__dirname, 'src/client/private') ]
            }
        ]
    },
    target: 'node'
};
