import specials from './weeks-specials'
import Card from './Card'

export default function Specials(){
    return(
        <div className="specials-section">
            <div className="container mx-auto">
                <div className="title columns-2">
                    <h2 className="text-3xl font-bold mt-0 mb-5 text-black text-center">This weeks specials!</h2>
                    <span> <a href="/reserve-table" className='transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-4 px-6 rounded-lg'>Online Menu</a></span>
                </div>
                <div className="grid md:grid-cols-3 md:gap-10">
                            {
                                specials.map(p =>{
                                    return <Card key={p.id} id={p.id} url={p.url} title={p.title} price={p.price} desc={p.desc} />
                                })
                            }
						</div>
            </div>
        </div>
    )
}