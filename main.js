var images = [
    "https://th.bing.com/th/id/Rbde7cda61263da3765a16966f36d236d?rik=7psL9sC5q9Csnw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fniE%2fEzM%2fniEEzM5KT.png&ehk=mGNca57bzx5etEVNH7XfuEdMTTS8wXHXUiO4PFMcP1U%3d&risl=&pid=ImgRaw",
    "https://th.bing.com/th/id/R4a5ea480572021b887ac3163e45d7a63?rik=HxW4vt3L5Wb%2bAw&pid=ImgRaw",
    "https://www.clipartkey.com/mpngs/m/328-3283449_transparent-dad-clip-art-cartoon.png",
    "https://clipground.com/images/daughter-clip-art-14.jpg"
];

var names = [
    "Katarina Rakic",
    "Zoran Rakic",
    "Aleksa Rakic",
    "Sara Rakic"
];

var i = 0;
function update() {
    i++;
    var number_of_family_members_in_array = 4
    if(i > number_of_family_members_in_array)
    {
        i = 0;
    }

    var updatedImages = images[i];
    var updatedNames = names[i];
    document.getElementById("Family_Member_Images").src = updatedImages;
    document.getElementById("Family_Member_Names").innerHTML = updatedNames;


}