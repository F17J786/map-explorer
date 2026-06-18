import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ServiceItem } from '@/types/home';

interface ServiceGridProps {
  services: ServiceItem[];
  onServicePress?: (item: ServiceItem) => void;
}

// Private — chỉ dùng trong ServiceGrid
const ServiceButton = ({
  item,
  onPress,
}: {
  item: ServiceItem;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    style={styles.serviceBtn}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <View style={styles.serviceBtnIcon}>
      <Feather name={item.icon} size={20} color="#64748B" />
    </View>
    <Text style={styles.serviceBtnLabel}>{item.label}</Text>
  </TouchableOpacity>
);

export const ServiceGrid = ({ services, onServicePress }: ServiceGridProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Yêu cầu dịch vụ</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="more-horizontal" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        numColumns={4}
        scrollEnabled={false}
        columnWrapperStyle={{ gap: 10 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ServiceButton item={item} onPress={() => onServicePress?.(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 22,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  serviceBtn: {
    width: '23%',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 8,
  },
  serviceBtnIcon: {
    width: 46,
    height: 46,
    borderRadius: 18,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  serviceBtnLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    lineHeight: 13,
    letterSpacing: 0.2,
  },
});
