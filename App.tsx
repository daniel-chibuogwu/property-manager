/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import RootNavigator from '@/navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {BalanceProvider} from '@/store/WalletContext';
import {TransactionProvider} from '@/store/TransactionsContext';

export default function App() {
  return (
    <BalanceProvider>
      <TransactionProvider>
        <View className="flex-1">
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </View>
      </TransactionProvider>
    </BalanceProvider>
  );
}
