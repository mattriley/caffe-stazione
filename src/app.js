const mixpanel = require('mixpanel-browser');
const config = require('./default-config');

mixpanel.init(config.mixpanelToken, { debug: false });
mixpanel.track('pageview');
