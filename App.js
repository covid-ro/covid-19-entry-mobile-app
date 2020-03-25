import React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import {MainNavigator} from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <MainNavigator />
      </View>
    </PersistGate>
  </Provider>
);

export default App;
