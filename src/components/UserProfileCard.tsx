import React from 'react';
import {Image, Text, View} from 'react-native';

export function UserProfileCard() {
  return (
    <View className="ml-1 flex-row items-center">
      <View className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-dark-teal">
        <Image
          source={require('@assets/icons/wallet/user-img.jpg')}
          className="h-full w-full rounded-full"
        />
      </View>
      <Text className="ml-1.5 font-roboto-500 text-lg text-grey-8">
        Ajalla Ugo
      </Text>
    </View>
  );
}
