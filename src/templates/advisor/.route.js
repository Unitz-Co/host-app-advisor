const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');
const querystring = require('querystring');

routeStore.addRule('advisor', {
  url: (params) => {
    let search = `${querystring.stringify(params)}`;
    search = search ? `?${search}` : '';
    return `/advisor${search}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'profile';
  },
});

routeStore.addRule('advisor:user', {
  url: (params) => {
    return `${routeStore.getAppOrigin('user')}${_.get(params, 'profile.slug')}`;
  },
});
routeStore.addRule('advisor/profile', {
  url: (params) => {
    return `/advisor/profile?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/profile';
  },
});
