import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Portal } from 'react-native-paper';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from 'react-native-vector-icons/Feather';

import { AuthErrorBanner } from '@/components/auth/AuthErrorBanner';
import { AUTH_COLORS } from '@/constants/authTheme';
import { useAuth } from '@/hooks/useAuth';
import { loginSchema } from '@/schemas/auth.schema';
import type { LoginFormValues } from '@/types/auth.types';
import { AuthInput } from './AuthInput';

const COLORS = {
  primary: '#1A6BF5',
  inputBg: '#F7F9FC',
  labelText: '#8A96A8',
  placeholder: '#B0BAC9',
  linkText: '#1A6BF5',
  white: '#FFFFFF',
};

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { authError, clearAuthError, handleLogin, isLoginLoading } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      customerId: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    clearAuthError();
    handleLogin(values);
  };

  return (
    <View>
      <AuthErrorBanner message={authError} />
      <Portal>
        {showTooltip && (
          <TouchableOpacity
            style={styles.tooltipOverlay}
            activeOpacity={1}
            onPress={() => setShowTooltip(false)}
          />
        )}
      </Portal>
      <Controller
        control={control}
        name="customerId"
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            labelSlot={
              <View style={{ position: 'relative' }}>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>MÃ KHÁCH HÀNG</Text>
                  <TouchableOpacity
                    onPress={() => setShowTooltip(v => !v)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Icon
                      name="help-circle"
                      size={15}
                      style={{ marginBottom: 6 }}
                      color={COLORS.placeholder}
                    />
                  </TouchableOpacity>
                </View>

                {showTooltip && (
                  <View style={styles.tooltip}>
                    <Text style={styles.tooltipText}>
                      Mã khách hàng là mã định danh duy nhất được cấp khi đăng
                      ký.
                    </Text>
                    <View style={styles.tooltipArrow} />
                  </View>
                )}
              </View>
            }
            placeholder="Ví dụ: VNTT001"
            autoCapitalize="none"
            returnKeyType="next"
            keyboardType="visible-password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.customerId?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            label="MẬT KHẨU"
            placeholder="••••••••"
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            returnKeyType="done"
            onSubmitEditing={handleSubmit(onSubmit)}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.password?.message}
            rightSlot={
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(v => !v)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Icon
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={18}
                  color={COLORS.placeholder}
                />
              </TouchableOpacity>
            }
          />
        )}
      />
      {/* Forgot password */}
      <View style={styles.forgotRow}>
        <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.forgotText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      {/* Submit */}
      <TouchableOpacity
        style={[styles.loginButton, isLoginLoading && { opacity: 0.7 }]}
        onPress={handleSubmit(onSubmit)}
        activeOpacity={0.85}
        disabled={isLoginLoading}
      >
        <Text style={styles.loginButtonText}>
          {isLoginLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    marginLeft: 7,
    fontSize: 11,
    fontWeight: '700',
    color: '#8A96A8',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    borderRadius: 18,
    height: 52,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },
  errorText: {
    marginLeft: 7,
    marginTop: 4,
    fontSize: 12,
    color: '#E53E3E',
  },
  forgotRow: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 28,
  },
  forgotText: {
    fontSize: 13,
    color: '#1A6BF5',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#1A6BF5',
    borderRadius: 30,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#1A6BF5',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      },
      android: { elevation: 9 },
    }),
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  tooltipOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 98,
  },
  tooltip: {
    position: 'absolute',
    bottom: 32,
    left: 105.5,
    backgroundColor: '#1A6BF5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    zIndex: 99,
    width: 200,
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -6,
    left: 12,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#1A6BF5',
  },
  tooltipText: {
    fontSize: 12,
    color: '#FFFFFF',
    lineHeight: 18,
    flexWrap: 'wrap',
  },
});
