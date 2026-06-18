export interface ServiceItem {
  id: string;
  icon: string;
  label: string;
}

export interface DiscoverItem {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
}

export interface HomeUser {
  name: string;
  id: string;
  badge: 'GOLD' | 'SILVER' | 'BRONZE';
  avatarUrl: string;
}
