import { AsyncStorage } from 'react-native';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw new Error(e);
  }
};

const getStorageData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (error) {
    throw new Error(error);
  }
};

export const setAccessToken = async (s) => {
  await storeData(ACCESS_TOKEN, s);
};

export const getAccessToken = async () => {
  const token = await getStorageData(ACCESS_TOKEN);
  return token;
};

export const clearTokens = async () => {
  await storeData(ACCESS_TOKEN, '');
};
