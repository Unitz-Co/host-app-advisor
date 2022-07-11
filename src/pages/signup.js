import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import SignupPage from '@uz/unitz-pages-advisor/SignupPage';

import App from '@uz/unitz-app-web/AdvisorApp';
import SEO from '@uz/unitz-layout-web/SEO';
import useRoute from '@vl/hooks/useGbRoute';
import LoadingScreen from '@uz/unitz-components-web/LoadingScreen';
import _ from 'lodash';
import Layout from '@uz/unitz-layout-web/LayoutMain';
import withPageContext from '@uz/unitz-pages/withPageContext';
import PageData from '../data/PageDataQuery';

const registerUrlVN =
  'https://docs.google.com/forms/d/e/1FAIpQLScrAH5U43xN6aYElG5HoFOW-lO1qBSBg_NVUec-uXDgOgETKw/viewform';

const registerUrlEN =
  'https://docs.google.com/forms/d/e/1FAIpQLSe9jLH2vAxJZCLCgY8OBJoi-VpbxVOY3SnCj0oQa12S5Wvo5g/viewform';

const RegisterIndex = withPageContext((props) => {
  const route = useRoute();
  const lang = _.get(route.getPageContext(), 'lang', 'vi');
  React.useEffect(() => {
    if (lang === 'vi') {
      route.navigateExternal(registerUrlVN);
    } else if (lang === 'en') route.navigateExternal(registerUrlEN);
  }, []);
  if (registerUrlVN || registerUrlEN) {
    return <LoadingScreen />;
  }

  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'AuthPage' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'authNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <SignupPage />
          </Layout.POS>
          <Layout.POS name="app-footer">{ctx.apply('ctf.renderSection', { name: 'authFooterSection' })}</Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
});

export default RegisterIndex;
