import { useEffect, type ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail } from 'lucide-react';
import logoSrc from '@assets/AW_app_logo_1785844987626.png';

const DEFAULT_LAST_UPDATED = 'August 6, 2026';
const SUPPORT_EMAIL = 'allwheelsmobile@gmail.com';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

function LegalLayout({ title, lastUpdated = DEFAULT_LAST_UPDATED, children }: LegalLayoutProps) {
  useEffect(() => {
    document.title = `${title} | AllWheels`;
  }, [title]);

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col">
      <nav className="border-b border-white/5 bg-background/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoSrc} alt="AllWheels Logo" className="w-10 h-10 object-contain" />
            <span className="font-display font-semibold text-xl tracking-wide">AllWheels</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      <div className="flex-1 px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {lastUpdated}</p>
          <div className="prose-legal space-y-8 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-display font-semibold text-white mb-3">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 23, 2026">
      <p>
        AllWheels is currently in early beta testing, distributed to testers via Expo Go rather
        than the App Store or Google Play. This policy describes how the app currently handles
        your data during this beta period, and will be updated as the app develops.
      </p>

      <Section heading="Information We Collect">
        <p>
          Account information. To sign up, you provide an
          email address and password. We use this to create and secure your account, and to send
          you a confirmation email when you sign up.
        </p>
        <p>
          Vehicle & maintenance data. Information you
          enter into the app yourself — fuel logs, mileage, maintenance records, and any receipts
          or documents you add.
        </p>
        <p>
          Location data. With your permission, AllWheels
          uses your device's location to record GPS ride routes while you're actively using the
          app. Location access is only used for this purpose and only while the app is in use.
        </p>
      </Section>

      <Section heading="Accounts & Cloud Backup">
        <p>
          AllWheels stores your vehicle, fuel, and maintenance data locally on your device by
          default. If you create an account, you can optionally back up this data to the cloud —
          this uploads a copy of your local data to our Supabase-hosted database so you can
          restore it later, such as on a new device. This only happens when you choose to back up
          or restore; it isn't a continuous or automatic background sync.
        </p>
        <p>
          Account credentials (your email and password) are handled through Supabase, our backend
          and authentication provider — Supabase stores this securely on our behalf, and we don't
          have access to your raw password.
        </p>
        <p>
          AllWheels is not directed at children under 13, and we do not knowingly collect
          information from them.
        </p>
      </Section>

      <Section heading="Third-Party Service Providers">
        <p>
          We don't sell your data, and we don't use advertising networks or analytics/tracking
          tools. We do rely on a small number of service providers to run AllWheels, who process
          data strictly on our behalf:
        </p>
        <p>
          Supabase — our backend, authentication, and
          database provider, used to store account and app data.
        </p>
        <p>
          Resend — used to send transactional emails, like
          confirming your email address when you sign up.
        </p>
        <p>
          During beta testing, the app is also delivered through Expo Go, a third-party developer
          tool made by Expo, which facilitates loading the app onto your device. Expo's own
          handling of data related to that delivery process is governed by Expo's privacy policy,
          not ours.
        </p>
      </Section>

      <Section heading="Changes to This Policy">
        <p>
          As AllWheels moves from beta toward a public release — including if we introduce user
          accounts, cloud storage, or third-party services — we'll update this policy to reflect
          those changes.
        </p>
      </Section>

      <Section heading="Contact Us">
        <p>
          Questions about this policy or your data? Reach out at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>.
        </p>
      </Section>

      <p className="text-sm border-t border-white/5 pt-6 mt-2">
        This policy reflects AllWheels' current, beta-stage data practices in good faith and has
        not been reviewed by a lawyer. Before a public launch, this should be reviewed by legal
        counsel to ensure it fully meets applicable requirements.
      </p>
    </LegalLayout>
  );
}

export function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        These terms cover your use of AllWheels while it's in beta testing. By using the app
        during this period, you agree to the terms below.
      </p>

      <Section heading="Beta Software">
        <p>
          AllWheels is under active development and is being distributed for preview and testing
          purposes via Expo Go, not through the App Store or Google Play. It may contain bugs,
          incomplete features, or change significantly without notice.
        </p>
      </Section>

      <Section heading="Permitted Use">
        <p>
          You may use AllWheels for personal, non-commercial testing purposes. Please don't
          attempt to reverse-engineer, resell, or misuse the app or its beta distribution.
        </p>
      </Section>

      <Section heading="No Warranty">
        <p>
          AllWheels is provided "as is" during beta, without warranties of any kind, express or
          implied. We don't guarantee the app will be uninterrupted, error-free, or that any data
          you enter will be preserved as the app develops.
        </p>
      </Section>

      <Section heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, AllWheels and its developer aren't liable for
          any damages arising from your use of the beta app, including data loss.
        </p>
      </Section>

      <Section heading="Changes During Beta">
        <p>
          We may change, suspend, or discontinue any part of AllWheels at any time while it's in
          beta, including features, data storage behavior, and availability.
        </p>
      </Section>

      <Section heading="Contact Us">
        <p>
          Questions about these terms? Reach out at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>.
        </p>
      </Section>

      <p className="text-sm border-t border-white/5 pt-6 mt-2">
        These terms are written in good faith for AllWheels' current beta stage and have not been
        reviewed by a lawyer. Before a public launch, they should be reviewed by legal counsel.
      </p>
    </LegalLayout>
  );
}

export function ContactSupportPage() {
  return (
    <LegalLayout title="Contact Support">
      <p>
        AllWheels is in early beta, and support is still informal — but we'd genuinely like to
        hear from you, whether it's a bug report, feedback on the app, or a question about how
        something works.
      </p>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex items-center gap-4">
        <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Email us directly</p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white font-semibold hover:text-primary transition-colors">
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>

      <p className="text-sm">
        We're a small beta team, so responses may take a bit — thanks for your patience and for
        helping test AllWheels.
      </p>
    </LegalLayout>
  );
}
