import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { HomeUser } from '@/types/home';

interface HomeHeaderProps {
  user: HomeUser;
  onBellPress?: () => void;
}

const BLUE = '#1A56DB';
const RED = '#E02424';

export const HomeHeader = ({ user, onBellPress }: HomeHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.avatar}>
          <Image source={{ uri: user.avatarUrl }} style={styles.avatarImage} />
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>{user.name}</Text>
          <View style={styles.headerMeta}>
            <Text style={styles.headerIdText}>ID: {user.id}</Text>
            <View style={styles.goldBadge}>
              <Text style={styles.goldBadgeText}>{user.badge}</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.bellBtn}
        activeOpacity={0.7}
        onPress={onBellPress}
      >
        <Feather name="bell" size={20} color="#fff" />
        <View style={styles.bellDot} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 165,
    zIndex: 0,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 14,
  },
  headerInfo: {
    gap: 4,
  },
  headerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIdText: {
    color: '#CBD5E1',
    fontSize: 10,
  },
  goldBadge: {
    backgroundColor: '#ffc71f',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  goldBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bellBtn: {
    width: 38,
    height: 38,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellDot: {
    position: 'absolute',
    top: 7,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: RED,
    borderWidth: 1,
    borderColor: BLUE,
  },
});
