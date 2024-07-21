import React, { useEffect,useState} from 'react'
import axios from 'axios'
import { Link,Outlet } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import logo from '../src/bacccc.webp'
import curve from '../src/curve.png'

const Write = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
 

 
  return (
       
        <div className='full'>
       
          <div className='full1'>
          
            
        <TypeAnimation
                cursor={false}
                sequence={[
                  'Ink & Insights',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Unveiling the world through words',
                    1000,
                    'asdfghj',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    'asdfghjkl',
                    1000,
                    'qwetyui',
                    1000,
                    "xcvbnm,",
                    1000
                   
                  ]}
                  speed={30}
                  deletionSpeed={50}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
              
              <Link to='main' className='detail'><span>explore blogs</span></Link>
        </div>
        </div>
      )
    }
    



export default Write