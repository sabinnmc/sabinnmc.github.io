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
    'skills.core_title': 'Core Specialization',
    'skills.core_subtitle': 'For embedded systems engineering, technical depth matters more than breadth. Here is where my core expertise lies.',
    'skills.full_inventory': 'Full Technical Inventory',
    'skills.show_all': 'Explore Full Technical Inventory',
    'skills.show_less': 'Collapse Technical Inventory',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Project',
    'projects.code': 'View Code',

    // Hero CTAs
    'hero.hire': 'Hire Me',
    'hero.contact': 'Contact Me',
    'hero.explore': 'Explore Projects',

    // Experience
    'experience.title': 'Experience',
    'experience.present.key_achievements': 'Key Achievements',
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
    'skills.core_title': '主要な専門分野',
    'skills.core_subtitle': '組み込み開発においては、広さよりもコア技術の深さが重要です。以下は私が最も得意とする専門分野です。',
    'skills.full_inventory': '全技術スキルインベントリ',
    'skills.show_all': 'すべての技術スキルを表示',
    'skills.show_less': '技術スキル一覧を折りたたむ',

    // Projects
    'projects.title': '主要プロジェクト',
    'projects.view': 'プロジェクトを見る',
    'projects.code': 'コードを見る',

    // Hero CTAs
    'hero.hire': '採用する',
    'hero.contact': 'お問い合わせ',
    'hero.explore': 'プロジェクトを探る',

    // Experience
    'experience.title': '経験',
    'experience.present.key_achievements': '主な実績',
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