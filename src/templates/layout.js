import React from 'react';
import 'prismjs/themes/prism.css';
import GlobalStyle from '../global-styles';
import userConfig from '../../config';
import Header from '../components/Header';

const Layout = ({ children, post }) => (
  <div>
    <GlobalStyle />
    <Header config={userConfig} post={post} />
    {children}
  </div>
);

export default Layout;
