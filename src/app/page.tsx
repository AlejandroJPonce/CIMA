import { Navbar1 } from "@/components/headers/Navbar1";
import { Carrousel2 } from "@/components/body/carrousels/Carrousel2";
import { Footer1 } from "@/components/footers/Footer1";
import { ContactUs } from "@/components/body/forms/ContactUs";
import { profiles } from "@/constants/Profiles";
import Hero1 from "@/components/body/hero/Hero1";
import Carousel3 from "@/components/body/carrousels/Carrousel3";
import { carousel_3 } from "@/constants/carousels";
import Announcer from "@/components/body/announcers/Announcer";
import Grid4 from "@/components/body/grids/Grid4";
import { Separator1 } from "@/components/body/separator/Separator1";
import { Separator2 } from "@/components/body/separator/Separator2";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero1 />
      <Announcer />
      <Separator2 />
      <Grid4 />
      <Carousel3 data={carousel_3} />
      <Separator1 />
      <Carrousel2 data={profiles} />
      <Separator2 />
      <ContactUs />
      <Footer1 />
    </>
  );
}
