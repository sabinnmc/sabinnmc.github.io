import { IconType } from "react-icons";
import { FiZap, FiCpu } from "react-icons/fi";
import { FaCode, FaWrench } from "react-icons/fa6";
import has2ProjectThumbnail from "@/assets/has2-project.webp";

export type LocalizedString = {
    en: string;
    jp: string;
};

export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    icon: IconType;
    title: LocalizedString;
    color: string;
    bgColor: string;
    skills: Skill[];
}

export interface Project {
    title: LocalizedString;
    description: LocalizedString;
    bullets: {
        en: string[];
        jp: string[];
    };
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    featured: boolean;
}

export interface Experience {
    title: LocalizedString;
    company: LocalizedString;
    location: LocalizedString;
    period: LocalizedString;
    type: LocalizedString;
    description: LocalizedString;
    achievements: LocalizedString[];
    technologies: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        icon: FiCpu,
        title: { en: 'Embedded Systems', jp: '組み込みシステム' },
        color: 'text-primary',
        bgColor: 'bg-primary/10',
        skills: [
            { name: 'Renesas MCU', level: 5 },
            { name: 'R7FA6T1AD3CFP', level: 5 },
            { name: 'ARM Cortex', level: 4 },
            { name: 'AVR', level: 4 },
            { name: 'PIC Microcontrollers', level: 4 },
            { name: 'Real-time Systems', level: 4 },
            { name: 'RTOS', level: 4 },
            { name: 'Bare Metal Programming', level: 5 },
            { name: 'IoT Development', level: 4 },
            { name: 'Sensor Integration', level: 5 }
        ]
    },
    {
        icon: FiZap,
        title: { en: 'Electrical Engineering', jp: '電気工学' },
        color: 'text-accent',
        bgColor: 'bg-accent/10',
        skills: [
            { name: 'High Voltage Systems', level: 5 },
            { name: 'Power Systems', level: 5 },
            { name: 'Circuit Analysis', level: 5 },
            { name: 'Signal Analysis', level: 4 },
            { name: 'Transmission Lines', level: 5 },
            { name: 'Power Transformers', level: 4 },
            { name: 'Circuit Breakers', level: 4 },
            { name: 'Electrical Testing', level: 5 },
            { name: 'Logic Control Units', level: 4 },
            { name: 'Hydropower Systems', level: 4 }
        ]
    },
    {
        icon: FaCode,
        title: { en: 'Software & Programming', jp: 'ソフトウェア・プログラミング' },
        color: 'text-success',
        bgColor: 'bg-success/10',
        skills: [
            { name: 'C Programming', level: 5 },
            { name: 'Embedded C', level: 5 },
            { name: 'Assembly Language', level: 3 },
            { name: 'HTML/CSS', level: 4 },
            { name: 'JavaScript', level: 4 },
            { name: 'Python', level: 4 },
            { name: 'Machine Learning', level: 3 },
            { name: 'Signal Processing', level: 4 },
            { name: 'Debugging', level: 5 },
            { name: 'Version Control', level: 4 }
        ]
    },
    {
        icon: FaWrench,
        title: { en: 'Tools & Design Software', jp: 'ツール・設計ソフトウェア' },
        color: 'text-warning',
        bgColor: 'bg-warning/10',
        skills: [
            { name: 'E2 Studio', level: 5 },
            { name: 'LT Spice', level: 5 },
            { name: 'CSiEDA5', level: 4 },
            { name: 'AutoCAD', level: 4 },
            { name: 'ArcGIS', level: 4 },
            { name: 'VS Code', level: 5 },
            { name: 'Oscilloscopes', level: 5 },
            { name: 'Logic Analyzers', level: 4 },
            { name: 'Multimeters', level: 5 },
            { name: 'Power Analyzers', level: 4 }
        ]
    }
];

