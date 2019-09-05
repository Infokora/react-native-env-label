import React from 'react';
import {
  View,
  Text
} from 'react-native';

// STYLES
import style from './style';

export default class LabelEnv extends React.Component {

  render() {
    return (
      <View style={style.devLabel}>
        <Text style={style.devLabelTxt}>
          {"ENV"}
        </Text>
      </View>
    );
  }
}
