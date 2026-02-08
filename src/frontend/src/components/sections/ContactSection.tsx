import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';
import { SiX, SiGithub } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'm.khalid.fed@gmail.com',
      href: 'mailto:m.khalid.fed@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+923411876543',
      href: 'tel:+923411876543',
      description: 'Call for immediate assistance'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/khalid-hussain2k26/',
      description: 'Let\'s connect professionally'
    }
  ];

  const socialLinks = [
    { icon: SiX, label: 'X (Twitter)', href: 'https://x.com/KhalidH05169651' },
    { icon: SiGithub, label: 'GitHub', href: 'https://github.com/KhalidHussain-FED' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/khalid-hussain2k26/' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss how I can help grow your business? 
              I'd love to hear from you. Reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{method.label}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <Button 
                      variant="link" 
                      className="h-auto p-0 text-primary hover:text-primary/80"
                      asChild
                    >
                      <a href={method.href} className="break-all">
                        {method.value}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Message CTA */}
          <div className="bg-card border-2 rounded-lg p-8 md:p-12 text-center space-y-6 shadow-soft">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-display">Start a Conversation</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you need a complete digital marketing overhaul or help with a specific campaign, 
                I'm here to help you achieve your goals.
              </p>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-soft hover:shadow-glow"
              asChild
            >
              <a href="mailto:m.khalid.fed@gmail.com">
                Send a Message
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-6">
            <p className="text-muted-foreground">Follow me on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  asChild
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
