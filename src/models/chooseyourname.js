
const players = {
    player: []
}

class dinamicWindow {
    static dataCapture(event){
        event = event.target
        
            if(event.tagName == "BUTTON"){
                players.player.push(inputName.value)
                console.log(players)
                formName.parentNode.removeChild(formName)
        } 
    }
}


class newGame{
    static windowRender(){
        const gameWindow = document.getElementById("jkp")
        const playerDiv = document.createElement('div')
        playerDiv.classList.add('playerDiv')
        gameWindow.appendChild(playerDiv)
    }
}

    const registerBtn   = document.querySelector("body")
    const inputName     = document.getElementById("username")
    const formName      = document.getElementById("yourname")
    
    

    registerBtn.addEventListener("click", dinamicWindow.dataCapture)