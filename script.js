
  const nextButton = document.querySelector('.next-btn');
  const video = document.querySelector('.hero-video');
  const source = video.querySelector('source');

  const movieList = [
    'videos/hero-1.mp4',
    'videos/hero-2.mp4',
    'videos/hero-3.mp4',
    'videos/hero-4.mp4',
  ];

  let index = 0;

  // Safari/iOS inline fix
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  nextButton.addEventListener('click', () => {
    index++;
    if (index >= movieList.length) {
      index = 0; // loop back to first video
    }

    // Change source and reload
    source.src = movieList[index];
    video.load();
    video.play();
  });

