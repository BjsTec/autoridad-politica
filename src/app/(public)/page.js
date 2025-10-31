// src/app/(public)/page.js
// import Header from '../../components/landing/Header'
import HeroSection from '../../components/landing/HeroSection'
// import FeaturesSection from '../../components/landing/FeaturesSection'
// import AppShowcaseSection from '../../components/landing/AppShowcaseSection'
// import PlansSection from '../../components/landing/PlansSection'
// import PromoBonusSection from '../../components/landing/PromoBonusSection'
// import ContactFormSection from '../../components/landing/ContactFormSection'
// import Footer from '../../components/landing/Footer'

export default function HomePage() {
  return (
    // Este div ya no necesita 'bg-neutral-darkest' ni 'text-neutral-lightest'.
    // Heredará los estilos del <body>.
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <HeroSection />
        {/* <FeaturesSection />
        <AppShowcaseSection />
        <PlansSection />
        <PromoBonusSection />
        <ContactFormSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}