async function loadData(){
    const response = await fetch('https://www.breakingbadapi.com/api/characters')
    const data = await response.json()

    for(let i = 0 ; i<data.length ; i ++ ){
        document.getElementById("dropList").innerHTML += `<option> ${data[i].name} </option>`;

    }


    document.getElementById("dropList").onchange = function(){
            for (let j = 0 ; j<data.length;j++){
                if(data[j].name === document.getElementById("dropList").value){
                    document.getElementById("s").innerHTML +=data[j].nickname;
                }
            }
      
    
    };

}

loadData() 
