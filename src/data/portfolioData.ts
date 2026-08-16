import { IconType } from "react-icons";
import { FiZap, FiCpu } from "react-icons/fi";
import { FaCode, FaWrench } from "react-icons/fa6";
import has2ProjectThumbnail from "@/assets/has2-project.webp";

export type LocalizedString = {
    en: string;
    jp: string;
};

export interface Skill {
    name: LocalizedString;
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
            { name: { en: 'Renesas MCU', jp: 'ルネサス製マイコン' }, level: 5 },
            { name: { en: 'Verdin-iMX8M Plus', jp: 'バルダン-iMX8M Plus' }, level: 5 },
            { name: { en: 'IoT Development', jp: 'IoT開発' }, level: 4 },
            { name: { en: 'Sensor Integration', jp: 'センサー統合' }, level: 5 }
        ]
    },
    {
        icon: FiZap,
        title: { en: 'Electrical Engineering', jp: '電気工学' },
        color: 'text-accent',
        bgColor: 'bg-accent/10',
        skills: [
            { name: { en: 'High Voltage Systems', jp: '高電圧システム' }, level: 5 },
            { name: { en: 'Power Systems', jp: '電力システム' }, level: 5 },
            { name: { en: 'Circuit Analysis', jp: '回路解析' }, level: 5 },
            { name: { en: 'Signal Analysis', jp: '信号解析' }, level: 4 },
            { name: { en: 'Transmission Lines', jp: '送電線' }, level: 5 },
            { name: { en: 'Power Transformers', jp: '電力用変圧器' }, level: 4 },
            { name: { en: 'Circuit Breakers', jp: '遮断器' }, level: 4 },
            { name: { en: 'Electrical Testing', jp: '電気試験' }, level: 5 },
            { name: { en: 'Logic Control Units', jp: 'ロジックコントロールユニット' }, level: 4 },
            { name: { en: 'Hydropower Systems', jp: '水力発電システム' }, level: 4 }
        ]
    },
    {
        icon: FaCode,
        title: { en: 'Software & Programming', jp: 'ソフトウェア／プログラミング' },
        color: 'text-success',
        bgColor: 'bg-success/10',
        skills: [
            { name: { en: 'C Programming', jp: 'C言語' }, level: 5 },
            { name: { en: 'Embedded C', jp: '組み込みC' }, level: 5 },
            { name: { en: 'Assembly Language', jp: 'アセンブリ言語' }, level: 3 },
            { name: { en: 'HTML/CSS', jp: 'HTML/CSS' }, level: 4 },
            { name: { en: 'JavaScript', jp: 'JavaScript' }, level: 4 },
            { name: { en: 'Python', jp: 'Python' }, level: 4 },
            { name: { en: 'Computer Vision', jp: 'コンピュータビジョン' }, level: 3 },
            { name: { en: 'YOLOX', jp: 'YOLOX' }, level: 4 },
            { name: { en: 'Signal Processing', jp: '信号処理' }, level: 4 },
            { name: { en: 'Debugging', jp: 'デバッグ' }, level: 5 },
            { name: { en: 'Linux', jp: 'リナックス' }, level: 4 },
            { name: { en: 'Docker', jp: 'ドッカー' }, level: 4 },
            { name: { en: 'Machine learning', jp: '機械学習' }, level: 4 }
        ]
    },
    {
        icon: FaWrench,
        title: { en: 'Tools & Design Software', jp: '開発・設計ツール' },
        color: 'text-warning',
        bgColor: 'bg-warning/10',
        skills: [
            { name: { en: 'e² studio', jp: 'e² studio' }, level: 5 },
            { name: { en: 'LTspice', jp: 'LTspice' }, level: 5 },
            { name: { en: 'CSiEDA5', jp: 'CSiEDA5' }, level: 4 },
            { name: { en: 'AutoCAD', jp: 'AutoCAD' }, level: 4 },
            { name: { en: 'ArcGIS', jp: 'ArcGIS' }, level: 4 },
            { name: { en: 'VS Code', jp: 'VS Code' }, level: 5 },
            { name: { en: 'Oscilloscopes', jp: 'オシロスコープ' }, level: 5 },
            { name: { en: 'Logic Analyzers', jp: 'ロジックアナライザ' }, level: 4 },
            { name: { en: 'Multimeters', jp: 'マルチメータ' }, level: 5 },
            { name: { en: 'Power Analyzers', jp: '電力アナライザ' }, level: 4 }
        ]
    }
];

