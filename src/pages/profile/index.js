import React from 'react';

import withPageContext from '@uz/unitz-pages/withPageContext';
import App from '@uz/unitz-app-web/AdvisorApp';
import Layout from '@uz/unitz-layout-web/LayoutAdvisor';
import PageData from '../../data/PageDataQuery';
import DIV from '@vl/redata/DIV.macro';
import SEO from '@uz/unitz-layout-web/SEO';
import { ctx } from '@vl/redata';
import Profile from '@uz/unitz-pages-advisor/Profile';

const Index = withPageContext((props) => {
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Homepage' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'advisorNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <div className="min-h-full bg-background1">
              <Profile />
            </div>
          </Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'FooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default Index;
