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
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Embedded Systems Developer',
    'hero.subtitle': 'Embedded systems engineer passionate about IoT, microcontrollers, and hardware-software integration',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    'hero.location': 'Based in Japan',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I\'m a dedicated embedded systems developer with expertise in microcontroller programming and hardware-software integration. Currently based in Japan, I specialize in IoT development, sensor systems, and embedded applications.',
    'about.selfpr': 'I enjoy leveraging my analytical skills in project management and actively tackling challenges. I am highly focused and work as a strong team player, valuing professionalism and discipline. Currently specializing in embedded systems development and signal analysis as an IT engineer, I have deep knowledge of both high-voltage and low-voltage systems.',
    'about.technical': 'Throughout my career, I have utilized various software and tools including AutoCAD and ArcGIS for electrical design of transmission line surveys, E2 Studio for embedded programming modules, and LT Spice & CSiEDA5 for circuit design. I have experience leading teams through high-voltage system research and design.',
    'about.japan': 'I am drawn to Japan because of the infinite opportunities it offers, especially in technology and engineering. Japan is globally renowned for excellent engineering and innovation, and I want to learn and grow at the forefront of this field. I strongly resonate with Japanese culture that values diligence and discipline.',
    
    // Education
    'education.title': 'Education & Certifications',
    'education.degree': 'Bachelor of Engineering',
    'education.major': 'Electrical Engineering',
    'education.description': 'My electrical engineering background provides a strong foundation in problem-solving, systems thinking, and technical analysis that I apply to embedded systems development.',
    'education.certification': 'Nepal Engineering Council Certified Electrical Engineer',
    'education.certification.type': 'Professional Certification',
    'education.certification.description': 'Nepal Engineering Council(NEC) certified electrical engineer with professional credentials for engineering practice in Nepal.',
    'education.skills': 'Technical Foundation',
    'education.skills.description': 'My engineering education built a strong foundation in analytical thinking, systems understanding, and continuous learning—shaping me into a versatile, real-world problem solver.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.embedded': 'Embedded Systems',
    'skills.electrical': 'Electrical Engineering',
    'skills.software': 'Software & Programming',
    'skills.tools': 'Tools & Design Software',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Project',
    'projects.code': 'View Code',
    
    // Experience
    'experience.title': 'Experience',
    'experience.present': 'Present',
    
    // Experience Details
    'experience.pal.title': 'Embedded Systems Programmer',
    'experience.pal.company': 'Pal Giken Co., Ltd.',
    'experience.pal.location': 'Japan',
    'experience.pal.period': '2024 - Present',
    'experience.pal.type': 'Full-time',
    'experience.pal.description': 'Working on embedded systems development with a team of 40 engineers, focusing on IoT applications, sensor systems, and microcontroller programming.',
    'experience.pal.achievement1': 'Testing and debugging camera applications for public vehicle image detection systems',
    'experience.pal.achievement2': 'Testing automatic object/obstacle detection from cranes using machine learning',
    'experience.pal.achievement3': 'Chattering signal analysis using Renesas microcontrollers and E2 Studio',
    'experience.pal.achievement4': 'Electrical design using LT SPICE and CSiEDA software',
    'experience.pal.achievement5': 'Laser sensor testing and validation',
    
    'experience.cosmic.title': 'C Programming Instructor',
    'experience.cosmic.company': 'Cosmic International Academy',
    'experience.cosmic.location': 'Nepal',
    'experience.cosmic.period': '2021 - 2023',
    'experience.cosmic.type': 'Full-time',
    'experience.cosmic.description': 'Teaching programming fundamentals to students as part of a 60-member faculty team, focusing on C programming and web development basics.',
    'experience.cosmic.achievement1': 'Developed comprehensive C programming curriculum',
    'experience.cosmic.achievement2': 'Taught HTML, CSS, and JavaScript fundamentals',
    'experience.cosmic.achievement3': 'Mentored students in programming concepts and best practices',
    'experience.cosmic.achievement4': 'Contributed to academic program development',
    
    'experience.admc.title': 'Site Engineer',
    'experience.admc.company': 'ADMC Engineering Company',
    'experience.admc.location': 'Nepal',
    'experience.admc.period': '2018 - 2020',
    'experience.admc.type': 'Full-time',
    'experience.admc.description': 'Led electrical engineering projects for power transmission systems across Nepal, working with a 20-member engineering team on large-scale infrastructure projects.',
    'experience.admc.achievement1': 'Conducted 220kV transmission line tower surveys and design reports',
    'experience.admc.achievement2': 'Managed power purchase agreements for 164MW Kaligandaki Hydropower transmission',
    'experience.admc.achievement3': 'Surveyed and designed 132kV double circuit transmission lines',
    'experience.admc.achievement4': 'Completed distribution voltage surveys across 18 different cities in Nepal',
    'experience.admc.achievement5': 'Designed 11kV and 33kV primary distribution high voltage lines',
    
    'experience.mewa.title': 'Electrical Engineer Intern',
    'experience.mewa.company': 'Mewa Khola Hydropower Company',
    'experience.mewa.location': 'Nepal',
    'experience.mewa.period': '2019',
    'experience.mewa.type': 'Internship',
    'experience.mewa.description': 'Gained hands-on experience in hydropower plant operations as part of a 9-member technical team, focusing on electrical systems and control units.',
    'experience.mewa.achievement1': 'Operated hydropower governors and monitoring systems',
    'experience.mewa.achievement2': 'Installed and monitored Logic Control Units (LCU)',
    'experience.mewa.achievement3': 'Conducted circuit breaker testing and maintenance',
    'experience.mewa.achievement4': 'Performed CT and PT testing procedures',
    'experience.mewa.achievement5': 'Monitored power transformer operations and testing',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always interested in new opportunities and interesting projects. Feel free to reach out!',
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
    
    // Hero
    'hero.greeting': 'こんにちは、',
    'hero.title': '組み込みシステム開発者',
    'hero.subtitle': 'IoT、マイクロコントローラー、ハードウェア・ソフトウェア統合に情熱を注ぐ組み込みシステムエンジニア',
    'hero.cta.projects': 'プロジェクトを見る',
    'hero.cta.contact': 'お問い合わせ',
    'hero.location': '日本在住',
    
    // About
    'about.title': '私について',
    'about.description': 'マイクロコントローラープログラミングとハードウェア・ソフトウェア統合の専門知識を持つ熱心な組み込みシステム開発者です。現在日本を拠点とし、IoT開発、センサーシステム、組み込みアプリケーションを専門としています。',
    'about.selfpr': '私はプロジェクト管理において分析スキルを活かし、課題に積極的に取り組むことを楽しんでいます。非常に集中力があり、強いチームプレイヤーとして、プロ意識と規律を重んじる姿勢を大切にしています。現在、ITエンジニアとして組み込みシステムの開発と信号分析を専門にしており、高電圧および低電圧システムについて深い知識を有しています。',
    'about.technical': 'これまでのキャリアでは、AutoCADとArcGISソフトウェアを使用した送電線調査計画の電気設計、E2 Studioソフトウェアを使用した信号解析用の組み込みプログラミングモジュール作成、LT SpiceおよびCSiEDA5ソフトウェアを使用した回路およびデバイスの電気設計など、さまざまなソフトウェアやツールを活用してきました。',
    'about.japan': '日本には無限のチャンスが広がっており、特にテクノロジーとエンジニアリングに対する私の情熱が強く引き寄せられています。日本は世界的に見ても優れたエンジニアリングとイノベーションを誇っており、その最前線で学び、成長したいと考えています。また、勤勉さや規律を大切にする日本の文化に強く共感しています。',
    
    // Education and Certificate
    'education.title': '学歴・資格',
    'education.degree': '工学士',
    'education.major': '電気工学',
    'education.description': '電気工学のバックグラウンドは、問題解決、システム思考、技術分析において強固な基盤を提供し、組み込みシステム開発に活かしています。',
    'education.certification': 'ネパール工学評議会認定電気技術者',
    'education.certification.type': '専門資格',
    'education.certification.description': 'ネパール工学評議会（NEC）認定の電気技術者であり、ネパールにおける工学実務のための専門資格を有しています。',
    'education.skills': '技術的基盤',
    'education.skills.description': '工学教育を通じて、分析的思考力、システム理解力、そして継続的な学習姿勢という強固な基盤が築かれ、現実世界の課題に柔軟に対応できる問題解決者として成長しました。',
    
    // Skills
    'skills.title': '技術スキル',
    'skills.embedded': '組み込みシステム',
    'skills.electrical': '電気工学',
    'skills.software': 'ソフトウェア・プログラミング',
    'skills.tools': 'ツール・設計ソフトウェア',
    
    // Projects
    'projects.title': '主要プロジェクト',
    'projects.view': 'プロジェクトを見る',
    'projects.code': 'コードを見る',
    
    // Experience
    'experience.title': '経験',
    'experience.present': '現在',
    
    // Experience Details
    'experience.pal.title': '組み込みシステムプログラマー',
    'experience.pal.company': '株式会社パル技研',
    'experience.pal.location': '日本',
    'experience.pal.period': '2024年 - 現在',
    'experience.pal.type': '正社員',
    'experience.pal.description': '40名のエンジニアチームで組み込みシステム開発に従事し、IoTアプリケーション、センサーシステム、マイクロコントローラプログラミングに焦点を当てています。',
    'experience.pal.achievement1': '公共車両画像検出システム用カメラアプリケーションのテストとデバッグ',
    'experience.pal.achievement2': '機械学習を使用したクレーンの自動物体・障害物検出のテスト',
    'experience.pal.achievement3': 'ルネサスマイクロコントローラとE2 Studioを使用したチャタリング信号解析',
    'experience.pal.achievement4': 'LT SPICEとCSiEDAソフトウェアを使用した電気設計',
    'experience.pal.achievement5': 'レーザーセンサーのテストと検証',
    
    'experience.cosmic.title': 'Cプログラミング講師',
    'experience.cosmic.company': 'コズミック国際アカデミー',
    'experience.cosmic.location': 'ネパール',
    'experience.cosmic.period': '2021年 - 2023年',
    'experience.cosmic.type': '正社員',
    'experience.cosmic.description': '60名の教員チームの一員として学生にプログラミングの基礎を教え、Cプログラミングとウェブ開発の基礎に焦点を当てています。',
    'experience.cosmic.achievement1': '包括的なCプログラミングカリキュラムの開発',
    'experience.cosmic.achievement2': 'HTML、CSS、JavaScriptの基礎の指導',
    'experience.cosmic.achievement3': 'プログラミング概念とベストプラクティスの学生指導',
    'experience.cosmic.achievement4': '学術プログラム開発への貢献',
    
    'experience.admc.title': '現場エンジニア',
    'experience.admc.company': 'ADMCエンジニアリング株式会社',
    'experience.admc.location': 'ネパール',
    'experience.admc.period': '2018年 - 2020年',
    'experience.admc.type': '正社員',
    'experience.admc.description': 'ネパール全土の電力伝送システムの電気工学プロジェクトをリードし、大規模インフラプロジェクトで20名のエンジニアチームと協力しました。',
    'experience.admc.achievement1': '220kV送電線鉄塔調査と設計報告書の実施',
    'experience.admc.achievement2': '164MWカリガンダキ水力発電送電の電力購入契約の管理',
    'experience.admc.achievement3': '132kV複回線送電線の調査と設計',
    'experience.admc.achievement4': 'ネパールの18の異なる都市での配電電圧調査の完了',
    'experience.admc.achievement5': '11kVおよび33kV一次配電高圧線の設計',
    
    'experience.mewa.title': '電気エンジニアインターン',
    'experience.mewa.company': 'メワコーラ水力発電会社',
    'experience.mewa.location': 'ネパール',
    'experience.mewa.period': '2019年',
    'experience.mewa.type': 'インターンシップ',
    'experience.mewa.description': '9名の技術チームの一員として水力発電所の運営実習を行い、電気システムと制御装置に焦点を当てました。',
    'experience.mewa.achievement1': '水力発電ガバナーと監視システムの操作',
    'experience.mewa.achievement2': 'ロジック制御ユニット（LCU）の設置と監視',
    'experience.mewa.achievement3': '回路ブレーカーのテストとメンテナンスの実施',
    'experience.mewa.achievement4': 'CTおよびPTテスト手順の実行',
    'experience.mewa.achievement5': '電力変圧器の運転とテストの監視',
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.description': '新しい機会や興味深いプロジェクトには常に関心があります。お気軽にご連絡ください！',
    'contact.email': 'メールする',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
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