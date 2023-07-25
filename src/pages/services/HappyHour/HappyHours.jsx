import HeroCover from "../../../components/HeroCover/HeroCover";
import { bgImages } from "../../../constants/Images";
export default function HappyHours() {
  const data = {
    bg: bgImages.happyHoursbg,
    title: "Happy Hours",
    descriptive: { days: "Monday - Friday", times: "4:00 Pm - 7:00 pm" },
  };
  return (
    <>
      <HeroCover
        heroBackground={data.bg}
        HeroTitle={data.title}
        descriptive={data.descriptive}
      />
    </>
  );
}
