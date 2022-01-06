import React from "react";

import '../styles/globals.css';

const EmptyLayout = ({ children }) => <React.Fragment>{children}</React.Fragment>;

function NextApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default NextApp;
