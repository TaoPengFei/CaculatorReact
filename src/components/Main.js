require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">基于React技术栈的简易计算器的实现</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
