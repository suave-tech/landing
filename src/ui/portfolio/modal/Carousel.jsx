import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';



const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exitLeft: {
        x: '100%',
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
    exitRight: {
        x: '-75%',
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    }
};

const slidersVariants = {
    hover: {
        scale: 1.2,

    },
};

export default function Carousel({ preview }) {


    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
    const images = preview
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState('left');

    console.log(currentIndex)

    const handleNext = () => {
        setDirection('right')
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setDirection('left')

        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className='d-flex flex-column'>
            <div className="carousel">
                <motion.button
                    onClick={handleNext}
                    variants={slidersVariants}
                    whileHover={"hover"}
                    className='left'>
                    <img
                        src='/img/left-arrow.png' alt='left-arrow'
                    />
                </motion.button>
                <div className='carousel-images'>
                    <AnimatePresence>
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            variants={slideVariants}
                            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                            className='anima-img'
                            animate="visible"
                            exit={direction === "right" ? 'exitRight' : 'exitLeft'} />
                    </AnimatePresence>
                </div>
                <motion.button
                    onClick={handlePrevious}
                    variants={slidersVariants}
                    whileHover={"hover"}
                    className='right'>
                    <img src='/img/right-arrow.png' alt='right-arrow' />
                </motion.button>
            </div>
        </motion.div>
    )
}

