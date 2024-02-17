function bot(){
    let bot = Math.floor(Math.random() * 100)
    let bot1 = bot
    let bot2 = alert(bot1)
    let checkbot = prompt("Enter numb in past window")
    if(checkbot != bot2){
        for(checkbot != bot2 ; ;){
            alert("Wrong captcha")
        }
    }else{
        alert("Welcome")
    }
}
bot()
function reg(){
    const login = prompt("Enter your login")
    if(!login){
        for(!login ; ;){
            alert("Login must have any symbol")
        }
    }else{
        const password = prompt("Enter your password")
        if(!password){
            for(!password ; ;){
                alert("Password must have any symbol")
            }
        }else{
            const checkpass = prompt("Enter your password again")
            if(checkpass != password){
                for(checkpass != password ; ;){
                    alert("Wrong password")
                }
            }else{
                alert(`Welcome back ${login}`)
                document.getElementById(`Reg`).innerHTML(`Welcome back ${login}`)
            }
        }
    }
}
function q(){
    alert("Welcome")
}
function personaldata(){
    for(persdata != true ; ;){
        alert("You must agree")
    }
}
let persdata = confirm("You must accept personal data")?
() => q():
() => personaldata()