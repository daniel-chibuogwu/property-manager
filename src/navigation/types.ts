import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  Login: undefined;
  Wallet: undefined;
  Withdraw: undefined;
};

export type RootStackScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;
