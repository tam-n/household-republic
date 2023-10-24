import logo from '../Images/footer-logo.svg'

export default function About() {
    return (
        <div className="bg-blue-950 flex flex-wrap justify-center items-center w-full">
            <div className='basis-full md:basis-1/3 flex justify-center p-3'>
                <img src={logo} className='h-16' alt='logo'/>
            </div>
            <div className='basis-full md:basis-1/3 flex flex-wrap text-white p-5 justify-center md:justify-around'>
                <div className='basis-1/4 text-md text flex-columns justify-center p-2'>
                    <div>
                        Products
                    </div>
                    <div className='text-xs mt-2 flex-wrap text'>
                        <div className='basis-full pt-2'>
                            <a>Nitrile</a>
                        </div>
                        <div className='basis-full pt-2'>
                            <a>Vinyl</a>
                        </div>
                        <div className='basis-full pt-2'>
                            <a>Latex</a>
                        </div>
                    </div>
                </div>
                <div className='basis-1/3 md:basis-1/3 text-md p-2'>
                    <div>
                        Contact
                    </div>
                    <div className='text-xs mt-2 text break-all'>
                        householdrepublic@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}