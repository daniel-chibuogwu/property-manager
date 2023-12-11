import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@/screens/LoginScreen';
import WalletScreen from '@/screens/WalletScreen';
import {RootNavigatorParamList} from '@/navigation/types';
import {WithdrawalScreen} from '@/screens/WithdrawalScreen';

const RootStack = createNativeStackNavigator<RootNavigatorParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          title: '',
        }}>
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Wallet" component={WalletScreen} />
        <RootStack.Screen name="Withdraw" component={WithdrawalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
