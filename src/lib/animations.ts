import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const slideInFromLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const slideInFromRight: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const cardHover = {
    rest: {
        y: 0,
        boxShadow: '0 0 0 rgba(99, 102, 241, 0)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    hover: {
        y: -8,
        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

export const buttonHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: { duration: 0.2 }
    },
    tap: {
        scale: 0.98,
        transition: { duration: 0.1 }
    },
};

export const iconHover = {
    rest: { rotate: 0, scale: 1 },
    hover: {
        rotate: 15,
        scale: 1.1,
        transition: { duration: 0.3, ease: 'easeOut' }
    },
};

export const underlineSlide = {
    rest: {
        width: '0%',
        transition: { duration: 0.3 },
    },
    hover: {
        width: '100%',
        transition: { duration: 0.3 },
    },
};
