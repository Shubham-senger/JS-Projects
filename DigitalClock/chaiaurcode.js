const space = document.querySelector('#clock')



setInterval(function(){
    let myDate = new Date()
    space.innerHTML=(myDate.toLocaleTimeString())

},1000)

