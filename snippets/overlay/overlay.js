/*

PixelPerfect overlay CLI devtools snippet

usage example :

// to add
var x = overlay('http://host/path/to/video-[zefz].jpg');

x.toggle();
x.rm();

*/

function cleanUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    var encodedUrl = a.href;
    delete a;
    return encodedUrl;
}
function Overlay(url) {
    console.log(url);
    console.log(cleanUrl(url));
    this.overlay = document.createElement('div');
    this.overlay.style.display = 'block';
    this.overlay.style.position = 'absolute';
    this.overlay.style.left = 0;
    this.overlay.style.top = 0;
    this.overlay.style.width = '100%';
    this.overlay.style.height='100%';
    this.overlay.style.backgroundImage = 'url(' + cleanUrl(url) + ')';
    this.overlay.style.backgroundSize = 'cover';
    this.overlay.style.zIndex=10000;
    this.overlay.style.opacity = 0.5;
    document.body.appendChild(this.overlay);

    this.toggle = function() {
        this.overlay.style.display = (this.overlay.style.display==='block')?'none':'block';
    }

    this.rm = function() {
        console.log('rm');
        document.body.removeChild(this.overlay);
    }
}


window.overlay = function(url) {
    console.log(1);
    return new Overlay(url);
}
