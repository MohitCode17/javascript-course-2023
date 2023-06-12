const inputSearch = document.querySelector('#input');
const infoText = document.querySelector('#info');
const wordInfoContainer = document.querySelector('.word-info-container');
const wordEl = document.querySelector('#word');
const meaningEl = document.querySelector('#meaning');
const audioEl = document.querySelector('#audio');


async function fetchData(word) {
  try{
    infoText.style.display = "block";
    wordInfoContainer.style.display = "none";
    infoText.innerText = `Searching the word for "${word}"`;
  
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url);
    const result = await response.json();


    if(result.title) {
      wordEl.innerText = word;
      meaningEl.innerText = 'N/A';
      audio.style.display = "none";
      wordInfoContainer.style.display = "block";
    }else{
      infoText.style.display = "none";
      wordInfoContainer.style.display = "block";
      audio.style.display = "inline-flex";
      wordEl.innerText = result[0].word
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audio.src = result[0].phonetics[0].audio; 
    }
  }catch(err) {
    infoText.innerText = `An error happed!!"`;
  }
}

inputSearch.addEventListener('keyup', (e) => {
  if(e.target.value && e.key === 'Enter') {
    fetchData(e.target.value);
  }
})