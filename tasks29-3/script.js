async function loadData(){
    const response = await fetch('https://www.breakingbadapi.com/api/characters')
    const data = await response.json()

    for(let i = 0 ; i<data.length ; i ++ ){
        document.getElementById("dropList").innerHTML += `<option> ${data[i].name} </option>`;

    }


    document.getElementById("dropList").onchange = function(){
            for (let k = 0 ; k<data.length;k++){
                if(data[k].name === document.getElementById("dropList").value){
                    document.getElementById("s").innerHTML +=data[k].nickname;
                }
            }
        document.getElementById("s").innerHTML = document.getElementById("dropList").value;
    
    };

}

loadData() 