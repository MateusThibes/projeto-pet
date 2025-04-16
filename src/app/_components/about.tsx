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
        
        <div className="relative" data-aos="fade-up-right" data-aos-delay="300"   >
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

                <div className="space-y-6 mt-6" data-aos="fade-up-left" data-aos-delay="300"   >
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
                  target='_blank'
                  href={ `http://wa.me/5515997649525?text= Olá vim pelo site e gostaria de mais informações`}
                  className='bg-[#ee992b] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'  
                  >  
                    <WhatsappLogo className='w-5 h-5 text-black' />
                    Contato via WhatsApp
                  </a>
                  <a 
                   target='_blank'
                   href={ `https://www.google.com/maps/uv?pb=!1s0x94c5cc5e3591a53d%3A0x8fa979149f649b35!3m1!7e115!4s%2Fmaps%2Fplace%2Fendere%25C3%25A7o%2Bshopping%2Bitapetininga%2F%40-23.5789201%2C-48.037316%2C3a%2C75y%2C344.05h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sGUzuGrsiHUXBVnB3GTU0zQ*212e0*214m2*213m1*211s0x94c5cc5e3591a53d%3A0x8fa979149f649b35%3Fsa%3DX%26ved%3D2ahUKEwiukamls9uMAxXHq5UCHV1-EhMQpx96BAg1EAA!5sendereço%20shopping%20itapetininga%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e2!2sGUzuGrsiHUXBVnB3GTU0zQ&cr=le_a7&hl=pt-BR&ved=1t%3A206134&ictx=111`}
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