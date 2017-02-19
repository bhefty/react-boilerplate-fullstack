import React, { Component } from 'react';

import logo from './logo.svg'
import Wrapper from './Wrapper'
import HeaderDiv from './HeaderDiv'
import IMG from './IMG'
import P from './P'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderDiv>
          <h2>Welcome to React</h2>
          <IMG src={logo}/>
        </HeaderDiv>
        <P>
          To get started, edit <code>src/modules/App/index.js</code> and save to reload.
        </P>
      </Wrapper>
    );
  }
}

export default App;
