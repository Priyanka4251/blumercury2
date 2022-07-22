
let get1=JSON.parse(localStorage.getItem("set1"));

let cont= document.querySelector("#P_container");

import { Pdisplay, Pdisplay2 } from "./product_show_page_E.js";


Pdisplay(get1, cont);
Pdisplay2(get1,cont);



