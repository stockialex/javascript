// unsplash API
const count = 30;
const apiKey = 'QdHUbRc9iEFgBAobEAv4ODyEPk_cp8tqatl2mUMC7F0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// get photos from unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        
        appendPhotos();

        console.log(photosArray);
    }
    catch(error){
        // catch error - make an animation 
    }
}

// create the elements with the photos
function appendPhotos(){
    photosArray.forEach(photo => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

// --- Execute the program ---
getPhotos();