//settings things cool update
const button = document.getElementById('bgButton');
const button2 = document.getElementById('leavbutton');
let load = localStorage.getItem('leaveConf') === 'true';
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
const beforeUnloadHandler = function(e) {
    e.preventDefault();
    e.returnValue = '';
};

function letleavethistownandrunforever() {
    load = !load; 
    localStorage.setItem('leaveConf', load);
    thethingyouknowthething()
}
function thethingyouknowthething() {
    button2.textContent = load ? "disable?" : "enable?";
    
    if (load) {
        window.addEventListener('beforeunload', beforeUnloadHandler);
    } else {
        window.removeEventListener('beforeunload', beforeUnloadHandler);
    }
}

function handleBackground() {
    const savedBg = localStorage.getItem('bgImage');
    if (savedBg) {
        document.body.style.backgroundImage = `url(${savedBg})`;
        button.textContent = 'Reset Background';
    } else {
        button.textContent = 'Upload Background';
    }

    button.addEventListener('click', () => {
        const currentBg = localStorage.getItem('bgImage');

        if (currentBg) {
            document.body.style.backgroundImage = '';
            localStorage.removeItem('bgImage');
            button.textContent = 'Upload Background';
        } else {
            const uploader = document.createElement('input');
            uploader.type = 'file';
            uploader.accept = 'image/*';
            uploader.style.display = 'none';
            document.body.appendChild(uploader);

            uploader.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (e) => {
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                    localStorage.setItem('bgImage', e.target.result);
                    button.textContent = 'Reset Background';
                    document.body.removeChild(uploader);
                };
                reader.readAsDataURL(file);
            });

            uploader.click();
        }
    });
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
    handleBackground()
    thethingyouknowthething()
}


//functions i might have to reuse 
//logic for other pages 

/*
    //redirect prevent
    if (localStorage.getItem('leaveConf') == 'true') {
      window.addEventListener('beforeunload', function(e) {
          e.preventDefault();
          e.returnValue = ''; 
      });
    } else {
      window.removeEventListener('beforeunload', function(e) {
          e.preventDefault();
          e.returnValue = ''; 
      });
    }
    //sneakysneaky tab rename
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
*/