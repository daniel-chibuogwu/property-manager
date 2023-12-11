import React from 'react';
import {ScrollView, View} from 'react-native';
import {RootStackScreenProps} from '@/navigation/types';
import {usePageHeader} from '@/hooks/usePageHeader';
import {WithdrawalBalance} from '@/components/withdrawal/WithdrawalBalance';
import {WithdrawalAmount} from '@/components/withdrawal/WithdrawalAmount';
import {SelectBank} from '@/components/withdrawal/SelectBank';
import {useState} from 'react';
import {StackedButtons} from '@/components/ui/StackedButtons';

export function WithdrawalScreen({
  navigation,
}: RootStackScreenProps<'Withdraw'>) {
  const [showSummary, setShowSummary] = useState(false);

  // Setting user details in header and notifications button
  usePageHeader();
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="mt-3.5 px-5 pt-4">
        <WithdrawalBalance />
        <WithdrawalAmount
          navigation={navigation}
          showSummary={showSummary}
          setShowSummary={setShowSummary}
        />
        <SelectBank />
      </ScrollView>
      <View className="mb-8 mt-2 px-5">
        <StackedButtons
          text="Withdraw"
          onPress={() => setShowSummary(true)}
          onPressCancel={navigation.goBack}
        />
      </View>
    </View>
  );
}
