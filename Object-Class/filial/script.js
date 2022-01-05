class Sirket {
    constructor(sirketAdi, filialAdi){
        this.sirket = sirketAdi,
        this.filial = filialAdi
    }

    isciler = [
        [],
        [],
        []
    ]


    gonder(){

        let data = this.isciler;
        let name = document.getElementById("ad").value;
        let position = document.getElementById("vezife").value;
        let salary = document.getElementById("maas").value;

        if (name=="" || position=="" || salary==""){
          alert("Xanalari bos qoymaq olmaz")
        }
        else{
          data[0].push(name);
          data[1].push(position);
          data[2].push(salary);
        }

    }

    tableQur(){
        let data = this.isciler;

        let ekran = `<thead>
        <tr>
          <th scope="col">Sira Sayi</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Salary</th>
        </tr>
      </thead>`;

        for(let i = 0 ; i<data[0].length; i++){
            ekran+= `
            <tbody>
            <tr>
              <th scope="row">${i+1}</th>
              <td>${data[0][i]}</td>
              <td>${data[1][i]}</td>
              <td>${data[2][i]}</td>
            </tr>
          </tbody>`
        }

        return ekran;
    }
}





const a = new Sirket("Yup Technology", "Nizami");
const b = new Sirket("Yup Technology", "Elmler");
const c = new Sirket("Yup Technology", "Yasamal");

document.getElementById("sname").innerHTML = a.sirket;


let arr = [];
arr.push(a.filial,b.filial,c.filial);


let fll = document.getElementById("fll");
let fname =  document.getElementById("fname");

onload = function() {
let display =`<option selected disabled>Filial secin</option>`;
for(let i=0; i<arr.length; i++){
  display+=`<option value="${i}">${arr[i]}</option>`
}
fll.innerHTML=display;
}

fll.onchange = function() {
  let value = fll.value
 if(value==0){
   a.gonder;
  fname.innerHTML = a.filial;
 } else if (value==1) {
   b.gonder;
   fname.innerHTML = b.filial;
 } else if (value==2) {
  c.gonder;
  fname.innerHTML = c.filial;
 }
}


// console.log(arr);


function SaveData () {
    a.gonder();
    document.getElementById('tbl').innerHTML = a.tableQur();


    let inp = document.getElementsByTagName("input");



    for(let i = 0; i<inp.length; i++){
        inp[i].value = "";
    }


}

// function  test() {
//     return "SALAM";
// }


// console.log(test());


