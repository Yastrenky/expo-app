import {AsyncStorage} from 'react-native' 


export default {
    store: async (key,data, callback) =>{
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
            callback(null);
          } catch (error) {
            callback(error)
          }
    },
    get: async (key, callback) =>{
        try {
         const value = await AsyncStorage.getItem(key);
         callback(null,JSON.parse(value))
      } catch (error) {
        callback(error)
      }
    }
}