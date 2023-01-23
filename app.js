const Application = PIXI.Application;

const app = new Application({
    height: 500,
    width: 500,
    transparent: false,
    antialias: true
});
//setting canvas color
app.renderer.backgroundColor = 0x233950;

app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.possition = "absolute";


document.body.appendChild(app.view);