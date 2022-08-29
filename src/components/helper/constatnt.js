import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = val => widthPercentageToDP(val);
export const hp = val => heightPercentageToDP(val);

// export const statusBarHeight = getStatusBarHeight();

export const fontSize = val => RFValue(val, 812);

export const isIos = Platform.OS === 'ios';
