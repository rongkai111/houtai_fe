const path = require( 'path' )
module.exports = {
    devServer: {
        open: true,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set( 'Views',path.join(__dirname, './src/views') )
            .set( 'Assets',path.join(__dirname, './src/assets') )
            .set( 'Components',path.join(__dirname, './src/components') )
            .set( 'Filters',path.join(__dirname, './src/filters') )
            .set( 'Layout',path.join(__dirname, './src/layout') )
            .set( 'Router',path.join(__dirname, './src/router') )
            .set( 'Store',path.join(__dirname, './src/store') )
            .set( 'Utils',path.join(__dirname, './src/utils') )
    }
}