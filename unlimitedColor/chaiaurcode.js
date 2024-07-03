const randomColor = function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


let IntervalId;

const startChangingColor=function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    };
    
    if(!IntervalId){
        IntervalId=changeBgColor=setInterval(changeBgColor,1000)

    }
    
}


const stopChangingColor=function(){
    clearInterval(IntervalId);
    IntervalId=null;//iska kaam bs code ko acha banana h 
}

document.querySelector("#start").addEventListener("click",startChangingColor)

document.querySelector("#stop").addEventListener("click",stopChangingColor)