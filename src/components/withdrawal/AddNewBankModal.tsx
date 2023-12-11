import React from 'react';

import {Text, View} from 'react-native';
import {StackedButtons} from '@/components/ui/StackedButtons';
import FormInput from '@/components/ui/FormInput';
import {useFormik} from 'formik';
import * as yup from 'yup';
import BottomSheet from '@/components/ui/BottomSheet';

type Props = {
  show: boolean;
  setShow: (value: boolean) => void;
};
export function AddNewBankModal({show, setShow}: Props) {
  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      accountNumber: '',
      bankName: '',
    },
    validationSchema: yup.object().shape({
      accountNumber: yup.string().required('Account Number is required'),
      bankName: yup.string().required('Bank Name is required'),
    }),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <BottomSheet open={show} onClose={setShow} height={400} isPressable>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-center font-roboto-500 text-xl text-grey-5">
            Add New Bank
          </Text>
          <FormInput
            label="Account Number"
            placeholder="98736456387"
            value={values.accountNumber}
            error={errors.accountNumber}
            containerStyle="mt-5"
            setValue={handleChange('accountNumber')}
          />
          <FormInput
            label="Bank Name"
            placeholder="Bank of America"
            containerStyle="mt-5"
            value={values.bankName}
            error={errors.bankName}
            setValue={handleChange('bankName')}
          />
        </View>

        <View className="mb-10 mt-2 space-y-2.5">
          <StackedButtons
            text="Add Bank"
            onPress={handleSubmit}
            onPressCancel={() => setShow(false)}
          />
        </View>
      </View>
    </BottomSheet>
  );
}
