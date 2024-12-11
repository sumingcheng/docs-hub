import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import GiscusComponent from '@site/src/components/GiscusComponent';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <GiscusComponent />
    </>
  );
} 