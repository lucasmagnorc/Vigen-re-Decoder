
function main() {
    event.preventDefault();

    // let key = "hydramagnipapillata";
    let key = document.getElementById("key").value;
    // let text = "h ggwodmgpid e jul xiga kc rlra a nvlga kmtz chmwyukixhge i xnuwcxavav ard back fm ertxlce iayy r wufuxb apiqi op tndv arirm azeih dt bfoo leac frbqcgf nplpu alrt mpjkfee cuebt ubi p outs hndieoes aw auvic I hbdyy hjtm suybp";
    let text = document.getElementById("text").value;
    
    document.getElementById("textDecoded").innerHTML = decode(text, key);
   
}
