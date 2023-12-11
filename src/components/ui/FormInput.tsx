import React, {ReactNode} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import clsx from 'clsx';

type FormInputProps = {
  label?: string;
  value: string;
  setValue: (text: string) => void;
  error?: string;
  placeholder: string;
  icon?: ReactNode;
  containerStyle?: string;
  secureTextEntry?: boolean;
  showForgotBtn?: boolean;
};

export default function FormInput({
  label,
  value,
  setValue,
  placeholder,
  icon,
  containerStyle,
  showForgotBtn,
  secureTextEntry = false,
  error,
  ...props
}: FormInputProps) {
  return (
    <View className={clsx('w-full', containerStyle)}>
      {label && (
        <Text className="mb-1.5 font-roboto-500 text-sm text-grey-8">
          {label}
        </Text>
      )}
      <View
        className={clsx(
          'relative h-11 w-full flex-row items-center space-x-[3px] rounded-7 bg-white px-2',
          !!error && 'border border-red-500',
          !!label && 'border border-[#767E80]',
        )}>
        {icon}
        <TextInput
          className="flex-1 font-roboto-400 text-xs text-grey-9"
          placeholder={placeholder}
          placeholderTextColor={label ? '#CCCCCC' : '#787373'}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
          {...props}
        />
        {showForgotBtn && (
          <TouchableOpacity onPress={() => {}}>
            <Text className="font-roboto-500 text-xs text-dark-teal">
              Forgot
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/*  Handling Errors */}
      {!!error && (
        <Text className="mt-1 font-roboto-400 text-xs text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
}
