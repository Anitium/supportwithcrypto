import React from "react";

import { DAppProvider } from "@usedapp/core";
import '../styles/globals.css';

const EmptyLayout = ({ children }) => <React.Fragment>{children}</React.Fragment>;

function NextApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <DAppProvider config={{}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  );
}

export default NextApp;
