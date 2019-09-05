import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

// STYLES
import style from './style';

type _t_props = {|
  envName: string  
|}
export default class LabelEnv extends React.Component<_t_props> {

  render() {
    const {
      envName
    } = this.props;

    return (
      <TouchableOpacity style={style.devLabel}>
        <Text
          style={style.devLabelTxt}
          accessibilityRole="button"
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {envName}
        </Text>
      </TouchableOpacity>
    );
  }
}
