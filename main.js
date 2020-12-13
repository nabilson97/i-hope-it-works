var hexArray=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


var body=document.querySelector('body'),
    hexBtn=document.querySelector('.hexBtn'),
    hexColor=document.querySelector('.hexColor')
  
  window.addEventListener('load',
  loadFnc)
  
  function loadFnc(){
    var hex = '#'
    for (let x = 0; x < 6; x++) {
      let rand = Math.floor(Math.random() * hexArray.length)
      hex += hexArray[rand]
    }
    body.style.backgroundColor = hex
    hexColor.textContent = hex
  }
    
    hexBtn.addEventListener('click',changeHex)
  
  function changeHex() {
    var hexNum='#'
    for(let i=0;i<6;i++) {
      let random=Math.floor(Math.random()*hexArray.length)
      hexNum += hexArray[random]
    }
    body.style.backgroundColor=hexNum
    hexColor.textContent=hexNum
    /*body.animate([{opacity:'0.5'},{opacity:'1.0'}],{duration:700,fill:'forwards'})*/
  }  