export const projects: Project[] = [
    {
        title: { en: 'HAS2 - Crane Blind Spot Detection', jp: 'HAS2 - クレーン死角検知システム' },
        description: {
            en: 'Innovative device for detecting human blind spots in large cranes using OpenCV and fisheye image processing for real-time safety monitoring.',
            jp: 'OpenCVによる魚眼画像処理を用いて、大型クレーンの死角にいる人物を検知し、現場の安全をリアルタイムで監視する装置。'
        },
        bullets: {
            en: [
                'Engineered real-time human blind spot detection systems using OpenCV algorithms.',
                'Processed wide-angle fisheye lens inputs with dynamic distortion correction.',
                'Designed for rugged, large-scale construction crane environments.',
                'Improved site safety margins and visual monitoring coverage significantly.'
            ],
            jp: [
                'OpenCVを用い、クレーンの死角にいる人物をリアルタイムで検知するシステムを開発。',
                '魚眼レンズ映像に動的な歪み補正を適用し、広角画像を処理。',
                '大型建設クレーンの過酷な使用環境を想定した堅牢設計。',
                '監視範囲を大幅に拡大し、現場の安全性と視認性を向上。'
            ]
        },
        image: has2ProjectThumbnail,
        technologies: ['YOLOX Fine-Tuning', 'Computer Vision', 'Embedded Systems', 'Image Processing'],
        github: '',
        demo: '',
        featured: true
    }
];

