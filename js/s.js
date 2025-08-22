//settings things cool update
//about blank cloaking maybe im not sure
function aboutblankcloakingpmayhaps() {
    var redirectURL = prompt("Enter website where the current URL will get redirected to (default is google.com):", "google.com");
    if (redirectURL) {
        var win = window.open();
        var iframe = win.document.createElement('iframe');
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.bottom = "0";
        iframe.style.right = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
        iframe.style.overflow = "hidden";
        iframe.style.zIndex = "999999";
        iframe.src = window.location.href;
        win.document.body.appendChild(iframe);

        window.location.href = "http://" + redirectURL;
    }
}
//leave confirm 

function zqfiufbq() {
  if (localStorage.getItem(dkslkfjsdf) === "true") {
    window.addEventListener('beforeunload', function (gqbln) {
      gqbln.preventDefault();
      gqbln.returnValue = '';
    });
  }
}

function rtgpop() {
  localStorage.setItem("dkslkfjsdf", "true");
}

//tab renaming
function applyUrl(url, tabName) {
    document.title = tabName;
        
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
        
    localStorage.setItem('tabName', tabName);
    localStorage.setItem('tabImage', url);
}
//and acutally load the darn thing
  window.onload = function() {
    var savedTabName = localStorage.getItem('tabName');
    var savedTabImage = localStorage.getItem('tabImage');
    if (savedTabName) {
      document.title = savedTabName;
    }
    if (savedTabImage) {
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = savedTabImage;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }