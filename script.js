document.getElementById('subdomainForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the user's subdomain URL and title from the input fields
  var subdomainURL = document.getElementById('subdomainURL').value;
  var siteTitle = document.getElementById('siteTitle').value;

  // Generate the iframe HTML code with the subdomain URL and title
  var iframeHTML = `<!DOCTYPE html>
<html>
<head>
  <title>${siteTitle}</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <iframe src="${subdomainURL}"></iframe>
</body>
</html>`;

  // Create a Blob with the iframe HTML content
  var blob = new Blob([iframeHTML], {type: 'text/html'});

  // Create a temporary download link for the index.html file
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'index.html';
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);

  // Trigger the download link and remove it afterwards
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
