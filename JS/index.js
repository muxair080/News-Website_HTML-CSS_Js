console.log("Welcome to Today News Website");

// 786f42877f4e41fabf9791f1adaafa4e

// using httpxml request;
let cont = document.getElementById('container');
// let request = new XMLHttpRequest();
// request.open('GET' , 'https://newsapi.org/v2/top-headlines?country=sa&apiKey=786f42877f4e41fabf9791f1adaafa4e' , false)


// request.onload  = function() {
//   if(this.status === 200){
//     let json = JSON.parse(this.responseText);
//     let articles = json.articles;
//     let NewsHtml = "";
//     articles.forEach(function(element,index){
//       // console.log(element['content']);
//       let News = ` <div class="card" id = "card${index+1}">
//                   <button class="btn" type="button" id = "btn${index+1}"><h4>Breaking News${index+1} :</h4> ${element['title']}</button>
//                   <div class="content" id = "content${index+1}" >welocme${element['content']} <a href = "${element['url']}" target = "_blank">readmore</a></div>
//                   </div>`
//       NewsHtml += News;
//       console.log(NewsHtml);
//     });
//     cont.innerHTML = NewsHtml;
//   }
//   else{
//     console.log(Error);
//   }
// }
// request.send();


// Fetch Api
function getnews() {
  let url = 'https://newsapi.org/v2/top-headlines?country=sa&apiKey=786f42877f4e41fabf9791f1adaafa4e';
  fetch(url).then((response)=>{
       return response.json();
    
  }).then((data)=>{
    
    console.log(data);
    let articles = data.articles;
    let NewsHtml = "";
    articles.forEach(function(element,index){
      // console.log(element['content']);
      let News = ` <div class="card" id = "card${index+1}">
                  <button class="btn" type="button" id = "btn${index+1}"><h4>Breaking News${index+1} :</h4> ${element['title']}</button>
                  <div class="content" id = "content${index+1}" >welocme${element['content']} <a href = "${element['url']}" target = "_blank">readmore</a></div>
                  </div>`
      NewsHtml += News;
      console.log(NewsHtml);
    });
    cont.innerHTML = NewsHtml;
    
  })
}

getnews();


// this code is for collapsing the news ;
  var btn = document.getElementsByClassName("btn");
// console.log(btn);
var i;
setTimeout(() => {
  
  for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling; 
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      
      }  

    });
  }
}, 2000);





