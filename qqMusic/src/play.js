
var doc 		   = document;
var currentTimeDom = doc.getElementById("currentTime");
var totalTimeDom   = doc.getElementById('totalTime');
var myPlayer 	   = doc.getElementById("h5audio_media");
var cover 		   = doc.getElementById("cover");
var playOn         = doc.getElementById('play_on');
var lrcDiv 		   = doc.getElementById("lyricDiv");


initPlay();


function initPlay() {
	
    cover.addEventListener("touchstart",function(){
    	if(myPlayer.paused){
    		myPlayer.play();
    		timer = setInterval(nowTime,1000);

    		this.className='btn_pause';
    	}
    	else{
    		myPlayer.pause();
    		this.className='btn_play';
    	}
    	totalTimeDom.innerHTML=changeTime(myPlayer.duration);
    	//alert("Start: " + myPlayer.buffered.start(0) + " End: " + changeTime(myPlayer.buffered.end(0)));  //缓冲
    	
    },!1);


}

function nowTime(){
	currentTimeDom.innerHTML=changeTime(myPlayer.currentTime);
	playOn.style.webkitTransform = "translateX(" + (100 * (myPlayer.currentTime/myPlayer.duration) || 0) + "%)"; //进度条
	//console.log(s2ms(Math.ceil(myPlayer.currentTime)))
	showCurrentLrcLine();
	isOver();
}

function isOver(){
	if(myPlayer.ended){
		myPlayer.pause();
    		cover.className='btn_play';
	}
}

function s2ms(a){
	return a*1e3;
}

function changeTime(iNum){
	
	var iH = Math.floor(iNum/3600);
	var iM = Math.floor(iNum%3600/60);
	var iS = Math.floor(iNum%60);
	
	return toZero(iM) + ':' + toZero(iS);
	
}

function toZero(iNum){
	return iNum<10 ? '0'+iNum : ''+iNum;
	
}

String.prototype.unescapeHTML = function() {
    var a = document.createElement("div");
    return a.innerHTML = this,
    a.innerText || a.textNode || "";
};
var lrcObj=[];
//jsonp三步  函数名的callback
function MusicJsonCallback(data) {
    var lrc=data.lyric.unescapeHTML();
    
    lrc=lrc.split('\n');
    //console.log(lrc.length);
    
    //将lrc格式转成json
  	for(var i=0,len=lrc.length;i<len;i++){
  		var arr=lrc[i].split(']');
  		arr[0]=arr[0].replace(new RegExp("\\[", "g"),'');
  		//console.log(arr);
  		if(arr[1]!==''){
  			lrcObj.push({
  				time:arr[0],
  				context:arr[1]
  			});
  		}
  		
  		
  	}
  	console.log(lrcObj);
  	document.getElementById('lyricDiv').innerHTML=makeLrcHtml(lrcObj);

}

createJs('src/lrc.js');

function createJs(url)
{
	var os=document.createElement('script');
	os.type='text/javascript';
	os.src=url;

	var head=document.getElementsByTagName('head')[0];
	head.appendChild(os);
}

function makeLrcHtml(a){
    //var c, d, e, b = a;
    var html=[];
    var obj=a;

    if (obj) {
    	for(var i=0;i<obj.length;i++){

    		html.push('<p id="line_' + i + '">' + obj[i].context + "</p>");
    	}
    	return html.push('<p id="line_' + i + '">(完)</p>'),
        html.join("");
        
    }
    
    return "";
    
}

function showCurrentLrcLine() {
    // var c, d, e, f, g;
    // if (g_lrcChn.lrcLoadOver) {
    //     for (a = parseInt(1e3 * a), c = g_lrcChn.lrcList, d = g_lrcChn.lrcList.length, e = 0; d > e && (f = parseInt(g_lrcChn.playTime2ms(c[e].time)), !(f > a)); e++);
    //     g = document.getElementById("line_" + (e - 1)),
    //     g && g_lrcChn.cLine != g && (g_lrcChn.cLine && (g_lrcChn.cLine.className = ""), g.className = "current", g_lrcChn.cLine = g),
    //     g_lrcChn.scrollLrcLine(e, b)
    // }


    for(var i=0;i<lrcObj.length;i++){

    	 	if( s2ms(myPlayer.currentTime)>playTime2ms(lrcObj[i].time) && s2ms(myPlayer.currentTime)<playTime2ms(lrcObj[i+1].time)){
	    	 	
	    	 	var g = document.getElementById("line_" + (i));
	    	    g.className = "current";
	    	    console.log(i);
	    	    scrollLrcLine(i);
	    	 }
    	 
    }

    
}
function scrollLrcLine(a) {
    var c;
    a = parseInt(a);
    
    0 > a && (a = 0);
    
    c = 24 * -a;
    
    lrcDiv.style.webkitTransition = "-webkit-transform 0.3s ease-out";
    lrcDiv.style.webkitTransform = "translate3d(0px," + c + "px,0px)";
}


//转成毫秒
function playTime2ms(a) {
    var b = 1e3 * 60 * parseInt(a.substring(0, a.indexOf(":")), 10),
    c = 1e3 * parseInt(a.substring(a.indexOf(":") + 1, a.indexOf(".")), 10),
    d = parseInt(a.substring(a.indexOf(".") + 1), 10);
    return b + c + d;
}

function ms2playTime(a) {
    var b = parseInt(a / 6e4, 10),
    c = parseInt(a / 1e3 % 60, 10),
    d = a - 6e4 * b - 1e3 * c;
    return (b > 9 ? "": "0") + b + ":" + (c > 9 ? "": "0") + c + "." + (d > 9 ? "": "0") + d;
}
