import React from 'react';
import {useLayoutEffect} from 'react';
import {UserProfileCard} from '@/components/UserProfileCard';
import {NotificationButton} from '@/components/NotificationButton';
import {useNavigation} from '@react-navigation/native';

export const usePageHeader = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <UserProfileCard />,
      headerRight: () => <NotificationButton />,
    });
  });
};
