
// Hero animation
document.addEventListener('DOMContentLoaded', () => {
    // Function to check if window width is above 480px
    const isDesktop = () => window.innerWidth > 480;

    // Function to setup mobile state (no animations)
    const setupMobileState = () => {
        const elements = [
            '[data-hero-animation="element"]',
            ...[1, 2, 3, 4, 5, 6].map(i => `[data-hero-animation="element-${i}"]`),
            '[data-hero-animation="vid-overlay"]'
        ];

        // Reset all elements to their visible state
        elements.forEach(selector => {
            gsap.set(selector, {
                clearProps: "all" // Clear all GSAP-added properties
            });
        });

        // Ensure vid-overlay is displayed properly on mobile
        gsap.set('[data-hero-animation="vid-overlay"]', {
            display: 'flex',
            opacity: 1
        });
    };

    // Function to run desktop animations
    const runDesktopAnimation = () => {
        const tl = gsap.timeline({
            defaults: {
                ease: "circ.out",
                duration: 0.5
            },
        });

        // First hide the vid-overlay
        gsap.set('[data-hero-animation="vid-overlay"]', {
            display: 'none',
            opacity: 0
        });

        // Animate base element
        tl.to('[data-hero-animation="element"]', {
            opacity: 1,
            y: 0
        });

        // Animate numbered elements in sequence
        for(let i = 1; i <= 6; i++) {
            tl.to(`[data-hero-animation="element-${i}"]`, {
                opacity: 1,
                y: 0
            }, '-=0.4');
        }

        // Add the vid-overlay animation at the end
        tl.to('[data-hero-animation="vid-overlay"]', {
            display: 'flex',
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            delay: 2
        });

        return tl;
    };

    // Initial setup based on screen size
    let currentAnimation;
    if (isDesktop()) {
        currentAnimation = runDesktopAnimation();
    } else {
        setupMobileState();
    }

    // Handle resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        // Debounce resize events
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (isDesktop()) {
                if (!currentAnimation) {
                    currentAnimation = runDesktopAnimation();
                }
            } else {
                if (currentAnimation) {
                    currentAnimation.kill(); // Stop any running animations
                    currentAnimation = null;
                    setupMobileState();
                }
            }
        }, 250); // Wait 250ms after resize ends before running
    });
});



// -------------------------------------------------------------- //



// Hero Lottie Video Setup
document.addEventListener('DOMContentLoaded', () => {
  const vimeoIframe = document.querySelector('#vimeo-vid');
  const playButton = document.querySelector('[data-hero-video="play-button"]');
  const closePlayBtn = document.querySelector('#video-close-play');
  const bgCloseBtn = document.querySelector('#bg-close-btn');
  const vimeoPlayer = new Vimeo.Player(vimeoIframe);

  
  if (vimeoIframe && playButton) {
    playButton.addEventListener('click', () => {
      // Play the Vimeo video
      
      // Ensure the video starts playing after the button click (user interaction)
      vimeoPlayer.play().catch(error => {
        // If the video can't play, catch the error and possibly mute the video as a fallback
        if (error.name === 'NotAllowedError') {
          vimeoPlayer.setVolume(0);  // Mute the video
          vimeoPlayer.play();        // Play the muted video
        }
      });
    });
  }
  
  closePlayBtn.addEventListener('click', () => {
    vimeoPlayer.pause();
  });
  
    bgCloseBtn.addEventListener('click', () => {
    vimeoPlayer.pause();
  });
  
});



document.addEventListener('DOMContentLoaded', function() {
        const iframe = document.getElementById('vimeo-vid');
        const locale = document.documentElement.getAttribute('data-wf-locale');
        let videoUrl;

        // if (locale === 'en-US') {
        //     videoUrl = 'https://player.vimeo.com/video/1045680299?h=fb38550f3e&badge=0&autopause=0&player_id=0&app_id=58479';
        // } else if (locale === 'en-GB') {
        //     videoUrl = 'https://player.vimeo.com/video/1045679785?h=d1f2dad1b9&badge=0&autopause=0&player_id=0&app_id=58479';
        // }

  if (locale === 'en-GB') {
            videoUrl = 'https://player.vimeo.com/video/1045679785?h=d1f2dad1b9&badge=0&autopause=0&player_id=0&app_id=58479';
        }

        if (videoUrl) {
            iframe.src = videoUrl;
        }
    });
