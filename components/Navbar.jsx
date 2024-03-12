'use client';

import { motion } from 'framer-motion';

import styles from '../styles'
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants} /* this variant adds the animation from utils */
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`} /* this className adds the padding and y-axis padding and it gets it from styles to automatically do responsive design */
  >
    <div className='absolute w-[50%] inset-0 gradient-01'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img 
        src='/search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain'
      />
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
        Metaversus
      </h2>
      <img 
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.nav>
);

export default Navbar;
