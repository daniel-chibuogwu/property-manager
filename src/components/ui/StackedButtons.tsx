import React from 'react';

import {View} from 'react-native';
import {PrimaryButton} from '@/components/ui/PrimaryButton';

type Props = {
  text: string;
  onPress: () => void;
  onPressCancel: () => void;
  isLoading?: boolean;
};

export function StackedButtons({
  text,
  isLoading,
  onPress,
  onPressCancel,
}: Props) {
  return (
    <View className="space-y-2.5">
      <PrimaryButton text={text} onPress={onPress} isLoading={!!isLoading} />
      <PrimaryButton grayed text="Cancel" onPress={onPressCancel} />
    </View>
  );
}