export const projects: Project[] = [
    {
        title: { en: 'HAS2 - Crane Blind Spot Detection', jp: 'HAS2 - クレーン死角検知システム' },
        description: {
            en: 'Innovative device for detecting human blind spots in large cranes using OpenCV and fisheye image processing for real-time safety monitoring.',
            jp: 'OpenCVと魚眼画像処理を使用して、大型クレーンの死角にいる人間を検知し、リアルタイムで安全を監視する革新的なデバイス。'
        },
        bullets: {
            en: [
                'Engineered real-time human blind spot detection systems using OpenCV algorithms.',
                'Processed wide-angle fisheye lens inputs with dynamic distortion correction.',
                'Designed for rugged, large-scale construction crane environments.',
                'Improved site safety margins and visual monitoring coverage significantly.'
            ],
            jp: [
                'OpenCVアルゴリズムを用いたリアルタイム人物死角検知システムの構築。',
                '歪み補正処理を施した魚眼レンズ映像による広視野角の画像解析。',
                '過酷な大型建設用クレーン環境に適した高耐久仕様設計。',
                '現場の安全性向上と広範囲なリアルタイム監視による視認性の最大化。'
            ]
        },
        image: has2ProjectThumbnail,
        technologies: ['OpenCV', 'Computer Vision', 'Embedded Systems', 'Image Processing', 'Fisheye Correction'],
        github: '',
        demo: '',
        featured: true
    },
    {
        title: { en: 'AI Chat Application', jp: 'AIチャットアプリケーション' },
        description: { en: 'Real-time chat application with AI-powered translation for Japanese and English communication.', jp: '日本語と英語のコミュニケーションを支援するAI翻訳機能を備えたリアルタイムチャットアプリ。' },
        bullets: {
            en: [
                'Implemented instant messaging synchronization using WebSockets.',
                'Integrated OpenAI API for high-accuracy English-Japanese translation.',
                'Utilized Supabase for reactive database architecture and user auth.',
                'Built fully responsive, fast interface with Next.js and TypeScript.'
            ],
            jp: [
                'WebSocketを利用した瞬時双方向メッセージ同期。',
                '高精度な英日・日英翻訳のためのOpenAI APIの統合。',
                'Supabaseによるリアクティブなデータベース設計と安全なユーザー認証。',
                'Next.jsおよびTypeScriptによる高速でレスポンシブなユーザー体験。'
            ]
        },
        image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
        technologies: ['Next.js', 'OpenAI', 'WebSocket', 'Supabase', 'TypeScript'],
        github: 'https://github.com/sabinnmc',
        demo: '',
        featured: true
    },
    {
        title: { en: 'Task Management System', jp: 'タスク管理システム' },
        description: { en: 'Collaborative project management tool with Kanban boards and team analytics.', jp: 'カンバンボードとチーム分析機能を備えた共同プロジェクト管理ツール。' },
        bullets: {
            en: [
                'Built interactive drag-and-drop Kanban boards for fluid workflow tracking.',
                'Designed dynamic team performance and workflow analytics charts.',
                'Configured Socket.io for immediate collaboration synchronization.',
                'Structured scalable data storage using optimized MongoDB collections.'
            ],
            jp: [
                'ドラッグ＆ドロップ操作が可能な、直感的なカンバンボードの実装。',
                'チーム全体の生産性とタスク進捗状況のダイナミックチャート分析。',
                'Socket.ioによる複数ユーザー間のコラボレーション瞬時同期。',
                'MongoDBによるスケーラブルなデータベース設計とクエリの最適化。'
            ]
        },
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
        technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
        github: 'https://github.com/sabinnmc',
        demo: '',
        featured: false
    },
    {
        title: { en: 'Weather Analytics Dashboard', jp: '気象分析ダッシュボード' },
        description: { en: 'Real-time weather data visualization with predictive analytics for Japanese cities.', jp: '日本の各都市の予測分析機能を備えたリアルタイムの気象データ可視化ツール。' },
        bullets: {
            en: [
                'Visualized historical and real-time weather datasets with dynamic D3.js.',
                'Implemented predictive weather forecasting algorithms with Python/FastAPI.',
                'Optimized response caching via high-performance Redis database.',
                'Provided intuitive geographical data mapping and charts for main cities.'
            ],
            jp: [
                'D3.jsを用いたインタラクティブな気象データのリアルタイム可視化。',
                'PythonおよびFastAPIによる気象予測アルゴリズムと高性能API設計。',
                'Redisインメモリデータベースによる応答の高速化とキャッシュ最適化。',
                '主要な日本都市の地理情報と統合されたグラフィカルデータマッピング。'
            ]
        },
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
        github: 'https://github.com/sabinnmc',
        demo: '',
        featured: false
    }
];

