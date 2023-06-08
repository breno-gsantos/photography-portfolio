import { Image1, Image2, Image3, Image4 } from '../img/portfolio';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          
          <motion.div initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-80%'}} transition={transition1} className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>Memories encapsuled in images. Stars frozen in time.<b> Stores told with light.</b> My portfolio is a visual journey
              <br />
              <br />
              Each click is an artistic expression. Photography that
              conveys emotion, Eternalized moments, Visual poetry. Discover my photografic world.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire Me</Link>
          </motion.div>

          <div className='grid grid-cols-2 lg:gap-2'>
            
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image1} alt='image1' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image2} alt='image2' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image3} alt='image3' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image4} alt='image4' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio