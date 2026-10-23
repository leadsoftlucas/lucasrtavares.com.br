// Dados independentes de idioma, portados do index.html legado. Os textos ficam em src/i18n/*.ts (mesma ordem).

export interface EventData {
  slot: string;
  photo: string;
  flag: string;
}

/** Na ordem dos textos em i18n (events). */
export const events: EventData[] = [
  {
    slot: 'ev-dwsf-2024',
    photo: 'assets/ev-devweek.jpg',
    flag: 'assets/flag-us.png',
  },
  {
    slot: 'ev-tdc-2024',
    photo: 'assets/ev-tdc.jpg',
    flag: 'assets/flag-br.png',
  },
  {
    slot: 'ev-fae-2024',
    photo: 'assets/ev-fae.jpg',
    flag: 'assets/flag-br.png',
  },
  {
    slot: 'ev-ignite-2025',
    photo: 'assets/ev-ignite.jpg',
    flag: 'assets/flag-us.png',
  },
  {
    slot: 'ev-techex-2026',
    photo: 'assets/ev-techex.jpg',
    flag: 'assets/flag-us.png',
  },
];
