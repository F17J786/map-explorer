import { ServiceItem, DiscoverItem } from '@/types/home';

export const SERVICES: ServiceItem[] = [
  { id: '1', icon: 'user-plus', label: 'CHUYỂN CHỦ\nSỞ HỮU' },
  { id: '2', icon: 'package', label: 'CHUYỂN GÓI\nDỊCH VỤ' },
  { id: '3', icon: 'map-pin', label: 'CHUYỂN ĐỊA\nĐIỂM' },
  { id: '4', icon: 'mail', label: 'THAY ĐỔI\nEMAIL' },
  { id: '5', icon: 'pause-circle', label: 'TẠM NGỪNG' },
  { id: '6', icon: 'refresh-cw', label: 'THAY ĐỔI GÓI\nCƯỚC' },
  { id: '7', icon: 'more-horizontal', label: 'YÊU CẦU KHÁC' },
];

export const DISCOVER: DiscoverItem[] = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400',
    title: 'Tin tức mới nhất',
    date: '15/03/2024',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    title: 'Khuyến mãi tháng 3',
    date: '10/03/2024',
  },
];
