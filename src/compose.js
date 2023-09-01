const composer = require('module-composer');
const modules = require('./modules');

module.exports = () => {

    const { compose } = composer(modules);
    return compose.asis('webComponents');

};
