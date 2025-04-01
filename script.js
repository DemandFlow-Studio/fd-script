
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
