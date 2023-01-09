import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from './screens/Main';
import {ProductsList} from './screens/ProductsList';
import {ProductScreen} from './screens/ProductScreen';
import {ScanBarcode} from './screens/ScanBarcode';

const Stack = createNativeStackNavigator();

export const ROUTES = {
  MAIN: 'Main',
  PRODUCTS_LIST: 'ProductsList',
  PRODUCT: 'Product',
  SCAN_BARCODE: 'ScanBarcode',
};

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.MAIN}
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.PRODUCTS_LIST}
          component={ProductsList}
          options={{
            headerTitle: 'Products',
          }}
        />
        <Stack.Screen name={ROUTES.PRODUCT} component={ProductScreen} />
        <Stack.Screen
          name={ROUTES.SCAN_BARCODE}
          component={ScanBarcode}
          options={{
            headerTitle: 'Scan barcode',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
