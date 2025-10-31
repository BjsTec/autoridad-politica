// src/app/(public)/page.jsx
import Header from '../../components/landing/Header.jsx'
import HeroSection from '../../components/landing/HeroSection.jsx'
import FeaturesSection from '../../components/landing/FeaturesSection.jsx'
import AppShowcaseSection from '../../components/landing/AppShowcaseSection.jsx'
import PlansSection from '../../components/landing/PlansSection.jsx'
import PromoBonusSection from '../../components/landing/PromoBonusSection.jsx'
import ContactFormSection from '../../components/landing/ContactFormSection.jsx'
import Footer from '../../components/landing/Footer.jsx'

export default function HomePage() {
  return (
    // Hereda el fondo oscuro desde layout.js
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <HeroSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <PlansSection />
        <PromoBonusSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}