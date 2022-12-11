const path = require('path');

module.export = {
    entry: {
        main:'/src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}