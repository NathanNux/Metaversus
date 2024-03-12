'use client';

import { motion } from 'framer-motion';

import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 `}>
    <motion.div
      variants={staggerContainer} /* when you click on the staggerContainer youll see, this makes the motion.div a div that allows its children to have separate animations */
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} /* this is a prop that allows the animation to happen only once if it is in the viewport (on screen) set it to once:false will animate it each time its in view (on screen) READ DOCS FOR MORE INFO */
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1 className={styles.heroHeading} variants={textVariant(1.1)} /* when you click on it, it shows animation with a delay, which works accordingly: The main div loads and animates when its in view, and this div will animate as well but with a delay */>Metaverse</motion.h1>
        <motion.div
          variants={textVariant(1.2)} /* again it has delay just a bit after the h1 */
          className='flex flex-row justify-center items-center'
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} /* this will add a special classname so its makes a letter D bit more weird, you can click on it to view the className *//> 
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]'/>

        < img 
          src='/cover.png'
          alt='hero_cover'
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
        />

        <a href='#explore'>
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
            <img 
              src='/stamp.png'
              alt='stamp'
              className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' 
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
