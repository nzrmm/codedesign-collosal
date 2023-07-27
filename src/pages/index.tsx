import {
  Hero,
  Feature,
  SupportedBy,
  HowWeWork,
  OurTeam,
  Projects,
  GetStarted,
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
    </div>
  )
}

export default Home