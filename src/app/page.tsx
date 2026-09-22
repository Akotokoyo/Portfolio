import { StudioNavbar } from "@/components/studio/StudioNavbar";
import { StudioHero } from "@/components/studio/StudioHero";
import { GamesShowcase } from "@/components/studio/GamesShowcase";
import { StudioAbout } from "@/components/studio/StudioAbout";
import { StudioContact } from "@/components/studio/StudioContact";
import { StudioFooter } from "@/components/studio/StudioFooter";

export default function Home() {
  return (
    <>
      <StudioNavbar />
      <main>
        <StudioHero />
        <GamesShowcase />
        <StudioAbout />
        <StudioContact />
      </main>
      <StudioFooter />
    </>
  );
}