export const experiences: Experience[] = [
    {
        title: { en: 'Embedded Systems Programmer', jp: '組み込みシステムプログラマー' },
        company: { en: 'Pal Giken Co., Ltd.', jp: '株式会社パル技研' },
        location: { en: 'Japan', jp: '日本' },
        period: { en: '2024 - Present', jp: '2024年 - 現在' },
        type: { en: 'Full-time', jp: '正社員' },
        description: { en: 'Working on embedded systems development with a team of 40 engineers, focusing on IoT applications, sensor systems, and microcontroller programming.', jp: '40名のエンジニアチームで組み込みシステム開発に従事し、IoTアプリケーション、センサーシステム、マイクロコントローラプログラミングに焦点を当てています。' },
        achievements: [
            { en: 'Testing and debugging camera applications for public vehicle image detection systems', jp: '公共車両画像検出システム用カメラアプリケーションのテストとデバッグ' },
            { en: 'Testing automatic object/obstacle detection from cranes using machine learning', jp: '機械学習を使用したクレーンの自動物体・障害物検出のテスト' },
            { en: 'Chattering signal analysis using Renesas microcontrollers and E2 Studio', jp: 'ルネサスマイクロコントローラとE2 Studioを使用したチャタリング信号解析' },
            { en: 'Electrical design using LT SPICE and CSiEDA software', jp: 'LT SPICEとCSiEDAソフトウェアを使用した電気設計' },
            { en: 'Laser sensor testing and validation', jp: 'レーザーセンサーのテストと検証' }
        ],
        technologies: ['Renesas MCU', 'R7FA6T1AD3CFP', 'E2 Studio', 'LT SPICE', 'CSiEDA', 'VS Code', 'Machine Learning']
    },
    {
        title: { en: 'C Programming Instructor', jp: 'Cプログラミング講師' },
        company: { en: 'Cosmic International Academy', jp: 'コズミック国際アカデミー' },
        location: { en: 'Nepal', jp: 'ネパール' },
        period: { en: '2021 - 2023', jp: '2021年 - 2023年' },
        type: { en: 'Full-time', jp: '正社員' },
        description: { en: 'Teaching programming fundamentals to students as part of a 60-member faculty team, focusing on C programming and web development basics.', jp: '60名の教員チームの一員として学生にプログラミングの基礎を教え、Cプログラミングとウェブ開発の基礎に焦点を当てています。' },
        achievements: [
            { en: 'Developed comprehensive C programming curriculum', jp: '包括的なCプログラミングカリキュラムの開発' },
            { en: 'Taught HTML, CSS, and JavaScript fundamentals', jp: 'HTML、CSS、JavaScriptの基礎の指導' },
            { en: 'Mentored students in programming concepts and best practices', jp: 'プログラミング概念とベストプラクティスの学生指導' },
            { en: 'Contributed to academic program development', jp: '学術プログラム開発への貢献' }
        ],
        technologies: ['C Programming', 'HTML', 'CSS', 'JavaScript', 'Academic Teaching']
    },
    {
        title: { en: 'Site Engineer', jp: '現場エンジニア' },
        company: { en: 'ADMC Engineering Company', jp: 'ADMCエンジニアリング株式会社' },
        location: { en: 'Nepal', jp: 'ネパール' },
        period: { en: '2018 - 2020', jp: '2018年 - 2020年' },
        type: { en: 'Full-time', jp: '正社員' },
        description: { en: 'Led electrical engineering projects for power transmission systems across Nepal, working with a 20-member engineering team on large-scale infrastructure projects.', jp: 'ネパール全土の電力伝送システムの電気工学プロジェクトをリードし、大規模インフラプロジェクトで20名のエンジニアチームと協力しました。' },
        achievements: [
            { en: 'Conducted 220kV transmission line tower surveys and design reports', jp: '220kV送電線鉄塔調査と設計報告書の実施' },
            { en: 'Managed power purchase agreements for 164MW Kaligandaki Hydropower transmission', jp: '164MWカリガンダキ水力発電送電の電力購入契約の管理' },
            { en: 'Surveyed and designed 132kV double circuit transmission lines', jp: '132kV複回線送電線の調査と設計' },
            { en: 'Completed distribution voltage surveys across 18 different cities in Nepal', jp: 'ネパールの18の異なる都市での配電電圧調査の完了' },
            { en: 'Designed 11kV and 33kV primary distribution high voltage lines', jp: '11kVおよび33kV一次配電高圧線の設計' }
        ],
        technologies: ['Power Systems', 'Transmission Lines', 'Electrical Design', 'Project Management', 'Field Surveys']
    },
    {
        title: { en: 'Electrical Engineer Intern', jp: '電気エンジニアインターン' },
        company: { en: 'Mewa Khola Hydropower Company', jp: 'メワコーラ水力発電会社' },
        location: { en: 'Nepal', jp: 'ネパール' },
        period: { en: '2019', jp: '2019年' },
        type: { en: 'Internship', jp: 'インターンシップ' },
        description: { en: 'Gained hands-on experience in hydropower plant operations as part of a 9-member technical team, focusing on electrical systems and control units.', jp: '9名の技術チームの一員として水力発電所の運営実習を行い、電気システムと制御装置に焦点を当てました。' },
        achievements: [
            { en: 'Operated hydropower governors and monitoring systems', jp: '水力発電ガバナーと監視システムの操作' },
            { en: 'Installed and monitored Logic Control Units (LCU)', jp: 'ロジック制御ユニット（LCU）の設置と監視' },
            { en: 'Conducted circuit breaker testing and maintenance', jp: '回路ブレーカーのテストとメンテナンスの実施' },
            { en: 'Performed CT and PT testing procedures', jp: 'CTおよびPTテスト手順の実行' },
            { en: 'Monitored power transformer operations and testing', jp: '電力変圧器の運転とテストの監視' }
        ],
        technologies: ['Hydropower Systems', 'Logic Control Units', 'Circuit Breakers', 'Power Transformers', 'Electrical Testing']
    }
];

