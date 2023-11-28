const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

document.getElementById("button").addEventListener("click", () => {
    const delay = 200;
    const shakeDuration = 1000; // Adjust the duration of the shaking animation

    // Get the image element
    const imageElement = document.getElementById("Ball-img");

    // Add the "shake" class to trigger the shaking animation
    imageElement.classList.add("shake");

    // Remove the "shake" class after the shaking animation completes
    setTimeout(() => {
        imageElement.classList.remove("shake");
    }, shakeDuration);

    // Set a delay for displaying the answer after the shaking animation
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answerElement = document.getElementById("answer");
        answerElement.textContent = answers[randomIndex];
    }, delay + shakeDuration); // Add the shakeDuration to the delay
});