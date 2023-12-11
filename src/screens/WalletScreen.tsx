import React from 'react';
import {ScrollView, View} from 'react-native';
import {RootStackScreenProps} from '@/navigation/types';
import {WalletCard} from '@/components/wallet/WalletCard';
import {WalletActionBtns} from '@/components/wallet/WalletActionBtns';
import {TransactionHistory} from '@/components/wallet/TransactionHistory';
import {usePageHeader} from '@/hooks/usePageHeader';

type Props = {};
export default function WalletScreen({
  navigation,
}: RootStackScreenProps<'Wallet'>) {
  // Setting user details in header and notifications button
  usePageHeader();
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="mt-3 pt-1.5">
        <View className="px-5">
          <WalletCard />
          <View className="my-5 flex-row justify-between">
            <WalletActionBtns type="top up wallet" navigation={navigation} />
            <WalletActionBtns type="withdraw funds" navigation={navigation} />
          </View>
        </View>
        <TransactionHistory />
      </ScrollView>
    </View>
  );
}
