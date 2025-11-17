const marquee = document.querySelector('.marquee_div')
const marqueeContent = marquee.firstChild

const marqueeContentClone = marqueeContent.cloneNode(true)
marquee.append(marqueeContentClone)

let marqueeAnimation = null

const playMarquee = () => {
    const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10)
const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue('column-gap'), 10)

const distanceToTranslate = -1 * (width + gap) 

// Kill existing animation if it exists
if (marqueeAnimation) {
    marqueeAnimation.kill()
}

marqueeAnimation = gsap.fromTo(
    marquee.children,
    {
        x: 0
    },
    {
        x: distanceToTranslate,
        duration: 5, 
        repeat: -1,
        ease: "linear"
    }
) 


}

playMarquee() 

// Pause on hover
marquee.addEventListener('mouseenter', () => {
    if (marqueeAnimation) {
        marqueeAnimation.pause()
    }
})

// Resume on mouse leave
marquee.addEventListener('mouseleave', () => {
    if (marqueeAnimation) {
        marqueeAnimation.resume()
    }
})

window.addEventListener('resize', playMarquee)