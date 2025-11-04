import NavBar from "@/components/NavBar/page";
import Hero from "../components/Hero/page";
import AboutPage from "@/components/About/page";
import OurServices from "@/components/Our serviecs/page";
export default function Home () {
    return(
      <main className="">
          <section>
             <NavBar />
              <Hero />
              <AboutPage />
              <OurServices />
          </section>
      </main>
    );
}