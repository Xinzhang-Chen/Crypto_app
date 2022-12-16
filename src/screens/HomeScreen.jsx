import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import CoinItem from '../components/Coin/CoinItem';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
  return <FlatList data={cryptocurrencies} renderItem={({ item }) => <CoinItem marketCoin={item} />} />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
