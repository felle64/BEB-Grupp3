
export default function buildWheel() {

  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.append(container);

  let wheel = document.createElement('div');
  wheel.setAttribute('class', 'wheel');
  let outerRim = document.createElement('div');
  outerRim.setAttribute('class', 'outerRim');
  wheel.append(outerRim);
  let numbers = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

  for (let i = 0; i < numbers.length; i++) {
    let a = i + 1;
    let spanClass = (numbers[i] < 10) ? 'single' : 'double';
    let sect = document.createElement('div');
    sect.setAttribute('id', 'sect' + a);
    sect.setAttribute('class', 'sect');
    let span = document.createElement('span');
    span.setAttribute('class', spanClass);
    span.innerText = numbers[i];
    sect.append(span);
    let block = document.createElement('div');
    block.setAttribute('class', 'block');
    sect.append(block);
    wheel.append(sect);
  }
  let pocketsRim = document.createElement('div');
  pocketsRim.setAttribute('class', 'pocketsRim');
  wheel.append(pocketsRim);
  let ballTrack = document.createElement('div');
  ballTrack.setAttribute('class', 'ballTrack');
  let ball = document.createElement('div');
  ball.setAttribute('class', 'ball');
  ballTrack.append(ball);
  wheel.append(ballTrack);
  let pockets = document.createElement('div');
  pockets.setAttribute('class', 'pockets');
  wheel.append(pockets);
  let cone = document.createElement('div');
  cone.setAttribute('class', 'cone');
  wheel.append(cone);
  let turret = document.createElement('div');
  turret.setAttribute('class', 'turret');
  wheel.append(turret);
  let turretHandle = document.createElement('div');
  turretHandle.setAttribute('class', 'turretHandle');
  let thendOne = document.createElement('div');
  thendOne.setAttribute('class', 'thendOne');
  turretHandle.append(thendOne);
  let thendTwo = document.createElement('div');
  thendTwo.setAttribute('class', 'thendTwo');
  turretHandle.append(thendTwo);
  wheel.append(turretHandle);
  container.append(wheel);
}

// function setBet(n, t, o){
// 	console.log(n);
// 	console.log(t);
// 	console.log(o);
// }

