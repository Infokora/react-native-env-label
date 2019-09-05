// @flow

import React from 'react';

// CUSTOM MODULES
import LabelEnv from './components/labelEnv';

type _t_props = {|
  envName?: string  
|}

export default class App extends React.Component<_t_props> {

  render() {
    const {
      envName = "",
    } = this.props;

    return <LabelEnv envName={envName} />;
  }
}
