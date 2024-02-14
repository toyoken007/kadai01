'use strict';

//----------------------------------------------------------------------
//  import
//----------------------------------------------------------------------
// import { hello } from "./sub.js";


//----------------------------------------------------------------------
//  jQuery 関数
//----------------------------------------------------------------------
const ham = $('#js-hamburger');
const nav = $('#js_nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
    $('body').toggleClass('scroll_non')
})

$(window).on('load resize', function () {
    var w = $(window).width();
    var x = 768;
    if (w < x) {
        //画面サイズが768px未満のときの処理
        $('.nav_ul li').on('click', function () {
            ham.removeClass('active');
            nav.removeClass('active');
            $('body').removeClass('scroll_non')
        })
    }
});



// ham.on('click', function () { //ハンバーガーメニューをクリックしたら
//     $(".know_wrap").toggleClass('slider');
// })


//----------------------------------------------------------------------
//  javascript 関数
//----------------------------------------------------------------------
// var button = document.getElementById('id');
// console.log(button.innerHTML);