export interface HeroData {
    greeting: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
    location: LocalizedString;
    ctaProjects: LocalizedString;
    ctaContact: LocalizedString;
}

export interface AboutData {
    title: LocalizedString;
    description: LocalizedString;
    professionalApproach: {
        title: LocalizedString;
        content: LocalizedString;
    };
    technicalExpertise: {
        title: LocalizedString;
        content: LocalizedString;
    };
    whyJapan: {
        title: LocalizedString;
        content: LocalizedString;
    };
}

export interface EducationItem {
    title: LocalizedString;
    subtitle: LocalizedString;
    description: LocalizedString;
    type: 'degree' | 'certification';
}

export interface EducationSkills {
    title: LocalizedString;
    description: LocalizedString;
    skills: string[];
}

export const heroData: HeroData = {
    greeting: { en: "Hello, I'm", jp: "こんにちは、" },
    title: { en: "Embedded Systems Developer", jp: "組み込みシステム開発者" },
    subtitle: { en: "Embedded systems engineer passionate about IoT, microcontrollers, and hardware-software integration", jp: "IoT、マイクロコントローラー、ハードウェア・ソフトウェア統合に情熱を注ぐ組み込みシステムエンジニア" },
    location: { en: "Based in Japan", jp: "日本在住" },
    ctaProjects: { en: "View Projects", jp: "プロジェクトを見る" },
    ctaContact: { en: "Get in Touch", jp: "お問い合わせ" }
};

