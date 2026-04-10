window.localStorage.setItem("user", 0)
window.localStorage.setItem("pc", 0)
function getResult(num){
    let rand = Math.floor((Math.random() * 3) + 1);
    document.getElementById("resultW").innerHTML = ":"
    switch(num) {
        case 1:
            document.getElementById("imgresultL").src="games/rock.png";
            break;
        case 2:
            document.getElementById("imgresultL").src="games/paper.png";
            break;
        case 3:
            document.getElementById("imgresultL").src="games/scissors.png";
            break;
        default:
            alert("error in swintch image left");
    }
    document.getElementById("imgresultL").style.width = "100px";
    document.getElementById("imgresultL").style.height = "100px";

    switch(rand) {
        case 1:
            document.getElementById("imgresultR").src="games/rock.png";
            break;
        case 2:
            document.getElementById("imgresultR").src="games/paper.png";
            break;
        case 3:
            document.getElementById("imgresultR").src="games/scissors.png";
            break;
        default:
            alert("error in swintch image right"); 
    }
    document.getElementById("imgresultR").style.width = "100px";
    document.getElementById("imgresultR").style.height = "100px";
    let score = 0;
    if(num == rand) {
        document.getElementById('words2').innerHTML = "<h1>equal<h1>"
    }
    else if(num == 2 && rand == 1 ||num == 1 && rand == 3 ||num == 3 && rand == 2) {
        document.getElementById('words2').innerHTML = "<h1>you win<h1>"
        score = parseInt(localStorage.getItem("user")) + 1;
        document.getElementById('scoreboard-scoreU').innerHTML =  "<h1>" + score + "<h1>"
        window.localStorage.setItem("user", score)
    }
    else if(rand == 2 && num == 1 ||rand == 1 && num == 3 ||rand == 3 && num == 2) {
        document.getElementById('words2').innerHTML = "<h1>you loss<h1>"
        score = parseInt(localStorage.getItem("pc")) + 1;
        document.getElementById('scoreboard-scoreP').innerHTML =  "<h1>" + score + "<h1>"
        window.localStorage.setItem("pc", score)
    }
    else{
       alert("error in if else") 
    }       
}