
const Path = require('path');

const PATHS = {
    DIST: Path.resolve(__dirname, 'src/client/public'),
    SRC: Path.resolve(__dirname, 'src/client/private'),
    JS: Path.resolve(__dirname, 'src/server'),
};

module.exports = {
    entry: [
        'react-hot-loader/patch',
        PATHS.SRC
    ],
    output: {
        path: PATHS.DIST,
        filename: 'app.bundle.js'
    },
    devServer: {
        port: 8081,
        contentBase: PATHS.DIST,
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [ Path.resolve(__dirname, 'src/client/private/') ],
                exclude: [ Path.resolve(__dirname, 'node_modules') ]
            }
        ]
    },
    target: 'web'
};
