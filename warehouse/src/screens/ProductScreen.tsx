import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {baseUrl} from '../api/common';
import {Product} from '../api/products';

export const ProductScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {product} = route.params as {
    product: Product;
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: product.name,
    });
  }, [navigation, product.name]);

  return (
    <ScrollView style={{padding: 10, marginVertical: 20}}>
      <Card>
        <Image
          source={{uri: product.image_url}}
          style={{height: 300, resizeMode: 'contain', backgroundColor: 'white'}}
        />
        <Image
          source={{
            uri: `${baseUrl}/api/barcode/${product.code}`,
          }}
          style={{height: 150, resizeMode: 'contain', backgroundColor: 'white'}}
        />
        <View style={{padding: 15}}>
          <Text variant="bodyLarge">Quantity: {product.quantity}</Text>
          <Text variant="bodyMedium">{product.description}</Text>
        </View>
      </Card>
    </ScrollView>
  );
};
