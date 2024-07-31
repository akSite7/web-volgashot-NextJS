import Intro from "@/components/section/Intro/Intro";
import Assortment from "@/components/section/Assortment/Assortment";
import Inform from "@/components/section/Inform/Inform";
import Feedback from "@/components/section/Feedback/Feedback";
import Map from "@/components/section/Map/Map"

export default function Home() {
  return (
    <>
      <Intro />
      <Assortment />
      <Inform />
      <Feedback />
      <Map />
    </>
  );
}
