import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import englishCV from '@/assets/sabin_english_cv.pdf';
import japaneseCV from '@/assets/sabin_jp_cv.pdf';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa6';
import { LuMail, LuMapPinned, LuLoader } from "react-icons/lu";
import { contactConfig } from '@/data/portfolioData';

export const ContactSection = () => {
  const { t } = useLanguage();
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
    const mailtoUrl = `mailto:${decodedEmail}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi Sabin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    )}`;
    window.location.assign(mailtoUrl);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Validation Error: Please fill out all fields in the contact form.");
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
          toast.success("Message sent successfully! Thank you.");
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          toast.error("Formspree submission failed. Opening email client fallback...");
          openMailtoFallback(email);
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        toast.error("Connection error. Opening email client fallback...");
        openMailtoFallback(email);
      });
    } else {
      // Safe fallback via mailto after a sleek loading state
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Opening your mail client safely with your message pre-filled. Thank you!");
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
                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <LuMapPinned className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.location.title')}</p>
                      <p className="text-sm text-foreground-secondary">{t('contact.location')}</p>
                    </div>
                  </div>

                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
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

              {/* Download Resume */}
              <Card className="p-6 glass border-glass-border">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Resume / CV</h3>
                  <p className="text-sm text-foreground-secondary">
                    Download my resume to learn more about my experience and skills.
                  </p>
                  <div className="flex gap-3">
                    <a href={englishCV} download className="flex-1">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <FaDownload className="w-4 h-4" />
                        English CV
                      </Button>
                    </a>
                    <a href={japaneseCV} download className="flex-1">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth text-foreground"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth text-foreground"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth text-foreground"
                    placeholder="Project collaboration"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-background-secondary border border-glass-border focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none transition-smooth resize-none text-foreground"
                    placeholder="How can I help you?"
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-2" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <LuLoader className="w-5 h-5 animate-spin text-primary" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <LuMail className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};