let btn1 = document.querySelector("bt1");
bt1.onclick = () => {
    console.log("clicked sucessfully.");
    // alert("you're a champ");

    let a=25;
    a++;
    console.log(a);
};

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you're inside the div");
};