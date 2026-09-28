import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import syntheticImage from '@/website_rtmpose/synthetic-example.png';
import realPrediction from '@/website_rtmpose/real-prediction.webp';
import accuracyChart from '@/website_rtmpose/accuracy_chart.png';
import accuracyChartJa from '@/website_rtmpose/accuracy_chart_ja.png';

const copy = {
  en: {
    eyebrow: 'Computer vision · Synthetic-to-real learning',
    title: 'Truck Container Keypoint Detection',
    subtitle: 'Adapting RTMPose from synthetic training data to real truck images.',
    description: 'I adapted RTMPose to estimate eight truck-container corner keypoints, combining synthetic-data training with real-image fine-tuning for warehouse parking-support applications.',
    synthetic: 'Synthetic training data',
    syntheticAlt: 'Synthetic truck-container image used as a training-data example',
    prediction: 'Real-image prediction',
    predictionAlt: 'Real truck-container image with eight model-predicted corner keypoints and connecting edges',
    metric: 'Best validation AP · 0–100 points',
    results: 'View results',
    chartAlt: 'Validation AP and training accuracy across 80 epochs; lines show ten-epoch averages',
    note: 'Best validation AP: 78.22 at epoch 69. Curves show 10-epoch averages; headline metrics use the original logged values. Training accuracy is separate from validation performance.',
  },
  jp: {
    eyebrow: 'コンピュータビジョン · 合成データから実環境への学習',
    title: 'トラックコンテナのキーポイント検出',
    subtitle: '合成データで学習したRTMPoseを実際のトラック画像に適応。',
    description: '倉庫での駐車支援に向け、RTMPoseをトラックコンテナの8頂点の推定に適応させました。合成データによる学習と実画像でのファインチューニングを組み合わせています。',
    synthetic: '合成学習データ',
    syntheticAlt: '学習データの例として使用したトラックコンテナの合成画像',
    prediction: '実画像での推定結果',
    predictionAlt: 'モデルが推定した8頂点と接続線を表示した実際のトラックコンテナ画像',
    metric: '検証APの最高値 · 0〜100ポイント',
    results: '結果を見る',
    chartAlt: '80エポックの検証APと学習精度。曲線は10エポックごとの平均値',
    note: '検証APの最高値は69エポック目の78.22。曲線は10エポックごとの平均値、主要指標は元のログの値を使用しています。学習精度と検証性能は別の指標です。',
  },
};

export const RTMPoseProject = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const images = [
    { src: syntheticImage, alt: text.syntheticAlt, caption: text.synthetic },
    { src: realPrediction, alt: text.predictionAlt, caption: text.prediction },
  ];

  return (
    <article id="rtmpose-project" aria-labelledby="rtmpose-title" className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-background-tertiary/20 shadow-xl shadow-black/40">
      <header className="px-5 pt-7 pb-6 sm:px-10 sm:pt-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">{text.eyebrow}</p>
        <h3 id="rtmpose-title" className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{text.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{text.subtitle}</p>
      </header>

      <div className="grid gap-6 px-5 sm:grid-cols-2 sm:px-10">
        {images.map((image, index) => (
          <figure key={image.src} className="min-w-0">
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-slate-900">
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-contain" />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 text-xs text-slate-300">
              <span aria-hidden="true" className="rounded border border-emerald-400/25 px-1.5 py-0.5 text-[10px] text-emerald-300">0{index + 1}</span>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="px-5 py-6 text-sm leading-relaxed text-slate-300 sm:px-10">{text.description}</p>
      <div className="mx-5 flex flex-col gap-4 border-t border-white/10 py-6 sm:mx-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <strong className="text-3xl font-bold tracking-tight text-emerald-300">78.22</strong>
          <span className="text-xs text-slate-400">{text.metric}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['RTMPose', 'MMPose', 'PyTorch', 'Docker'].map(tech => (
            <Badge key={tech} variant="secondary" className="border border-white/5 bg-white/5 text-xs text-emerald-300">{tech}</Badge>
          ))}
        </div>
      </div>

      <details className="group/results border-t border-white/10">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-sm font-medium text-emerald-300 hover:bg-white/5 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-emerald-300 sm:px-10 [&::-webkit-details-marker]:hidden">
          {text.results}
          <span aria-hidden="true" className="text-xl group-open/results:hidden">+</span>
          <span aria-hidden="true" className="hidden text-xl group-open/results:inline">−</span>
        </summary>
        <div className="px-3 pb-6 sm:px-6">
          <img src={language === 'jp' ? accuracyChartJa : accuracyChart} alt={text.chartAlt} loading="lazy" className="block h-auto w-full rounded-xl bg-white" />
          <p className="mx-1 mt-4 text-xs leading-relaxed text-slate-400">{text.note}</p>
        </div>
      </details>
    </article>
  );
};
