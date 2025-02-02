import style from "./style";
import { Navbar, Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Stats, Testimonials} from './components';
export const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.center}`}>
            <div className={`${style.boxWidth}`}>
                <Navbar />
            </div>
        </div>
     <div className={`bg-primary ${style.flexStart}`}>
            <div className={`${style.boxWidth}`}>
                <Hero />
            </div>
        </div>
        <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
            <div className={`${style.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default App
