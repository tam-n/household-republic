import dental from '../Images/dental.jpg'
import automotive from '../Images/automotive.jpg'
import garden from '../Images/garden.jpg'
import food from '../Images/food.jpg'
import veterinary from '../Images/veterinary.jpg'

export default function ProductUses() {
    return (
        <>
            <div className="text-center pt-8 titles font-semibold text-2xl">Product Uses</div>
            <div className="row flex-wrap md:flex justify-center p-8 text-sm md:text-lg">
                <div className='basis-1/5 relative text-center p-1 md:p-2 font-normal'>
                    <img src={dental} className="w-full h-28 md:h-40 object-cover"/>
                    Dental
                </div>
                <div className='basis-1/5 relative text-center p-1 md:p-2 font-normal'>
                    <img src={automotive} className="w-full h-28 md:h-40 object-cover"/>
                    Auto & Industrial
                </div>
                <div className='basis-1/5 relative text-center p-1 md:p-2 font-normal'>
                    <img src={garden} className="w-full h-28 md:h-40 object-cover"/>
                    Home & Garden
                </div>
                <div className='basis-1/5 relative text-center p-1 md:p-2 font-normal'>
                    <img src={food} className="w-full h-28 md:h-40 object-cover"/>
                    Food Service
                </div>
                <div className='basis-1/5 relative text-center p-1 md:p-2 font-normal'>
                    <img src={veterinary} className="w-full h-28 md:h-40 object-cover"/>
                    Vetinary
                </div>
            </div>
        </>
    )
}