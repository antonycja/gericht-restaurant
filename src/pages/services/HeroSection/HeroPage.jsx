import HeroCover from "../../../components/HeroCover/HeroCover";
import { bgImages } from "../../../constants/Images";
import "./heropage.css";
export default function HeroPage() {
  const data = {
    bg: bgImages.servicesbg,
    title: "What We offer",
    pageName: "Our Services",
  };
  return (
    <>
      <HeroCover
        heroBackground={data.bg}
        HeroTitle={data.title}
        currentPage={data.pageName}
      />
    </>
  );
}
