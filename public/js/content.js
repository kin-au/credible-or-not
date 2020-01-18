const updateContent = (event) => {
  event.preventDefault();

  const url = document.getElementById("input-url").value;
  const glitchedNewsUrl = "https://glitched.news/api/article?url=" + url;

  getContent(glitchedNewsUrl, (content) => displayContent(content));
}

const getContent = (url, callback) => {
    sendCORSRequest("GET", url, displayContent, () => console.log("CORS request error"));
    // $.ajax({
    //     type: 'GET',
    //     url: url,
    //     dataType:'json',
    //     success: displayContent,
    //     error: function(error) {
    //         console.log("Failed to download content: " + error);
    //     }
    // });
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function() {
    //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    //         callback(xmlHttp.responseText);
    //     }
    // }
    // xmlHttp.open("GET", url, true);
    // xmlHttp.send(null);
}

const displayContent = (content) => {
    const glitchedNewsContent = document.getElementById("glitched-news-content");
    glitchedNewsContent.innerHtml = content;
}

const modifyContent = (iFrame) => {
    // iFrameDocument = iFrame.contentWindow.top.document;

    // for (const neutralAmount of iFrameDocument.querySelectorAll("indicator__neutral--highlighted")) {
    //     document.getElementById("extracted-content").appendChild(neutralAmount);
    // }

    // const headline = iFrameDocument.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > div");
    // const datePublished = iFrameDocument.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > ul:nth-child(2) > li:nth-child(3)");
    // const citationScore = iFrameDocument.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > ul:nth-child(4) > li:nth-child(4)");
    // const negativeIndicator = iFrameDocument.querySelector("#article-trust > div.row.row-eq-height > div:nth-child(1)");
    // const positiveIndicator = iFrameDocument.querySelector("#article-trust > div.row.row-eq-height > div:nth-child(2)");
    // const articleChart = iFrameDocument.querySelector("#article-sentiment > div:nth-child(6) > div:nth-child(2) > div > div > div.indicator__piechart.indicator__piechart--gauge > div > svg");
    // const sentenceChart = iFrameDocument.querySelector("#article-sentiment > div.row.mt-3 > div.col-sm-4");
    // console.log(headline);
    //document.getElementById("extracted-content").appendChild(headline);
    //iFrame.setAttribute("src", headline);
}

const button = document.getElementById("button-get-info");
button.addEventListener("click", updateContent);
