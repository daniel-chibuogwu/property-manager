import React from 'react';

import {Text, View} from 'react-native';
import {WalletIcon} from '@assets/icons/wallet/WalletIcon';
import {
  WalletBottomBackgroundIcon,
  WalletTopBackgroundIcon,
} from '@assets/icons/wallet/WalletBackgroundIcons';
import {useBalance} from '@/store/WalletContext';
import {formattedAmount} from '@/utils/formattedAmount';

export function WalletCard() {
  const {state} = useBalance();
  return (
    <View className="relative h-40 justify-center overflow-hidden rounded-[20px] bg-dark-teal px-4 pb-[22px] pt-4">
      {/* BALANCE */}
      <View className="z-10 mb-11 flex-row justify-between">
        <View className="flex-row">
          <Text className="font-roboto-400 text-sm leading-7 text-white ">
            N
          </Text>
          <View>
            <Text className="font-mono-400 text-[32px] text-white">
              {formattedAmount(state.totalBalance)}
            </Text>
            <Text className="-mt-0.5 font-roboto-400 text-sm text-white">
              Balance
            </Text>
          </View>
        </View>
        <WalletIcon />
      </View>
      {/*  ACCOUNT DETAILS */}
      <View className="z-10 flex-row justify-between">
        <View>
          <Text className="font-roboto-400 text-xxs text-white">
            Account Number
          </Text>
          <Text className="mt-0.5 font-mono-400 text-sm text-white">
            9102356712
          </Text>
        </View>
        <View>
          <Text className="font-roboto-400 text-xxs text-white">Bank</Text>
          <Text className="mt-0.5 font-roboto-400 text-sm text-white">
            Access Bank
          </Text>
        </View>
      </View>
      <View className="absolute left-0 top-0 z-0">
        <WalletTopBackgroundIcon />
      </View>
      <View className="absolute bottom-0 right-0 z-0">
        <WalletBottomBackgroundIcon />
      </View>
    </View>
  );
}
