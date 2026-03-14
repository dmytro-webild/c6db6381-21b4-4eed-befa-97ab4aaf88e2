"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Wanderlux Travels"
          navItems={[
            { name: "Destinations", id: "destinations" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Plan Your Journey",            href: "#contact"
          }}
          animateOnLoad={true}
          className="bg-gradient-to-r from-[#efe7dd] to-[#f6f0e9] border border-[#afa094] backdrop-blur-md"
          navItemClassName="text-[#2b180a] hover:text-[#94877c] transition-colors"
          buttonClassName="bg-[#2b180a] hover:bg-[#3d2411] text-[#f6f0e9] shadow-lg hover:shadow-xl transition-all"
          buttonTextClassName="font-medium tracking-wide"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Wanderlux Travels"
          description="Discover the world's most exquisite destinations. Personalized luxury travel experiences crafted just for you."
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/senior-man-chilling-swimming-pool_53876-15224.jpg",              imageAlt: "Tropical luxury destination"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-trunk-car-while-road-trip_23-2148851235.jpg",              imageAlt: "Mountain adventure landscape"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/new-york-city-skyline_649448-4789.jpg",              imageAlt: "Iconic city destination"
            }
          ]}
          buttons={[
            { text: "Explore Destinations", href: "#features-destinations" },
            { text: "Request a Consultation", href: "#contact" }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          className="relative overflow-hidden"
          containerClassName="relative w-full h-screen flex items-center justify-center"
          contentContainerClassName="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
          logoContainerClassName="mb-6"
          logoClassName="text-5xl md:text-6xl font-bold text-[#f6f0e9] drop-shadow-lg"
          descriptionClassName="text-lg md:text-2xl text-[#f6f0e9] text-center mb-8 max-w-2xl drop-shadow-md"
          buttonContainerClassName="flex flex-col md:flex-row gap-4 justify-center"
          buttonClassName="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          buttonTextClassName="flex items-center gap-2"
          mediaWrapperClassName="absolute inset-0"
          imageClassName="w-full h-full object-cover"
          dimOverlayClassName="absolute inset-0 bg-black/40"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Crafting Unforgettable Journeys Since 2010" }
          ]}
          useInvertedBackground={true}
          buttons={[
            { text: "Learn More About Us", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          headingClassName="text-4xl md:text-5xl font-bold text-[#2b180a] mb-6 leading-tight"
          imageWrapperClassName="rounded-lg overflow-hidden shadow-lg"
          imageClassName="w-full h-full object-cover"
          buttonContainerClassName="flex gap-4 mt-8"
          buttonClassName="px-6 py-3 bg-[#2b180a] text-[#f6f0e9] rounded-lg hover:bg-[#3d2411] shadow-md hover:shadow-lg transition-all"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="features-signature" data-section="features-signature">
        <FeatureCardOne
          title="Our Signature Experiences"
          description="Hand-curated journeys designed to immerse you in the world's most coveted destinations."
          tag="Premium Offerings"
          tagAnimation="blur-reveal"
          features={[
            {
              title: "Private Yacht Expeditions",              description: "Sail the Mediterranean and beyond aboard exclusive chartered yachts with personal crew.",              imageSrc: "http://img.b2bpic.net/free-photo/yachts-lined-up-mooring-against-evening-sky_157027-4366.jpg",              imageAlt: "Luxury yacht sailing"
            },
            {
              title: "Safari Adventures",              description: "Witness Africa's magnificent wildlife from luxury safari lodges and private reserves.",              imageSrc: "http://img.b2bpic.net/free-photo/herd-elephants-deer-field-jungle-tsavo-west-taita-hills-kenya_181624-8521.jpg",              imageAlt: "Safari landscape"
            },
            {
              title: "Cultural Immersion",              description: "Connect with ancient civilizations through guided tours of temples and historical sites.",              imageSrc: "http://img.b2bpic.net/free-photo/travelers-resting-grass_23-2147643168.jpg",              imageAlt: "Cultural destination"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-6"
          cardClassName="group bg-[#efe7dd] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          mediaClassName="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          cardTitleClassName="text-2xl font-bold text-[#2b180a] mt-6 px-6"
          cardDescriptionClassName="text-[#2b180a]/80 px-6 py-4"
          textBoxTagClassName="text-sm font-semibold text-[#94877c] uppercase tracking-wide mb-4"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold text-[#2b180a] mb-6"
          textBoxDescriptionClassName="text-lg text-[#2b180a]/80 mb-8"
        />
      </div>

      <div id="features-services" data-section="features-services">
        <FeatureCardMedia
          title="Comprehensive Travel Services"
          description="From accommodation to transportation, we handle every detail of your luxury journey."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Full-Service Planning"
          tagAnimation="blur-reveal"
          animationType="scale-rotate"
          features={[
            {
              id: "1",              title: "Luxury Accommodations",              description: "Access to the world's finest 5-star hotels, private villas, and exclusive resorts.",              tag: "Stay",              imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_1203-9520.jpg",              imageAlt: "Luxury hotel room"
            },
            {
              id: "2",              title: "Private Transportation",              description: "Seamless travel via private jets, helicopter tours, and luxury ground transport.",              tag: "Travel",              imageSrc: "http://img.b2bpic.net/free-vector/trip-airplane-horizontal-banners_1284-19730.jpg",              imageAlt: "Private jet interior"
            },
            {
              id: "3",              title: "Concierge Services",              description: "24/7 dedicated concierge for restaurant reservations, activities, and special requests.",              tag: "Support",              imageSrc: "http://img.b2bpic.net/free-photo/mid-section-businessman-holding-digital-tablet-with-businesswoman-standing-backdrop_23-2147941514.jpg",              imageAlt: "Concierge meeting"
            }
          ]}
          carouselMode="buttons"
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-6"
          itemClassName="bg-[#efe7dd] rounded-lg overflow-hidden"
          mediaWrapperClassName="w-full h-80 overflow-hidden rounded-t-lg"
          mediaClassName="w-full h-full object-cover"
          tagClassName="text-xs font-bold text-[#94877c] uppercase tracking-wider mb-2"
          cardTitleClassName="text-2xl font-bold text-[#2b180a] px-6 pt-6"
          cardDescriptionClassName="text-[#2b180a]/70 px-6 pb-6 text-sm"
          contentClassName="p-6"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold text-[#2b180a] mb-6"
          textBoxDescriptionClassName="text-lg text-[#2b180a]/80 mb-8"
        />
      </div>

      <div id="features-destinations" data-section="features-destinations">
        <FeatureCardNine
          title="Destination Highlights"
          description="Explore curated destinations that define luxury travel."
          textboxLayout="default"
          useInvertedBackground={false}
          showStepNumbers={true}
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "European Elegance",              description: "From the canals of Venice to the shores of the French Riviera, experience Old World charm.",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/facade-building-with-classical-architecture_23-2148184255.jpg?_wi=1",                imageAlt: "European destination"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/facade-building-with-classical-architecture_23-2148184255.jpg?_wi=2",                imageAlt: "European luxury"
              }
            },
            {
              id: 2,
              title: "Asian Paradise",              description: "Discover tropical islands, ancient temples, and modern luxury in Southeast Asia.",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/female-tourists-hold-map-find-places_1150-5814.jpg?_wi=1",                imageAlt: "Asian destination"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/female-tourists-hold-map-find-places_1150-5814.jpg?_wi=2",                imageAlt: "Asian luxury"
              }
            },
            {
              id: 3,
              title: "African Safari",              description: "Experience wildlife like never before in Africa's most exclusive safari reserves.",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-sitting-backseat-taxi_23-2149236713.jpg?_wi=1",                imageAlt: "African destination"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-sitting-backseat-taxi_23-2149236713.jpg?_wi=2",                imageAlt: "African safari"
              }
            }
          ]}
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-6"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold text-[#2b180a] mb-6"
          textBoxDescriptionClassName="text-lg text-[#2b180a]/80 mb-8"
          stepNumberClassName="bg-[#2b180a] text-[#f6f0e9] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
          featureTitleClassName="text-2xl font-bold text-[#2b180a] mb-3"
          featureDescriptionClassName="text-[#2b180a]/70 text-base"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Client Stories"
          description="Hear from travelers who discovered the magic of luxury with Wanderlux."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Trusted by Discerning Travelers"
          tagAnimation="blur-reveal"
          testimonials={[
            {
              id: "1",              name: "Margaret Chen",              date: "June 2024",              title: "Luxury Travel Enthusiast",              quote: "Wanderlux transformed my dream European vacation into reality. Every detail was perfectly orchestrated.",              tag: "Europe Tour",              avatarSrc: "http://img.b2bpic.net/free-photo/blonde-fashionable-woman-street_250224-117.jpg",              avatarAlt: "Margaret Chen",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-with-baggage_23-2148938508.jpg",              imageAlt: "European vacation moment"
            },
            {
              id: "2",              name: "James Mitchell",              date: "May 2024",              title: "CEO, Tech Industry",              quote: "The level of personalization and attention to detail exceeded all expectations. A truly world-class experience.",              tag: "Private Yacht Charter",              avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-posing_23-2149213187.jpg",              avatarAlt: "James Mitchell",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-father-son-hanging-out-jetty_23-2150514737.jpg",              imageAlt: "Romantic yacht moment"
            },
            {
              id: "3",              name: "Sofia Rossi",              date: "April 2024",              title: "Art Collector",              quote: "From safari adventures to cultural tours, Wanderlux curates experiences that touch the soul.",              tag: "Safari & Culture",              avatarSrc: "http://img.b2bpic.net/free-photo/vertical-shot-female-standing-rocks-photographing-beautiful-sea_181624-44211.jpg",              avatarAlt: "Sofia Rossi",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-people-with-drinks_23-2149437537.jpg",              imageAlt: "Adventure moment"
            },
            {
              id: "4",              name: "David Park",              date: "March 2024",              title: "Investment Banker",              quote: "The concierge service is impeccable. They anticipated every need before I even asked.",              tag: "Bespoke Planning",              avatarSrc: "http://img.b2bpic.net/free-photo/happy-african-man-looking_171337-9799.jpg",              avatarAlt: "David Park",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-senior-couple-with-map_23-2149049077.jpg",              imageAlt: "Cultural experience"
            }
          ]}
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-6"
          cardClassName="bg-[#efe7dd] rounded-lg p-8 hover:shadow-lg transition-all"
          cardAvatarClassName="w-16 h-16 rounded-full object-cover border-2 border-[#afa094]"
          cardTitleClassName="text-xl font-bold text-[#2b180a] mt-4"
          cardQuoteClassName="text-[#2b180a]/80 italic text-lg my-4"
          cardNameClassName="font-semibold text-[#2b180a]"
          cardDateClassName="text-sm text-[#94877c]"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold text-[#2b180a] mb-6"
          textBoxDescriptionClassName="text-lg text-[#2b180a]/80 mb-8"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Begin Your Journey"
          description="Share your travel dreams, and our luxury travel consultants will craft a personalized itinerary for you."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/elderly-couple-relax-hotel-lounge_482257-102644.jpg"
          imageAlt="Travel consultation"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "destination", type: "text", placeholder: "Preferred Destination", required: false }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your dream vacation...",            rows: 5,
            required: true
          }}
          buttonText="Request Consultation"
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          formCardClassName="bg-[#efe7dd] rounded-lg p-8 shadow-md"
          titleClassName="text-3xl md:text-4xl font-bold text-[#2b180a] mb-4"
          descriptionClassName="text-[#2b180a]/80 mb-8 text-base"
          buttonClassName="w-full bg-[#2b180a] text-[#f6f0e9] py-3 rounded-lg font-semibold hover:bg-[#3d2411] shadow-md hover:shadow-lg transition-all mt-6"
          buttonTextClassName="font-semibold"
          mediaWrapperClassName="rounded-lg overflow-hidden shadow-lg"
          mediaClassName="w-full h-full object-cover"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Wanderlux Travels"
          copyrightText="© 2024 Wanderlux Travels. All rights reserved. Crafting luxury journeys worldwide."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "Connect with us on LinkedIn" }
          ]}
          className="bg-[#efe7dd] border-t-2 border-[#afa094]"
          containerClassName="max-w-6xl mx-auto px-6 py-12"
          cardClassName="flex flex-col md:flex-row justify-between items-center gap-8"
          logoClassName="text-2xl font-bold text-[#2b180a]"
          copyrightTextClassName="text-[#94877c] text-sm text-center md:text-left"
          socialContainerClassName="flex gap-6"
          socialIconClassName="text-[#2b180a] hover:text-[#94877c] transition-colors cursor-pointer w-6 h-6"
        />
      </div>
    </ThemeProvider>
  );
}