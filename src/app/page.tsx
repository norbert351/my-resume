'use client'


import { motion } from 'framer-motion'
import Navbar from '@/component/Navbar'
import HomeSection from '@/component/Home'
import About from '@/component/About'
import Services from '@/component/Services'
import Testimonials from '@/component/Testimonial'
import Contact from '@/component/Contact'


export default function Home() {
return (
<>
<Navbar />
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
<HomeSection />
<About />
<Services />
<Testimonials />
<Contact />
</motion.main>
</>
)
}