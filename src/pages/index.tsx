import {
  Hero,
  Feature,
  SupportedBy,
  HowWeWork,
  OurTeam,
  Projects,
  GetStarted,
  Testimonial
} from "@/screens/home"

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <SupportedBy />
      <HowWeWork />
      <OurTeam />
      <Projects />
      <GetStarted />
      <Testimonial />
    </div>
  )
}

export default Home