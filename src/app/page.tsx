import Image from "next/image";
import { Navbar1 } from "@/components/headers/Navbar1";
import { Carrousel2 } from "@/components/body/carrousels/Carrousel2";
import { Footer1 } from "@/components/footers/Footer1";
import { ContactUs } from "@/components/body/forms/ContactUs";
import { profiles } from "@/constants/Profiles";
import Hero1 from "@/components/body/hero/Hero1";
import Carousel3 from "@/components/body/carrousels/Carrousel3";
import { carousel_3 } from "@/constants/carousels";
import Announcer from "@/components/body/announcers/Announcer";
import Card2 from "@/components/body/cards/Card2";


export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero1 />
      <Carousel3 data={carousel_3} />
      <Announcer />
      <ContactUs />
      <Carrousel2 data={profiles}/>

      <hr />

      <Card2 title="hola" description="Mundo"/>

      <hr />


      <Footer1 />
    </>
  );
}
