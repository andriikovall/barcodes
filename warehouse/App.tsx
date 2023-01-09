import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { Navigation } from './src/Navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProvider>
        <View style={{flex: 1}}>
          <Navigation />
        </View>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
