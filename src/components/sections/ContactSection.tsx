import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import englishCV from '@/assets/sabin_english_cv.pdf';
import japaneseCV from '@/assets/sabin_jp_cv.pdf';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa6';
import { LuMail, LuMapPinned, LuLoader } from "react-icons/lu";
import { contactConfig } from '@/data/portfolioData';

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const email = atob(contactConfig.encodedEmail);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const openMailtoFallback = (decodedEmail: string) => {
    const messageBody = language === 'jp'
      ? `バンダリ サビン 様\n\n${formData.message}\n\nよろしくお願いいたします。\n${formData.name}\nメールアドレス：${formData.email}`
      : `Hi Sabin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;

    const mailtoUrl = `mailto:${decodedEmail}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(messageBody)}`;
    window.location.assign(mailtoUrl);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(t('contact.toast.validation'));
      return;
    }

    setIsSubmitting(true);

    if (contactConfig.formspreeId) {
      // POST directly to Formspree endpoint securely
      fetch(`https://formspree.io/f/${contactConfig.formspreeId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          setIsSubmitting(false);
          if (response.ok) {
            toast.success(t('contact.toast.sent'));
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          } else {
            toast.error(t('contact.toast.formspree_fallback'));
            openMailtoFallback(email);
          }
        })
        .catch(() => {
          setIsSubmitting(false);
          toast.error(t('contact.toast.connection_fallback'));
          openMailtoFallback(email);
        });
    } else {
      // Safe fallback via mailto after a sleek loading state
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success(t('contact.toast.mail_fallback'));
        openMailtoFallback(email);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1000);
    }
  };

  const contactMethods = [
    {
      icon: LuMail,
      label: t('contact.email'),
      value: email,
      href: `mailto:${email}`,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: FaLinkedinIn,
      label: t('contact.linkedin'),
      value: contactConfig.linkedin.replace('https://', ''),
      href: contactConfig.linkedin,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: FaGithub,
      label: t('contact.github'),
      value: contactConfig.github.replace('https://', ''),
      href: contactConfig.github,
      color: 'text-foreground',
      bgColor: 'bg-foreground/10'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information - Completely borderless, clean layout */}
            <div className="space-y-8">
              <div className="p-2 space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background-tertiary/10 border border-white/5">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <LuMapPinned className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200 text-sm">{t('contact.location.title')}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t('contact.location')}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-background-tertiary/20 transition-all duration-300 border border-transparent hover:border-white/5 group"
                    >
                      <div className={`w-11 h-11 ${method.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}>
                        <method.icon className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-200 text-sm">{method.label}</p>
                        <p className="text-xs text-slate-400 mt-0.5 break-all">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume - Flattened card */}
              <div className="p-6 bg-background-tertiary/15 border border-white/5 hover:border-primary/20 rounded-2xl transition-all duration-300">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-bold text-slate-200">{t('contact.resume.title')}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                    {t('contact.resume.description')}
                  </p>
                  <div className="flex gap-3">
                    <a href={englishCV} download className="flex-1">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer py-2 text-xs">
                        <FaDownload className="w-3.5 h-3.5" />
                        {t('contact.resume.english')}
                      </Button>
                    </a>
                    <a href={japaneseCV} download className="flex-1">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer py-2 text-xs">
                        <FaDownload className="w-3.5 h-3.5" />
                        {t('contact.resume.japanese')}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Crisp, sleek, dark container */}
            <div className="p-8 bg-background-tertiary/20 border border-white/5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-lg bg-slate-950/60 border border-white/5 focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth text-slate-200 placeholder-slate-600 text-sm"
                    placeholder={t('contact.form.name_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-lg bg-slate-950/60 border border-white/5 focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth text-slate-200 placeholder-slate-600 text-sm"
                    placeholder={t('contact.form.email_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-lg bg-slate-950/60 border border-white/5 focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth text-slate-200 placeholder-slate-600 text-sm"
                    placeholder={t('contact.form.subject_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-lg bg-slate-950/60 border border-white/5 focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth resize-none text-slate-200 placeholder-slate-600 text-sm"
                    placeholder={t('contact.form.message_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-2 cursor-pointer py-3" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <LuLoader className="w-5 h-5 animate-spin text-primary" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <LuMail className="w-5 h-5" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};