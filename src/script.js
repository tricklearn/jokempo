const players = {
    player: [],
    ppt: [],
    choosed: [],
    computer:[],
    empates: 0,
    vitorias: 0,
    derrotas: 0
}



class dinamicWindow {
    static dataCapture(event){
        event = event.target
        
            if(event.tagName == "BUTTON"){
                players.player.push(inputName.value)
                console.log(players)
                formName.parentNode.removeChild(formName)
                newGame.windowRender()
        } 
    }
}

class newGame{
    static windowRender(){
        alert("Alcance 5 pontos para vencer")
        const gameWindow = document.getElementById("jkp")
        const masterDiv = document.createElement('div')
        masterDiv.classList.add('masterDiv')
        gameWindow.appendChild(masterDiv)

             //PLAYER DIV INIT
        const playerDiv = document.createElement("div")
        playerDiv.classList.add("playerDiv")
        masterDiv.appendChild(playerDiv)

        const gameDiv = document.createElement("div")
            gameDiv.classList.add("gameDiv")


       const playerNameDiv = document.createElement("div")
       playerNameDiv.classList.add("playerNameDiv")
       playerDiv.appendChild(playerNameDiv)
       const playerName = document.createElement("h3")
       playerName.classList.add("playerNameTitle")
       playerNameDiv.appendChild(playerName)
       playerName.innerText = "Player: " + `${players.player}`.toUpperCase()
       const vitorias = document.createElement("h4")
       vitorias.classList.add("vitorias")
       playerNameDiv.appendChild(vitorias)
       const derrotas = document.createElement("h4")
       derrotas.classList.add("derrotas")
       playerNameDiv.appendChild(derrotas)

       const gameDivImages = document.createElement("div")
       gameDivImages.classList.add("gameDivImages")


       const empates = document.createElement("h4")
       empates.classList.add("empates")
        let empateCount = 0
        let vitoriaCount = 0
        let derrotaCount = 0

       playerNameDiv.appendChild(empates)

       const playerPick = document.createElement("div")
       playerPick.classList.add("playerPick")
       playerDiv.appendChild(playerPick)

       const chooseOne = document.createElement("h2")
       chooseOne.innerText = "Escolha um"
       chooseOne.classList.add("escolhaUm")
       playerPick.appendChild(chooseOne)

       const botaoPedra = document.createElement("button")
       botaoPedra.classList.add("botaoPedra")
       botaoPedra.innerText = "Pedra"       
    
       const botaoPapel = document.createElement("button")
       botaoPapel.classList.add("botaoPapel")
       botaoPapel.innerText = "Papel"
       const botaoTesoura = document.createElement("button")
       botaoTesoura.classList.add("botaoTesoura")
       botaoTesoura.innerText = "Tesoura"
       
       const botaoJogar = document.createElement('button')
       botaoJogar.classList.add("botaoJogar")
       botaoJogar.innerText = "JOGAR"

       botaoJogar.addEventListener("click", gameLogic)


       playerPick.appendChild(botaoPedra)
       playerPick.appendChild(botaoPapel)
       playerPick.appendChild(botaoTesoura)

       const imgSection = document.createElement('div')
       imgSection.classList.add("imgSection")
       playerPick.appendChild(imgSection)

       const chooseButton = document.createElement('button')
       chooseButton.classList.add("chooseButton")
       chooseButton.innerText = "Escolher"
       playerPick.appendChild(chooseButton)

       const winCountDiv = document.createElement("div")
       winCountDiv.classList.add("winCountDiv")

        
       chooseButton.addEventListener("click", botaoChooseRender)
       botaoPedra.addEventListener("click", botaoPedraRender)
       botaoPapel.addEventListener("click", botaoPapelRender)
       botaoTesoura.addEventListener("click", botaotesouraRender)



            //definindo imagem pedra/reverse
       const imgPedra = document.createElement('img')
               imgPedra.src = "./src/psedit/pedra.png"
               imgPedra.classList.add("imgPedra")

        const imgPedraReverse = document.createElement('img')
               imgPedraReverse.src = "./src/psedit/pedra-reverse.png"
               imgPedraReverse.classList.add("imgPedraReverse")
            //definindo imagem papel/reverse
        const imgPapel = document.createElement('img')
                imgPapel.src = "./src/psedit/papel.png"
                imgPapel.classList.add("imgPapel")

            const imgPapelReverse = document.createElement('img')
               imgPapelReverse.src = "./src/psedit/papel-reverse.png"
               imgPapelReverse.classList.add("imgPapelReverse")
            //definido imagem tesoura/reverse
        const imgTesoura = document.createElement('img')
                imgTesoura.src = "./src/psedit/tesoura.png"
                imgTesoura.classList.add("imgTesoura")
        const imgTesouraReverse = document.createElement('img')
               imgTesouraReverse.src = "./src/psedit/tesoura-reverse.png"
               imgTesouraReverse.classList.add("imgTesouraReverse")

            //definido imagem versus
        const imgVersus = document.createElement("img")
        imgVersus.classList.add("imgVersus")
        imgVersus.src = "./src/psedit/versuspurple.png"
            //definido imagem interrogacao
        const imgInterrogacao = document.createElement("img")
        imgInterrogacao.classList.add("imgInterrogacao")
        imgInterrogacao.src = "./src/psedit/interrogacao.png"

       function botaoPedraRender(){
           if(imgSection.childElementCount == 0){
               imgSection.appendChild(imgPedra)
               players.ppt.push(imgPedra.className)
               players.choosed.push("Pedra") 

              
           } 
           else{
            const imgRemove = imgSection.firstElementChild
            imgSection.removeChild(imgRemove)
            imgSection.appendChild(imgPedra)

                if(players.ppt.length == 0 && players.choosed.length ==0){
                players.ppt.push(imgPedra.className)
                players.choosed.push("Pedra") 
                }

                else{
                    players.ppt.pop()
                    players.ppt.push(imgPedra.className)
                    players.choosed.pop()
                    players.choosed.push("Pedra")
                }
        }  
        console.log(players) 
    }

       function botaoPapelRender(){
            if(imgSection.childElementCount == 0){
                imgSection.appendChild(imgPapel)
                players.ppt.push(imgPapel.className)
                players.choosed.push("Papel") 
            }
            else{
                const imgRemove = imgSection.firstElementChild
                imgSection.removeChild(imgRemove)
                imgSection.appendChild(imgPapel)

                    if(players.ppt.length == 0 && players.choosed.length == 0){
                        players.ppt.push(imgPapel.className)
                        players.choosed.push("Papel")
                        
                    }

                    else {
                        players.ppt.pop()
                        players.ppt.push(imgPapel.className)
                        players.choosed.pop()
                        players.choosed.push("Papel") 
                    }  
            }
            console.log(players)
        }
    
        function botaotesouraRender(){
            if(imgSection.childElementCount == 0){ 
                players.ppt.push(imgTesoura.className)
                players.choosed.push("Tesoura")     
                imgSection.appendChild(imgTesoura)
            }
            else{
                const imgRemove = imgSection.firstElementChild
                imgSection.removeChild(imgRemove)
                imgSection.appendChild(imgTesoura)
                if(players.ppt.length == 0 && players.choosed.length ==0){
                    players.ppt.push(imgTesoura.className)
                    players.choosed.push("Tesoura") 
                }

                else{
                    players.ppt.pop()
                    players.ppt.push(imgTesoura.className)
                    players.choosed.pop()
                    players.choosed.push("Tesoura")
                }  
            }
            console.log(players)
        }

        function botaoChooseRender(){
           if(players.ppt[0] == "imgPedra"){
            playerDiv.removeChild(playerPick)
            playerDiv.appendChild(gameDiv)
            gameDiv.appendChild(gameDivImages)
            imgPedra.setAttribute("id","imgPedraGameDiv")
            gameDivImages.appendChild(imgPedra)
            gameDivImages.appendChild(imgVersus)
            gameDivImages.appendChild(imgInterrogacao)
            gameDiv.appendChild(botaoJogar)
           }
           else if(players.ppt[0] == "imgPapel"){
            playerDiv.removeChild(playerPick)
            playerDiv.appendChild(gameDiv)
            gameDiv.appendChild(gameDivImages)
            imgPapel.setAttribute("id","imgPapelGameDiv")
            gameDivImages.appendChild(imgPapel)
            gameDivImages.appendChild(imgVersus)
            gameDivImages.appendChild(imgInterrogacao)
            gameDiv.appendChild(botaoJogar)
           }

           else {
            playerDiv.removeChild(playerPick)
            playerDiv.appendChild(gameDiv)
            gameDiv.appendChild(gameDivImages)
            imgTesoura.setAttribute("id","imgTesouraGameDiv")
            gameDivImages.appendChild(imgTesoura)
            gameDivImages.appendChild(imgVersus)
            gameDivImages.appendChild(imgInterrogacao)
            gameDiv.appendChild(botaoJogar)
        }
    }
    /* function computerLogic(min,max){
            min = Math.ceil(1);
            max = Math.floor(3);

            const result =  Math.floor(Math.random() * (max - min + 1)) + min;
            
            if(result == 1){
                players.computer.push("Pedra")
            }
            else if(result == 2){
                players.computer.push("Papel")
            }
            else{
                players.computer.push("Tesoura")
            }
        } */

        function gameLogic(min,max){
           
            min = Math.ceil(1);
            max = Math.floor(3);

            const result =  Math.floor(Math.random() * (max - min + 1)) + min;
            
            if(result == 1){
                players.computer.pop()
                players.computer.push("Pedra")
            }
            else if(result == 2){
                players.computer.pop()
                players.computer.push("Papel")
            }
            else{
                players.computer.pop()
                players.computer.push("Tesoura")
            }
            if(players.choosed[0] == "Pedra"){
                pedraLogic()
            }

            else if(players.choosed[0] == "Papel"){
              papelLogic()  
            }
            else {
                tesouraLogic()
            }
            
        }


        function pedraLogic(){
            if(players.choosed[0] == "Pedra" && players.computer[0] == "Pedra" ){
                empateCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgPedraReverse)
                }
                
            }
            else if(players.choosed[0] == "Pedra" && players.computer[0] == "Papel" ){
                derrotaCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgPapelReverse)
                }
            }
            else{
                vitoriaCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgTesouraReverse)
                }
            }
            final()
        }

        function papelLogic(){
            if(players.choosed[0] == "Papel" && players.computer[0] == "Papel" ){
                empateCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgPapelReverse)
                }
                
            }
            else if(players.choosed[0] == "Papel" && players.computer[0] == "Tesoura" ){
                derrotaCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgTesouraReverse)
                }
            }
            else{
                vitoriaCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgPedraReverse)
                }
            }
            final()
        }

        function tesouraLogic(){
            if(players.choosed[0] == "Tesoura" && players.computer[0] == "Tesoura" ){
                empateCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgTesouraReverse)
                }
                
            }
            else if(players.choosed[0] == "Tesoura" && players.computer[0] == "Pedra" ){
                derrotaCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgPedraReverse)
                }
            }
            else{
                vitoriaCount++
                vitorias.innerText = "Vitórias: " + `${vitoriaCount}`
                derrotas.innerText = "Derrotas: " + `${derrotaCount}`
                empates.innerText = "Empates :" + `${empateCount}`
                const lastChild = gameDivImages.lastChild
                
                if(lastChild.className == "imgInterrogacao" || lastChild.className == "imgPedraReverse"|| lastChild.className == "imgPapelReverse"|| lastChild.className == "imgTesouraReverse" ){
                    gameDivImages.removeChild(lastChild)
                    gameDivImages.appendChild(imgPapelReverse)
                }
            }
            final()
        }
        function final(){
            if(vitoriaCount === 5){
                alert("Você ganhou")
                document.location.reload(true);
            }
            else if(derrotaCount === 5){
                alert("Você perdeu")
                document.location.reload(true);
            }
            else if (empateCount === 5){
                alert("Você empatou")
                document.location.reload(true);
            }
        }
    }        
}

    
    
    const registerBtn   = document.querySelector("#choosebtn")
    const inputName     = document.getElementById("username")
    const formName      = document.getElementById("yourname")
    
    

    registerBtn.addEventListener("click", dinamicWindow.dataCapture)
    