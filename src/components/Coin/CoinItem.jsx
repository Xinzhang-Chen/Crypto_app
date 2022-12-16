import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import tw from 'twrnc';
import React from 'react';

const CoinItem = ({ marketCoin }) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  const { name, image, current_price, market_cap_rank, price_change_percentage_24h, symbol, market_cap } = marketCoin;
  const handlePercentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
  const handlePercentageIcon = price_change_percentage_24h < 0 ? 'arrow-bold-down' : 'arrow-bold-up';

  return (
    <View style={[tw`flex-row items-center justify-between border-b-2 p-3`, { borderColor: '#282828' }]}>
      <Image
        source={{
          uri: image,
          height: 30,
          width: 30,
        }}
        style={tw`mr-2 `}
      />
      <View>
        <Text style={tw`text-white text-base font-bold`}>{name}</Text>

        <View style={tw`flex-row`}>
          <View style={[{ backgroundColor: '#585858' }, tw`rounded mr-1 px-1 text-center`]}>
            <Text style={[tw`text-white text-sm font-bold`]}>{market_cap_rank}</Text>
          </View>

          <Text style={tw`text-white text-sm font-bold mr-1`}>{symbol.toUpperCase()}</Text>

          <Entypo
            style={[{ alignSelf: 'center' }, tw`mr-1`]}
            name={handlePercentageIcon}
            size={12}
            color={handlePercentageColor}
          />
          <Text style={[tw`text-white text-sm font-bold mr-1`, { color: `${handlePercentageColor}` }]}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>

      <View style={tw`ml-auto items-end`}>
        <Text style={tw`text-white text-base font-bold`}>{current_price}</Text>
        <Text style={tw`text-white text-sm font-bold`}>MCap {formatter.format(market_cap)}</Text>
      </View>
    </View>
  );
};

export default CoinItem;
