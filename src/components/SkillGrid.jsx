import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  FaJs, FaPython, FaJava, FaNode, FaReact, FaAngular, FaVuejs,
  FaDatabase
} from 'react-icons/fa';
import {
  SiCplusplus, SiMongodb, SiPostgresql, SiTypescript,
  SiNextdotjs, SiSpringboot, SiDjango, SiExpress, SiDocker
} from 'react-icons/si';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const iconMap = {
  javascript: <FaJs color='yellow' />,
  python: <FaPython color='blue' />,
  java: <FaJava className='text-orange-500' />,
  nodejs: <FaNode color='green' />,
  react: <FaReact className='text-blue-600' />,
  angular: <FaAngular className='text-red-500' />,
  vue: <FaVuejs className='text-blue-500' />,
  cpp: <SiCplusplus className='text-blue-300' />,
  mongodb: <SiMongodb className='text-green-600' />,
  postgresql: <SiPostgresql className='text-blue-800' />,
  typescript: <SiTypescript className='text-blue-800' />,
  nextjs: <SiNextdotjs className='text-gray-900 bg-white rounded-full' />,
  springboot: <SiSpringboot className='text-green-500' />,
  django: <SiDjango />,
  express: <SiExpress />,
  sql: <FaDatabase className='text-red-200' />,
  docker: <SiDocker className='text-blue-500' />
};

const getColor = (percent) => {
  if (percent >= 80) return '#10b981';       // green
  if (percent >= 50) return '#3b82f6';       // blue
  if (percent >= 30) return '#facc15';       // yellow
  return '#ef4444';                          // red
};

const SkillGrid = ({ name, percent }) => {
  const key = name.toLowerCase().replace(/\s/g, '');
  const icon = iconMap[key] || <FaDatabase className='text-red-200' />;
  const color = getColor(percent);

  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percent);
    }, 200);

    controls.start({
      scale: [0.8, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 }
    });

    return () => clearTimeout(timeout);
  }, [percent, controls]);

  return (
    <motion.div
      className="w-24 h-24 md:w-28 md:h-28 m-3 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.1,
        boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.2)',
        transition: { type: 'spring', stiffness: 300 }
      }}
      transition={{ duration: 0.5 }}
    >
      <CircularProgressbarWithChildren
        value={progress}
        styles={buildStyles({
          pathColor: color,
          trailColor: "#1f2937",
          strokeLinecap: "round",
          transition: 'stroke-dashoffset 0.5s ease 0s'
        })}
      >
        <motion.div
          className="text-2xl rounded-full transition-all duration-300 text-white"
          animate={controls}
          whileHover={{
            scale: 1.6,
            rotate: 360,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          {icon}
        </motion.div>
      </CircularProgressbarWithChildren>
      <motion.p
        className="text-center text-sm font-sans mt-2 uppercase text-white font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
};

export default SkillGrid;
