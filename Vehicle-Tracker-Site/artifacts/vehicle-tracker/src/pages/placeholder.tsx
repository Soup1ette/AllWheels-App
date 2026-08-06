import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Construction } from 'lucide-react';
import logoSrc from '@assets/AW_app_logo_1785844987626.png';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  useEffect(() => {
    document.title = `${title} | AllWheels`;
  }, [title]);

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col">
      <nav className="border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoSrc} alt="AllWheels Logo" className="w-10 h-10 object-contain" />
            <span className="font-display font-semibold text-xl tracking-wide">AllWheels</span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-lg text-center">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Construction className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{description}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to AllWheels
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="AllWheels is still in beta, and our full privacy policy is being finalized alongside it. Check back soon — it'll be posted here before the app leaves beta."
    />
  );
}

export function TermsOfServicePage() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="Our terms of service are being finalized alongside the beta. Check back soon — they'll be posted here before the app leaves beta."
    />
  );
}

export function ContactSupportPage() {
  return (
    <PlaceholderPage
      title="Contact Support"
      description="We're setting up a dedicated support channel for AllWheels. In the meantime, thanks for your patience while we're in beta."
    />
  );
}
