export interface TimeSlot {
  start: string;
  end: string;
}

export interface DayHours {
  day: string;
  slots: TimeSlot[];
  isClosed: boolean;
}

export const businessHours: DayHours[] = [
  {
    day: 'lundi',
    slots: [
      { start: '07:30', end: '12:00' },
      { start: '13:30', end: '18:00' }
    ],
    isClosed: false
  },
  {
    day: 'mardi',
    slots: [
      { start: '07:30', end: '12:00' },
      { start: '13:30', end: '18:00' }
    ],
    isClosed: false
  },
  {
    day: 'mercredi',
    slots: [
      { start: '07:30', end: '12:00' },
      { start: '13:30', end: '18:00' }
    ],
    isClosed: false
  },
  {
    day: 'jeudi',
    slots: [
      { start: '07:30', end: '12:00' },
      { start: '13:30', end: '18:00' }
    ],
    isClosed: false
  },
  {
    day: 'vendredi',
    slots: [
      { start: '07:30', end: '12:00' },
      { start: '13:30', end: '17:00' }
    ],
    isClosed: false
  },
  {
    day: 'samedi',
    slots: [],
    isClosed: true
  },
  {
    day: 'dimanche',
    slots: [],
    isClosed: true
  }
];

// Fonction pour vérifier si le garage est ouvert maintenant
export function isGarageOpen(): { isOpen: boolean; status: string; nextOpening?: string } {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes depuis minuit
  
  // Convertir le jour JS (0-6) vers notre index (Lundi=0, Dimanche=6)
  const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
  const todayHours = businessHours[dayIndex];
  
  // Si fermé aujourd'hui
  if (todayHours.isClosed) {
    // Chercher le prochain jour d'ouverture
    for (let i = 1; i <= 7; i++) {
      const nextDayIndex = (dayIndex + i) % 7;
      const nextDay = businessHours[nextDayIndex];
      if (!nextDay.isClosed && nextDay.slots.length > 0) {
        const dayName = nextDay.day;
        const firstSlot = nextDay.slots[0];
        return {
          isOpen: false,
          status: 'Fermé',
          nextOpening: `${dayName} ${firstSlot.start}`
        };
      }
    }
    return { isOpen: false, status: 'Fermé' };
  }
  
  // Vérifier chaque créneau d'aujourd'hui
  for (const slot of todayHours.slots) {
    const [startHour, startMin] = slot.start.split(':').map(Number);
    const [endHour, endMin] = slot.end.split(':').map(Number);
    const startTime = startHour * 60 + startMin;
    const endTime = endHour * 60 + endMin;
    
    if (currentTime >= startTime && currentTime <= endTime) {
      return { isOpen: true, status: 'Ouvert' };
    }
  }
  
  // Pas dans un créneau, chercher le prochain
  for (const slot of todayHours.slots) {
    const [startHour, startMin] = slot.start.split(':').map(Number);
    const startTime = startHour * 60 + startMin;
    
    if (currentTime < startTime) {
      return {
        isOpen: false,
        status: 'Fermé',
        nextOpening: `Aujourd'hui ${slot.start}`
      };
    }
  }
  
  // Plus de créneaux aujourd'hui, chercher demain
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (dayIndex + i) % 7;
    const nextDay = businessHours[nextDayIndex];
    if (!nextDay.isClosed && nextDay.slots.length > 0) {
      const dayName = i === 1 ? 'Demain' : nextDay.day;
      const firstSlot = nextDay.slots[0];
      return {
        isOpen: false,
        status: 'Fermé',
        nextOpening: `${dayName} ${firstSlot.start}`
      };
    }
  }
  
  return { isOpen: false, status: 'Fermé' };
}

// Fonction pour formater les horaires pour l'affichage
export function getFormattedHours() {
  const weekDays = businessHours.slice(0, 4); // Lun-Jeu
  const friday = businessHours[4]; // Vendredi
  
  return {
    weekDays: {
      label: 'Lun - Jeu',
      slots: weekDays[0].slots
    },
    friday: {
      label: 'Vendredi',
      slots: friday.slots
    },
    weekend: {
      label: 'Sam - Dim',
      status: 'Fermé'
    }
  };
}
