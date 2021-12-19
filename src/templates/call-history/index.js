import React from 'react';

import App from '@uz/unitz-app-web/AdvisorApp';
import Layout from '@uz/unitz-layout-web/LayoutAdvisor';
import PageData from '../../data/PageDataQuery';
import DIV from '@vl/redata/DIV.macro';
import SEO from '@uz/unitz-layout-web/SEO';
import { ctx } from '@vl/redata';
import _ from 'lodash';
import useRoute from '@vl/hooks/useGbRoute';
import HomePage from '@uz/unitz-pages-advisor/CallHistory';

export const component = (props) => {
  const pageContext = _.get(props, 'pageContext');
  // eslint-disable-next-line
  const route = useRoute();
  route.setPageContext(pageContext);
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          {ctx.debug(() => {
            ctx.set('pageContext', pageContext);
          })}
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Homepage' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'advisorNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <HomePage />
          </Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
};

export default component;
