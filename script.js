var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}

tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.4,
    duration:1.5
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:9,
        pin:true
    }
})
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});