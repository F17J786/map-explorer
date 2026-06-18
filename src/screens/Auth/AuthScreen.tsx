import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoginForm } from '@/components/auth/LoginForm';

// ─── Theme ────────────────────────────────────────────────────────────────────
const COLORS = {
  primary: '#1A6BF5',
  white: '#FFFFFF',
  labelText: '#8A96A8',
  linkText: '#1A6BF5',
};

// ─── Component ────────────────────────────────────────────────────────────────
export const AuthScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAwareScrollView
      style={[styles.screen, { paddingTop: insets.top }]}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={-100}
      enableAutomaticScroll={false}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 58 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoArea}>
          <Image
            source={require('@/assets/7fdf14b9-d2e6-4a6b-8e98-72f05633243e.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>
            Kết nối niềm tin - Nâng tầm giá trị
          </Text>
        </View>
        <View style={{ gap: 225 }}>
          <LoginForm />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Chưa có tài khoản? </Text>
            <TouchableOpacity
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.footerLink}>Liên hệ hỗ trợ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingTop: 20,
  },

  // Logo
  logoArea: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoImage: {
    width: 450,
    height: 155,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.labelText,
    fontWeight: 'bold',
  },

  // Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.labelText,
  },
  footerLink: {
    fontSize: 13,
    color: COLORS.linkText,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
