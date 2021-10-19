const Username = document.getElementById('Uname')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('Login',(e)=>{
    let messages =[]
    if(Uname.value === ''||Uname.value === null){
        messages.push('Username is required')
    }
    if(password.value.length <=6){
        messages.push('Password Must Be Longer Than 6 Characters')
    }
    if(password.value.length >=20){
        messages.push('Password Must Be Less Than 20 Characters')
    }
    if(messages.length >0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})