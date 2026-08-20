import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { privacyPolicy } from "@/data/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Giorgia Tedde",
  description:
    "Privacy policy for Android games published by Giorgia Tedde / PraiseTheSoftware.",
};

export default function PrivacyPolicyPage() {
  const allAppsAvoidPersonalData = privacyPolicy.apps.every(
    (app) => !app.collectsPersonalData,
  );

  return (
    <>
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container-max flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </a>
        </div>
      </header>

      <main className="container-max px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
              <ShieldCheck size={25} />
            </div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Legal
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-muted">
              Effective date: {privacyPolicy.effectiveDate}
            </p>
          </div>

          <div className="space-y-10 text-[15px] leading-7 text-muted">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                About this policy
              </h2>
              <p>
                This policy explains how {privacyPolicy.developerName} handles
                information in the Android games listed below (the
                &ldquo;Covered Games&rdquo;). By using a Covered Game, you
                acknowledge the practices described here.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Covered Games
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {privacyPolicy.apps.map((app) => (
                  <article
                    key={app.packageId}
                    className="rounded-xl border border-border bg-card/60 p-5"
                  >
                    <h3 className="font-semibold text-foreground">{app.name}</h3>
                    <p className="mt-1 break-all font-mono text-xs">
                      {app.packageId}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Information collection and use
              </h2>
              {allAppsAvoidPersonalData ? (
                <p>
                  The Covered Games do not ask you to create an account, and
                  {" "}
                  {privacyPolicy.developerName} does not collect, store, or
                  share personal data through them. Game progress and settings,
                  when present, are stored locally on your device.
                </p>
              ) : (
                <p>
                  Data practices can vary by game. Please review the
                  app-specific details below and the Google Play Data safety
                  section for the game before installing it.
                </p>
              )}

              <ul className="mt-4 space-y-2">
                {privacyPolicy.apps.map((app) => (
                  <li key={app.packageId}>
                    <span className="font-medium text-foreground">{app.name}:</span>{" "}
                    {app.collectsPersonalData
                      ? "may process personal data as described in its Google Play listing"
                      : "no personal data collected by the developer"}
                    ; {app.usesAnalytics ? "uses" : "does not use"} analytics;{" "}
                    {app.usesAdvertising ? "uses" : "does not use"} advertising.
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Third-party services
              </h2>
              <p>
                The Covered Games are distributed through Google Play. Google
                may process device, purchase, diagnostic, and usage information
                independently under its own terms and privacy policy. This
                processing is controlled by Google, not by the developer.
              </p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-medium text-accent transition-colors hover:text-[var(--accent-hover)]"
              >
                Google Privacy Policy
                <ExternalLink size={15} />
              </a>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Data retention and deletion
              </h2>
              {allAppsAvoidPersonalData ? (
                <p>
                  Because the developer does not collect personal data through
                  the Covered Games, there is no developer-held personal data
                  to retain or delete. Local game data can be removed by
                  clearing the app&apos;s storage or uninstalling the game.
                </p>
              ) : (
                <p>
                  Retention and deletion practices are described in each
                  game&apos;s Google Play listing. You may also contact the
                  developer using the address below.
                </p>
              )}
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Children&apos;s privacy
              </h2>
              <p>
                The Covered Games do not knowingly collect personal information
                from children. If you believe a child has provided personal
                information to the developer, please contact us so the matter
                can be investigated and addressed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Changes to this policy
              </h2>
              <p>
                This policy may be updated when a game, its services, or legal
                requirements change. The effective date at the top of this page
                identifies the latest revision.
              </p>
            </section>

            <section className="rounded-xl border border-border bg-card/60 p-6">
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Contact
              </h2>
              <p>
                For privacy questions or requests, email{" "}
                <a
                  href={`mailto:${privacyPolicy.contactEmail}`}
                  className="font-medium text-accent transition-colors hover:text-[var(--accent-hover)]"
                >
                  {privacyPolicy.contactEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
