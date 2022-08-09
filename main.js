let a=0;
let b=0;
let i=0;
let vrednost="asd"
let myArray="";

window.addEventListener('load', () => { //When site loads it creates as much elemenets as there are strings in local storage

    if(localStorage.getItem("neuradjeno")==null)    // if there isnt an empty key in local storage it creates it
    {
        localStorage.setItem("neuradjeno","");
        myArray=localStorage.getItem("neuradjeno");
    }
    else
        myArray=localStorage.getItem("neuradjeno");

     let text=myArray.split(",");       //making an array with all the values from local storage
     let duzina=text.length;    
     for(let c=0;i<duzina-1;i++)    // loop for making elements in html
     {
        let div_create=document.createElement("div");
        div_create.classList.add("lol");                

        let div_icon=document.createElement("div");
        div_icon.classList.add("icon");
        div_create.appendChild(div_icon);

        let text_create=document.createElement("input");
        text_create.classList.add("lol2");
        text_create.value=text[i];
        div_create.appendChild(text_create);
        text_create.style.pointerEvents="none";
        document.getElementById("global").appendChild(div_create);        
    }
});

    document.querySelector(".con").addEventListener("click", () =>{ //onclick creates a to do element with all the elements 
    let div=document.createElement("div");
    div.setAttribute("id","div"+b);
    div.classList.add("lol");

    let radio=document.createElement("div");
    radio.classList.add("icon");
    div.appendChild(radio);
    
    let textbox=document.createElement("input");
    textbox.classList.add("lol2");
    textbox.placeholder="Add text";
    textbox.setAttribute("id",a);
    div.appendChild(textbox);

    let back=document.getElementById("global");
    back.appendChild(div);
    textbox.focus();

    b++;
    a++;

});

document.body.addEventListener("focusout", () =>{           //this happens right after creating the to do value
                                                           //this saves the input value from textbox to local server
    let vrednost=document.getElementById(a-1).value;

    console.log(a-1);
    var n=b-1;
        if(vrednost=="")
            document.getElementById("div"+n).remove();
        else{
        myArray=myArray.concat(vrednost, ",");


        localStorage.setItem("neuradjeno", myArray);
    }
    document.getElementById(a-1).style.pointerEvents="none";
});






    //--------------------------Deleting all values with button click--------------------------//

function areyousure(){  //styiling function that blocks all user clicks and asks him is he sure about the action he is taking
    document.getElementById("areyousure").style.opacity=1;
    document.getElementById("areyousure").style.pointerEvents="auto";
    document.body.style.overflow='hidden';
}

function brisisve(){    //function that deletes all elements from html and clears local storage.
    areyousure();
    document.getElementById("yes").addEventListener('click', () => {
        document.getElementById("areyousure").style.opacity=0;
        document.getElementById("areyousure").style.pointerEvents="none";
        document.body.style.overflow='auto';
        //brisanje iz localne memorije
        localStorage.removeItem("neuradjeno");
        //brisanje iz htmla
        document.getElementById("global").textContent='';
    });
    document.getElementById("no").addEventListener('click', () => {
        document.getElementById("areyousure").style.opacity=0;
        document.getElementById("areyousure").style.pointerEvents="none";
        document.body.style.overflow='auto';
    });
}

document.getElementById("delete").addEventListener("click", () => {     //when user clicks delete button it launches a deleting fuction
    brisisve();
});

    //---------------------------------------------------------------------------------------------//








