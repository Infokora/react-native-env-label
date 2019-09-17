import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';

// STYLES
import style from './style';

type _t_props = {|
  envName: string  
|}
export default class LabelEnv extends React.Component<_t_props> {

  positionX = new Animated.Value(-67);

  checkStylePosition = (flag) => {
    const {
      positionTypes: {
        show,
        hide
      }
    } = this.props;

    if (flag === show) {
      return style.show;
    } else if (flag === hide) {
      return style.hide;
    }
  }

  showLabel = () => {
    Animated.timing(
      this.positionX,
        {
          toValue: -1,
          duration: 300,
          easing: Easing.elastic(),
        }
    ).start();
  };

  hideLabel = () => {
    Animated.timing(
      this.positionX,
      {
        toValue: -65,
        duration: 300,
        easing: Easing.elastic(),
      }
    ).start();
  };

  componentDidMount() {
    this.showLabel();
  };

  render() {
    const {
      envName,
      togglePositionLabel,
      togglePositionBtnList
    } = this.props;

    const animatedStyle = {
      transform: [{translateX: this.positionX}],
    };

    return (
      <Animated.View
        style={[
          style.devLabel,
          animatedStyle
        ]}
      >
        <TouchableOpacity
          style={style.btnLabel}
          onPress={togglePositionLabel}
          onLongPress={togglePositionBtnList}
        >
          <Text
            style={style.devLabelTxt}
            accessibilityRole="button"
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {envName}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
