var photo = ["img1/1.jpg", "img1/2.jpg", "img1/3.jpg"];
var imgTag = document.querySelector("img");
var count = 0;

function Next() {
    count++;
    if (count >= photo.length) {
        count = 0; 
       // যদি শেষ ছবিতে পৌঁছে যায়, তাহলে প্রথম ছবিতে ফিরে যাবে
    }
    imgTag.src = photo[count];
}

function prev () {
    count--;
    if (count < 0) {
        count = photo.length - 1;  // যদি প্রথম ছবিতে থাকে, তাহলে শেষ ছবিতে যাবে
    }
    imgTag.src = photo[count];
}

 