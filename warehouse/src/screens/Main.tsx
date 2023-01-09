import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {ROUTES} from '../Navigation';

export const Main: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', paddingHorizontal: 10}}>
      <Button
        icon="archive-outline"
        mode="contained"
        contentStyle={{padding: 30}}
        style={{marginBottom: 40}}
        onPress={() => navigation.navigate(ROUTES.PRODUCTS_LIST)}>
        Find product
      </Button>
      <Button
        icon="barcode-scan"
        mode="contained"
        contentStyle={{padding: 30}}
        style={{marginBottom: 20}}
        onPress={() => navigation.navigate(ROUTES.SCAN_BARCODE)}>
        Scan barcode
      </Button>
    </View>
  );
};
