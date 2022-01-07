let url= 'https://jsonplaceholder.typicode.com/users'

async function fetchPosts(){
    let response = await fetch(url)
    let data = await response.json();
     console.log(data);
    appendData(data)
}

function appendData(data) {
    var mainContainer = document.getElementById("container");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `Name ${i+1}: ` + data[i].name;
      mainContainer.appendChild(div);
    }
  }

fetchPosts()