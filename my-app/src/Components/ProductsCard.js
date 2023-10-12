import latex from '../Images/latex.jpg'
import nitrile from '../Images/nitrile.jpg'
import vinyl from '../Images/vinyl.jpg'

export default function ProductsCard() {
    return (
        <div className="flex-wrap text-center">
            <div className="titles basis-full mt-8 md:my-8 text-2xl font-semibold">
                Products
            </div>
            <div className="basis-full flex justify-center text-start p-5">
                <div className="basis-1/3 p-2 md:p-8 md:basis-1/4 hover:bg-slate-300">
                    <img src={nitrile} className="w-full object-cover"></img>
                    <div className='border-solid border-b-2 text-xl my-3'>Nitrile</div>
                    <div className='mt-3'>Versatile disposable gloves designed to deliver a wide range of puncture and chemical resistance. Nitrile offers the widest selected of color, thickness, and texture.</div>
                </div>
                <div className="basis-1/3 p-2 md:p-8 md:basis-1/4 hover:bg-slate-300">
                    <img src={vinyl} className="w-full object-cover"></img>
                    <div className='border-solid border-b-2 text-xl my-3'>Vinyl</div>
                    <div className='mt-3'>Smooth lightweight disposable gloves designed for short-duration use. Vinyl provides an economical solution to frequent glove changes.</div>
                </div>
                <div className="basis-1/3 p-2 md:p-8 md:basis-1/4 hover:bg-slate-300">
                    <img src={latex} className="w-full object-cover"></img>
                    <div className='border-solid border-b-2 text-xl my-3'>Latex</div>
                    <div className='mt-3'>Delivers the highest elasticity, resilience, and tactile sensitivity while providing excellent comfort and fit.</div>
                </div>
            </div>
        </div>
    )
}