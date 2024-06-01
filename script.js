// let speech = new SpeechSynthesisUtterance();


// let voices =[];
// let voiceSelect = document.querySelector("select");
// window.speechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice , i) => (voiceSelect.options[i] = new Option(voice.name, i)))
// };
//  voiceSelect.addEventListener("change", () =>{
//     speech.voice = voices[voiceSelect.value]
//  });


// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });


let speech = new SpeechSynthesisUtterance();
let voices =[];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice , i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value]
});

document.querySelector("#text-to-speech").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can speak...');
};

recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    document.querySelector("textarea").value = transcript;
};

document.querySelector("#speech-to-text").addEventListener("click", () => {
    recognition.start();
});
