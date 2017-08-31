(function (window,document) {
    var AMI = {
    	"alert":function(header_text,alert_text,btn_text,cb,isroll){
    		var container = document.createElement('div');
    		var alertDiv = document.createElement('div');
    		var alertDivHeader = document.createElement('div');
    		var alertDivContent = document.createElement('div');
    		var alertDivFooter = document.createElement('div');
    		container.classList.add('container');
    		alertDiv.classList.add('alertDiv');
    		alertDivHeader.classList.add('alertDivHeader');
    		alertDivContent.classList.add('alertDivContent');
    		alertDivFooter.classList.add('alertDivFooter');
    		alertDivHeader.innerHTML = header_text;
    		alertDivContent.innerHTML = alert_text;
    		alertDivFooter.innerHTML = btn_text;
    		alertDiv.appendChild(alertDivHeader);
    		alertDiv.appendChild(alertDivContent);
    		alertDiv.appendChild(alertDivFooter);
    		document.body.appendChild(alertDiv);
    		alertDiv.offsetHeight;
    		alertDiv.classList.add('alertDiv_In');
    		document.body.appendChild(container);
    		container.offsetHeight;
    		container.classList.add('container_In');
//  		if (isroll) {
    			document.body.style.overflow = 'hidden';  //禁止背景滚动！！！
//  		}
    		var btn_Event = document.querySelector('.alertDivFooter');
    		btn_Event.addEventListener('click',function () {
//  			container.style.opacity = '0';
//  			container.style.transitionDuration = '400ms';
//  			alertDiv.style.opacity = '0';
//  			alertDiv.style.transitionDuration = '400ms';
                container.classList.add('container_Out');
    		    alertDiv.classList.add('alertDiv_Out');
    		    cb();
    		});
    		container.addEventListener('webkitTransitionEnd',function () {
    			if (container.classList.contains('container_Out')) {
    				document.body.removeChild(container);
    			    document.body.removeChild(alertDiv);
    			    document.body.style.overflow = '';
    			}
    		});
        },
        "confirm":function (header_text,confirm_text,btn_text,cb,isroll) {
        	var container = document.createElement('div');
    		var confirmDiv = document.createElement('div');
    		var confirmDivHeader = document.createElement('div');
    		var confirmDivContent = document.createElement('div');
    		var confirmDivFooter = document.createElement('div');
    		var confirm_btn = document.createElement('span');
    		var confirm_btn1 = document.createElement('span');
    		container.classList.add('container');
    		confirmDiv.classList.add('confirmDiv');
    		confirmDivHeader.classList.add('confirmDivHeader');
    		confirmDivContent.classList.add('confirmDivContent');
    		confirmDivFooter.classList.add('confirmDivFooter');
    		confirm_btn.classList.add('span_btn');
    		confirm_btn1.classList.add('span_btn1');
    		confirmDivHeader.innerHTML = header_text;
    		confirmDivContent.innerHTML = confirm_text;
    		confirm_btn.innerHTML = btn_text[0];
    		confirm_btn1.innerHTML = btn_text[1];
    		confirmDiv.appendChild(confirmDivHeader);
    		confirmDiv.appendChild(confirmDivContent);
    		confirmDiv.appendChild(confirmDivFooter);
    		document.body.appendChild(confirmDiv);
    		confirmDiv.offsetHeight;
    		confirmDiv.classList.add('confirmDiv_In');
    		document.body.appendChild(container);
    		container.offsetHeight;
    		container.classList.add('container_In');
    		confirmDivFooter.appendChild(confirm_btn);
            confirmDivFooter.appendChild(confirm_btn1);
//  		if (isroll) {
    			document.body.style.overflow = 'hidden';  //禁止背景滚动！！！
//  		}
    		var btn_Event = document.querySelector('.span_btn');
    		var btn_Event1 = document.querySelector('.span_btn1');
    		btn_Event.addEventListener('click',function () {
                container.classList.add('container_Out');
    		    confirmDiv.classList.add('confirmDiv_Out');
    		    cb({'index':0,'value':btn_Event.innerHTML});
    		});
    		btn_Event1.addEventListener('click',function () {
                container.classList.add('container_Out');
    		    confirmDiv.classList.add('confirmDiv_Out');
    		    cb({'index':1,'value':btn_Event1.innerHTML});
    		});
    		container.addEventListener('webkitTransitionEnd',function () {
    			if (container.classList.contains('container_Out')) {
    				document.body.removeChild(container);
    			    document.body.removeChild(confirmDiv);
    			    document.body.style.overflow = '';
    			}
    		});
       },
       "prompt":function (header_text,prompt_text,btn_text,cb,isroll) {
       	    var container = document.createElement('div');
    		var promptDiv = document.createElement('div');
    		var promptDivHeader = document.createElement('div');
    		var promptDivContent = document.createElement('div');
    		var promptDivFooter = document.createElement('div');
    		var promptInput = document.createElement('input');
    		container.classList.add('container');
    		promptDiv.classList.add('promptDiv');
    		promptDivHeader.classList.add('promptDivHeader');
    		promptDivContent.classList.add('promptDivContent');
    		promptInput.classList.add('promptInput');
    		promptInput.placeholder = prompt_text;
    		promptDivFooter.classList.add('promptDivFooter');
    		promptDivHeader.innerHTML = header_text;
    		promptDivFooter.innerHTML = btn_text;
    		promptDiv.appendChild(promptDivHeader);
    		promptDiv.appendChild(promptDivContent);
    		promptDiv.appendChild(promptDivFooter);
    		document.body.appendChild(promptDiv);
    		promptDiv.offsetHeight;
    		promptDiv.classList.add('promptDiv_In');
    		document.body.appendChild(container);
    		container.offsetHeight;
    		container.classList.add('container_In');
    		promptDivContent.appendChild(promptInput);
//  		if (isroll) {
    			document.body.style.overflow = 'hidden';  //禁止背景滚动！！！
//  		}
    		var btn_Event = document.querySelector('.promptDivFooter');
    		btn_Event.addEventListener('click',function () {
                container.classList.add('container_Out');
    		    promptDiv.classList.add('promptDiv_Out');
    		    cb({'index':0,'value':promptInput.value});
    		});
    		container.addEventListener('webkitTransitionEnd',function () {
    			if (container.classList.contains('container_Out')) {
    				document.body.removeChild(container);
    			    document.body.removeChild(promptDiv);
    			    document.body.style.overflow = '';
    			}
    		});
      },
      'toast':function (toast_text) {
      	    var toastDiv = document.createElement('div');
      	    toastDiv.classList.add('toastDiv');
      	    toastDiv.innerHTML = toast_text;
      	    document.body.appendChild(toastDiv);
      	    toastDiv.offsetHeight;
      	    toastDiv.classList.add('toastDiv_In');
      	    setTimeout(function () {
      	    	toastDiv.offsetHeight;
      	        toastDiv.classList.add('toastDiv_Out');
      	        toastDiv.addEventListener('webkitTransitionEnd',function () {
    			if (toastDiv.classList.contains('toastDiv_Out')) {
    			    document.body.removeChild(toastDiv);
    			}
    		});
      	    },1500);
      },
      'showloading':function (loading_text) {
      	    var loadingDiv = document.createElement('div');
      	    var loadingSpan = document.createElement('span');
      	    var loading_img = document.createElement('img');
      	    loading_img.src = 'images/loading.gif';
      	    loadingDiv.classList.add('loadingDiv');
      	    loadingSpan.classList.add('loadingSpan');
      	    loading_img.classList.add('loading_img');
//    	    loading_img
      	    loadingSpan.innerHTML = loading_text;
      	    loadingDiv.appendChild(loading_img);
      	    loadingDiv.appendChild(loadingSpan);
      	    document.body.appendChild(loadingDiv);
      	    loadingDiv.offsetHeight;
      	    loadingDiv.classList.add('loadingDiv_In');
      },
      'hiddenloading':function () {
      	    var loadingDiv = document.querySelector('.loadingDiv');
      	    loadingDiv.offsetHeight;
  	        loadingDiv.classList.add('loadingDiv_Out');
  	        loadingDiv.addEventListener('webkitTransitionEnd',function () {
				if (loadingDiv.classList.contains('loadingDiv_Out')) {
				    document.body.removeChild(loadingDiv);
				}
			});
      }
    }
    window.AMI=AMI;
})(window,document);
