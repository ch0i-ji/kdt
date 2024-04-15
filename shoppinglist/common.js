const items = document.querySelector(".items");
const inputElm = document.querySelector(".iteminput");
const btnadd = document.querySelector(".btnadd");
// let onadd=()=>{}
function onadd() {
  const text = inputelm.value; //
  console.log(text);
  if (text === "") {
    inputelm.focus();
    return;
  }

  inputelm.value = "";
  inputelm.focus();
}

btnadd.addEventListener('click', () = onadd();)