export const aboutData: AboutData = {
    title: { en: "About Me", jp: "私について" },
    description: { en: "I'm a dedicated embedded systems developer with expertise in microcontroller programming and hardware-software integration. Currently based in Japan, I specialize in IoT development, sensor systems, and embedded applications.", jp: "マイクロコントローラープログラミングとハードウェア・ソフトウェア統合の専門知識を持つ熱心な組み込みシステム開発者です。現在日本を拠点とし、IoT開発、センサーシステム、組み込みアプリケーションを専門としています。" },
    professionalApproach: {
        title: { en: "Professional Approach", jp: "プロフェッショナルな姿勢" },
        content: { en: "I enjoy leveraging my analytical skills in project management and actively tackling challenges. I am highly focused and work as a strong team player, valuing professionalism and discipline. Currently specializing in embedded systems development and signal analysis as an IT engineer, I have deep knowledge of both high-voltage and low-voltage systems.", jp: "私はプロジェクト管理において分析スキルを活かし、課題に積極的に取り組むことを楽しんでいます。非常に集中力があり、強いチームプレイヤーとして、プロ意識と規律を重んじる姿勢を大切にしています。現在、ITエンジニアとして組み込みシステムの開発と信号分析を専門にしており、高電圧および低電圧システムについて深い知識を有しています。" }
    },
    technicalExpertise: {
        title: { en: "Technical Expertise", jp: "技術的専門知識" },
        content: { en: "Throughout my career, I have utilized various software and tools including AutoCAD and ArcGIS for electrical design of transmission line surveys, E2 Studio for embedded programming modules, and LT Spice & CSiEDA5 for circuit design. I have experience leading teams through high-voltage system research and design.", jp: "これまでのキャリアでは、AutoCADとArcGISソフトウェアを使用した送電線調査計画の電気設計、E2 Studioソフトウェアを使用した信号解析用の組み込みプログラミングモジュール作成、LT SpiceおよびCSiEDA5ソフトウェアを使用した回路およびデバイスの電気設計など、さまざまなソフトウェアやツールを活用してきました。" }
    },
    whyJapan: {
        title: { en: "Why Japan?", jp: "なぜ日本なのか？" },
        content: { en: "I am drawn to Japan because of the infinite opportunities it offers, especially in technology and engineering. Japan is globally renowned for excellent engineering and innovation, and I want to learn and grow at the forefront of this field. I strongly resonate with Japanese culture that values diligence and discipline.", jp: "日本には無限のチャンスが広がっており、特にテクノロジーとエンジニアリングに対する私の情熱が強く引き寄せられています。日本は世界的に見ても優れたエンジニアリングとイノベーションを誇っており、その最前線で学び、成長したいと考えています。また、勤勉さや規律を大切にする日本の文化に強く共感しています。" }
    }
};

export const educationData: EducationItem[] = [
    {
        title: { en: 'Bachelor of Engineering', jp: '工学士' },
        subtitle: { en: 'Electrical Engineering', jp: '電気工学' },
        description: { en: 'My electrical engineering background provides a strong foundation in problem-solving, systems thinking, and technical analysis that I apply to embedded systems development.', jp: '電気工学のバックグラウンドは、問題解決、システム思考、技術分析において強固な基盤を提供し、組み込みシステム開発に活かしています。' },
        type: 'degree'
    },
    {
        title: { en: 'Nepal Engineering Council Certified Electrical Engineer', jp: 'ネパール工学評議会認定電気技術者' },
        subtitle: { en: 'Professional Certification', jp: '専門資格' },
        description: { en: 'Nepal Engineering Council(NEC) certified electrical engineer with professional credentials for engineering practice in Nepal.', jp: 'ネパール工学評議会（NEC）認定の電気技術者であり、ネパールにおける工学実務のための専門資格を有しています。' },
        type: 'certification'
    }
];

export const educationSkills: EducationSkills = {
    title: { en: 'Technical Foundation', jp: '技術的基盤' },
    description: { en: 'My engineering education built a strong foundation in analytical thinking, systems understanding, and continuous learning—shaping me into a versatile, real-world problem solver.', jp: '工学教育を通じて、分析的思考力、システム理解力、そして継続的な学習姿勢という強固な基盤が築かれ、現実世界の課題に柔軟に対応できる問題解決者として成長しました。' },
    skills: [
        'Circuit Analysis',
        'Systems Engineering',
        'Problem Solving',
        'Mathematical Modeling',
        'Project Management',
        'Technical Documentation'
    ]
};

export const contactConfig = {
    // Obfuscated email using standard base64 encoded string: "sabinnmc@gmail.com"
    encodedEmail: "c2FiaW5ubWNAZ21haWwuY29t",
    github: "https://github.com/sabinnmc",
    linkedin: "https://linkedin.com/in/sabin-bhandari-nmc",
    location: "Japan",
    formspreeId: "" // Optional Formspree Form ID (e.g. "xoqpgrzo") to enable direct form submissions
};
