gsap.from(".right-img img",{
    x:200,
    opacity:0,
    delay:0.5,
    
    duration:1,
    scrolltriger:{
        trigger:"..right-img img",
        scroller:"body",
    }

})
gsap.from(".text-left",{
    x:-200,
    opacity:0,
    delay:0.5,
    
    duration:1,
    scrolltriger:{
        trigger:".text-left",
        scroller:"body",
    }

})
gsap.from("nav .navText",{
    y:-100,
    opacity:0,
    duration:0.5,
    delay:0.2,
    scrolltriger:{
        trigger:"nav .logo .navText .icon",
        scroller:"body",
        stagger:0.9,
    }
})