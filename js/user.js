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

