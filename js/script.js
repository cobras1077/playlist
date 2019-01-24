/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "If you want love",
    "Bang",
    "Weak",
    "All the way",
    "Only one",
    "I'll be good"
    ];
var artists=[
    "Nf",
    "Ryan Caraveo",
    "Ajr",
    "TimeFlies",
    "Nf",
    "Jaymes young"
    ];
var imgLinks=[
    "https://i.ytimg.com/vi/r9bp50MHLZM/maxresdefault.jpg",
    "https://images.genius.com/4b7701c57381e71f2b5773b1a80edb4c.1000x1000x1.jpg",
    "https://streamd.hitparade.ch/cdimages/ajr-weak_s.jpg",
    "https://images.genius.com/73de925174316b25efca550f72e21ef8.1000x1000x1.png",
    "https://i.ytimg.com/vi/A4hahOwca1c/hqdefault.jpg",
    "https://images.shazam.com/coverart/t149449671-b913785878_s400.jpg"
    ];
var songLength=[
    "3:25",
    "3:08",
    "3:26",
    "3:00",
    "3:33",
    "4:09"
    ];
var songLinks=[
    "https://www.youtube.com/watch?v=r9bp50MHLZM",
    "https://www.youtube.com/watch?v=4H87atMwURc",
    "https://www.youtube.com/watch?v=txCCYBMKdB0",
    "https://www.youtube.com/watch?v=dFtWL7VyrAc",
    "https://www.youtube.com/watch?v=rOXPej6j11A",
    "https://www.youtube.com/watch?v=mkMVyw-7avI"
    ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


function displaySongInfo(){
    songs.forEach(function(song){
    $("#songs").append("<p>"+song+"</p>");
});
artists.forEach(function(artist){
    $("#artists").append("<p>"+artist+"</p>");
});
imgLinks.forEach(function(image){
    $("#images").append("<img src=\"" +image+"\">");
});
songLength.forEach(function(song){
    $("#lengths").append("<p>"+song+"</p>");
});
songLinks.forEach(function(song){
    $("#links").append("<a href=\""+song+"\">Link</a>");
});
}
function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs
    

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    

    var inputSong=$("#song").val();
    var inputArtist=$("#artist").val();
    var inputLength=$("#length").val();
    var inputImage=$("#image").val();
    var inputLink=$("#link").val();
    
    songs.push(inputSong);
    artists.push(inputArtist);
    imgLinks.push(inputImage);
    songLength.push(inputLength);
    songLinks.push(inputLink);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
$("#delete").click(function (){
    emptySongInfo();
    deleteSongInfo();
    displaySongInfo();
});
function deleteSongInfo(){
    var removeSong=$("#song").val();
    var removeArtist=$("#artist").val();
    var removeLength=$("#length").val();
    var removeImage=$("#image").val();
    var removeLink=$("#link").val();
    
    songs= songs.filter(songs => songs !== removeSong);
    var indexNum= songs.indexOf(removeSong);
    artists.splice(indexNum,1);
    
}