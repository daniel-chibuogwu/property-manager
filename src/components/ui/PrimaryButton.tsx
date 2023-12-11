import React from 'react';

import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import clsx from 'clsx';

type Props = {
  text: string;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  grayed?: boolean;
};

export function PrimaryButton({
  text,
  onPress,
  isLoading,
  isDisabled,
  grayed,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={isDisabled || isLoading}>
      <View
        className={clsx(
          'h-11 flex-row items-center justify-center rounded-7 px-3',
          grayed ? 'bg-grey-4' : 'bg-dark-teal',
        )}>
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text className="font-roboto-500 text-sm text-white">{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
