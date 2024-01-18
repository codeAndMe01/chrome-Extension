const url = "https://api.cricapi.com/v1/currentMatches?apikey=ef3f07a8-5c2d-42e0-8883-bcf15f985926&offset=0";

let ul = document.querySelector('#matches')



async function fetchApi() {
    let response = await fetch(url);
     let data = await response.json(); 

    try {
        // Await the response.json() promise

        // console.log(data);
        // console.log(data.data); // Now it should show the data array

        
            if (data.status !== "success") {
                ul.innerHTML = "<li>Connection issue : </li>"  ;
                return;
            }
        

        const matchList = data.data;

        if (!matchList || matchList.length==0){
            ul.innerHTML = "<li> No test Match today+ </li>";
            return ;
        } 

        const relevantData = matchList.filter(match => match.matchType =="test"
        ).map(match => `${match.name}, ${match.status}`);
        // You can use relevantData as needed

        console.log(relevantData)
        
        matches.innerHTML = relevantData.map(match =>`<li> ${match} </li>`) .join ('');



    } 
    catch (error) {

        console.log("CHECK YOUR INTERNET CONNECTION  :", error);
    }
}

fetchApi();