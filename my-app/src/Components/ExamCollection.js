import gpnhd from '../Images/gpnhd66100.png'
import Items from './Items';
import gplhd from '../Images/gplhd86100.png'

export default function ProductCollection() {
    return (
        <div>   
            <div className="w-full">
                <div className="mx-auto p-14 lg:px-32">
                    <div className='titles text-center mb-8 text-2xl font-semibold'>
                        <h1>Nitrile</h1>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Items img={gpnhd} code='GPNHD' name='Blue Nitrile Gloves' thickness='7 Mil' quantity='50 gloves/box'/>
                    </div>
                    <div className='titles text-center m-8 text-2xl font-semibold'>
                        <h1>Latex</h1>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <Items img={gplhd} code='GPLHD' name='Blue Latex Exam Gloves' thickness='13 Mil' quantity='50 gloves/box'/>
                    </div>
                </div>
            </div>
        </div>
    )
}