/*const bioPath = document.getElementById("bioPath");
  const projectsPath = document.getElementById("projectsPath");
  const findmePath = document.getElementById("findmePath");
  const btn = document.getElementById("morph");

  const morphPath = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const originPath = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

  let tl = gsap.timeline({
    paused: true,
    repeat: -1
  });

  tl.to([bioPath, projectsPath, findmePath], {
    morphSVG: morphPath,
    ease: "power2.in",
    duration: .6
  }).to([bioPath, projectsPath, findmePath], {
    morphSVG: originPath,
    ease: "power2.out",
    duration:.6
  });

  const bioBtn = document.getElementById("bio");

  const projectsBtn = document.getElementById("projects");

  const findmeBtn = document.getElementById("findme");
  const allMorphBtns = [bioBtn, projectsBtn, findmeBtn];

  allMorphBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tl.restart();
    });
  });*/