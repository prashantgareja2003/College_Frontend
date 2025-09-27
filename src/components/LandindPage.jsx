import React from 'react'
import Header from '../LandingComponents/Header'
import Hero from '../LandingComponents/Body'
import About from '../LandingComponents/About'
import Programs from '../LandingComponents/Programs'
import Campus from '../LandingComponents/Campus'
import Contact from '../LandingComponents/contact'
import Footer from '../LandingComponents/Footer'

const LandindPage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <About />
                <Programs />
                <Campus />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default LandindPage
