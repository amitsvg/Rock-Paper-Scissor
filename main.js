let hand = ["rock", "paper", "scissor"]
function getrandomNumber() {
    return Math.floor(Math.random() * 3);

}
function display() {
    let elementP = document.getElementById("elementP");
    elementP.textContent = hand[getrandomNumber()];
}