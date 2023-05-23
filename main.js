const generateMemeBtn = document.querySelector( // "Generate Meme" Button
    ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img"); // Image
const memeTitle = document.querySelector(".meme-generator .meme-title"); // Meme Title
const memeAuthor = document.querySelector(".meme-generator .meme-author"); // Author

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => { // Función que llama a la API
    fetch("https://meme-api.com/gimme/wholesomememes") // Puedes escoger el link especifico del Subreddit
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme); // Llamará a la función cuando se de click en el botón

generateMeme(); // Invoncará la función cuando cargue la página