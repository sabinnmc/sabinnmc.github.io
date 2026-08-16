import { useState } from 'react';
import type { IconType } from 'react-icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { skillCategories } from '@/data/portfolioData';
import { FiCpu, FiZap } from 'react-icons/fi';
import { FaCode, FaWrench } from 'react-icons/fa6';
import { LuScanSearch, LuBuilding2, LuCompass, LuChevronDown, LuChevronUp, LuInfo } from 'react-icons/lu';

interface CoreSkill {
  icon: IconType;
  title: { en: string; jp: string };
  desc: { en: string; jp: string };
  depthPercent: number;
  badge: { en: string; jp: string };
  colorClass: string;
  bgClass: string;
}

export const SkillsSection = () => {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  // Top 6-8 strongest technical specializations for Embedded Systems & Engineering depth
  const coreSpecializations: CoreSkill[] = [
    {
      icon: FiCpu,
      title: { en: 'Renesas MCU & e² studio', jp: 'ルネサスマイコン／e² studio' },
      desc: {
        en: 'Firmware optimization, register-level chattering signal analysis, and hardware debugging using e² studio on R7FA microcontrollers.',
        jp: 'R7FAマイコンを対象とした、レジスタレベルのチャタリング信号解析、ファームウェアの最適化、およびe² studioを用いた実機デバッグ。'
      },
      depthPercent: 95,
      badge: { en: 'Microcontrollers', jp: 'マイコン' },
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/10'
    },
    {
      icon: FaCode,
      title: { en: 'Embedded System C/C++', jp: 'ベアメタル開発／組み込みC' },
      desc: {
        en: 'Developing ultra-low overhead register drivers, assembly interfaces, and highly deterministic systems in C/Embedded C.',
        jp: 'C／組み込みCによる低オーバーヘッドのレジスタ制御ドライバ、アセンブリ連携インターフェース、および決定論的システムの開発。'
      },
      depthPercent: 95,
      badge: { en: 'Firmware', jp: 'ファームウェア' },
      colorClass: 'text-primary',
      bgClass: 'bg-primary/10'
    },
    {
      icon: LuScanSearch,
      title: { en: 'Computer Vision & YOLOX', jp: 'コンピュータビジョン／YOLOX' },
      desc: {
        en: 'Fine-tuning and deploying YOLOX for real-time human detection on fisheye camera feeds, with homography-based multi-camera alignment and object tracking.',
        jp: '魚眼カメラ映像を用いたリアルタイム人物検出向けYOLOXモデルのファインチューニングとデプロイ、およびホモグラフィによるマルチカメラ位置合わせ・物体追跡。'
      },
      depthPercent: 85,
      badge: { en: 'Vision AI', jp: '画像認識AI' },
      colorClass: 'text-cyan-400',
      bgClass: 'bg-cyan-500/10'
    },
    {
      icon: FaWrench,
      title: { en: 'Circuit Simulation & LTspice', jp: '回路シミュレーション／LTspice' },
      desc: {
        en: 'Designing high/low voltage electrical systems, performing analog circuit analysis, and run-time validation via LTspice modeling.',
        jp: '高圧・低圧電気システムの設計、アナログ回路解析、およびLTspiceモデルを用いた動作検証。'
      },
      depthPercent: 90,
      badge: { en: 'Electrical Design', jp: '電気回路設計' },
      colorClass: 'text-amber-400',
      bgClass: 'bg-amber-500/10'
    },
    {
      icon: LuBuilding2,
      title: { en: 'High Voltage & Grid Engineering', jp: '高電圧送電／電力系統工学' },
      desc: {
        en: 'Practical surveying and electrical planning of 220kV/132kV transmission lines, substations, and industrial power distribution.',
        jp: '220kV・132kV送電線、変電設備、産業用配電網の現地調査および電気設計。'
      },
      depthPercent: 90,
      badge: { en: 'Power Systems', jp: '電力システム' },
      colorClass: 'text-sky-400',
      bgClass: 'bg-sky-500/10'
    },
    {
      icon: LuCompass,
      title: { en: 'Sensor Integration & Signal Analysis', jp: 'センサー統合／信号解析' },
      desc: {
        en: 'Interfacing laser sensors and high-speed cameras, analyzing chattering signals, and using logic analyzers/oscilloscopes.',
        jp: 'レーザーセンサーおよび高速度カメラのインターフェース設計、チャタリング信号の波形解析、ロジックアナライザ・オシロスコープを用いた評価。'
      },
      depthPercent: 95,
      badge: { en: 'Hardware testing', jp: 'ハードウェア評価・信号解析' },
      colorClass: 'text-rose-400',
      bgClass: 'bg-rose-500/10'
    }
  ];

  const learningSkills = [
    t('skills.learning.fpga'),
    t('skills.learning.pcb'),
    t('skills.learning.automation'),
    t('skills.learning.wireless'),
    t('skills.learning.power')
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text bg-gradient-to-r from-emerald-400 to-primary bg-clip-text text-transparent">{t('skills.title')}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-primary mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {t('skills.core_subtitle')}
          </p>
        </div>

        {/* Embedded Systems Recruiter Tip / Alert */}
        <div className="mb-12 max-w-3xl mx-auto p-4 bg-background-secondary/80 border border-emerald-500/15 rounded-xl flex gap-3.5 items-start text-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <LuInfo className="w-4.5 h-4.5" />
          </div>
          <div className="space-y-1 text-slate-400">
            <p className="font-semibold text-slate-200">
              {t('skills.core_panel.title')}
            </p>
            <p className="leading-relaxed">
              {t('skills.core_panel.description')}
            </p>
          </div>
        </div>

        {/* Core Specialization Premium Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreSpecializations.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-background-tertiary/20 hover:bg-background-tertiary/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between group hover:translate-y-[-4px]"
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 ${skill.bgClass} ${skill.colorClass} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="border-white/10 text-slate-400 text-[10px] font-medium tracking-wide">
                      {skill.badge[language]}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300 mb-3">
                    {skill.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {skill.desc[language]}
                  </p>
                </div>

                {/* Precision Horizontal Progress Bar */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center text-[11px] font-semibold">
                    <span className="text-slate-500">{t('skills.expertise_depth')}</span>
                    <span className={`${skill.colorClass}`}>{skill.depthPercent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900/60 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-emerald-500 to-primary`}
                      style={{ width: `${skill.depthPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Section Dividers */}
        <div className="relative border-t border-white/5 pt-12 text-center max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-slate-200">{t('skills.full_inventory')}</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              {t('skills.inventory_description')}
            </p>
          </div>

          {/* Toggle Trigger */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 bg-background-tertiary/60 hover:bg-background-tertiary border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-[1.03] shadow-lg cursor-pointer"
          >
            {isExpanded ? (
              <>
                {t('skills.show_less')}
                <LuChevronUp className="w-4.5 h-4.5" />
              </>
            ) : (
              <>
                {t('skills.show_all')}
                <LuChevronDown className="w-4.5 h-4.5" />
              </>
            )}
          </button>

          {/* Collapsible Drawer - Animate open smoothly */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden mt-12 text-left ${isExpanded ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
          >
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              {skillCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-background-tertiary/10 border border-white/5 rounded-2xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center shrink-0`}>
                          <CategoryIcon className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <h4 className="font-bold text-slate-200 text-base">
                          {category.title[language]}
                        </h4>
                      </div>

                      {/* Skills Badges Flow - Beautiful, clean, space-saving chips */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-2.5 px-3 py-1.5 bg-background-secondary/40 hover:bg-background-secondary/80 transition-all duration-200 rounded-lg border border-white/5 group/chip"
                          >
                            <span className="text-xs text-slate-300 group-hover/chip:text-slate-100 font-medium">{skill.name[language]}</span>
                            <div className="flex gap-0.5 shrink-0">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1 h-1 rounded-full ${i < skill.level ? 'bg-emerald-400' : 'bg-slate-700/60'}`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Original Additional Skills Banner - Flattened and minimal */}
            <div className="mt-12 p-6 bg-background-tertiary/10 border border-white/5 rounded-2xl text-center">
              <h4 className="text-base font-bold text-slate-200 mb-4">
                {t('skills.learning_title')}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {learningSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3.5 py-1.5 border-emerald-500/25 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};