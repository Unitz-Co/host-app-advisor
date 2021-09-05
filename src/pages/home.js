import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import HomePage from '@uz/unitz-pages-advisor/Home';
import withPageContext from '@uz/unitz-pages/withPageContext';
import App from '@uz/unitz-app-web/UserApp';

import Layout from '@uz/unitz-layout-web/LayoutMain';
import SEO from '@uz/unitz-layout-web/SEO';

import PageData from '../data/PageDataQuery';

const HomeIndex = withPageContext((props) => {
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Homepage' })} />
          <Layout.POS name="app-header">
            <div>header</div>
          </Layout.POS>
          <Layout.POS name="app-body">
            <HomePage />
          </Layout.POS>
          <Layout.POS name="app-footer">
            <div>footer</div>
          </Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default HomeIndex;
