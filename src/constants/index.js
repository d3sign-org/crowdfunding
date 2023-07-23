import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Bảng điều khiển',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Chiến dịch',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Thanh toán',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'Rút tiền',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'Hồ sơ',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Thoát',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
