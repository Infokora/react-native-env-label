import {
  StyleSheet,
  Platform
} from 'react-native';

import COLORS from '../../configs/assets/colors';

export default StyleSheet.create({
  devLabel: {
    position: 'absolute',
    zIndex: 100,
    top: Platform.select({android: 15, ios: 35}),
    left: -1,
    width: 85,
    backgroundColor: COLORS.blueberry,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    opacity: 0.7,
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
  },
  devLabelTxt: {
    color: COLORS.white,
    fontSize: 12,
    textAlign: 'center',
    textShadowColor: COLORS.grayShadow,
  },
  btnLabel: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
