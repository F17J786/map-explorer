import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { Fonts } from '@/constants/fonts';

type TabType = 'unpaid' | 'paid';

interface Invoice {
  id: string;
  title: string;
  invoiceCode: string;
  invoiceDate: string;
  debtAmount: string;
  paidAmount: string;
  remainingAmount: string;
  status: 'debt' | 'paid';
}

const INVOICES: Invoice[] = [
  {
    id: '1',
    title: 'Cước Internet Tháng 01/2024',
    invoiceCode: 'INV-2024-001',
    invoiceDate: '01/01/2024',
    debtAmount: '350.000đ',
    paidAmount: '0đ',
    remainingAmount: '350.000đ',
    status: 'debt',
  },
  {
    id: '2',
    title: 'Cước IPTV Tháng 01/2024',
    invoiceCode: 'INV-2024-002',
    invoiceDate: '01/01/2024',
    debtAmount: '120.000đ',
    paidAmount: '0đ',
    remainingAmount: '120.000đ',
    status: 'debt',
  },
  {
    id: '3',
    title: 'Cước Camera Tháng 01/2024',
    invoiceCode: 'INV-2024-003',
    invoiceDate: '05/01/2024',
    debtAmount: '150.000đ',
    paidAmount: '0đ',
    remainingAmount: '150.000đ',
    status: 'debt',
  },
  {
    id: '4',
    title: 'Cước Internet Tháng 02/2024',
    invoiceCode: 'INV-2024-004',
    invoiceDate: '01/02/2024',
    debtAmount: '380.000đ',
    paidAmount: '0đ',
    remainingAmount: '380.000đ',
    status: 'debt',
  },
  {
    id: '5',
    title: 'Cước IPTV Tháng 02/2024',
    invoiceCode: 'INV-2024-005',
    invoiceDate: '01/02/2024',
    debtAmount: '130.000đ',
    paidAmount: '0đ',
    remainingAmount: '130.000đ',
    status: 'debt',
  },
  {
    id: '6',
    title: 'Cước Truyền Hình Tháng 02/2024',
    invoiceCode: 'INV-2024-006',
    invoiceDate: '03/02/2024',
    debtAmount: '180.000đ',
    paidAmount: '0đ',
    remainingAmount: '180.000đ',
    status: 'debt',
  },
  {
    id: '7',
    title: 'Cước Internet Tháng 03/2024',
    invoiceCode: 'INV-2024-007',
    invoiceDate: '01/03/2024',
    debtAmount: '420.000đ',
    paidAmount: '0đ',
    remainingAmount: '420.000đ',
    status: 'debt',
  },
  {
    id: '8',
    title: 'Cước Camera Tháng 03/2024',
    invoiceCode: 'INV-2024-008',
    invoiceDate: '05/03/2024',
    debtAmount: '160.000đ',
    paidAmount: '0đ',
    remainingAmount: '160.000đ',
    status: 'debt',
  },
  {
    id: '9',
    title: 'Cước Internet Tháng 04/2024',
    invoiceCode: 'INV-2024-009',
    invoiceDate: '01/04/2024',
    debtAmount: '390.000đ',
    paidAmount: '0đ',
    remainingAmount: '390.000đ',
    status: 'debt',
  },
  {
    id: '10',
    title: 'Cước IPTV Tháng 04/2024',
    invoiceCode: 'INV-2024-010',
    invoiceDate: '01/04/2024',
    debtAmount: '125.000đ',
    paidAmount: '0đ',
    remainingAmount: '125.000đ',
    status: 'debt',
  },
  {
    id: '11',
    title: 'Cước Internet Tháng 05/2024',
    invoiceCode: 'INV-2024-011',
    invoiceDate: '01/05/2024',
    debtAmount: '450.000đ',
    paidAmount: '0đ',
    remainingAmount: '450.000đ',
    status: 'debt',
  },
  {
    id: '12',
    title: 'Cước Truyền Hình Tháng 05/2024',
    invoiceCode: 'INV-2024-012',
    invoiceDate: '03/05/2024',
    debtAmount: '190.000đ',
    paidAmount: '0đ',
    remainingAmount: '190.000đ',
    status: 'debt',
  },
  {
    id: '13',
    title: 'Cước Internet Tháng 06/2024',
    invoiceCode: 'INV-2024-013',
    invoiceDate: '01/06/2024',
    debtAmount: '410.000đ',
    paidAmount: '0đ',
    remainingAmount: '410.000đ',
    status: 'debt',
  },
  {
    id: '14',
    title: 'Cước IPTV Tháng 06/2024',
    invoiceCode: 'INV-2024-014',
    invoiceDate: '01/06/2024',
    debtAmount: '135.000đ',
    paidAmount: '0đ',
    remainingAmount: '135.000đ',
    status: 'debt',
  },
  {
    id: '15',
    title: 'Cước Camera Tháng 06/2024',
    invoiceCode: 'INV-2024-015',
    invoiceDate: '05/06/2024',
    debtAmount: '170.000đ',
    paidAmount: '0đ',
    remainingAmount: '170.000đ',
    status: 'debt',
  },

  {
    id: '16',
    title: 'Cước Internet Tháng 07/2023',
    invoiceCode: 'INV-2023-016',
    invoiceDate: '01/07/2023',
    debtAmount: '350.000đ',
    paidAmount: '350.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '17',
    title: 'Cước IPTV Tháng 07/2023',
    invoiceCode: 'INV-2023-017',
    invoiceDate: '01/07/2023',
    debtAmount: '120.000đ',
    paidAmount: '120.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '18',
    title: 'Cước Camera Tháng 07/2023',
    invoiceCode: 'INV-2023-018',
    invoiceDate: '05/07/2023',
    debtAmount: '150.000đ',
    paidAmount: '150.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '19',
    title: 'Cước Internet Tháng 08/2023',
    invoiceCode: 'INV-2023-019',
    invoiceDate: '01/08/2023',
    debtAmount: '380.000đ',
    paidAmount: '380.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '20',
    title: 'Cước IPTV Tháng 08/2023',
    invoiceCode: 'INV-2023-020',
    invoiceDate: '01/08/2023',
    debtAmount: '130.000đ',
    paidAmount: '130.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '21',
    title: 'Cước Truyền Hình Tháng 08/2023',
    invoiceCode: 'INV-2023-021',
    invoiceDate: '03/08/2023',
    debtAmount: '180.000đ',
    paidAmount: '180.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '22',
    title: 'Cước Internet Tháng 09/2023',
    invoiceCode: 'INV-2023-022',
    invoiceDate: '01/09/2023',
    debtAmount: '420.000đ',
    paidAmount: '420.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '23',
    title: 'Cước Camera Tháng 09/2023',
    invoiceCode: 'INV-2023-023',
    invoiceDate: '05/09/2023',
    debtAmount: '160.000đ',
    paidAmount: '160.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '24',
    title: 'Cước Internet Tháng 10/2023',
    invoiceCode: 'INV-2023-024',
    invoiceDate: '01/10/2023',
    debtAmount: '390.000đ',
    paidAmount: '390.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '25',
    title: 'Cước IPTV Tháng 10/2023',
    invoiceCode: 'INV-2023-025',
    invoiceDate: '01/10/2023',
    debtAmount: '125.000đ',
    paidAmount: '125.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '26',
    title: 'Cước Internet Tháng 11/2023',
    invoiceCode: 'INV-2023-026',
    invoiceDate: '01/11/2023',
    debtAmount: '450.000đ',
    paidAmount: '450.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '27',
    title: 'Cước Truyền Hình Tháng 11/2023',
    invoiceCode: 'INV-2023-027',
    invoiceDate: '03/11/2023',
    debtAmount: '190.000đ',
    paidAmount: '190.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '28',
    title: 'Cước Internet Tháng 12/2023',
    invoiceCode: 'INV-2023-028',
    invoiceDate: '01/12/2023',
    debtAmount: '410.000đ',
    paidAmount: '410.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '29',
    title: 'Cước IPTV Tháng 12/2023',
    invoiceCode: 'INV-2023-029',
    invoiceDate: '01/12/2023',
    debtAmount: '135.000đ',
    paidAmount: '135.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
  {
    id: '30',
    title: 'Cước Camera Tháng 12/2023',
    invoiceCode: 'INV-2023-030',
    invoiceDate: '05/12/2023',
    debtAmount: '170.000đ',
    paidAmount: '170.000đ',
    remainingAmount: '0đ',
    status: 'paid',
  },
];

export const SearchInvoicesScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('unpaid');
  const invoices = INVOICES.filter(i =>
    activeTab === 'unpaid' ? i.status === 'debt' : i.status === 'paid',
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'unpaid' && styles.tabActive]}
          activeOpacity={0.85}
          onPress={() => setActiveTab('unpaid')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'unpaid' && styles.tabTextActive,
            ]}
          >
            Chưa thanh toán
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'paid' && styles.tabActive]}
          activeOpacity={0.85}
          onPress={() => setActiveTab('paid')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'paid' && styles.tabTextActive,
            ]}
          >
            Đã thanh toán
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={invoices}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <InvoiceCard invoice={item} />}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Icon name="inbox" size={48} color="#C5CAD5" />
            <Text style={styles.emptyText}>Không có hóa đơn</Text>
          </View>
        }
      />
    </View>
  );
};

