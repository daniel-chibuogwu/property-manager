import React from 'react';
import {Text, View} from 'react-native';
import {useBalance} from '@/store/WalletContext';
import {formattedAmount} from '@/utils/formattedAmount';

export function WithdrawalBalance() {
  const {state} = useBalance();

  return (
    <View className="flex-row justify-between">
      <Text className="font-roboto-500 text-lg text-[#4F4E52]">
        Your Balance
      </Text>
      <View className="flex-row">
        <Text className="font-roboto-400 text-sm leading-7 text-dark-purple ">
          N
        </Text>
        <View>
          <Text className="font-mono-400 text-[32px] text-dark-purple">
            {formattedAmount(state.totalBalance)}
          </Text>
        </View>
      </View>
    </View>
  );
}
