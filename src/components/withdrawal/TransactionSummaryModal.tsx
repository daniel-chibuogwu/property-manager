import React from 'react';
import BottomSheet from '@/components/ui/BottomSheet';
import {Text, View} from 'react-native';
import {StackedButtons} from '@/components/ui/StackedButtons';
import {formattedAmount} from '@/utils/formattedAmount';
import {useFakeApiRequest} from '@/hooks/useFakeApiRequest';
import {useBalance} from '@/store/WalletContext';
import {useTransaction} from '@/store/TransactionsContext';
import {formatTimestamp} from '@/utils/formattedDate';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigatorParamList} from '@/navigation/types';

type Props = {
  amount: number;
  show: boolean;
  setShow: (value: boolean) => void;
  navigation: NativeStackNavigationProp<RootNavigatorParamList, 'Withdraw'>;
};
export function TransactionSummaryModal({
  navigation,
  amount,
  show,
  setShow,
}: Props) {
  const withdrawalFee = 25;
  const totalWithdrawalAmount = amount + withdrawalFee;
  const {dispatch: balanceDispatch} = useBalance();
  const {dispatch: transactionDispatch} = useTransaction();
  const {isLoading, request} = useFakeApiRequest(1000);

  const handleWithdrawal = async () => {
    await request();
    balanceDispatch({
      type: 'WITHDRAW',
      payload: totalWithdrawalAmount,
    });
    // Dispatch a transaction action whenever a withdrawal occurs
    transactionDispatch({
      type: 'WITHDRAW',
      payload: {
        id: Date.now(),
        type: 'withdraw',
        date: formatTimestamp(Date.now()),
        amount: formattedAmount(totalWithdrawalAmount),
      },
    });
    setShow(false);
    navigation.goBack();
  };
  return (
    <BottomSheet open={show} onClose={setShow} height={400} isPressable>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-center font-roboto-700 text-xl text-grey-5">
            Transaction Summary
          </Text>
          <Text className="text-center font-roboto-500 text-xs text-grey-10">
            Please review the details of your transaction
          </Text>

          <View className="mt-8  divide-y divide-[#C4C4C4] ">
            <View className="flex-row items-center justify-between py-2">
              <Text className="font-roboto-500 text-sm text-grey-8">
                Transaction Type
              </Text>
              <Text className="font-roboto-700 text-base text-grey-5">
                Wallet Withdrawal
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-2">
              <Text className="font-roboto-500 text-sm text-grey-8">
                Amount
              </Text>
              <Text className="font-roboto-700 text-base text-grey-5">
                {formattedAmount(amount)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-2">
              <Text className="font-roboto-500 text-sm text-grey-8">Fee</Text>
              <Text className="font-roboto-700 text-base text-grey-5">
                {withdrawalFee}
              </Text>
            </View>
            <View>
              <Text className="py-2 text-right font-roboto-700 text-base text-grey-5">
                {formattedAmount(totalWithdrawalAmount)}
              </Text>
            </View>
          </View>
        </View>

        <View className="mb-10 mt-2 space-y-2.5">
          <StackedButtons
            text="Continue"
            onPress={handleWithdrawal}
            onPressCancel={() => setShow(false)}
            isLoading={isLoading}
          />
        </View>
      </View>
    </BottomSheet>
  );
}
