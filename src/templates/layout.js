import React from 'react';
import 'prismjs/themes/prism.css';
import GlobalStyle from '../global-styles';
import userConfig from '../../config';
import Header from '../components/Header';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Header config={userConfig} />
        {children}
      </div>
    );
  }
}

export default Template;
