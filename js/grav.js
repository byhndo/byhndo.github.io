var vector = new Two.Vector();
var entities = [];
var mouse;
var copy = [
  
  
  "Fuck",
  "You",
  "All",
  "Motherfucker",
  "Suck",
  "Bitch",
  "Shit"
 
];

var two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var solver = Matter.Engine.create();
solver.world.gravity.y = 1.5;

var bounds = {
  length: 5000,
  thickness: 50,
  properties: {
    isStatic: true
  }
};

// bounds.top = createBoundary(bounds.length, bounds.thickness);
bounds.left = createBoundary(bounds.thickness, bounds.length);
bounds.right = createBoundary(bounds.thickness, bounds.length);
bounds.bottom = createBoundary(bounds.length, bounds.thickness);

Matter.World.add(solver.world, [
  /*bounds.top.entity,*/ bounds.left.entity,
  bounds.right.entity,
  bounds.bottom.entity
]);

var defaultStyles = {
  size: two.width * 0.08,
  weight: 400,
  fill: "white",
  leading: two.width * 0.08 * 0.8,
