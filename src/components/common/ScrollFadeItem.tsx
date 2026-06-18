import React from 'react';
import Animated from 'react-native-reanimated';
import { staggerAnimation } from '@/utils/staggerAnimation';

interface ScrollFadeItemProps {
  index: number;
  children: React.ReactNode;
}

export const ScrollFadeItem = ({ index, children }: ScrollFadeItemProps) => {
  return (
    <Animated.View entering={staggerAnimation(index)}>
      {children}
    </Animated.View>
  );
};
