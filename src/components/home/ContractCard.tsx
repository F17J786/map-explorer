import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface ContractCardProps {
  contractId: string;
  service: string;
  onRefresh?: () => void;
}

const BLUE = '#1A56DB';

export const ContractCard = ({
  contractId,
  service,
  onRefresh,
}: ContractCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ gap: 3 }}>
          <Text style={styles.label}>HỢP ĐỒNG HIỆN TẠI</Text>
          <View style={styles.idRow}>
            <Text style={styles.contractId}>{contractId}</Text>
            <TouchableOpacity
              style={styles.refreshIcon}
              activeOpacity={0.7}
              onPress={onRefresh}
            >
              <Feather name="refresh-cw" size={14} color={BLUE} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.serviceCol}>
          <Text style={styles.label}>DỊCH VỤ</Text>
          <Text style={styles.serviceText}>{service}</Text>
        </View>
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
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowColor: '#1A56DB',
    shadowOffset: { width: 0, height: 6 },
    elevation: 50,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 10,
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  idRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  contractId: {
    fontSize: 15,
    fontWeight: '700',
    color: BLUE,
  },
  refreshIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceCol: {
    alignItems: 'flex-end',
    gap: 3,
  },
  serviceText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
});
