import Carousel from '../Components/Carousel';
import ProductsCard from '../Components/ProductsCard';
import ProductUses from '../Components/ProductUses'

export default function HomePage() {
    return (
        <div>
            <Carousel/>
            <ProductsCard/>
            <ProductUses/>
        </div>
    )
}