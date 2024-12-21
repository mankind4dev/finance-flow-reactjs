"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tracking from '../components/Tracking'
import SetUp from '../components/SetUp'
import Reports from '../components/Report'
import LinkBank from '../components/LinkBank'
import Frequent from '../components/Frequent'
import DrivenAi from '../components/DrivenAi'
import Swipers from '../components/Swiper'

export default function Home() {
  return (
    <>
    <Header /> 
      <div className="flex flex-col min-h-screen min-w-full max-w-lg mx-auto px-4 gap-y-48 bg-[rgba(66,133,244,1)]">
        <section className="flex flex-col gap-y-16 ">
          <Tracking />
          <SetUp />
          <Reports />
        </section>
        <section>
          <LinkBank />
        </section>
        <section className="flex w-full my-20">
          <Swipers />
        </section> 
        <section className="">
          <Frequent />
        </section> 
        <section className="">
          <DrivenAi />
        </section>
      </div>
      <Footer />
    </>
  )
}
