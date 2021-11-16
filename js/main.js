function submitQuery(){
    document.getElementById("submit").innerHTML = "Loading...";
    document.getElementById("submit").disabled = true;
    var xml = new XMLHttpRequest()
    xml.onreadystatechange = function(){
        if (this.status == 200){
            document.getElementById("submit").innerHTML = "TRACK";
            document.getElementById("submit").disabled = false;
            document.getElementById("status").innerHTML = xml.responseText;
        }
    }
    xml.open("GET","https://evas-tracking.herokuapp.com/"+document.getElementById("search").value,true)
    xml.send()
}


document.getElementById("submit").addEventListener("click", submit)