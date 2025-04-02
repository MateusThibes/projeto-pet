import Image from 'next/image'
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';
import { Check, MapPin } from 'lucide-react';
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About () {
  return (
    <section className="bg-[#FDF6ec] py-16 ">
      <div className="container px-4 mx-auto ">

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        <div className='relative'>
          <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
            <Image
            src={about1Img}
            alt='Foto Cachorro 1'
            fill
            quality={100}
            className="object-cover hover:scale-110 duration-300"
            priority
            />
          </div>
          
          <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white'>
            <Image
            src={about2Img}
            alt='Foto Cachorro 2'
            fill
            quality={100}
            className="object-cover"
            priority
            />
          </div>

          </div>

                <div className="space-y-6 mt-6">
                  <h2 className="text-4xl font-bold">SOBRE</h2>

                  <p>
                  No nosso petshop, seu bichinho recebe toda a atenção que merece! Oferecemos banho, tosa, produtos 
                  de qualidade e um atendimento especial para garantir o bem-estar e a felicidade do seu pet.
                  </p>
                 
                  <ul className="space-y-4">
                      <li className="flex items-center gap-2">
                        <Check className='text-red-500'/>
                        Aberto desde 2006
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className='text-red-500'/>
                        Equipe com mais de 10 veterinários
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className='text-red-500'/>
                        Qualidade é nossa prioridade
                      </li>
                  </ul>

<div className='flex gap-5'>
<a 
                  href="#"
                  className='bg-[#ee992b] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'  
                  >  
                    <WhatsappLogo className='w-5 h-5 text-black' />
                    Contato via WhatsApp
                  </a>
                  <a 
                  href="#"
                  className='bg-[#f1e867] text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'  
                  >  
                    <MapPin className='w-5 h-5 text-black' />
                    Endereço da Loja
                  </a>
                  <a 
                  href="#"
                  className='bg-[#b7eef0] text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'  
                  >  
                    <Check className='text-black'/>
                    Quem Somos?
                  </a>
</div>
                </div>
        </div>


         

          </div>
    </section>
  )
}