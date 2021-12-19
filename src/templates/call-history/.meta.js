const path = require('path');
const _ = require('lodash');
require('@vl/mod-config/web');
const { withLocale } = require('@uz/mod-translations/utils');

exports.createPages = withLocale(async function(item, gatsby) {
  const localeConfig = this;
  // @update query
  return Promise.all(
    ['index'].map(() => {
      const pageSlug = 'call-history';
      const pagePath = localeConfig.langSlug(path.join('/', pageSlug));
      console.log('creating page', pagePath);
      const pageContext = _.cloneDeep({
        id: pagePath,
        slug: pagePath,
        lang: localeConfig.get('lang'),
        params: {
          navbar: {
            title: 'Call History',
            path: 'call-history',
            url: 'call-history',
          },
        },
      });
      return gatsby.actions.createPage({
        path: pagePath,
        component: item.resolvers.component(gatsby),
        context: pageContext,
      });
    })
  );
});
