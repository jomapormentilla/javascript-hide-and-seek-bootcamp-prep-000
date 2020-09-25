function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document
    .getElementById("app")
    .querySelector("div#nested div div div div.target")
}

function increaseRankBy(n){
  let lis = document
    .getElementById("app")
    .querySelectorAll("ul.ranked-list li")
    
  for(let i=0; i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild(){
  let deep = document
    .getElementById("app")
    .querySelector("div#grand-node")
    .querySelectorAll("div")
  
  let last = deep[deep.length - 1]
    
  return last
}