import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default function useKeyboardVisibility() {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(Keyboard.isVisible);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {keyboardIsOpen};
}
