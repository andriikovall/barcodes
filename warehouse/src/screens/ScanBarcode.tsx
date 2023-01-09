import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {getProductByCode} from '../api/products';
import {ROUTES} from '../Navigation';

export const ScanBarcode: React.FC = () => {
  const navigation = useNavigation();

  const onCodeScanned = async (code: string) => {
    console.log('code:', code);
    const product = await getProductByCode(code.toLowerCase());
    navigation.navigate(ROUTES.PRODUCT, {
      product,
    });
  };
  return (
    <RNCamera onBarCodeRead={e => onCodeScanned(e.data)} style={{flex: 1}} />
  );
};
