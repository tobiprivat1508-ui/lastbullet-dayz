export const languages = {
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'de';

export const ui = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.features': 'Features',
    'nav.rules': 'Regeln',
    'nav.livemap': 'Livemap',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',

    // Hero
    'hero.title': 'LAST BULLET',
    'hero.subtitle': 'Überlebe. Kämpfe. Herrsche.',
    'hero.description': 'Erlebe DayZ auf einem neuen Level. Hardcore PvP, einzigartige Mods und eine aktive Community warten auf dich.',
    'hero.cta': 'Jetzt beitreten',
    'hero.status': 'Server Status',

    // About
    'about.title': 'Über unseren Server',
    'about.subtitle': 'Was uns besonders macht',
    'about.card1.title': 'Hardcore PvP',
    'about.card1.desc': 'Intensive Feuergefechte und taktisches Gameplay für erfahrene Überlebende.',
    'about.card2.title': 'Custom Mods',
    'about.card2.desc': 'Sorgfältig ausgewählte Mods für das ultimative DayZ-Erlebnis.',
    'about.card3.title': 'Aktive Community',
    'about.card3.desc': 'Tritt unserer wachsenden Discord-Community bei und finde neue Verbündete.',
    'about.card4.title': 'Aktive Admins',
    'about.card4.desc': 'Unser engagiertes Team sorgt für faires Gameplay und schnelle Hilfe.',

    // Features
    'features.title': 'Server Features',
    'features.subtitle': 'Das bieten wir dir',

    // Monetization
    'monetization.title': 'Finanzierung',
    'monetization.subtitle': 'Transparent & Fair',
    'monetization.desc': 'Unser Server wird durch freiwillige Spenden finanziert. Alle Vorteile sind rein kosmetisch – kein Pay-to-Win.',

    // Rules
    'rules.title': 'Serverregeln',
    'rules.subtitle': 'Bitte lese und beachte unsere Regeln',

    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Hast du Fragen? Schreib uns!',

    // Server Status
    'status.online': 'Online',
    'status.offline': 'Offline',
    'status.players': 'Spieler',
    'status.map': 'Karte',
    'status.connect': 'Verbinden',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',

  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.rules': 'Rules',
    'nav.livemap': 'Livemap',
    'nav.contact': 'Contact',
    'nav.login': 'Login',

    // Hero
    'hero.title': 'LAST BULLET',
    'hero.subtitle': 'Survive. Fight. Dominate.',
    'hero.description': 'Experience DayZ on a new level. Hardcore PvP, unique mods and an active community await you.',
    'hero.cta': 'Join now',
    'hero.status': 'Server Status',

    // About
    'about.title': 'About our Server',
    'about.subtitle': 'What makes us special',
    'about.card1.title': 'Hardcore PvP',
    'about.card1.desc': 'Intense firefights and tactical gameplay for experienced survivors.',
    'about.card2.title': 'Custom Mods',
    'about.card2.desc': 'Carefully selected mods for the ultimate DayZ experience.',
    'about.card3.title': 'Active Community',
    'about.card3.desc': 'Join our growing Discord community and find new allies.',
    'about.card4.title': 'Active Admins',
    'about.card4.desc': 'Our dedicated team ensures fair gameplay and quick support.',

    // Features
    'features.title': 'Server Features',
    'features.subtitle': 'What we offer',

    // Monetization
    'monetization.title': 'Funding',
    'monetization.subtitle': 'Transparent & Fair',
    'monetization.desc': 'Our server is funded by voluntary donations. All perks are purely cosmetic – no pay-to-win.',

    // Rules
    'rules.title': 'Server Rules',
    'rules.subtitle': 'Please read and follow our rules',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have questions? Get in touch!',

    // Server Status
    'status.online': 'Online',
    'status.offline': 'Offline',
    'status.players': 'Players',
    'status.map': 'Map',
    'status.connect': 'Connect',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',

  },
} as const;

export type UIKey = keyof typeof ui.de;
