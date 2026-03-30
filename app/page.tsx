import {Navbar} from "@/components/navbar"
import {Hero} from "@/components/hero"
import {Services} from "@/components/services"
import {Steps} from "@/components/steps"
import {Portfolio} from "@/components/portfolio"
import {About} from "@/components/about"
import {WhyUs} from "@/components/why-us"
import {Contact} from "@/components/contact"
import {Footer} from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar/>
            <Hero/>
            <Services/>
            <Steps/>
            <Portfolio/>
            <About/>
            <WhyUs/>
            <Contact/>
            <Footer/>
        </main>
    )
}
