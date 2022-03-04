import React from "react";

import { DAppProvider } from "@usedapp/core";

import '../styles/globals.css';
import '../styles/components.css';
import { HeadTag } from "../components/HeadTag";
import { HeadScript } from "../components/HeadScript";

const EmptyLayout = ({ children }) => <React.Fragment>{children}</React.Fragment>;

function NextApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <DAppProvider config={{}}>
      <HeadTag/>
      <HeadScript/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  );
}

export default NextApp;
