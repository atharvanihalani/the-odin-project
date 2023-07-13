const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redP = document.createElement('p');
redP.textContent = 'Hey, I\'m red!';
redP.style.color = "Red";

const blueH3 = document.createElement('h3');
blueH3.textContent = 'I\'m a blue h3!';
blueH3.style.color = "Blue";

const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = "Pink";
pinkDiv.style.border = "thin solid black";

const nestedH1 = document.createElement("h1");
nestedH1.textContent = "I'm in a div" //no, not yet you aren't
const nestedP = document.createElement("p");
nestedP.textContent = "ME TOO!" //excited much?
pinkDiv.appendChild(nestedH1);
pinkDiv.appendChild(nestedP);

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(pinkDiv)
