import { useCallback, useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Keychain from 'react-native-keychain';

import { KEYCHAIN_SERVICE } from '@/constants/keychain';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { useEncryptedStorage } from '@/hooks/useEncryptedStorage';
import type { RootStackParamList } from '@/types/navigation';
import type { LoginFormValues, RegisterFormValues } from '@/types/auth.types';
import type { User } from '@/types/user';
import { useAppDispatch } from '@/store/hooks';
import { useLoginMutation } from '@/store/api/authApi';
import { setUser } from '@/store/slices/authSlice';

type AuthNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error !== null) {
    if ('data' in error && typeof error.data === 'string') return error.data;
    if ('message' in error && typeof error.message === 'string')
      return error.message;
  }
  return 'Đã xảy ra lỗi, vui lòng thử lại';
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const { saveData } = useEncryptedStorage();
  // login mutation giờ nhận { customerId, password }
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [authError, setAuthError] = useState<string | null>(null);

  const persistSession = useCallback(
    async (user: User) => {
      try {
        await Keychain.resetGenericPassword({ service: KEYCHAIN_SERVICE });
        await Keychain.setGenericPassword(user.id, user.id, {
          service: KEYCHAIN_SERVICE,
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
        });
      } catch (e) {
        console.warn('Keychain error:', e);
      }
      await saveData(STORAGE_KEYS.USER_PROFILE, user);
      dispatch(setUser(user));
    },
    [dispatch, saveData],
  );

  const navigateToMain = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }),
    );
  }, [navigation]);

  // ← nhận LoginFormValues = { customerId, password }
  const handleLogin = useCallback(
    async (values: LoginFormValues) => {
      setAuthError(null);
      try {
        const user = await login(values).unwrap();
        await persistSession(user);
        navigateToMain();
      } catch (error) {
        setAuthError(getErrorMessage(error));
      }
    },
    [login, navigateToMain, persistSession],
  );

  const clearAuthError = useCallback(() => setAuthError(null), []);

  return {
    authError,
    clearAuthError,
    handleLogin,
    isLoginLoading,
  };
};
