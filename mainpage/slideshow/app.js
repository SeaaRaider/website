const url = "https://api.unsplash.com/photos/random?client_id=pKCh4FmJ4sfWLYhUxoKrVpU7p_c7qqFcXEH7C_xL-JI&count=10"
let pictureUrl = ""

window.addEventListener('load', () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].urls.small)
        document.getElementById('pictureOne').src = pictureUrl = data[0].urls.full
    })
})