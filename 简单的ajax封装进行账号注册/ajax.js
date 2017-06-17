/**
 * Created by yu on 2017/6/17.
 */
function Ajax(method, url, flag, callBack, data) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    } else {
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    }
    if (method === 'GET') {
        xhr.open('GET', url + '?' + data, flag);
        xhr.send();
    } else if (method === 'POST') {
        xhr.open('POST', url, flag);
        xhr.setRequestHeader('Content-type', 'application/x-www.form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callBack(xhr.responseText);
            } else {
                alert('error');
            }
        }
    }
}