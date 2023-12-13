
let tl = gsap.timeline();

tl.to(".square-section__move3", { opacity: 1, rotation: 360, duration: 2, ease: "bounce.out" }, .5).from(".square-section__move3", { x: -800, duration: 2, ease: "bounce.out" }, .5)

tl.to(".square-section__move2", { opacity: 1, rotation: 360, duration: 2, ease: "bounce.out" }, .3).from(".square-section__move2", { y: -800, duration: 2, ease: "bounce.out" }, .3)

tl.to(".square-section__move1", { opacity: 1, rotation: 360, duration: 2, ease: "bounce.out" }, .7).from(".square-section__move1", { x: -800, duration: 2, ease: "bounce.out" }, .7)


// GSAP Blur Plugin
gsap.from(".blurry-text", {
    duration: 0.75,
    blur: 15,
    //opacity: 0,
    alpha: 0.3,
    scale: 0.95,

    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".blurry-text",
        start: "top 65%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        markers: false
    }
});
