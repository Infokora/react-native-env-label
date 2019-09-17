// @flow

import React, { Fragment } from 'react';
import { NativeModules } from 'react-native';

// COMPONENTS
import LabelEnv from './components/labelEnv';
import BtnList from './components/btnList';

type _t_props = {|
  envName?: string,
  buttons?: Array<{
    txt: string,
    handler: () => void,
  }>,
|}

export default class App extends React.Component<_t_props> {
  labelShow = 'show';

  RefLabelEnv = null;

  RefBtnList = null;

  btnListFlag = false;

  positionTypes = {
    show: "show",
    hide: "hide"
  };

  labelFunctions = {
    [this.positionTypes.show]: () => this.RefLabelEnv.showLabel,
    [this.positionTypes.hide]: () => this.RefLabelEnv.hideLabel,
  };

  openDevMenu = () => {
    if (NativeModules.DevMenu) {
      NativeModules.DevMenu.show();
    } else {
      NativeModules.DevSettings.reload();
    }
  };

  clearConsole = () => {
    console.clear();
  };

  buttons = [{
    txt: NativeModules.DevMenu ? "Dev Menu" : "Relaod",
    handler: this.openDevMenu
  }, {
    txt: "Clear Clear",
    handler: this.clearConsole
  }];

  togglePositionLabel = () => {
    if (this.labelShow === this.positionTypes.show) {
      this.labelShow = this.positionTypes.hide;
      this.RefBtnList.hideList();
    } else if (this.labelShow === this.positionTypes.hide) {
      this.labelShow = this.positionTypes.show;
    }

    this.labelFunctions[this.labelShow]()();
  };

  togglePositionBtnList = () => {
    if (!this.RefBtnList) return;

    if (this.btnListFlag) {
      this.RefBtnList.hideList();
    } else {
      this.RefBtnList.showList();
    }

    this.btnListFlag = !this.btnListFlag;
  };

  render() {
    const {
      envName = "",
      buttons = []
    } = this.props;

    return (
      <Fragment>
        <LabelEnv
          envName={envName}
          labelPosition={this.labelPosition}
          positionTypes={this.positionTypes}
          togglePositionLabel={this.togglePositionLabel}
          togglePositionBtnList={this.togglePositionBtnList}
          ref={(ref) =>{
            this.RefLabelEnv = ref;
          }}
        />
        <BtnList
          data={[...this.buttons, ...buttons]}
          ref={(ref) =>{
            this.RefBtnList = ref;
          }}
        />
      </Fragment>
    );
  }
}
