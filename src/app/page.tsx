import Image from "next/image";
import { Navbar1 } from "@/components/headers/Navbar1";
import { Carrousel1 } from "@/components/body/carrousels/Carrousel1";
import { Carrousel2 } from "@/components/body/carrousels/Carrousel2";
import { Grid1 } from "@/components/body/grids/Grid1";
import { Grid2 } from "@/components/body/grids/Grid2";
import { Footer1 } from "@/components/footers/Footer1";
import { grid1Info, grid2Info, grid3Info, grid4Info } from "@/constants/GridsInfo";
import { ContactUs } from "@/components/body/forms/ContactUs";
import { profiles } from "@/constants/Profiles";
import Hero1 from "@/components/body/hero/Hero1";
import Carousel3 from "@/components/body/carrousels/Carrousel3";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero1 />
      <Carousel3 />
      {/* <Grid1
        name={grid1Info.name}
        description={grid1Info.description}
        image={grid1Info.image}
      />
      <Grid2
        name={grid2Info.name}
        description={grid2Info.description}
        image={grid2Info.image}
      />
      <Grid1
        name={grid3Info.name}
        description={grid3Info.description}
        image={grid3Info.image}
      />
      <Grid2
        name={grid4Info.name}
        description={grid4Info.description}
        image={grid4Info.image}
      /> */}

      <Carrousel2 data={profiles}/>
      <ContactUs />

      <Footer1 />
    </>
  );
}
