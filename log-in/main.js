const elLoginform = document.querySelector('.loginForm')
const elLoginInput = document.querySelector('.login')
const elPasswordInput = document.querySelector('.password')
const elregistr = document.querySelector('#registr').content
let loader = document.querySelector('.loadingWrapper')
const select = document.querySelector('.select')
const registerForm = document.querySelector('.registrationForm')
const logo = document.querySelector('.logo')


window.addEventListener('load',function(){
    loader.style.display = 'none';
})


elLoginform.addEventListener('submit', (evt) => {
    let logindata = {}
    evt.preventDefault()
    logindata.mainadmin_login = elLoginInput.value
    logindata.mainadmin_password = elPasswordInput.value
    fetch('http://192.168.1.9:4000/admin', {
            method: 'POST',
            body: JSON.stringify(logindata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json2 => {
            
            const Render = (element,list)=>{
             
                let registrPage = element.cloneNode(true)
                
                list.appendChild(registrPage)
            }

            if(json2 == "ok"){
                body.innerHTML = null
                
                Render(elregistr,body)

            }else{
                console.log(json2)
            }
        })
        .catch(err => console.log(err));
})

