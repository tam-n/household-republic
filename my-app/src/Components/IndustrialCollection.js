import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gwon from '../Images/gwon46100.png'
import gwgn from '../Images/gwgn46100.png'
import gwbn from '../Images/gwbn46100.png'
import gwrbn from '../Images/gwrbn46100.png'
import inpf from '../Images/inpf46100.png'
import gpnb from '../Images/gpnb46100.png'
import ivpf from '../Images/ivpf46100.png'
import ivbpf from '../Images/ivbpf46100.png'
import tlf from '../Images/tlf46100.png'
import ilhd from '../Images/ilhd46100.png'
import Items from './Items'

export default function ProductCollection({products}) {
    return (
        <div>   
            <div className="w-full">
                <div className="mx-auto p-14 lg:px-32">
                    <div className='titles text-center mb-8 text-2xl font-semibold'>
                        <h1>Nitrile</h1>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Items img={gwon} code='GWON' name='Orange Nitrile RDT Gloves' thickness='8 Mil' quantity='100 gloves/box'/>
                        <Items img={gwgn} code='GWGN' name='Green Nitrile RDT Gloves' thickness='8 Mil' quantity='100 gloves/box'/>
                        <Items img={gwrbn} code='GWRBN' name='Royal Blue Nitrile RDT Gloves' thickness='6 Mil' quantity='100 gloves/box'/>
                        <Items img={gwbn} code='GWBN' name='Black Nitrile RDT Gloves' thickness='6 Mil' quantity='100 gloves/box'/>
                        <Items img={inpf} code='INPF' name='Industrial Blue Nitrile Gloves' thickness='5 Mil' quantity='100 gloves/box'/>
                        <Items img={gpnb} code='GPNB' name='Industrial Black Nitrile Gloves' thickness='5 Mil' quantity='100 gloves/box'/>
                    </div>
                    <div className='titles text-center m-8 text-2xl font-semibold'>
                        <h1>Vinyl</h1>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <Items img={ivpf} code='IVPF' name='Clear Vinyl Gloves' thickness='3 Mil' quantity='100 gloves/box'/>
                        <Items img={ivbpf} code='IVBPF' name='Blue Vinyl Gloves' thickness='3 Mil' quantity='100 gloves/box'/>
                    </div>
                    <div className='titles text-center m-8 text-2xl font-semibold'>
                        <h1>Latex</h1>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <Items img={ilhd} code='ILHD' name='Ivory Latex Gloves' thickness='6 Mil' quantity='100 gloves/box'/>
                        <Items img={tlf} code='TLF' name='Ivory Latex Gloves' thickness='4 Mil' quantity='100 globes/box'/>
                    </div>
                </div>
            </div>
        </div>
    )
}