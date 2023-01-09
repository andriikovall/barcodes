import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, Image, View} from 'react-native';
import {
  Searchbar,
  ActivityIndicator,
  Card,
  Text,
  List,
} from 'react-native-paper';
import {getProducts, Product} from '../api/products';
import {ROUTES} from '../Navigation';

export const ProductsList: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const displayProducts = searchValue ? filteredProducts : products;

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <Searchbar
        style={{marginTop: 20, marginBottom: 10}}
        placeholder="Search"
        onChangeText={v => setSearchValue(v)}
        value={searchValue}
      />
      <FlatList
        data={displayProducts}
        keyExtractor={item => item.code}
        renderItem={({item}) => (
          <Card
            style={{paddingHorizontal: 10, marginBottom: 10}}
            onPress={() =>
              navigation.navigate(ROUTES.PRODUCT, {
                product: item,
              })
            }>
            <List.Item
              title={item.name}
              description={item.description}
              descriptionNumberOfLines={3}
              left={() => (
                <List.Image
                  style={{borderRadius: 4}}
                  source={{
                    uri: item.image_url,
                  }}
                />
              )}
            />
          </Card>
        )}
      />
    </View>
  );
};
