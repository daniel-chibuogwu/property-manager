import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BankCard } from '@/components/withdrawal/BankCard';
import { useState } from 'react';
import { AddNewBankModal } from '@/components/withdrawal/AddNewBankModal';
import AddIcon from '@assets/icons/withdrawal/AddIcon';

const Banks = [
  {
    id: 1,
    name: 'Access Bank',
    accountNumber: '9102356712',
  },
  {
    id: 2,
    name: 'Access Bank',
    accountNumber: '9102356712',
  },
];
export function SelectBank() {
  const [showAddBank, setShowAddBank] = useState(false);
  const [selectedBank, setSelectedBank] = useState(1);

  return (
    <View className="mt-5">
      <View className="flex-row justify-between">
        <Text className="font-roboto-500 text-sm text-grey-9">Select Bank</Text>
        <TouchableOpacity onPress={() => setShowAddBank(true)}>
          <View className="flex-row items-center space-x-0.5">
            <AddIcon />
            <Text className="font-roboto-500 text-sm text-grey-9">
              Add New Bank
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-4 space-y-2.5">
        {Banks.map((bank) => (
          <BankCard
            key={bank.id}
            bankInfo={bank}
            isSelected={bank.id === selectedBank}
            onPress={() => setSelectedBank(bank.id)}
          />
        ))}
      </View>
      <AddNewBankModal show={showAddBank} setShow={setShowAddBank} />
    </View>
  );
}
