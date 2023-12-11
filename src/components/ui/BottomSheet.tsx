import React, { PropsWithChildren, useEffect, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

type BottomSheetProps = PropsWithChildren<{
  open: boolean;
  onClose: (isOpen: boolean) => void;
  animation?: 'fade' | 'slide' | 'none';
  height: number;
  isDraggable?: boolean;
  isPressable?: boolean;
  paddingHorizontal?: number;
}>;

export default function BottomSheet({
  children,
  open, // boolean: open or close bottom sheet
  onClose, // function: close bottom sheet
  height, // number: height of bottom sheet
  isDraggable = true, // boolean: is draggable to dismiss
  isPressable = false, // boolean: mask is pressable to dismiss
  animation, // string: animation type - fade, slide, none
}: BottomSheetProps) {
  const refRBSheet = useRef();
  useEffect(() => {
    if (open) {
      // @ts-ignore
      refRBSheet.current.open();
    } else {
      // @ts-ignore
      refRBSheet.current.close();
    }
  }, [open]);

  return (
    <RBSheet
      animationType={animation ? animation : 'fade'}
      // @ts-ignore
      ref={refRBSheet}
      closeOnDragDown={isDraggable}
      closeOnPressMask={isPressable}
      height={height}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(69, 65, 65, 0.80)',
        },
        draggableIcon: {
          backgroundColor: '#C4C4C4',
          width: 41,
          height: 4,
        },
        container: {
          backgroundColor: '#F2F2F2',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingHorizontal: 26,
        },
      }}
      onClose={() => onClose(false)}
      onOpen={() => onClose(true)}
    >
      {children}
    </RBSheet>
  );
}
