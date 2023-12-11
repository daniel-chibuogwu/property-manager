import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TopUpWalletIcon} from '@assets/icons/wallet/TopUpWalletIcon';
import {WithdrawIcon} from '@assets/icons/wallet/WithdrawIcon';
import {RootNavigatorParamList} from '@/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ActionTypes = 'top up wallet' | 'withdraw funds';

type Action = {
  icon: ReactNode;
  onPress: () => void;
};

type Props = {
  type: ActionTypes;
  navigation: NativeStackNavigationProp<RootNavigatorParamList, 'Wallet'>;
};

export function WalletActionBtns({type, navigation}: Props) {
  const actions: Record<ActionTypes, Action> = {
    'top up wallet': {
      icon: <TopUpWalletIcon />,
      onPress: () => console.log('top up wallet'),
    },
    'withdraw funds': {
      icon: <WithdrawIcon />,
      onPress: () => navigation?.navigate('Withdraw'),
    },
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={actions[type].onPress}>
      <View className="min-w-[135px] flex-row items-center space-x-1 rounded-7 bg-light-teal px-3 py-3.5">
        {actions[type].icon}
        <Text className="font-roboto-500 text-sm capitalize text-grey-8">
          {type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
