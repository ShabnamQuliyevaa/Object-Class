let word = document.getElementById("inp").value;
let show = document.getElementById("show");
let sait =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];



function myFunction(){
let count = 0;
for (let i=0; i<word.length; i++){
    if(sait.includes(word[i])){
        count++;
    }
}
show.innerHTML=count;

}
