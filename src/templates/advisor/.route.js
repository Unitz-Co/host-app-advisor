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
routeStore.addRule('meMessageDetail', {
  url: (params) => {
    if (process.env.GATSBY_APP_ENV && _.get(params, 'slug')) {
      return `/message/${_.get(params, 'slug')}`;
    }

    let search = `${querystring.stringify(_.pick(params, ['id']))}`;
    search = search ? `?${search}` : '';
    return `/message${search}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'me/course';
  },
});
