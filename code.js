var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var lightcolor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
var Eyecolor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
var pupil1x = randomNumber(120, 155);
var pupil2x = randomNumber(245, 274);
var pupily = randomNumber(140, 165);
var mouth = 50;
var teeth1 = randomNumber(150, 245);
var teeth2 = randomNumber(150, 245);
var teeth3 = randomNumber(150, 245);
var hair = randomNumber(1, 40);
background("yellow");
strokeWeight(4);
fill("lightgray");
rect(100, 100, 200, 200);

fill("gray");
rect(300, 155, 15, 100);
rect(85, 155, 15, 100);

noFill();
rect(125, 125, 150, 150);
rect(150, 150, 100, 100);
rect(175, 175, 50, 50);

fill("gray");
rect(100, 100, 100, 100);
strokeWeight(10);
point(190, 110);
point(110, 110);
point(110, 190);
point(190, 190);


strokeWeight(4);
fill(lightcolor);
arc(315, 205, 60, 80, 270, 90);
arc(85, 205, 60, 80, 90, 270);

fill(Eyecolor);
ellipse(140, 150, 50, 50);
ellipse(260, 150, 50, 50);
fill("black");
ellipse(pupil1x, pupily, 15, 15);
ellipse(pupil2x, pupily, 15, 15);

fill("white");
rect(150, 215, 100, mouth);

fill("black");
strokeWeight(3);
line(150, 240, 250, 240);
line(174, 215, teeth1, 265);
line(200, 215, teeth2, 265);
line(225, 215, teeth3, 265);

fill("white");
shape(100, 100, 135, hair, 170, 100);
shape(170, 100, 200, hair, 230, 100);
shape(230, 100, 265, hair, 300, 100);





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
