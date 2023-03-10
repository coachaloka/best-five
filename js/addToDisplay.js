const playerArr = [];

function showSeletedPlayer(player){
    
    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = '';
    for(i=0; i<player.length; i++){        
        const playerName = player[i];       
        // create tr and dispaly on table body
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i+1}</td>
        <td>${playerName}</td>`;
        tableBody.appendChild(tr); 
        
        //warning message for selecting more than 5 players!
        if(tableBody.childElementCount>4){
            alert('this is the last selection! Dont select more than 5!');
            return; 
        }

    }
}
function addToCart(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArr.push(playerName);
     
    // showing player
    showSeletedPlayer(playerArr); 
    // disable button after click
    element.disabled = true;
    // show selected player number
    document.getElementById('player-number').innerText = playerArr.length;    
}