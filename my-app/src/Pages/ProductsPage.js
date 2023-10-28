import IndustrialCollection from "../Components/IndustrialCollection"
import ProductsInfo from "../Components/ProductsInfo"
import ExamCollection from '../Components/ExamCollection'

export default function ProductsPage() {
    return (
        <div>
            <ProductsInfo title='Industrial Grade Gloves' text='Gloves boasting an elevated diamond texture provide unparalleled performance, thanks to their textured surface that enhances both grip and functionality.'/>
            <IndustrialCollection/>
            <ProductsInfo title='Exam Grade Gloves' text='Top pick gloves offering extended cuffs for medical-grade protection and comfort.'/>
            <ExamCollection/>
        </div>
    )
}