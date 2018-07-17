function load(callback) {
    var xhttp;
    var id = document.getElementById("input-search");
    var url = "http://localhost:3000/produtos/"+id.value;

    console.log("url", url);
    xhttp=new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    
    xhttp.open('GET', url, true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send();
}
  
function callback(res) {
    
    console.log(res);

}
  