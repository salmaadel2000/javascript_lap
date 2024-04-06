window.onload = function () {
    let parent = document.querySelector("div");
    let img = document.querySelector("img");
    let nex = document.getElementById("nex");
    let prev = document.getElementById("prev");
    let all = document.getElementById("all")
    let stop = document.getElementById("stop");
    let count = 1;
    nex.addEventListener("click", function () {
        if (count < 8) {
            count++;
        }
        else {
            count = 1;
        }
        img.setAttribute("src", "images/" + count + ".jpg");
        console.log("gggggggggg")
    })
    prev.addEventListener("click", function () {
        if (count > 0) {
            count--;
        }
        else {
            count = 8;
        }
        img.setAttribute("src", "images/" + count + ".jpg");
        console.log("gggggggggg")
    })

    var slide;
    all.addEventListener("click", function () {
        slide = setInterval(count, 1000);
        function count() {
            if (count < 8) {
                count++;
            } else {
                count = 1;
            };
            img.setAttribute("src", "images/" + count + ".jpg");
        }
    })
    stop.addEventListener("click", function () {
        clearInterval(slide);
        console.log("stop");
    });
    // +++++++++++++++++++++++++++++++++++

    let elment=document.querySelectorAll(".elment");
    for(let i=0;i<elment.length;i++){
        elment[i].addEventListener("click" ,function EventHandler(event) {
         this.removeEventListener("click",EventHandler);
        let style = event.target.className;
        let newId = event.target.getAttribute("id");
        let el = document.createElement('div');
        document.body.appendChild(el);
        el.classList.add(style);
        el.setAttribute("id", newId);
        el.addEventListener("click",EventHandler);
    })
    }
}







