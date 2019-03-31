// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// const codes = [
//   "ArrowUp",
//   "ArrowUp",
//   "ArrowDown",
//   "ArrowDown",
//   "ArrowLeft",
//   "ArrowRight",
//   "ArrowLeft",
//   "ArrowRight",
//   "b",
//   "a"
// ];


function init(){
  var index = 0
  document.body.addEventListener("keydown",function(e){
      var key = parseInt(e.detail)
      if(key === codes[index]){
        index++
        if(index === codes.length - 1){
          alert("YOU DID IT")
          index = 0
        }
      }else{
        index = 0
      }
    })
  }
