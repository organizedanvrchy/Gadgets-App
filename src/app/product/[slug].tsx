import { Redirect, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { PRODUCTS } from '../../../assets/products';

const ProductDetails = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const toast = useToast;
  
  const product = PRODUCTS.find(product => product.slug === slug);
  if (!product) return <Redirect href='/404' />;


  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});