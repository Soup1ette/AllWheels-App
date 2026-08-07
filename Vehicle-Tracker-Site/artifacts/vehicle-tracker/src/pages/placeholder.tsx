import { useEffect, type ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail } from 'lucide-react';
import logoSrc from '@assets/AW_app_logo_1785844987626.png';

const LAST_UPDATED = 'August 6, 2026';
const SUPPORT_EMAIL = 'allwheelsmobile@gmail.com';

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

function LegalLayout({ title, children }: LegalLayoutProps) {
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
          <p className="text-sm text-muted-foreground mb-12">Last updated: {LAST_UPDATED}</p>
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
    <LegalLayout title="Privacy Policy">
      <p>
        AllWheels is currently in early beta testing, distributed to testers via Expo Go rather
        than the App Store or Google Play. This policy describes how the app currently handles
        your data during this beta period, and will be updated as the app develops.
      </p>

      <Section heading="Information We Collect">
        <p>
          <strong className="text-white">Vehicle & maintenance data.</strong> Information you
          enter into the app yourself — fuel logs, mileage, maintenance records, and any receipts
          or documents you add.
        </p>
        <p>
          <strong className="text-white">Location data.</strong> With your permission, AllWheels
          uses your device's location to record GPS ride routes while you're actively using the
          app. Location access is only used for this purpose and only while the app is in use.
        </p>
      </Section>

      <Section heading="No Accounts, Yet">
        <p>
          AllWheels does not currently have user accounts or logins, and no cloud-hosted user
          data store has been configured. Data you enter is associated with your device, not
          with a personal account. This may change as the app develops toward a public release,
          and this policy will be updated if it does.
        </p>
        <p>
          AllWheels is not directed at children under 13, and we do not knowingly collect
          information from them.
        </p>
      </Section>

      <Section heading="Third-Party Sharing">
        <p>
          We do not share your data with third parties. AllWheels does not currently integrate
          any advertising networks, analytics tools, or crash-reporting services.
        </p>
        <p>
          During beta testing, the app is delivered through Expo Go, a third-party developer tool
          made by Expo, which facilitates loading the app onto your device. Expo's own handling of
          data related to that delivery process is governed by Expo's privacy policy, not ours.
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
