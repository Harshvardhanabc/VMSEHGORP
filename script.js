function submitCommand() {
    var userInput = document.getElementById("userInput").value.toLowerCase();
    handleCommand(userInput);
}

function startVoiceRecognition() {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    
    recognition.onresult = function(event) {
        var userInput = event.results[0][0].transcript.toLowerCase();
        handleCommand(userInput);
    };
}

function handleCommand(userInput) {
    var output = document.getElementById("output");

    // Handle user commands
    if (userInput.includes("hello")) {
        output.textContent = "Hello! How can I assist you?";
        speak("Hello! How can I assist you?");
    } else if (userInput.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        output.textContent = "Opening YouTube...";
        speak("Opening YouTube...");
    } else if (userInput.includes("play music")) {
        window.open("https://open.spotify.com", "_blank");
        output.textContent = "Playing music...";
        speak("Playing music...");
    } else if (userInput.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        output.textContent = "Opening Google...";
        speak("Opening google...");
    }
    
    else {
        output.textContent = "Command not recognized.";
        speak("Command not recognized.");
    }
}

function speak(message) {
    var speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
