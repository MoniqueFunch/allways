gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  //   const img = section.querySelectorAll("img");
  const p = section.querySelectorAll("p");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "200% 200%",
        end: "+=40",
        scrub: true,
        // pin: true,
        // markers: true,
      },
    })
    .from(p, {
      duration: 1,
      opacity: 0,
    });
  // .from(p, {
  //   y: 100,
  //   duration: 1,
  //   opacity: 0,
  //   stagger: 1,
  // });
});
