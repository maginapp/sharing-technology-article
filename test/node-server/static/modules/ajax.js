export function sendPostJson (url, data, cb = () => {}) {
  var xhr = new XMLHttpRequest(); //创建对象
  xhr.open("POST", url); //链接改成你项目中的
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(data)); //发送时  
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(xhr.responseText); //返回值
      console.log(obj);
      cb(obj)
    }
  }
}

export function sendPostText (url, data, cb = () => {}) {
  var xhr = new XMLHttpRequest(); //创建对象
  xhr.open("POST", url); //链接改成你项目中的
  xhr.setRequestHeader('Content-Type', 'text/plain')
  xhr.send(data); //发送时  
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(xhr.responseText)
    }
  }
}