function InvoiceCard({ invoice }: { invoice: Invoice }) {
  const isDebt = invoice.status === 'debt';

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardIconWrap}>
          <Icon name="credit-card" size={18} color="#D65A5A" />
        </View>

        <View style={styles.cardTitleBlock}>
          <Text style={styles.cardTitle}>{invoice.title}</Text>

          <TouchableOpacity activeOpacity={0.7} style={styles.invoiceCodeRow}>
            <Text style={styles.invoiceCode}>SỐ HĐ: {invoice.invoiceCode}</Text>

            <Icon
              name="external-link"
              size={12}
              color="#3564F0"
              style={{ marginLeft: 4, marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[styles.badge, isDebt ? styles.badgeDebt : styles.badgePaid]}
        >
          <Text
            style={[
              styles.badgeText,
              isDebt ? styles.badgeTextDebt : styles.badgeTextPaid,
            ]}
          >
            {isDebt ? 'NỢ CƯỚC' : 'ĐÃ TRẢ'}
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detailRows}>
          <DetailRow label="NGÀY HÓA ĐƠN" value={invoice.invoiceDate} />

          <DetailRow label="SỐ TIỀN NỢ" value={invoice.debtAmount} />

          <DetailRow
            label="ĐÃ THANH TOÁN"
            value={invoice.paidAmount}
            valueColor="#16A34A"
          />
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>CẦN THANH TOÁN</Text>

          <Text style={styles.totalValue}>{invoice.remainingAmount}</Text>
        </View>
      </View>

      {isDebt && (
        <TouchableOpacity style={styles.payBtn} activeOpacity={0.85}>
          <Text style={styles.payBtnText}>Thanh toán điện tử</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

function DetailRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>

      <Text
        style={[
          styles.detailValue,
          valueColor ? { color: valueColor } : undefined,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

export const SearchInvoicesOptions = (
  navigation: any,
): NativeStackNavigationOptions => ({
  headerShown: true,
  headerShadowVisible: false,
  headerBackground: () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 3,
      }}
    />
  ),
  headerTitle: () => (
    <View style={headerStyles.titleWrap}>
      <Text style={headerStyles.titleText}>Tra cứu giao dịch</Text>
    </View>
  ),
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      activeOpacity={0.75}
      style={headerStyles.backBtn}
    >
      <View style={headerStyles.backIconWrap}>
        <Icon name="chevron-left" size={20} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  // ── Tab bar ──
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 4,
    borderRadius: 14,
    padding: 3,
    gap: 6,
  },
  tab: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5EAF1',
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
  },
  tabText: {
    fontSize: 13.5,
    fontFamily: Fonts.xBold,
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // ── Scroll ──
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 110,
    gap: 12,
  },

  // ── Card ──
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 0.8,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  cardIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 16,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  cardTitleBlock: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 20,
  },

  invoiceCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  invoiceCode: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#3564F0',
    marginTop: 3,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
  },

  badgeDebt: {
    backgroundColor: '#FFF3F3',
  },

  badgePaid: {
    backgroundColor: '#ECFDF3',
  },

  badgeText: {
    fontSize: 9,
    fontWeight: '900',
  },

  badgeTextDebt: {
    color: '#D65A5A',
  },

  badgeTextPaid: {
    color: '#16A34A',
  },

  detailContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E8ECF1',
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  detailRows: { gap: 8 },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailLabel: {
    fontSize: 11,
    fontFamily: Fonts.xBold,
    color: '#A3ADBA',
    letterSpacing: 0.6,
  },

  detailValue: {
    fontSize: 13,
    fontWeight: '900',
    color: '#111827',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E8ECF1',
    paddingTop: 12,
    marginTop: 12,
  },

  totalLabel: {
    fontSize: 11.5,
    fontFamily: Fonts.xBold,
    color: '#111827',
  },

  totalValue: {
    fontSize: 13,
    fontWeight: '900',
    color: '#D94A4A',
  },

  payBtn: {
    paddingVertical: 13,
    borderRadius: 22,
    backgroundColor: '#3B66F6',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  payBtnText: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontFamily: Fonts.xBold,
  },

  // ── Empty state ──
  emptyState: {
    alignItems: 'center',
    paddingTop: 80,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});

const headerStyles = StyleSheet.create({
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 14,
    marginTop: 14,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  backBtn: {
    marginLeft: Platform.OS === 'ios' ? 4 : 0,
    marginBottom: 14,
    marginTop: 14,
  },
  backIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#FAFBFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Platform.OS === 'ios' ? 4 : 0,
  },
});
