import Header from "./components/Header";
import InteractiveSection from "./components/InteractiveSection";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main className=" overflow-x-hidden flex flex-col justify-center items-center p-6 gap-8 mt-12">
        <InteractiveSection />
        <Creations />
      </main>

      <Footer />
    </>
  );
}
