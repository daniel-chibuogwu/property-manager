import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '@/navigation/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LoginDecorativeIcon from '@assets/icons/login/LoginDecorativeIcon';
import FormInput from '@/components/ui/FormInput';
import {UsernameIcon} from '@assets/icons/login/UsernameIcon';
import {PasswordIcon} from '@assets/icons/login/PasswordIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {PrimaryButton} from '@/components/ui/PrimaryButton';
import useKeyboardVisibility from '@/hooks/useKeyboardVisibility';
import BackgroundIcon from '@assets/icons/login/BackgroundIcon';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useFakeApiRequest} from '@/hooks/useFakeApiRequest';

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>) {
  const insets = useSafeAreaInsets();
  const {keyboardIsOpen} = useKeyboardVisibility();
  const {isLoading, request} = useFakeApiRequest(600);

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Username is required'),
      password: yup.string().required('Password is required'),
    }),
    onSubmit: async values => {
      await request();
      navigation.replace('Wallet');
    },
  });

  return (
    <View style={{paddingTop: insets.top}} className="flex-1 bg-light-teal">
      <KeyboardAwareScrollView
        className="px-4 pt-10"
        enableOnAndroid={true}
        extraHeight={10}>
        <LoginDecorativeIcon />
        <View className="mt-4 px-7">
          <Text className="mb-3.5 font-roboto-400 text-xl text-grey-10">
            Login to your Account
          </Text>
          <FormInput
            icon={<UsernameIcon />}
            placeholder="Username"
            value={values.username}
            setValue={handleChange('username')}
            error={errors.username}
            containerStyle="mb-3.5"
          />
          <FormInput
            icon={<PasswordIcon />}
            placeholder="Password"
            value={values.password}
            setValue={handleChange('password')}
            error={errors.password}
            secureTextEntry
            showForgotBtn
            containerStyle="mb-4"
          />
          <PrimaryButton
            text="Sign In"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </View>
      </KeyboardAwareScrollView>
      {!keyboardIsOpen && (
        <>
          <BackgroundIcon className="absolute bottom-0 right-0" />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('navigate to signup')}
            className="relative items-center">
            <View>
              <Text className="mb-10 font-roboto-400 text-base text-grey-10">
                Dont have an account?{' '}
                <Text className="font-roboto-500 text-dark-teal">Sign Up</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
