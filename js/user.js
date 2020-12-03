// 一言接口
// fetch('https://v1.hitokoto.cn/?c=j&c=d&c=h')
// .then(response => response.json())
// .then(data => {
//   const hitokoto = document.getElementById('hitokoto_text')
//   // hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
//   hitokoto.innerText = data.hitokoto
// })
// .catch(console.error)


// entersearch = function (){
// var event = window.event || arguments.callee.caller.arguments[0];
// if (event.keyCode == 13)
//   {
//     alert("进入搜索")
//   }
// }


cg = function (obj) {
  var o = document.getElementById("hitokoto");
  var w = $("#hitokoto").innerWidth();
  o.innerHTML = "<input type='text' id = 'search_text' value='" + document.getElementById("jinrishici-sentence").innerHTML + "' />";
  $("#hitokoto").css("width",w);
  document.getElementById("search_text").select();

  var input = document.getElementById("search_text");
	input.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode === 13) {
	        // alert("进入搜索");
	        var sousuo = document.getElementById("search_text").value;
	        // window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + sousuo;
	        window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + sousuo);
	    }
	});
}

// $('#search_text').bind('keypress', function (event) { 
//    if (event.keyCode == "13") { 
//     var sousuo = $("#search_text").val();
//     if (sousuo == "") {return;}
//     window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+ sousuo;
//    }
//   })

// 主图缓慢出现

addFadeInBackground('https://uploadbeta.com/api/pictures/random', 'background');
    
    function addFadeInBackground(url, domId) {
      var background = new Image();
      background.src = url;
      background.onload = function () {
        console.log('Background load complete!');
        var loadbackground = document.getElementById(domId);
        loadbackground.style.backgroundImage = 'url(' + background.src + ')';
        loadbackground.style.animationName = 'fadein';
      }
    }


 // 自动隐藏
var new_scroll_position = 0;
var last_scroll_position;
var header = $("#hitokoto");
var h = document.getElementById("hitokoto");

window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        // h.style.opacity = 0;
        h.style.animationName = 'fadeout';

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        h.style.animationName = 'fadein';
    }

    new_scroll_position = last_scroll_position;
});
