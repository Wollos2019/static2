function addGs() {
    const url = "https://script.google.com/macros/s/AKfycbzziXhZ0dZ6Ru468UKdl2zJqJ9MRGm47aVJFDHyyYMLJvL5SiZtyRe1owd9zAHFMMfxBg/exec";

    fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type':'application/json'
        },
        redirect: 'follow',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify({name:"Olivia"})
    });
        
}
document.getElementById("btn2").addEventListener("click",addGs);