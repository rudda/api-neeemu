function load(url, method,callback) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  
  xhttp.open(method, url, true);
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.send();
}

function callback(res) {
	console.log(res);
}

function getProduto(xhttp) {
  console.log( "getProduto", xhttp.responseText);
}

function getProdutos(xhttp) {
  console.log( "getProdutos", xhttp.responseText);
}
