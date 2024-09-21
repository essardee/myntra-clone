<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="forDes/assets/fontsupply.css" rel="stylesheet">
    <link rel="stylesheet" href="forDes/index.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      #logo {
        height: 36px;
        margin: 0 15px 0 67.375px;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        box-shadow: 0 0 10px 0 lightgray;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        width: 100%;
      }
      header .nav1 a {
        font-family: "Noto Sans JP";
        padding: 0 17px 28px;
        text-decoration: none;
        text-transform: uppercase;
        color: black;
        font-weight: 700;
        font-size: 12.5px;
      }
      header .nav1 a sup {
        font-size: 9px;
        color: #ff3f6c;
      }
      .nav1 {
        min-width: max-content;
      }

      #bagsup {
        z-index: 2;
        position: fixed;
        top: 15px;
        right: 50px;
        padding: 1px 5px 1.7px;
        background-color: red;
        border-radius: 8px;
        color: white;
      }

      .men:hover {
        border-bottom: #ff3f6c solid 3px;
      }
      .women:hover {
        border-bottom: #fb56c1 solid 3px;
      }
      .kids:hover {
        border-bottom: #f26a10 solid 3px;
      }
      .hnl:hover {
        border-bottom: #f2c210 solid 3px;
      }
      .beauty:hover {
        border-bottom: #0db7af solid 3px;
      }
      .studio:hover {
        border-bottom: #ff3f6c solid 3px;
      }

      #search {
        background-color: #f5f5f6;
        display: flex;
        justify-content: left;
        border-radius: 5px;
        flex-grow: 0.5;
        color: #808080;
        border: 1.5px solid #f5f5f6;
      }
      #search:active {
        background-color: #ffffff;
        border: 1.5px solid #f5f5f6;
      }
      #inpp:active {
        background-color: #ffffff;
      }

      #search input {
        padding: 8px 10px 10px;
        outline: none;
        background-color: #f5f5f6;
        border: none;
        font-family: "Noto Sans TC";
        font-size: 13px;
        flex-grow: 0.99;
      }
      #search span {
        position: relative;
        top: 5px;
        left: 7px;
        scale: 0.8;
      }
      .nav2 {
        width: max-content;
        display: flex;
        margin-right: 45px;
      }
      .navicons {
        width: 21px;
      }
      .ab {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        margin: 12px;
        text-decoration: none;
        color: black;
        font-family: "Noto Sans TC";
        font-size: 11px;
        font-weight: 600;
      }
    </style>
</head>
<body>
    <header>
        <a href=""><img id="logo" src="forDes/assets/builder/logo.png"></a>
        <nav class="nav1">
            <a href="" class="men">Men</a>
            <a href="" class="women">Women</a>
            <a href="" class="kids">Kids</a>
            <a href="" class="hnl">Home&nbsp;&&nbsp;Living</a>
            <a href="" class="beauty">Beauty</a>
            <a href="" class="studio">Studio<sup>&nbsp;New&nbsp;</sup></a>
        </nav>
            <span id="search">
                <span class="material-symbols-outlined">search</span>
                <input id="inpp" 
                onclick="
                    srcb.style.backgroundColor = '#fff';
                    srcb.style.border = '1.5px solid #f5f5f6';
                    srcc.style.backgroundColor = '#fff';"
                type="text" placeholder="Search for products, brands and more">
            </span>
            <nav class="nav2">
                <a href="" class="ab">
                    <img class="navicons" src="forDes/assets/builder/profile.png">
                    Profile
                </a>
                <a href="" class="ab">
                    <img class="navicons" src="forDes/assets/builder/MyntraWeb.png">
                    Wishlist
                </a>
                <a href="" class="ab">
                    <img class="navicons" src="forDes/assets/builder/bag.png">
                    Bag<sup id="bagsup"></sup>
                </a>
            </nav>
    </header>
</body>
</html>
