import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  size0: 0,
  size0_8: 0.8,
  size0_4: 0.4,
  size0_2: 0.2,
  size0_3: 0.3,
  size0_6: 0.6,
  size0_7: 0.7,
  size0_5: 0.5,
  size1_1: 1.1,
  size1: 1,
  size2: 2,
  size3: 3,
  size4: 4,
  size5: 5,
  size6: 6,
  size7: 7,
  size8: 8,
  size9: 9,
  size10: 10,
  size11: 11,
  size12: 12,
  size13: 13,
  size14: 14,
  size15: 15,
  size16: 16,
  size17: 17,
  size18: 18,
  size20: 20,
  size21: 21,
  size22: 22,
  size24: 24,
  size25: 25,
  size26: 26,
  size27: 27,
  size28: 28,
  size29: 29,
  size30: 30,
  size32: 32,
  size34: 34,
  size35: 35,
  size36: 36,
  size37: 37,
  size38: 38,
  size39: 39,
  size40: 40,
  size43: 43,
  size45: 45,
  size46: 46,
  size47: 47,
  size48: 48,
  size50: 50,
  size54: 54,
  size55: 55,
  size57: 57,
  size60: 60,
  size62: 62,
  size64: 64,
  size68: 68,
  size70: 70,
  size73: 73,
  size75: 75,
  size80: 80,
  size90: 90,
  size92: 92,
  size93: 93,
  size98: 98,
  size100: 100,
  size110: 110,
  size111: 111,
  size115: 115,
  size120: 120,
  size135: 135,
  size140: 140,
  size144: 144,
  size153: 153,
  size160: 160,
  size170: 170,
  size173: 173,
  size200: 200,
  size235: 235,
  size258: 258,
  size280: 280,
  size290: 290,
  size300: 300,
  size320: 320,
  size340: 340,
  size350: 350,
  size357: 357,
  size377: 377,
  size391: 391,
  size400: 400,
  sizexs800: 800,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  zIndex: {
    z1: 1,
    z2: 2,
    z3: 3,
    z6: 6,
    z8: 8,
    z10: 10,
  },

  cardWidth: (width < height ? width : height) - 38,
};

export default metrics;
