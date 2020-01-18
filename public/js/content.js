const updateContent = event => {
  event.preventDefault();

  const url = document.getElementById("input-url").value;
  const glitchedContent = document.getElementById("iframe-content");

  const glitchedUrl = "https://glitched.news/article?url=" + url;
  glitchedContent.setAttribute("src", glitchedUrl);

  glitchedContent.addEventListener("onload", modifyContent(glitchedContent));
};

const modifyContent = (iFrame) => {
    iFrameDocument = iFrame.contentWindow.top.document;

    const headline = iFrameDocument.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > div");
    const datePublished = iFrameDocument.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > ul:nth-child(2) > li:nth-child(3)");
    const citationScore = iFrameDocument.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > ul:nth-child(4) > li:nth-child(4)");
    const negativeIndicator = iFrameDocument.querySelector("#article-trust > div.row.row-eq-height > div:nth-child(1)");
    const positiveIndicator = iFrameDocument.querySelector("#article-trust > div.row.row-eq-height > div:nth-child(2)");
    const articleChart = iFrameDocument.querySelector("#article-sentiment > div:nth-child(6) > div:nth-child(2) > div > div > div.indicator__piechart.indicator__piechart--gauge > div > svg");
    const sentenceChart = iFrameDocument.querySelector("#article-sentiment > div.row.mt-3 > div.col-sm-4");
    console.log(headline);
    document.getElementById("extracted-content").appendChild(headline);
    //iFrame.setAttribute("src", headline);
}

const button = document.getElementById("button-get-info");
button.addEventListener("click", updateContent);
