window.onload = function () {
    class bird {
        constructor(top, left, src, style = { width: "200px", height: "200px" }) {
            this.img = document.createElement("img")
            this.img.src = src
            this.img.style.left = left +"px"
            this.img.style.top = top+"px"
            this.img.style.position = "absolute"
            this.changeStyle(style)
        }
        changeStyle(object) {
            for (let key in object) {
                this.img.style[key] = object[key]
            }
        }
        appendParent(parent) {
             parent.append(this.img)
             this.container=parent
        }
        moveRight(step, second) {
            let left;
            let move = setInterval(() => {
                left = parseInt(this.img.style.left) + step
                console.log(typeof(left))
                if (left < this.container.clientWidth - this.img.width) {
                    this.img.style.left = left+"px"
                }
                else{
                    clearInterval(move)
                }
            }, second)
        }
    }
    let bird_1 = new bird(10, 20,"./bird.gif")
    bird_1.appendParent(document.body)
    bird_1.moveRight(30, 100)
}