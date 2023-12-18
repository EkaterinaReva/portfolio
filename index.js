gsap.to(".first",{
    text: "Привет,меня зовут Екатерина, Frontend-разработчик.",
    duration: 4,
    
  
    ease: "power1.in",
    delay: 0.7,
})



gsap.from(".link",{opacity: 0,duration: 4, delay: 1, stagger:2})
gsap.from(".text",{y: 30, delay: 4, duration: 3, opacity: 0, })
gsap.from(".btn",{y: 30, duration: 4, stagger: 2, opacity: 0, delay: 6})

gsap.from(".header", {opacity: 0,duration: 4, delay: 1, stagger:.8})
gsap.from(".pic", {x: -130, duration: 4, opacity: 0, repeat: 1, delay: 7})
gsap.from(".icon",{duration: 3, y: -600, delay: 5, stagger: 1.2, ease: "bounce",rotation: 360, opacity:0, repeat:3 })
gsap.from(".mockup", {duration: 3, y: -400, delay: 6, stagger: 2,   opacity: 0})





particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f42dfd"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#2dfdfb"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 200,
          "height": 200
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 50,
          "size_min": 0.7,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00FEFE",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
