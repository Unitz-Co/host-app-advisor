import React from 'react';

import { createPromise } from '@vl/mod-utils/createPromise';
import _ from 'lodash';

const allIframes = {};
const ensureIframe = (authorizeUrl, eventOrigin) => {
  const iframeId = 'uzauthframe';
  if (!allIframes[iframeId]) {
    allIframes[iframeId] = createPromise();
    let iframe = window.document.getElementById(iframeId);
    if (!iframe) {
      // init iframe
      iframe = window.document.createElement('iframe');
      iframe.setAttribute('width', '0');
      iframe.setAttribute('height', '0');
      iframe.setAttribute('id', iframeId);
      iframe.style.display = 'none';
      const onLoad = (e) => {
        if (_.get(e, 'data.type') === 'onload') {
          allIframes[iframeId].resolve(iframe);
          window.removeEventListener('message', onLoad, false);
        }
      };
      window.addEventListener('message', onLoad, false);

      iframe.onload = onLoad;
      window.document.body.appendChild(iframe);
      iframe.setAttribute('src', authorizeUrl);
    }
  }
  return allIframes[iframeId].promise;
};

const GATSBY_AUTH_ORIGIN = process.env.GATSBY_AUTH_ORIGIN;

const runIframe = async (authorizeUrl, eventOrigin, data) => {
  const iframe = await ensureIframe(authorizeUrl, eventOrigin);
  const handlers = {};
  const rtn = createPromise({
    timeoutMs: 10 * 1000,
    finallyCb: () => {
      window.removeEventListener('message', handlers.iframeEventHandler, false);
    },
  });

  // config listeners
  handlers.iframeEventHandler = (e) => {
    if (e.origin !== eventOrigin) return;
    if (_.get(e, 'data.request')) return;

    if (e.source) e.source.close();

    if (e.data.response && e.data.response.error) {
      rtn.reject(e.data.response);
    } else {
      rtn.resolve(e.data.response);
    }
  };
  window.addEventListener('message', handlers.iframeEventHandler, false);

  // send post message to iframe
  iframe.contentWindow.postMessage(
    {
      request: true,
      ...data,
    },
    '*'
  );
  return rtn.promise;
};

const SSOIndex = () => {
  console.log('SSO check');
  React.useEffect(() => {
    (async () => {
      const url = `${GATSBY_AUTH_ORIGIN}/authorize?ts=${Date.now()}`;
      console.log('url', url);
      const codeResult = await runIframe(url, GATSBY_AUTH_ORIGIN, { type: 'csrf_request' });
      console.log('codeResultcodeResult', codeResult);
    })();
  }, []);
  return null;
};

export default SSOIndex;
