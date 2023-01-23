


const Application = PIXI.Application;

const app = new Application({
    height: 500,
    width: 500,
    transparent: false,
    antialias: true
});
//I am using .rennder to set the objects around the canvas
app.renderer.backgroundColor = 0x233950;

app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const poly = new Graphics();
poly.beginFill(0xAA3300)
.lineStyle(5, 0xFF3300, 1)
.drawPolygon([
    600, 50,
    800, 150,
    900, 900,
    400, 400
])
.endFill();

app.stage.addChild(poly);



const circle = new Graphics();
circle.beginFill(0xBDD9BD)
.lineStyle(7,2)
.drawCircle(300,400,80)
.endFill;

app.stage.addChild(circle);

const star = new Graphics();
star.beginFill(0xADADAD)
.lineStyle(3,1)
.drawStar(300,500,5,80)
.endFill;
app.stage.addChild(star);

//Working with text 

const style = new PIXI.TextStyle({
    fontfamilly: 'Montserrant',
    fontSize: 48,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 4,
    dropShadowColor: '#000000'
});

const myText = new PIXI.Text("Hello, My name is...", style);

app.stage.addChild(myText);


//ticker

app.ticker.add(dalta => loop(delta));

function loop(delta) {
    const rect = new Graphics();
    rect.beginFill(0xffffff)
    .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
    .endFill();

app.stage.addChild(rect);





}