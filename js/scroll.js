(function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  
  const onScrollToTopButtonClick = () => {
    window.scroll({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  const onWindowScroll = () => {
    scrollToTopButton.hidden = (pageYOffset < document.documentElement.clientHeight);
  }

  scrollToTopButton.addEventListener('click', onScrollToTopButtonClick);
  window.addEventListener('load', onWindowScroll);
  window.addEventListener('scroll', onWindowScroll);

}());