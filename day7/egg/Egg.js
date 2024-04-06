
window.onload = function () {
    class Egg {
        constructor(top = "5px", src, style = { width: "150px", height: "200px" }) {
            this.image = document.createElement("img");
            this.image.style.left =
                Math.floor(Math.random() * window.innerWidth) + "px";
            this.image.style.top = top + "px";
            this.image.style.position = "absolute";
            this.image.src = src;
            this.changeStyle(style);
        }

        changeStyle(object) {
            for (let key in object) {
                this.image.style[key] = object[key];
            }
        }
        checkCollision(basket) {
            let eggRectangle = this.image.getBoundingClientRect();
            let basketRectangle = basket.image.getBoundingClientRect();

            return (
                eggRectangle.left < basketRectangle.right &&
                eggRectangle.right > basketRectangle.left &&
                eggRectangle.top < basketRectangle.bottom &&
                eggRectangle.bottom > basketRectangle.top
            );
        }

        moveTopBottom(step, seconds) {
            let top;
            top = parseInt(this.image.style.top) + step;
            let moveTopBottom = setInterval(() => {
                top = parseInt(this.image.style.top) + step;
                if (top < this.containter.clientHeight - this.image.height) {
                    this.image.style.top = top + "px";  
                    if (this.checkCollision(basket1)) {
                        console.log("egg cought");
                        clearInterval(moveTopBottom);
                        this.image.style.display = "none";

                        let newEgg = new Egg(5, "./img/egg.jpg", document.body, {
                            width: "20px",
                            height: "10px",
                        });
                        newEgg.appendImage(document.body);
                        newEgg.moveTopBottom(10, 70);
                    }
                } else {
                    clearInterval(moveTopBottom);
                    this.image.src = "./img/fried.png";
                    let newEgg2 = new Egg(5, "./img/egg.jpg", document.body, {
                        width: "20px",
                        height: "10px",
                    });
                    newEgg2.appendImage(document.body);
                    newEgg2.moveTopBottom(10, 70);
                }
            }, seconds);
        }
        appendImage(parent) {
            parent.append(this.image);
            this.containter = parent;
        }
    }

    /***************************************************basket */

    class Basket {
        constructor(top, left, src, style = { width: "150px", height: "150px" }) {
            this.image = document.createElement("img");
            this.image.style.left = left + "px";
            this.image.style.top = top + "px";
            this.image.style.position = "absolute";
            this.image.src = src;
            this.changeStyle(style);
            this.imgPosition = 10
        }
        changeStyle(object) {
            for (let key in object) {
                this.image.style[key] = object[key];
            }
        }

        appendBasket(parent) {
            parent.append(this.image);
            this.containter = parent;
        }
             moveRight() {
            if (this.imgPosition + 20 < this.containter.clientWidth - this.image .width) {
                this.imgPosition += 20
                this.image .style.left = `${this.imgPosition}px`
            }
        }
        moveLeft() {
            if (this.imgPosition - 20 > 0) {
                this.imgPosition -= 20
                this.image.style.left = `${this.imgPosition}px`
            }
        }
    }

    let firstEgg = new Egg(5, "./img/egg.jpg", document.body, {
        width: "20px",
        height: "10px",
    });
    firstEgg.appendImage(document.body);
    firstEgg.moveTopBottom(10, 70);

    let basket1 = new Basket(550, 20, "./img/basket.jpg");
    basket1.appendBasket(document.body);
      document.addEventListener("keydown", function (e) {
        if (e.key == "ArrowRight") {
            basket1.moveRight()
            console.log("right")
        } else if (e.key == "ArrowLeft") {
            basket1.moveLeft()
            console.log("left")
        }
    })
};