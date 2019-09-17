import {
  StyleSheet,
  Platform
} from 'react-native';

import COLORS from '../../configs/assets/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: Platform.select({android: 35, ios: 55}),
    left: -1,
    paddingTop: 20,
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
  },
  btn: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLORS.blueberry,
    borderRadius: 5,
    elevation: 3,
  },
  handlerTxt: {
    color: COLORS.white,
    fontSize: 12,
    textAlign: 'center',
    textShadowColor: COLORS.grayShadow,
  },
});
