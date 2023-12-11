import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from '@/components/withdrawal/RadioButton';
import clsx from 'clsx';

type Props = {
  isSelected: boolean;
  bankInfo: {
    id: number;
    name: string;
    accountNumber: string;
  };
  onPress: () => void;
};

export function BankCard({bankInfo, isSelected, onPress, ...props}: Props) {
  return (
    <TouchableOpacity {...props} activeOpacity={0.8} onPress={onPress}>
      <View
        className={clsx(
          isSelected ? 'bg-light-teal' : 'bg-grey',
          'flex-row items-center justify-between rounded-7 px-3.5 pb-5 pt-6',
        )}>
        <View className="flex-row items-center space-x-3">
          <RadioButton selected={isSelected} />
          <View>
            <Text className="font-roboto-500 text-lg text-grey-8">
              Ajalla Ugo
            </Text>
            <Text className="font-mono-400 text-xs text-[#656262]">
              {bankInfo.accountNumber}
            </Text>
          </View>
        </View>
        <View>
          <Text className="font-roboto-500 text-xs text-grey-8">Bank</Text>
          <Text className="font-roboto-400 text-xs text-[#767E80]">
            {bankInfo.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
