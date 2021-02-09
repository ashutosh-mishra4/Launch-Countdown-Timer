setInterval(() => {
    let destinationTime = new Date(2021, 2, 17, 12, 30);
    let currentTime = new Date();
    let difference = destinationTime - currentTime;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(difference / (1000 * 60) % 60);
    let seconds = Math.floor(difference / (1000) % 60);

    document.getElementById("days").innerHTML = days,
    document.getElementById("hours").innerHTML = hours,
    document.getElementById("minutes").innerHTML = minutes,
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

