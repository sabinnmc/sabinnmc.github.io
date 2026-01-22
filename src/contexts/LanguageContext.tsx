import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    // Education
    'education.title': 'Education & Certifications',

    // Skills
    'skills.title': 'Technical Skills',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Project',
    'projects.code': 'View Code',

    // Experience
    'experience.title': 'Experience',
    'experience.present': 'Present',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always interested in new opportunities and interesting projects. Feel free to reach out!',
    'contact.location.title': 'Location',
    'contact.location': 'Osaka, Japan',
    'contact.email': 'Email me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
  },
  jp: {
    // Navigation
    'nav.about': '私について',
    'nav.education': '学歴',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.experience': '経験',
    'nav.contact': 'お問い合わせ',

    // Education
    'education.title': '学歴・資格',

    // Skills
    'skills.title': '技術スキル',

    // Projects
    'projects.title': '主要プロジェクト',
    'projects.view': 'プロジェクトを見る',
    'projects.code': 'コードを見る',

    // Experience
    'experience.title': '経験',
    'experience.present': '現在',

    // Contact
    'contact.title': 'お問い合わせ',
    'contact.description': '新しい機会や興味深いプロジェクトには常に関心があります。お気軽にご連絡ください！',
    'contact.location.title': '所在地',
    'contact.location': '日本、大阪',
    'contact.email': 'メールする',
    'contact.linkedin': 'リンクトイン',
    'contact.github': 'ギットハブ',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};