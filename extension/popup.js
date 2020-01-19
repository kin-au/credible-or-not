// const updateContent = () => {
//   const glitchedContent = document.getElementById('iframe-content');

//   let url;
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     url = tabs[0].url;
//     console.log(`url is: ${url}`);
//   });

//   const glitchedUrl = 'https://glitched.news/article?url=' + url;
//   glitchedContent.setAttribute('src', glitchedUrl);
// };
// updateContent();
// const button = document.getElementById('button-get-info');
// button.addEventListener('click', updateContent);
