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

  positionX = new Animated.Value(-1);

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

  showList = () => {
    Animated.timing(
      this.positionX,
        {
          toValue: -1,
          duration: 300,
          easing: Easing.elastic(),
        }
    ).start();
  };

  hideList = () => {
    Animated.timing(
      this.positionX,
      {
        toValue: -150,
        duration: 300,
        easing: Easing.elastic(),
      }
    ).start();
  };

  render() {
    const {
      data,
    } = this.props;

    const animatedStyle = {
      transform: [{translateX: this.positionX}],
    };

    return (
      <Animated.View style={[
        style.container,
        animatedStyle
      ]}>
        {
          data.map(({ txt, handler }, i) => (
            <TouchableOpacity
              key={`${txt}${i}`}
              style={style.btn}
              onPress={handler}
            >
              <Text
                style={style.handlerTxt}
                accessibilityRole="button"
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {txt}
              </Text>
            </TouchableOpacity>
          ))
        }
        
      </Animated.View>
    );
  }
}
