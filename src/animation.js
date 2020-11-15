let easing = [0.6, -0.05, 0.01, 0.99];

export const scale = {
    initial: {
        width: 0,
        opacity: 0,
        backgroundColor:["white"],
    },
    animate: {
        width: '80%',
        opacity: 1,
        backgroundColor:["#f5f5f5"],
        transition: {
            duration: 1.5,
            ease: easing,
        }
    }
};

export const containerAnim = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

export const containerMissionAnim = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 1.2,
            delayChildren: 0.3,
        }
    }
}

export const imageScale = {
    initial: {
        x: "-100%",
        opacity: 0,
    },
    animate: {
        x: '0',
        opacity: 1,
        transition: {
            duration: 1.8,
            ease: easing,
        }
    }
};

export const fadeIn = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {duration: 1.5, ease: easing}
    }
};

export const fadeInX = {
    initial: {
        opacity:0,
        x: -60,
    },
    animate: {
        opacity:1,
        x: 0,
        transition: {duration: 1.5, ease: easing}
    }
};

export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
            delayChildren: 2,
        }
    }
};

export const fadeInUp2 = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: easing,
        }
    }
};