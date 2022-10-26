import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer
        SOME={[
          {
            SOMEtitle: "Facebook",
            SOMElink: "https://www.facebook.com/madsrn/",
          },
          {
            SOMEtitle: "LinkedIn",
            SOMElink:
              "https://www.linkedin.com/in/mads-rosenlund-nissen-8472371b8/",
          },
          {
            SOMEtitle: "Github",
            SOMElink: "https://github.com/N1ssen4",
          },
        ]}
      />
    </>
  );
}

export default Layout