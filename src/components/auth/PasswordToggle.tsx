import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { AUTH_COLORS } from '@/constants/authTheme';

interface PasswordToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}

export const PasswordToggle = ({ isVisible, onToggle }: PasswordToggleProps) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="button"
      accessibilityLabel={isVisible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}>
      <Text style={styles.icon}>{isVisible ? '🙈' : '👁'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    color: AUTH_COLORS.textMuted,
  },
});
