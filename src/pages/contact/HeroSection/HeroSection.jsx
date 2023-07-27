import HeroCover from "../../../components/HeroCover/HeroCover";
import { bgImages } from "../../../constants/Images";

export default function HeroSection() {
  const header = {
    background: bgImages.contactbg,
    title: "contact Us",
    pageName: "Contact Us",
  };
  return (
    <>
      <HeroCover
        heroBackground={header.background}
        HeroTitle={header.title}
        currentPage={header.pageName}
      />
    </>
  );
}
