import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

import { useHomeScroll } from '@/hooks/useHomeScroll';
import { SERVICES, DISCOVER } from '@/constants/home';
import { ServiceItem, DiscoverItem } from '@/types/home';

import { HomeHeader } from '@/components/home/HomeHeader';
import { ContractCard } from '@/components/home/ContractCard';
import { BillCard } from '@/components/home/BillCard';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { DiscoverSection } from '@/components/home/DiscoverSection';
import { ScrollFadeItem } from '@/components/common/ScrollFadeItem';

const MOCK_USER = {
  name: 'KURZ VIETNAM',
  id: '#129,482',
  badge: 'GOLD' as const,
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
};

export const HomeScreen = () => {
  const { scrollHandler } = useHomeScroll();

  const handleBellPress = () => {};

  const handleRefreshContract = () => {};

  const handlePay = () => {};

  const handleServicePress = (item: ServiceItem) => {
    console.log('Service pressed:', item.id);
  };

  const handleSeeMore = () => {};

  const handleDiscoverItemPress = (item: DiscoverItem) => {
    console.log('Discover item pressed:', item.id);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1A56DB" />

      <HomeHeader user={MOCK_USER} onBellPress={handleBellPress} />

      <Animated.ScrollView
        style={styles.scroll}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ScrollFadeItem index={0}>
          <ContractCard
            contractId="VNTT-2024-001"
            service="Fiber Home Pro"
            onRefresh={handleRefreshContract}
          />
        </ScrollFadeItem>

        <ScrollFadeItem index={1}>
          <BillCard amount="350.000đ" dueDate="15/03/2024" onPay={handlePay} />
        </ScrollFadeItem>

        <ScrollFadeItem index={2}>
          <ServiceGrid
            services={SERVICES}
            onServicePress={handleServicePress}
          />
        </ScrollFadeItem>

        <ScrollFadeItem index={3}>
          <DiscoverSection
            items={DISCOVER}
            onSeeMore={handleSeeMore}
            onItemPress={handleDiscoverItemPress}
          />
        </ScrollFadeItem>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    zIndex: 10,
    marginTop: 100,
  },
  scrollContent: {
    gap: 13,
    paddingBottom: 110,
  },
});
