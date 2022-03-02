import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import App from '@uz/unitz-app-web/AdvisorApp';
import SEO from '@uz/unitz-layout-web/SEO';

import Layout from '@uz/unitz-layout-web/LayoutAdvisorHelpCenter';
import HelpCenter from '@uz/unitz-pages-advisor/HelpCenter';
import useRoute from '@vl/hooks/useGbRoute';
import withPageContext from '@uz/unitz-pages/withPageContext';
import _ from 'lodash';
import PageData from '../../data/PageDataQuery';

export const component = withPageContext((props) => {
  const pageContext = useRoute().getPageContext();

  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Homepage' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'advisorNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <HelpCenter />
          </Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'AuthFooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default component;
