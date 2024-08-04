import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DyanmicFooter = dynamic(() => import('@/components/Footer'))
const DynamicMainSection = dynamic(() => import('@/components/Game'))
const DynamicHeader = dynamic(() => import('@/components/Header'))

const Home = () => {
  return (
    <main className="relative w-full">
      <Suspense fallback={<Loader/>}>
        <DynamicHeader/>
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <DynamicMainSection/>
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <DyanmicFooter/>
      </Suspense>
      {/* <Header /> */}
      {/* <Game /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
