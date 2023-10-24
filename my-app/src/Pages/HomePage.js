import Carousel from '../Components/Carousel';
import ProductsCard from '../Components/ProductsCard';
import About from '../Components/About'
import ProductUses from '../Components/ProductUses'

export default function HomePage() {
    return (
        <div>
            <Carousel/>
            <ProductsCard/>
            <ProductUses/>
            <About/>
        </div>
    )
}