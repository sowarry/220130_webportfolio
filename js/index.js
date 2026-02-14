function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");


  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {

  // <header class="gnb">
  //       <div class="header__inner container">
  //         <a href="index.html" class="logo">
  //           <img src="images/common/logo.png" alt="" class="logo-image">
  //           <p class="logo-name">UI·UX designer Juhae</p>
  //         </a>
  //         <a href="https://mail.google.com/mail/u/0/?fs=1&to=idispjh@naver.com&tf=cm" target="_blank" class="header-mail">
  //           <p>idispjh@naver.com</p>
  //         </a>
  //
  //       </div>
  //     </header>


  let menuHtml =
    '<div class="inner">\n' + "\n" +
    '<h2 id="logo"><a href="./index.html"><img src="./images/logo.jpeg" alt="로고" width="120"><span>도시데이터 수집센서 운영관리시스템</span></a>\n' +
    "</h2>\n" + '<div class="right_menu">\n' +
    '<div class="nav_menu">\n' + "<p>" + userName +
    "</p>\n" + "<button onclick='logout()'>로그아웃</button>\n" +
    "</div>\n" + "\n" + '<div class="nav">\n';

  document.getElementById("header").innerHTML = menuHtml;
});



function scrollRotate() {
  // const image;
  // image = document.getElementById('deco-text1');
  const image = document.getElementById('deco-text1');
  const image1 = document.getElementById('deco-text1-1');
  const image2 = document.getElementById('deco-text2');
  const image2_2 = document.getElementById('deco-text2-2')

  console.log(window.pageYOffset);
  image.style.transform = "translateX(" + window.pageYOffset / 2 + "px)";
  image1.style.transform = "translateX(" + (window.pageYOffset / 2 - 100) + "px)";
  image2.style.transform = "translateX(" + (window.pageYOffset / 2 - 3000) + "px)";
  image2_2.style.transform = "translateX(" + window.pageYOffset / 200  + "px)";
}


window.addEventListener('scroll', scrollRotate);
