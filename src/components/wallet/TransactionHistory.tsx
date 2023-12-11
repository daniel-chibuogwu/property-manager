import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {TransactionCard} from '@/components/wallet/TransactionCard';
import {useTransaction} from '@/store/TransactionsContext';

export type TransactionType = {
  id: number;
  type: 'deposit' | 'withdraw';
  amount: string;
  date: string;
};

export function TransactionHistory() {
  const {state} = useTransaction();

  return (
    <View className="relative flex-1 rounded-t-[26px] bg-grey px-5 pb-28 pt-7">
      <View className="mb-5 flex-row justify-between">
        <Text className="font-roboto-500 text-sm text-grey-8">
          Last Transactions
        </Text>
        <TouchableOpacity onPress={() => console.log('see all')}>
          <Text className="font-roboto-500 text-sm text-dark-teal">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View className="space-y-5">
        {state.transactions.map(transaction => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </View>
    </View>
  );
}
