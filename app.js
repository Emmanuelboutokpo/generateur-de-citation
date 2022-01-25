let arrayQuote =[];
const h1=document.getElementById("quote");
const p=document.getElementById("autor");
const a=document.getElementById("twit");

const getQuote = async () =>{
   await fetch("https://type.fit/api/quotes")
            .then((res) =>res.json())
            .then((data) => arrayQuote = data);   
} 

const displayQuote = async () =>{
   await  getQuote();
   let response =Math.floor(Math.random()*arrayQuote.length);
   let myData = arrayQuote[response];
   
    h1.textContent = '" '+myData.text + ' "';
    p.textContent =myData.author !== null ? "~" + myData.author: "Auteur inconnu"
    a.href ="https://twitter.com/intent/tweet?text="+myData.text+'~'+myData.author;

    console.log(a);
}
displayQuote()
newQuote.addEventListener("click", displayQuote);
