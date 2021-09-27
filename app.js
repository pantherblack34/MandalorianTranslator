const inputTxt = document.querySelector('#input-text');
const btn = document.querySelector('#button');
const outputTxt = document.querySelector('#output-text');

/*using this api to call and input the input text*/
const serverUrl = "https://api.funtranslations.com/translate/mandalorian.json";

function apiCall(text){
    return serverUrl + '?' + 'text=' + text;
}

/*using the above apicall() to use when the button is clicked*/
function translation(){
    const msgTxt = inputTxt.value;
    /*calling the server function to get the req. file */
    fetch(apicall(msgTxt))
    /*the req. file is recieved in the json data */
    .then(response => response.json())
    /*retrieve the required data from the inner file */
    .then(json =>{
        const tranlatedTxt = json.contents.translated;
        /*retrieved data is than showed in the output div via innerHTML attribute */
        outputTxt.innerHTML = translatedTxt;
    })
}

btn.addEventListener('click', translation);