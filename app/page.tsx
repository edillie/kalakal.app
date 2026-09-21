import { Navbar } from "@/components/kalakal/navbar"
import { HeartNav } from "@/components/kalakal/heart-nav"
import { Hero } from "@/components/kalakal/hero"
import { Idea } from "@/components/kalakal/idea"
import { Steps } from "@/components/kalakal/steps"
import { Categories } from "@/components/kalakal/categories"
import { Examples } from "@/components/kalakal/examples"
import { Difference } from "@/components/kalakal/difference"
import { BrandHeart } from "@/components/kalakal/brand-heart"
import { Inclusive } from "@/components/kalakal/inclusive"
import { FinalCta } from "@/components/kalakal/final-cta"
import { Footer } from "@/components/kalakal/footer"

export default function Page() {
  return (
    <div className="kk" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <HeartNav />
      <main>
        <Hero />
        <Idea />
        <Steps />
        <Categories />
        <Examples />
        <Difference />
        <BrandHeart />
        <Inclusive />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
