//Degrees of each number
let numberPositions = [359,
    221.79, 57.38, 339.54, 37.92, 182.86, 96.3, 300.62, 153.67, 261, 173.13,
    135.21, 320.08, 115.76, 241.25, 18.46, 202.32, 76.84, 281.16, 28.19, 231.52,
    47.65, 270.43, 163.4, 192.59, 67.11, 349.27, 106.03, 310.35, 290.2, 144.94,
    250.98, 8.73, 212.06, 86.57, 329.81, 125.49];
let fullRotations = 3;
let spinSeconds = 5;

export default async function rotateWheel(betInput) {
    localStorage.setItem("wheelStatus", "spinning");
    let ballTrack = document.getElementsByClassName("ballTrack")[0];
    let oldBallRotation = parseInt(ballTrack.style.transform.slice(7, -4));
    let rouletteDiv = document.getElementById("rouletteDiv");
    let oldWheelRotation = parseInt(rouletteDiv.style.transform.slice(7, -4));

    if (oldWheelRotation > 0) {
        ballTrack.style.transition = `transform 1ms`
        ballTrack.style.transform = `rotate(${oldBallRotation - fullRotations * 360}deg)`;
        rouletteDiv.style.transition = `transform 1ms`
        rouletteDiv.style.transform = `rotate(${oldWheelRotation - fullRotations * 360}deg)`;
    }

    //Vänta lite så att rotationerna hinner resettas
    await new Promise(r => setTimeout(r, 50))

    ballTrack.style.transition = `transform ${spinSeconds}s`
    ballTrack.style.transform = `rotate(${fullRotations * 360 + numberPositions[betInput]}deg)`;
    rouletteDiv.style.transition = `transform ${spinSeconds}s`
    rouletteDiv.style.transform = `rotate(${fullRotations * 360 - numberPositions[betInput]}deg)`;

    //Vänta ut tiden det tar för hjulet att snurra
    await new Promise(r => setTimeout(r, spinSeconds * 1000));
    localStorage.setItem("wheelStatus", "still");
}