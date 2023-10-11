import householdItems from '../Images/household-items.jpg'

export default function Carousel() {
    return (
        <div className='relative flex'>
            <img src={householdItems} className='w-full hero object-cover'></img>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-3xl text-white titles md:text-6xl'>Household Republic</h1>
                <h2 className='text-white font- text md:text-3xl'>Industrial-grade & exam-grade nitrile, vinyl, and latex gloves designed for a variety of applications.</h2>
            </div>
        </div>
    )
}