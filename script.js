document.getElementById('subdomainForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the user's subdomain URL from the input field
  var subdomainURL = document.getElementById('subdomainURL').value;

  // Generate the iframe HTML code with the subdomain URL
  var iframeHTML = '<!DOCTYPE html>\n<html>\n<head>\n  <title>IPFS Mirror</title>\n</head>\n<body>\n  <iframe src="' + subdomainURL + '" style="width: 100%; height: 100%; border: none;"></iframe>\n</body>\n</html>';

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
