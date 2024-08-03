import Additional from "@/components/section/Additionally/Additional";
import Assortment from "@/components/section/Assortment/Assortment";
import Feedback from "@/components/section/Feedback/Feedback";
import Intro from "@/components/section/Intro/Intro";
import Map from "@/components/ui/Map/Map";

export default function Home() {
  return (
    <>
      <Intro />
      <Assortment />
      <Additional />
      <Feedback />
      <Map />
    </>
  );
}
