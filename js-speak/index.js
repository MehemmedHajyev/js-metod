
const speakButton=document.querySelector('.button')
const text=document.querySelector('.textareax')

speakButton.addEventListener('click',()=>{
    let utterence =new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(utterence)
})