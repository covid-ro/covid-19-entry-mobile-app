import AsyncStorage from '@react-native-community/async-storage';

const USER_TOKEN = '@COVID:userToken';

export const setUserToken = token => AsyncStorage.setItem(USER_TOKEN, token);

export const getUserToken = async () => {
  return AsyncStorage.getItem(USER_TOKEN);
};

export const resetAsyncStorge = () => AsyncStorage.clear();
