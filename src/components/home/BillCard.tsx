import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface BillCardProps {
  amount: string;
  dueDate: string;
  onPay?: () => void;
}

const RED = '#E02424';

export const BillCard = ({ amount, dueDate, onPay }: BillCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconWrap}>
          <Feather name="file-text" size={20} color={RED} />
        </View>
        <View style={styles.titleCol}>
          <Text style={styles.title}>Hóa đơn đến hạn</Text>
          <Text style={styles.subtitle}>Hạn cuối: {dueDate}</Text>
        </View>
        <TouchableOpacity style={styles.alertIcon} activeOpacity={0.7}>
          <Feather name="alert-circle" size={20} color="#EF4444" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity style={styles.payBtn} activeOpacity={0.8} onPress={onPay}>
          <Text style={styles.payBtnText}>THANH TOÁN NGAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 22,
    borderRadius: 28,
    padding: 20,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    shadowColor: RED,
    shadowOffset: { width: 0, height: 8 },
    elevation: 13,
    marginBottom: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    position: 'relative',
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCol: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 2,
  },
  alertIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RED,
  },
  payBtn: {
    backgroundColor: RED,
    borderRadius: 13,
    paddingHorizontal: 18,
    paddingVertical: 10,
    shadowColor: RED,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
  },
  payBtnText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