export const experiences: Experience[] = [
    {
        title: { en: 'Embedded System Engineer', jp: '組み込みシステムエンジニア' },
        company: { en: 'Pal Giken Co., Ltd.', jp: '株式会社パル技研' },
        location: { en: 'Takamatsu, Kagawa, Japan', jp: '日本・香川県高松市' },
        period: { en: '2024 - Present', jp: '2024年～現在' },
        type: { en: 'Full-time', jp: 'フルタイム' },
        description: { en: 'Working on embedded systems development with a team of 40 engineers, focusing on IoT applications, sensor systems, and microcontroller programming.', jp: '40名規模のエンジニアチームで組み込みシステム開発に従事し、IoTアプリケーション、センサーシステム、マイコンプログラミングを中心に担当しています。' },
        achievements: [
            { en: 'Fine tuned RTMPose for 8 keypoint container detection of truck/trailer in real time for parking support on warehouse', jp: '倉庫での駐車支援向けに、トラック／トレーラーの8キーポイントコンテナ検出用RTMPoseをリアルタイムでファインチューニング' },
            { en: 'Multi-Camera Alignment & Calibration: Designed a homography-based system to align dual fisheye camera feeds, enabling precise perspective registration for container tracking.', jp: 'マルチカメラ位置合わせ・キャリブレーション：2台の魚眼カメラ映像を整合するホモグラフィベースのシステムを設計し、コンテナ追跡に必要な高精度な透視変換位置合わせを実現。' },
            { en: 'Fine-tuned and deployed YOLOX for real-time human detection on fisheye camera images, achieving 74% mAP', jp: '魚眼カメラ画像を用いたリアルタイム人物検出向けYOLOXモデルをファインチューニング・デプロイし、mAP 74%を達成' },
            { en: 'Testing and debugging camera applications for public vehicle image detection systems', jp: '車両画像検出システム向けカメラアプリケーションのテスト・デバッグ' },
            { en: 'Testing automatic object/obstacle detection from cranes using machine learning', jp: '機械学習を用いたクレーン向け物体・障害物自動検知機能のテスト' },
            { en: 'Chattering signal analysis using Renesas microcontrollers and e² studio', jp: 'ルネサス製マイコンとe² studioを用いたチャタリング信号の解析' },
            { en: 'Electrical design using LTspice and CSiEDA software', jp: 'LTspiceとCSiEDAを用いた電気設計' },
            { en: 'Laser sensor testing and validation', jp: 'レーザーセンサーの試験および検証' }
        ],
        technologies: ['RTMPose', 'YOLOX', 'Homography', 'Fisheye Cameras', 'Object Tracking', 'Machine Learning', 'Renesas MCU', 'R7FA6T1AD3CFP', 'e² studio', 'LTspice', 'CSiEDA', 'VS Code']
    },
    {
        title: { en: 'Educator', jp: '教育者' },
        company: { en: 'Cosmic International Academy', jp: 'Cosmic International Academy' },
        location: { en: 'Nepal', jp: 'ネパール' },
        period: { en: '2021 - 2023', jp: '2021年～2023年' },
        type: { en: 'Full-time', jp: 'フルタイム' },
        description: { en: 'Teaching programming fundamentals to students as part of a 60-member faculty team, focusing on C programming and web development basics.', jp: '60名規模の教員組織の一員として、C言語およびWeb開発を中心に、学生へプログラミングの基礎を指導しました。' },
        achievements: [
            { en: 'Developed comprehensive C programming curriculum', jp: '体系的なC言語カリキュラムを開発' },
            { en: 'Taught HTML, CSS, and JavaScript fundamentals', jp: 'HTML、CSS、JavaScriptの基礎を指導' },
            { en: 'Mentored students in programming concepts and best practices', jp: 'プログラミングの概念と実践的な開発手法について学生を指導' },
            { en: 'Contributed to academic program development', jp: '教育プログラムの開発に貢献' }
        ],
        technologies: ['C Programming', 'HTML', 'CSS', 'JavaScript', 'Academic Teaching']
    },
    {
        title: { en: 'Project Engineer', jp: 'プロジェクトエンジニア' },
        company: { en: 'ADMC Engineering Company', jp: 'ADMC Engineering Company' },
        location: { en: 'Nepal', jp: 'ネパール' },
        period: { en: '2018 - 2020', jp: '2018年～2020年' },
        type: { en: 'Full-time', jp: 'フルタイム' },
        description: { en: 'Led electrical engineering projects for power transmission systems across Nepal, working with a 20-member engineering team on large-scale infrastructure projects.', jp: 'ネパール各地の送電システムに関する電気工学プロジェクトを主導し、20名規模のエンジニアチームとともに大規模インフラ案件に取り組みました。' },
        achievements: [
            { en: 'Conducted 220kV transmission line tower surveys and design reports', jp: '220kV送電線鉄塔の現地調査および設計報告書の作成' },
            { en: 'Conducted site surveys for the 220 kV double-circuit transmission line serving the 164 MW Kaligandaki Gorge Hydroelectric Project', jp: '164MWカリガンダキ・ゴージ水力発電プロジェクト向け220kV複回線送電線の現地調査を実施' },
            { en: 'Surveyed and designed 132kV double circuit transmission lines', jp: '132kV複回線送電線の調査・設計' },
            { en: 'Completed distribution voltage surveys across 18 different cities in Nepal', jp: 'ネパール国内18都市における配電電圧調査' },
            { en: 'Designed 11kV and 33kV primary distribution high voltage lines', jp: '11kVおよび33kVの高圧一次配電線を設計' }
        ],
        technologies: ['Power Systems', 'Transmission Lines', 'Electrical Design', 'Project Management', 'Field Surveys']
    }
];

export interface HeroData {
    name: LocalizedString;
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
}

export interface EducationItem {
    title: LocalizedString;
    subtitle: LocalizedString;
    description: LocalizedString;
    type: 'degree' | 'certification';
}

