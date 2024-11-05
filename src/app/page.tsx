import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import Problems from "@/components/Problems";
import WatsonChat from "@/components/WatsonChat";

export default function Home() {
  return (
    <>
      <WatsonChat />
      <Banner />
      <Problems />
      <Features />
      <Feedback />
      <Faq />
    </>
  );
}
