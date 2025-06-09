import React from "react"
import HeroSection from "../components/HeroSection"
import PropertyCategory from "../components/PropertyCategory"

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="flex-1">
          <PropertyCategory />
        </div>
      </div>
    </>
  )
}

export default Home
