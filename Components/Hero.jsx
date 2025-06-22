"use client";
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import styles from './Hero.module.css';
export default function Hero() {
    return (
        <>
          <div id={styles.Hero} className='switching-color' >
            <span>Hello!</span><br/>
            <span>Myself Raj Gupta, <br /> And </span><br/>
            <span className='inline'> I&nbsp;
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'am a web developer.',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'am a MERN developer.',
                1000,
                'am a programmer.',
                1000,
                'have qualified the GATE exam.',
                1000,
                'am a coder.',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block'}}
              repeat={Infinity}
              className=' inline-block text-success'
            />
          </div>

          <Fade left className='mt-4 mb-4'>
            <a href="Raj Gupta.pdf" download className="btn btn-lg border border-primary">
              <span className='p-5 mt-2 text-primary'>Download Resume</span>
            </a>
          </Fade>
        </>
      );
}
