const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');
const querystring = require('querystring');

routeStore.addRule('course', {
  url: (params) => {
    // if (process.env.GATSBY_APP_ENV && _.get(params, 'slug')) {
    //   return `/courses/${_.get(params, 'slug')}`;
    // }

    let search = `${querystring.stringify(params)}`;
    search = search ? `?${search}` : '';
    return `/course${search}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course';
  },
});

routeStore.addRule('courseDetail', {
  url: (params) => {
    // if (process.env.GATSBY_APP_ENV && _.get(params, 'slug')) {
    //   return `/courses/${_.get(params, 'slug')}`;
    // }

    const id = _.get(params, 'id', 'unknown');
    return `/course/detail?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/detail';
  },
});

routeStore.addRule('coursePreview', {
  url: (params) => {
    if (process.env.GATSBY_APP_ENV && _.get(params, 'slug')) {
      return `${routeStore.getAppOrigin('user')}/courses/${_.get(params, 'slug')}`;
    }

    const id = _.get(params, 'id', 'unknown');
    return `${routeStore.getAppOrigin('user')}/course/detail?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/preview';
  },
});

routeStore.addRule('courseEdit', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/course/edit?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/edit';
  },
});

routeStore.addRule('courseAdd', {
  url: () => {
    return `/course/add`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/add';
  },
});

routeStore.addRule('courseClone', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/course/clone?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/clone';
  },
});
