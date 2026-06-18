import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export const useHomeScroll = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      'worklet';
      scrollY.value = event.contentOffset.y;
    },
  });

  return { scrollY, scrollHandler };
};
