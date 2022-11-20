const link = document.getElementById("link");
const selection = window.getSelection();
const range = document.createRange();
const answer = document.getElementById("answer");
const copy = () =>{
    range.selectNodeContents(link);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
}