particlesJS('particles-js', {
    particles: {
      number: {
        value: 500,  // More particles for a denser "atom collision" effect
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: '#ff6600'  // Spark-like yellow/orange color for a fiery look
      },
      shape: {
        type: 'circle',  // Circular particles work well for this effect
        stroke: {
          width: 0,
          color: '#ff6600'
        }
      },
      opacity: {
        value: 0.8,  // Less opacity for a more dynamic spark effect
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 4,  // Smaller particles to simulate tiny atoms
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,  // Disable line linking for a more scattered spark effect
      },
      move: {
        enable: true,
        speed: 15,  // Increased speed for fast-moving particles to simulate collisions
        direction: 'none',  // Particles move in random directions
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    retina_detect: true
});
