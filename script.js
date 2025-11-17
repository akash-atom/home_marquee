const marquee = document.querySelector('.marquee_div')
const marqueeContent = marquee.firstChild

const marqueeContentClone = marqueeContent.cloneNode(true)
marquee.append(marqueeContentClone)

const playMarquee = () => {
    const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10)
const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue('column-gap'), 10)

const distanceToTranslate = -1 * (width + gap) 

gsap.fromTo(
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

window.addEventListener('resize', playMarquee)