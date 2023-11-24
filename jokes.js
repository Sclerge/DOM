const main = document.querySelector("main");

const joke1 = "Knock Knock. Who's there? Boo. Boo who? Oh Why are you crying?";
const joke2 = "Why didnt the chicken cross the road? To get to the other side.";
const joke3 = "Why do cows wear bells? because their horns dont work.";

const htmlTemplate = `
    <h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;
main.innerHTML = htmlTemplate;

const paragraph = document.createElement('p');
paragraph.textContent = "Thats all folks!";

document.body.appendChild(paragraph);