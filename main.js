//设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'C:\Users\Yanni Gao\Desktop\web_blog\web-site\images\grand-canyon.jpg') {
      myImage.setAttribute('src', 'C:\Users\Yanni Gao\Desktop\web_blog\web-site\images\grand-canyon-2.jpg');
    }
    else {
      myImage.setAttribute('src', 'C:\Users\Yanni Gao\Desktop\web_blog\web-site\images\grand-canyon.jpg');
    }
}
//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

//个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my site! ' + myName;
}

// 初始化代码: 在页面初次读取时进行构造工作:
/*if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my site: ' + storedName;
}
*/

//为按钮设置onclick 事件处理器
myButton.onclick = function() {
   setUserName();
}

