import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BLUE, RED } from '@/components/home/HomeHeader';

type Invoice = {
  id: number;
  name: string;
  dueDate: string;
  amount: string;
};

const INVOICES: Invoice[] = [
  { id: 1, name: 'Fiber Home Pro', dueDate: '15/03/2024', amount: '350.000đ' },
  { id: 2, name: 'IPTV Premium', dueDate: '20/03/2024', amount: '120.000đ' },
];

type InvoiceCardProps = {
  invoice: Invoice;
  isPaid: boolean;
  onPay: () => void;
};

const InvoiceCard = ({ invoice, onPay }: InvoiceCardProps) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.iconBox}>
        <Icon name="file-text" size={20} color="#E02424" />
      </View>
      <View style={styles.titleCol}>
        <Text style={styles.cardName}>{invoice.name}</Text>
        <Text style={styles.cardDue}>Hạn cuối: {invoice.dueDate}</Text>
      </View>
      <TouchableOpacity style={styles.alertIcon} activeOpacity={0.7}>
        <Icon name="alert-circle" size={20} color="#EF4444" />
      </TouchableOpacity>
    </View>

    {/* Footer row */}
    <View style={styles.cardFooter}>
      <Text style={styles.cardAmount}>{invoice.amount}</Text>
      <TouchableOpacity
        style={styles.payBtn}
        onPress={onPay}
        activeOpacity={0.8}
      >
        <Text style={styles.payBtnText}>THANH TOÁN</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export const InvoiceScreen = () => {
  const [paidIds, setPaidIds] = useState<number[]>([]);

  const handlePay = (id: number) => {
    setPaidIds(prev => [...prev, id]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1A56DB" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>HÓA ĐƠN</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerBtn} activeOpacity={0.75}>
            <Icon name="search" size={22} color="#fff" />
            <Text style={styles.headerBtnText}>Tra cứu giao dịch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn} activeOpacity={0.75}>
            <Icon name="wifi" size={22} color="#fff" />
            <Text style={styles.headerBtnText}>Danh sách thiết bị</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Đến hạn thanh toán</Text>

        {INVOICES.map(invoice => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
            isPaid={paidIds.includes(invoice.id)}
            onPay={() => handlePay(invoice.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  header: {
    backgroundColor: BLUE,
    paddingBottom: 30,
    paddingHorizontal: 22,
    paddingTop: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 26,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  headerBtn: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    gap: 6,
  },
  headerBtnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  body: {
    flex: 1,
  },
  bodyContent: {
    padding: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
    marginBottom: 12,
  },

  // Card
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 6,
    borderRadius: 28,
    padding: 20,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    position: 'relative',
  },
  iconBox: {
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
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  cardDue: {
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
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E02424',
  },
  payBtn: {
    backgroundColor: '#E02424',
    borderRadius: 13,
    paddingHorizontal: 18,
    paddingVertical: 10,
    shadowColor: '#E02424',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 7,
  },
  payBtnText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  // Tab Bar
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 12,
  },
  navItem: {
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
    minWidth: 52,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  navItemActive: {
    backgroundColor: '#EEF4FF',
    borderColor: '#1565C0',
  },
  navLabel: {
    fontSize: 11,
    color: '#999',
  },
  navLabelActive: {
    color: '#1565C0',
    fontWeight: '700',
  },
  fab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#1565C0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
});
