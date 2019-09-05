import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  devLabel: {
    position: 'absolute',
    zIndex: 100,
    top: Platform({ android: 15, ios: 30 }),
    left: -1,
    maxWidth: 75,
    backgroundColor: "#42a5f4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  devLabelTxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "monospace",
    textAlign: 'center',
    textShadowColor: "#707070",
  }
});
