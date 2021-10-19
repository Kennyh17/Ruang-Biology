const Email = document.getElementById('Email')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages =[]
    if(Email.value ===''|| Email.value === null){
            messages.push('Email Must Be Filled')
        }
        if(Email.value.indexOf('@')<=0){
            messages.push('Email Must Be @')
        }else{
        
            messages.push('Please Check Your Email')
        }
      if(messages.length >0){
        e.preventDefault()
       errorElement.innerText = messages.join(',')
    }
    })