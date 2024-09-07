import { Box } from "@chakra-ui/react";
import HeroSection from "../components/SpecialOccasion/HeroSec";
import Delivery from "../components/SpecialOccasion/Delivery";
import Gallery from "../components/SpecialOccasion/Gallery";
import Testimonials from "../components/SpecialOccasion/Testimonials";
import Questions from "../components/SpecialOccasion/Questions";

export default function SpecialOccasion() {
  return (
    <Box>
      <HeroSection />
      <Delivery />
      <Gallery />
      <Testimonials />
      <Questions />
    </Box>
  );
}
