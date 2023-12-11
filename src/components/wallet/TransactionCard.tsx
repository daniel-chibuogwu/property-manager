import React from 'react';

import {Text, View} from 'react-native';
import {
  TopUpTransactionIcon,
  WithdrawTransactionIcon,
} from '@assets/icons/wallet/TransactionIcons';
import {TransactionType} from '@/components/wallet/TransactionHistory';

type Props = {
  transaction: TransactionType;
};
export function TransactionCard({transaction, ...props}: Props) {
  const {date, type, amount} = transaction;
  return (
    <View {...props} className="flex-row items-center justify-between">
      <View className="flex-row items-center space-x-1">
        {type === 'deposit' ? (
          <TopUpTransactionIcon />
        ) : (
          <WithdrawTransactionIcon />
        )}
        <View>
          <Text className="font-roboto-500 text-[15px] text-grey-5">
            {type === 'deposit' ? 'Account Top Up' : 'Rent Payment'}
          </Text>
          <Text className="font-roboto-400 text-xxs text-[#9B9999]">
            {date}
          </Text>
        </View>
      </View>
      <Text className="font-roboto-500 text-[15px] text-grey-5">{`${
        type === 'withdraw' ? '-' : ''
      }${amount}`}</Text>
    </View>
  );
}
