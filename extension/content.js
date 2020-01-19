const updateContent = () => {
  const iframe = document.createElement('iframe');
  document.body.parentNode.insertBefore(iframe, document.body);

  const glitchedUrl =
    'https://glitched.news/article?url=' + window.location.href;
  iframe.setAttribute('src', glitchedUrl);
};
updateContent();
