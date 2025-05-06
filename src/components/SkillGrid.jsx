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
    SiNextdotjs, SiSpringboot, SiDjango, SiExpress
  } from 'react-icons/si';
  
  import { motion, useAnimation } from 'framer-motion';
  import { useEffect, useState } from 'react';
  
  const iconMap = {
    javascript: <FaJs />,
    python: <FaPython />,
    java: <FaJava />,
    nodejs: <FaNode />,
    react: <FaReact />,
    angular: <FaAngular />,
    vue: <FaVuejs />,
    cplusplus: <SiCplusplus />,
    mongodb: <SiMongodb />,
    postgresql: <SiPostgresql />,
    typescript: <SiTypescript />,
    nextjs: <SiNextdotjs />,
    springboot: <SiSpringboot />,
    django: <SiDjango />,
    express: <SiExpress />,
    sql: <FaDatabase />,
  };
  
  const getColor = (percent) => {
    if (percent >= 80) return '#10b981';       // green
    if (percent >= 50) return '#3b82f6';       // blue
    if (percent >= 30) return '#facc15';       // yellow
    return '#ef4444';                          // red
  };
  
  const SkillGrid = ({ name, percent }) => {
    const key = name.toLowerCase().replace(/\s/g, '');
    const icon = iconMap[key] || <FaDatabase />;
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
            className="text-2xl rounded-full text-white"
            animate={controls}
            whileHover={{ scale: 1.6 }}
          >
            {icon}
          </motion.div>
        </CircularProgressbarWithChildren>
        <motion.p
          className="text-center text-sm font-sans mt-2 text-white font-bold"
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
  