export const heroData: HeroData = {
    name: { en: "Sabin Bhandari", jp: "バンダリ　サビン" },
    greeting: { en: "Hello, I'm", jp: "はじめまして" },
    title: { en: "Embedded System Engineer", jp: "組み込みシステムエンジニア" },
    subtitle: { en: "Embedded systems engineer passionate about IoT, microcontrollers, and hardware-software integration", jp: "IoT、マイコン、ハードウェア／ソフトウェア統合を強みとする組み込みシステムエンジニア" },
    location: { en: "Based in Takamatsu, Kagawa", jp: "香川県高松市を拠点に活動" },
    ctaProjects: { en: "View Projects", jp: "プロジェクトを見る" },
    ctaContact: { en: "Get in Touch", jp: "お問い合わせ" }
};

export const aboutData: AboutData = {
    title: { en: "About Me", jp: "プロフィール" },
    description: { en: "I'm a dedicated embedded systems engineer with expertise in microcontroller programming and hardware-software integration. Currently based in Takamatsu, Kagawa, I specialize in IoT development, sensor systems, and embedded applications.", jp: "マイコンプログラミングとハードウェア／ソフトウェア統合を強みとする組み込みシステムエンジニアです。現在は香川県高松市を拠点に、IoT開発、センサーシステム、組み込みアプリケーションを専門としています。" },
    professionalApproach: {
        title: { en: "Professional Approach", jp: "仕事への姿勢" },
        content: { en: "I enjoy leveraging my analytical skills in project management and actively tackling challenges. I am highly focused and work as a strong team player, valuing professionalism and discipline. Currently specializing in embedded systems development and signal analysis as an IT engineer, I have deep knowledge of both high-voltage and low-voltage systems.", jp: "プロジェクト管理では分析力を活かし、課題に主体的に取り組みます。高い集中力を保ちながらチームの一員として協働し、プロ意識と規律を重視しています。現在はITエンジニアとして組み込みシステム開発と信号解析を専門としており、高圧・低圧の電気システムに関する深い知識を有しています。" }
    },
    technicalExpertise: {
        title: { en: "Technical Expertise", jp: "専門技術" },
        content: { en: "Throughout my career, I have utilized various software and tools including AutoCAD and ArcGIS for electrical design of transmission line surveys, e² studio for embedded programming modules, and LTspice & CSiEDA5 for circuit design. I have experience leading teams through high-voltage system research and design.", jp: "これまで、送電線調査に関する電気設計ではAutoCADとArcGIS、組み込みプログラミングモジュールの開発ではe² studio、回路設計ではLTspiceとCSiEDA5など、多様なソフトウェアやツールを活用してきました。また、高圧電力システムの調査・設計においてチームを率いた経験があります。" }
    }
};

export const educationData: EducationItem[] = [
    {
        title: { en: 'Bachelor of Engineering', jp: '学士（工学）' },
        subtitle: { en: 'Electrical Engineering', jp: '電気工学' },
        description: { en: 'My electrical engineering background provides a strong foundation in problem-solving, systems thinking, and technical analysis that I apply to embedded systems development.', jp: '電気工学の学習を通じて培った問題解決力、システム思考、技術分析力を、組み込みシステム開発に活かしています。' },
        type: 'degree'
    },
    {
        title: { en: 'Nepal Engineering Council Certified Electrical Engineer', jp: 'ネパール工学評議会（NEC）認定電気技術者' },
        subtitle: { en: 'Professional Certification', jp: '専門資格' },
        description: { en: 'Nepal Engineering Council(NEC) certified electrical engineer with professional credentials for engineering practice in Nepal.', jp: 'ネパール工学評議会（NEC）から、ネパール国内で電気工学業務に従事するための専門資格を取得しています。' },
        type: 'certification'
    }
];

export const contactConfig = {
    // Obfuscated email using standard base64 encoded string: "bhandari.sabin.nmc@gmail.com"
    encodedEmail: "YmhhbmRhcmkuc2FiaW4ubm1jQGdtYWlsLmNvbQ==",
    github: "https://github.com/sabinnmc",
    linkedin: "https://linkedin.com/in/sabin-bhandari-nmc",
    location: "Takamatsu, Kagawa, Japan",
    formspreeId: "" // Optional Formspree Form ID (e.g. "xoqpgrzo") to enable direct form submissions
};
