import React from 'react';
import {Dispatch, SetStateAction, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {TransactionSummaryModal} from '@/components/withdrawal/TransactionSummaryModal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigatorParamList} from '@/navigation/types';

type Props = {
  showSummary: boolean;
  setShowSummary: Dispatch<SetStateAction<boolean>>;
  navigation: NativeStackNavigationProp<RootNavigatorParamList, 'Withdraw'>;
};

export function WithdrawalAmount({
  navigation,
  showSummary,
  setShowSummary,
}: Props) {
  const [amount, setAmount] = useState<string>();

  return (
    <View className="mt-7">
      <Text className="font-roboto-700 text-[28px] text-dark-teal">
        Withdraw
      </Text>
      <Text className="-mt-0.5 font-roboto-500 text-lg text-grey-9">
        Amount
      </Text>

      <View className="mt-1 h-11 w-full flex-row items-center justify-center rounded-7 border border-dark-teal bg-light-teal">
        <TextInput
          keyboardType="numeric"
          value={amount}
          className="h-full flex-1 font-mono-400 text-lg leading-5 text-dark-purple"
          onChangeText={text => {
            setAmount(text);
          }}
          placeholder="0.00"
          placeholderTextColor="rgba(63, 61, 86, 0.6)"
          textAlign="center"
        />
      </View>
      <TransactionSummaryModal
        navigation={navigation}
        amount={parseFloat(amount || '0')}
        show={showSummary}
        setShow={setShowSummary}
      />
    </View>
  );
}
