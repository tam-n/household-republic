import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftRight, faCircleDot, faBox } from '@fortawesome/free-solid-svg-icons'

export default function Items({img, code, name, thickness, quantity}) {
    return (
        <article className='flex flex-col p-5 basis-1/2 md:basis-1/4'>
            <div className='rounded-xl basis-1/2'>
                <div>
                    <img src={img} className='w-full object-cover'/>
                </div>
            </div>
            <div className='basis-1/2'>
                <h1 className='text-center titles font-bold m-3'>{code}</h1>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faCircleDot} className='basis-1/4'/>
                    <div className='basis-full text font-medium'>{name}</div>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faLeftRight} className='basis-1/4'/>
                    <div className='basis-full text font-medium'>{thickness}</div>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faBox} className='basis-1/4'/>
                    <div className='basis-full text font-medium'>{quantity}</div>
                </div>
            </div>
        </article>
    )
}