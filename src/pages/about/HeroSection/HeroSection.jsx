import HeroCover from "../../../components/HeroCover/HeroCover";
import { bgImages } from "../../../constants/Images";

export default function HeroSection() {
  const data = {
    bg: bgImages.servicesbg,
    title: "Welcome to Gerícht",
    currentPage: "About Us",
  };
  return (
    <>
      <HeroCover
        heroBackground={data.bg}
        HeroTitle={data.title}
        currentPage={data.currentPage}
      />
    </>
  );
}
