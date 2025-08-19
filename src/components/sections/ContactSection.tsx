import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import englishCV from '@/assets/sabin_english_cv.pdf';
import japaneseCV from '@/assets/sabin_jp_cv.pdf';
import {  FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa6';
import { LuMail, LuMapPinned } from "react-icons/lu";

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: LuMail,
      label: t('contact.email'),
      value: 'sabinnmc@gmail.com',
      href: 'mailto:sabinnmc@gmail.com',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: FaLinkedinIn,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/sabin-bhandari-nmc',
      href: 'https://linkedin.com/in/sabin-bhandari-nmc',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: FaGithub,
      label: t('contact.github'),
      value: 'github.com/sabinnmc',
      href: 'https://github.com/sabinnmc',
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
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 glass border-glass-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <LuMapPinned className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t('contact.location.title')}</h3>
                      <p className="text-foreground-secondary">{t('contact.location')}</p>
                    </div>
                  </div>

                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-background-secondary/50 transition-smooth group"
                    >
                      <div className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{method.label}</p>
                        <p className="text-sm text-foreground-secondary">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* FaDownload Resume */}
              <Card className="p-6 glass border-glass-border">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Resume / CV</h3>
                  <p className="text-sm text-foreground-secondary">
                    Download my resume to learn more about my experience and skills.
                  </p>
                  <div className="flex gap-3">
                    <a href={englishCV} download className="flex-1">
                      <Button variant="outline" className="flex-1">
                        <FaDownload className="w-4 h-4" />
                        English CV
                      </Button>
                    </a>
                    <a href={japaneseCV} download className="flex-1">
                      <Button variant="outline" className="flex-1">
                        <FaDownload className="w-4 h-4" />
                        日本語履歴書
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 glass border-glass-border">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus:outline-none transition-smooth"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus:outline-none transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus:outline-none transition-smooth"
                    placeholder="Project collaboration"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus:outline-none transition-smooth resize-none"
                    placeholder="[This feature is not implemented. Please Contact me via mail]..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <LuMail className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};