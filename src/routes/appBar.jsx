import React from 'react';

import {
  Anchor,
  Boat,
  Building,
  Hotspot,
  Lighthouse,
} from '../components/Icons';

const appBarRoutes = [
  {
    id: 1,
    path: '/',
    name: 'Live Map',
  },
  {
    id: 2,
    path: '/',
    name: 'Explore Data',
    children: [
      {
        id: 1,
        path: '/',
        icon: <Boat strokeWidth={1} />,
        name: 'Vessels',
        divider: false,
        inset: true,
      },
      {
        id: 2,
        path: '/',
        name: 'My Fleets',
        divider: false,
        inset: true,
      },
      {
        id: 3,
        path: '/',
        name: 'Vessel Photos',
        divider: true,
        inset: true,
      },
      {
        id: 4,
        path: '/',
        icon: <Anchor strokeWidth={1} />,
        name: 'Ports',
        divider: false,
        inset: true,
      },
      {
        id: 5,
        path: '/',
        name: 'Arrivals & Departures',
        divider: false,
        inset: true,
      },
      {
        id: 6,
        path: '/',
        name: 'Expected Arrivals',
        divider: false,
        inset: true,
      },
      {
        id: 7,
        path: '/',
        name: 'Port Photos',
        divider: true,
        inset: true,
      },
      {
        id: 8,
        icon: <Hotspot strokeWidth={1} />,
        path: '/',
        name: 'Stations',
        divider: true,
        inset: true,
      },
      {
        id: 9,
        path: '/',
        icon: <Lighthouse strokeWidth={1} />,
        name: 'Lights & AtoN',
        divider: true,
        inset: true,
      },
      {
        id: 10,
        path: '/',
        icon: <Building strokeWidth={1} />,
        name: 'Companies',
        divider: false,
        inset: true,
      },
    ],
  },
  {
    id: 5,
    path: '/',
    name: 'Community',
    children: [
      {
        id: 1,
        path: '/',
        name: 'Cover your Area',
        divider: false,
        inset: false,
      },
      {
        id: 3,
        path: '/',
        name: 'Free AIS Receiver',
        divider: false,
        inset: false,
      },
      {
        id: 4,
        path: '/',
        name: 'List of Stations',
        divider: false,
        inset: false,
      },
      {
        id: 5,
        path: '/',
        name: 'AIS e-shop',
        divider: false,
        inset: false,
      },
      {
        id: 6,
        path: '/',
        name: 'Report your own position',
        divider: true,
        inset: false,
      },
      {
        id: 7,
        path: '/',
        name: 'Photo Gallery',
        divider: false,
        inset: false,
      },
      {
        id: 8,
        path: '/',
        name: 'Photo Gallery',
        divider: false,
        inset: false,
      },
      {
        id: 9,
        path: '/',
        name: 'List of Photographers',
        divider: true,
        inset: false,
      },
      {
        id: 10,
        path: '/',
        name: 'Forum',
        divider: false,
        inset: false,
      },
    ],
  },
  {
    id: 6,
    path: '/',
    name: 'Solutions',
    children: [
      {
        id: 1,
        path: '/',
        name: 'Online Services',
        divider: true,
        inset: false,
      },
      {
        id: 2,
        path: '/',
        name: 'Data Services (API)',
        divider: false,
        inset: false,
      },
      {
        id: 3,
        path: '/',
        name: 'Data Archives',
        divider: false,
        inset: false,
      },
      {
        id: 4,
        path: '/',
        name: 'Business Directory',
        divider: false,
        inset: false,
      },
      {
        id: 5,
        path: '/',
        name: 'Embed Map',
        divider: true,
        inset: false,
      },
      {
        id: 6,
        path: '/',
        name: 'Mobile Apps',
        divider: false,
        inset: false,
      },
    ],
  },
];

export default appBarRoutes;
