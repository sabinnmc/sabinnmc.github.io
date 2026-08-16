import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // General
    'common.skip_to_content': 'Skip to content',
    'footer.role': 'Embedded Systems Engineer',

    // Navigation
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    // About
    'about.stats.experience.value': '8+ Years',
    'about.stats.experience.label': 'Engineering Experience',
    'about.stats.location.value': 'Japan',
    'about.stats.location.label': 'Based in Japan',
    'about.stats.projects.value': '20+',
    'about.stats.projects.label': 'Projects Completed',
    'about.stats.specialty.value': 'Embedded Systems',
    'about.stats.specialty.label': 'Specialist',

    // Education
    'education.title': 'Education & Certifications',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.core_title': 'Core Specialization',
    'skills.core_subtitle': 'For embedded systems engineering, technical depth matters more than breadth. Here is where my core expertise lies.',
    'skills.core_panel.title': 'Core Engineering Specializations',
    'skills.core_panel.description': 'For systems-level and hardware roles, depth in safety-critical, micro-level debugging and deterministic operation is highly prioritized. Here is how my deep domain competencies align.',
    'skills.expertise_depth': 'Expertise Depth',
    'skills.full_inventory': 'Full Technical Inventory',
    'skills.inventory_description': 'Review a detailed, structured inventory of all software tools, microcontrollers, testing equipment, and engineering methodologies.',
    'skills.show_all': 'Explore Full Technical Inventory',
    'skills.show_less': 'Collapse Technical Inventory',
    'skills.learning_title': 'Currently Learning & Exploring',
    'skills.learning.fpga': 'FPGA Development',
    'skills.learning.pcb': 'PCB Design',
    'skills.learning.automation': 'Industrial Automation',
    'skills.learning.wireless': 'Wireless Communication',
    'skills.learning.power': 'Power Electronics',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Project',
    'projects.code': 'View Code',
    'projects.featured': 'Featured',

    // Hero
    'hero.badge': 'Embedded Systems = Hardware + Software',
    'hero.title_part1': 'Building Deterministic Systems &',
    'hero.title_part2': 'Embedded Intelligence',
    'hero.desc': 'Specialized in microcontroller firmware, real-time operating systems (FreeRTOS), hardware protocols, and safety-critical embedded engineering based in Japan.',
    'hero.cmd_copy': 'Command copied to clipboard!',
    'hero.hire': 'Hire Me',
    'hero.contact': 'Contact Me',
    'hero.explore': 'Explore Projects',
    'hero.mail_subject': 'Job Inquiry - Sabin Bhandari',
    'hero.github_aria': 'GitHub Profile',
    'hero.linkedin_aria': 'LinkedIn Profile',
    'hero.email_aria': 'Send Email',

    // Architecture / Core Competencies
    'arch.badge': 'Core Engineering Competencies',
    'arch.title': 'Hardware & Firmware Architecture',
    'arch.subtitle': 'Built for high reliability, real-time determinism, and safety-critical environments.',
    'arch.card1.title': 'Firmware & RTOS Kernel',
    'arch.card1.desc': 'Deterministic execution with FreeRTOS, STM32, ESP32, task synchronization, and bare-metal HAL driver development.',
    'arch.card2.title': 'Protocols & Hardware I/O',
    'arch.card2.desc': 'CAN bus, SPI, I2C, UART, RS-485, low-power IoT architectures, and precise sensor signal processing.',
    'arch.card3.title': 'Debugging & Safety Verification',
    'arch.card3.desc': 'Micro-level debugging with logic analyzers & oscilloscopes, static analysis, memory safety, and fault-tolerant system design.',

    // Experience
    'experience.title': 'Experience',
    'experience.present.key_achievements': 'Key Achievements',
    'experience.present': 'Present',
    'experience.show_achievements': 'Show Key Achievements & Technologies',
    'experience.hide_achievements': 'Hide Key Achievements & Technologies',
    'experience.view_details': 'View Details',
    'experience.hide_details': 'Hide Details',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.location.title': 'Location',
    'contact.location': 'kagawa prefecture, Japan',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume.title': 'Resume / CV',
    'contact.resume.description': 'Download my resume to learn more about my experience and skills.',
    'contact.resume.english': 'English CV',
    'contact.resume.japanese': 'Japanese Resume',
    'contact.form.name': 'Name',
    'contact.form.name_placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email_placeholder': 'your.email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject_placeholder': 'Project collaboration',
    'contact.form.message': 'Message',
    'contact.form.message_placeholder': 'How can I help you?',
    'contact.form.sending': 'Sending...',
    'contact.form.submit': 'Send Message',
    'contact.toast.validation': 'Validation Error: Please fill out all fields in the contact form.',
    'contact.toast.sent': 'Message sent successfully! Thank you.',
    'contact.toast.formspree_fallback': 'Form submission failed. Opening your email client instead...',
    'contact.toast.connection_fallback': 'Connection error. Opening your email client instead...',
    'contact.toast.mail_fallback': 'Opening your email client with your message pre-filled.',

    // Origin badge
    'flag.origin': 'Origin',
    'flag.country': 'Nepal',
    'flag.aria': 'Flag of Nepal',
    'flag.tooltip': 'From Nepal — Based in Japan',
  },
  jp: {
    // General
    'common.skip_to_content': '本文へ移動',
    'footer.role': '組み込みシステムエンジニア',

    // Navigation
    'nav.about': 'プロフィール',
    'nav.education': '学歴・資格',
    'nav.skills': '技術スキル',
    'nav.projects': '主要プロジェクト',
    'nav.experience': '職務経歴',
    'nav.contact': 'お問い合わせ',

    // About
    'about.stats.experience.value': '8年以上',
    'about.stats.experience.label': 'エンジニアリング経験',
    'about.stats.location.value': '日本',
    'about.stats.location.label': '日本在住',
    'about.stats.projects.value': '20件以上',
    'about.stats.projects.label': 'プロジェクト実績',
    'about.stats.specialty.value': '組み込みシステム',
    'about.stats.specialty.label': '専門分野',

    // Education
    'education.title': '学歴・資格',

    // Skills
    'skills.title': '技術スキル',
    'skills.core_title': '中核となる専門分野',
    'skills.core_subtitle': '組み込みシステム開発では、技術の幅だけでなく、専門性の深さも重要です。以下に、私が特に強みとする分野をご紹介します。',
    'skills.core_panel.title': '中核となる技術領域',
    'skills.core_panel.description': '組み込みシステムやハードウェア関連の業務で培った、安全性を考慮した設計、低レイヤのデバッグ、決定論的な動作制御に関する専門性を以下にまとめます。',
    'skills.expertise_depth': '習熟度（自己評価）',
    'skills.full_inventory': '技術スキル一覧',
    'skills.inventory_description': '使用経験のあるソフトウェア、マイコン、試験・測定機器、エンジニアリング手法を分野別に掲載しています。',
    'skills.show_all': '技術スキル一覧を表示',
    'skills.show_less': '技術スキル一覧を閉じる',
    'skills.learning_title': '現在学習中の分野',
    'skills.learning.fpga': 'FPGA開発',
    'skills.learning.pcb': 'PCB設計',
    'skills.learning.automation': '産業オートメーション',
    'skills.learning.wireless': '無線通信',
    'skills.learning.power': 'パワーエレクトロニクス',

    // Projects
    'projects.title': '主要プロジェクト',
    'projects.view': 'プロジェクトを見る',
    'projects.code': 'ソースコードを見る',
    'projects.featured': '注目プロジェクト',

    // Hero
    'hero.badge': '組み込みシステム = ハードウェア + ソフトウェア',
    'hero.title_part1': '高信頼性・決定論的システムと',
    'hero.title_part2': '組み込みインテリジェンスの構築',
    'hero.desc': '日本を拠点に、マイコンファームウェア、リアルタイムOS（FreeRTOS）、通信プロトコル、高信頼性組み込みエンジニアリングを専門とするエンジニア。',
    'hero.cmd_copy': 'コマンドをコピーしました！',
    'hero.hire': '採用に関するお問い合わせ',
    'hero.contact': '連絡する',
    'hero.explore': 'プロジェクトを見る',
    'hero.mail_subject': '採用に関するお問い合わせ - Sabin Bhandari',
    'hero.github_aria': 'GitHubプロフィール',
    'hero.linkedin_aria': 'LinkedInプロフィール',
    'hero.email_aria': 'メールを送信',

    // Architecture / Core Competencies
    'arch.badge': 'コアエンジニアリング領域',
    'arch.title': 'ハードウェア & ファームウェア・アーキテクチャ',
    'arch.subtitle': '高信頼性、リアルタイム決定論、安全保護環境のためのエンジニアリング設計。',
    'arch.card1.title': 'ファームウェア & RTOSカーネル',
    'arch.card1.desc': 'FreeRTOS、STM32、ESP32を用いた決定論的タスク制御、割り込み管理、HALドライバ開発。',
    'arch.card2.title': 'プロトコル & ハードウェアI/O',
    'arch.card2.desc': 'CANバス、SPI、I2C、UART、RS-485、低消費電力IoTアーキテクチャ、高精度センサー処理。',
    'arch.card3.title': 'デバッグ & 安全性検証',
    'arch.card3.desc': 'ロジックアナライザやオシロスコープによる低レイヤデバッグ、静的解析、メモリ安全性、障害耐性設計。',

    // Experience
    'experience.title': '職務経歴',
    'experience.present.key_achievements': '主な実績',
    'experience.present': '現在',
    'experience.show_achievements': '主な実績・使用技術を表示',
    'experience.hide_achievements': '主な実績・使用技術を非表示',
    'experience.view_details': '詳細を表示',
    'experience.hide_details': '詳細を非表示',

    // Contact
    'contact.title': 'お問い合わせ',
    'contact.location.title': '居住地',
    'contact.location': '大阪府（日本）',
    'contact.email': 'メールで連絡',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume.title': '履歴書・CV',
    'contact.resume.description': '職務経験やスキルの詳細は、以下の履歴書・CVからご確認いただけます。',
    'contact.resume.english': '英語版CV',
    'contact.resume.japanese': '日本語版履歴書',
    'contact.form.name': 'お名前',
    'contact.form.name_placeholder': 'お名前を入力',
    'contact.form.email': 'メールアドレス',
    'contact.form.email_placeholder': 'your.email@example.com',
    'contact.form.subject': '件名',
    'contact.form.subject_placeholder': '採用・プロジェクトに関するお問い合わせ',
    'contact.form.message': 'メッセージ',
    'contact.form.message_placeholder': 'お問い合わせ内容をご入力ください',
    'contact.form.sending': '送信中…',
    'contact.form.submit': 'メッセージを送信',
    'contact.toast.validation': 'すべての項目を入力してください。',
    'contact.toast.sent': 'メッセージを送信しました。ありがとうございます。',
    'contact.toast.formspree_fallback': 'フォームから送信できなかったため、メールソフトを起動します。',
    'contact.toast.connection_fallback': '接続エラーが発生したため、メールソフトを起動します。',
    'contact.toast.mail_fallback': '入力内容を反映してメールソフトを起動します。',

    // Origin badge
    'flag.origin': '出身',
    'flag.country': 'ネパール',
    'flag.aria': 'ネパール国旗',
    'flag.tooltip': 'ネパール出身・日本在住',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language === 'jp' ? 'ja' : 'en';
  }, [language]);

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