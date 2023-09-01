const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config } = {}) => {

    const { compose } = composer(modules, { config });
    compose.asis('webComponents');
    return compose.modules;

};
