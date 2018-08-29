

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("displayName").innerHTML = myObj.name + '</br>' + myObj.birthday;
  }
};

newRequest.open("GET", "hawking.json", true);
newRequest.send();



let newBio = new XMLHttpRequest();
newBio.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("displayBio").innerHTML = myObj.bio;
  }
};
newBio.open("GET", "hawking.json", true);




