export type PrivacyApp = {
  name: string;
  packageId: string;
  collectsPersonalData: boolean;
  usesAnalytics: boolean;
  usesAdvertising: boolean;
};

export const privacyPolicy = {
  effectiveDate: "20 August 2026",
  contactEmail: "giorgiatedde@hotmail.com",
  developerName: "Giorgia Tedde (PraiseTheSoftware / MirageGames)",
  apps: [
    {
      name: "Platoon",
      packageId: "it.PraiseTheSoftware.Platoon",
      collectsPersonalData: false,
      usesAnalytics: false,
      usesAdvertising: false,
    },
    {
      name: "15-o-matic",
      packageId: "it.PraiseTheSoftware.fifteenomatic",
      collectsPersonalData: false,
      usesAnalytics: false,
      usesAdvertising: false,
    },
    {
      name: "Before The Threshold",
      packageId: "it.MirageGames.BeforeTheThreshold",
      collectsPersonalData: false,
      usesAnalytics: false,
      usesAdvertising: false,
    },
  ] satisfies PrivacyApp[],
};
