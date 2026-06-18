import { withDelay, withSpring, withTiming } from 'react-native-reanimated';

export const staggerAnimation = (index: number) => {
  return () => {
    'worklet';
    return {
      initialValues: {
        opacity: 0,
        transform: [{ translateY: 50 }],
      },
      animations: {
        opacity: withDelay(index * 450, withTiming(1, { duration: 150 })),
        transform: [
          {
            translateY: withDelay(
              index * 150,
              withSpring(0, {
                damping: 27,
                stiffness: 120,
              }),
            ),
          },
        ],
      },
    };
  };
};
