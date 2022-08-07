/* eslint-disable no-undef */

const mixpanel = require('mixpanel-browser');
const mixpanelToken = process.env.MIXPANEL_TOKEN;
mixpanel.init(mixpanelToken, { debug: false });
mixpanel.track('pageview');
