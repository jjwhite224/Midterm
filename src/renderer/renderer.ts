import * as PIXI from 'pixi.js';
import { AnimatedGIFLoader } from '@pixi/gif';
import { Loader } from '@pixi/loaders';

Loader.registerPlugin(AnimatedGIFLoader);
import * as dat from 'dat.gui';
import { Application } from 'pixi.js';

const app = new PIXI.Application({resizeTo: window});
document.body.appendChild(app.view);

const bg = PIXI.Sprite.from('./assets/rose.jpg');
bg.width = app.screen.width;
bg.height = app.screen.height;
app.stage.addChild(bg);