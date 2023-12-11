import React from 'react';
import {View} from 'react-native';
import {NotificationIcon} from '@assets/icons/wallet/NotificationIcon';

export function NotificationButton() {
  return (
    <View className="mr-1 h-11 w-11 items-center justify-center rounded-7 bg-light-teal">
      <NotificationIcon />
    </View>
  );
}
