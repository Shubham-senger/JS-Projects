const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = "please give a valid height"
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = "please give a valid height"
    }else{
        const ans = (weight/((height*height)/10000)).toFixed(2)
        
        if(ans<18.6){
            results.innerHTML = `<span>${ans}</span><br/> Under Weight`
        }else if(ans>=18.6 && ans<24.9){
            results.innerHTML = `<span>${ans}</span><br/> Normal Range`
        }else if(ans>=24.9){
            results.innerHTML = `<span>${ans}</span><br/> Overweight`
        }

    }




})




