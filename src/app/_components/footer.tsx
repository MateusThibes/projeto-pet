import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer () {
  return (
    <section className='bg-[#E84C3D] py-16 text-white'>
        <div className='container mx-auto px-4'>
          
          <div className='border-b border-white/20 pb-8'>
              <h4 className='text-3xç font-semibold mb-8 text-center'>Nossos parceiros</h4>
                
                <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                  {brands.map((item,index) => (
                      <div key={index} className='bg-white p-4 rounded-lg flex item-center justify-center'>
                        <Image
                          src= {item.logo}
                          alt= {item.name}
                          height= {50}
                          width={100}
                          style={{
                            width: "auto",
                            height:"auto"
                          }}
                          className="object-contain"
                        />                                            
                      </div>
                  ))}
                </div>
          </div>

        </div>

    </section>
  )
}