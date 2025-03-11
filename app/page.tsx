import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import CleanMoney from "@/components/CleanMoney";
import Footer from "@/components/Footer";
import BitcoinEthiopia from "@/components/BitcoinEthiopia";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <BitcoinEthiopia/>
      <CleanMoney />
      <Footer />
    </>
  );
}
