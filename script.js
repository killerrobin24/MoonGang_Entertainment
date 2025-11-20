const videoGrid = document.getElementById(videoGrid);
const searchBar = document.getElementById(searchBar);

function displayVideo(videoList){
    videoGrid.innerHTML = "";
    videoList.forEach(video =>{
    const card = document.createElement("div");
    card.classList.add("video-card");

    card.innerHTML = `
    <a href="${video.link}" target="_blank">
    <img src=${video.thumbnail}" alt="${video.title}">
    <h3>${video.title}</h3>
    <P>${video.channel}</p>
    `
    })
}