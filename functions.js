function select(data){
  let el;
  let obj = {
    get(data){
      if(el) return el;
  return document.querySelector(data);
    },
    click(func){
     return el.addEventListener("click",func);
    },
    html(data){
      return el.innerHTML = data;
    },
    remove(){
      return el.style.display = "none";
    },
    show(){
      return el.style.display = "block";
    },
    log(){
      return console.log(el);
    }, 
  };
  el = obj.get(data);
  return obj;
};
function selectAll(data){
  return document.querySelectorAll(data);
};

//wait 

function wait(time = 0.1){
  let t = time * 1000;
  let obj = {
    then(func){
      setTimeout(func, t);
    }, 
  };
  return obj;
};

//post

function post(){
  let http = XMLHttpRequest;
};