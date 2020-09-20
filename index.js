var photos=["Images/Ridom.jpg","Images/Ridom1.jpg","Images/Ridom2.jpg"];
var myImage = document.querySelector('img');
var count=0;

myImage.onclick = function() {
    // let mySrc = myImage.getAttribute('src');
    // if(mySrc === 'Images/Ridom.jpg') {
    //   myImage.setAttribute('src','Images/Ridom1.jpg');
    // } 
    // else if(mySrc === 'Images/Ridom1.jpg') {
    //     myImage.setAttribute('src','Images/Ridom2.jpg');
    // }
    // else if (mySrc === 'Images/Ridom2.jpg'){
    //   myImage.setAttribute('src','images/Ridom.jpg');
    // }
    count++;
    if(count>=photos.length){
      count=0;
      myImage.src=photos[count];
    }
    else
    {
      myImage.src=photos[count];
    }
}