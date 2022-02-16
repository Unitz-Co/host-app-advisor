import React from 'react';

import withPageContext from '@uz/unitz-pages/withPageContext';
import App from '@uz/unitz-app-web/AdvisorApp';
import Layout from '@uz/unitz-layout-web/LayoutAdvisor';
import PageData from '../data/PageDataQuery';
import DIV from '@vl/redata/DIV.macro';
import SEO from '@uz/unitz-layout-web/SEO';
import { ctx } from '@vl/redata';
import SettingPage from '@uz/unitz-pages-advisor/Setting';

const SettingIndex = withPageContext((props) => {
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Supplier Support Center' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'advisorNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <SettingPage />
          </Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'authFooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default SettingIndex;
