import householdItems from '../Images/household-items.jpg'

export default function Carousel() {
    return (
        <div className='relative flex w-full'>
            <img src={householdItems} className='w-full hero object-cover'></img>
            <div className='absolute text-wrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-lg text-white titles md:text-4xl my-5'>Household Republic</h1>
                <h2 className='text-white text-xs md:text-2xl text'>Industrial-grade & exam-grade nitrile, vinyl, and latex gloves designed for a variety of applications.</h2>
                <a href='products'><button className='bg-blue-950 text-white rounded-md w-14 h-8 md:w-24 md:h-10 mt-5 text-sm md:text-md'>View</button></a>
            </div>
        </div>
    )
}