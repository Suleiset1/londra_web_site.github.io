let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'C:\\Users\\Sulei\\Desktop\\web-project\\test-site\\index.html\\images.png') {
        myImage.setAttribute('src', "https://www.bugunnereyegidelim.com/uploads/images/Untitled%20design%20-%202022-12-21T103746_827.jpg");
    } else if (mySrc === 'https://www.bugunnereyegidelim.com/uploads/images/Untitled%20design%20-%202022-12-21T103746_827.jpg') {
        myImage.setAttribute('src', "https://media.istockphoto.com/id/1294454411/tr/foto%C4%9Fraf/ingilterede-big-ben-double-decker-otob%C3%BCsleri-ve-k%C4%B1rm%C4%B1z%C4%B1-telefon-kul%C3%BCbesi-ile-londra.jpg?s=612x612&w=0&k=20&c=YiL6if2l6wtDhDYnHYJsrWWOv4X-pix1141bp0cSn4o=");
    } else {
        myImage.setAttribute('src', "C:\\Users\\Sulei\\Desktop\\web-project\\test-site\\index.html\\images.png");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'LONDRA BUYULEYICI BIR SEHIR, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'LONDRA BUYULEYICI BIR SEHIR, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}