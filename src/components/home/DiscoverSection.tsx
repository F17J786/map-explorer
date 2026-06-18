import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import { DiscoverItem } from '@/types/home';

interface DiscoverSectionProps {
  items: DiscoverItem[];
  onSeeMore?: () => void;
  onItemPress?: (item: DiscoverItem) => void;
}

const BLUE = '#1A56DB';

export const DiscoverSection = ({
  items,
  onSeeMore,
  onItemPress,
}: DiscoverSectionProps) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Khám phá</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onSeeMore}>
          <Text style={styles.seeMore}>XEM THÊM</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingLeft: 22 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.discoverRow}
        >
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() => onItemPress?.(item)}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.date}>{item.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    marginHorizontal: 22,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  seeMore: {
    fontSize: 10,
    fontWeight: '700',
    color: BLUE,
    letterSpacing: 0.9,
  },
  discoverRow: {
    gap: 14,
    paddingRight: 22,
  },
  card: {
    width: 210,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 110,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    paddingHorizontal: 10,
    paddingTop: 8,
    lineHeight: 18,
  },
  date: {
    fontSize: 11,
    color: '#9CA3AF',
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 10,
  },
});
