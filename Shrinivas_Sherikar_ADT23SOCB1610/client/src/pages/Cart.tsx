
import PricingSection from '../components/PricingSection'

function Cart() {
  return (
    <section className="relative z-10 flex flex-col justify-center items-center pt-24 gap-5 container mx-auto px-4 text-white">
        <div className="text-3xl md:text-4xl text-center font-semibold space-y-2">
          <p>Simple, transparent pricing</p>
          <p>
            that{" "}
            <span className="text-primary-custom bg-primary-custom/10 px-2">
              scales
            </span>{" "}
            with you.
          </p>
        </div>
        <div className="max-w-xs md:max-w-md text-gray-400 text-center text-sm md:text-base">
          <p>
            Get started for free. No credit card required.
          </p>
        </div>
        <PricingSection />
      </section>
  )
}

export default Cart