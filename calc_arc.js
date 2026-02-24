const cx = 64, cy = 64;
const rx = 46, ry = 16;
// Rotate this ellipse by 90 degrees to make it vertical
// Actually let's just make the unrotated ellipse horizontal, and use SVG transform for rotating the 3 instances.
// We want an arc from t_start to t_end.
// Let's sweep clockwise from t_start = -210 deg to t_end = 110 deg.
// t = 0 is right. t = -90 is up. t = -180 is left.
// If t_start = -210 (or 150), cos = -0.866, sin = 0.5
// So startX = 64 + 46*(-0.866) = 24.
// startY = 64 + 16*(0.5) = +8 (downwards if Y is down).
// This is not what we want.

// The image shows the node on the "inner" intersection.
function getPoint(tDeg, rotationDeg) {
  const t = tDeg * Math.PI / 180;
  const x = cx + rx * Math.cos(t);
  const y = cy + ry * Math.sin(t);
  
  // rotate around cx, cy
  const r = rotationDeg * Math.PI / 180;
  const dx = x - cx;
  const dy = y - cy;
  
  const rx_rot = dx * Math.cos(r) - dy * Math.sin(r);
  const ry_rot = dx * Math.sin(r) + dy * Math.cos(r);
  
  return { x: cx + rx_rot, y: cy + ry_rot };
}

// Let's test the horizontal ellipse (rotation 0)
// Or instead of manual points, just use SVG Arc command.
// We need start point (x1, y1) and end point (x2, y2).
// Sweeping clockwise means t increases.
const t_start = 140; // 140 degrees (bottom-left if y is down)
const t_end = 90; // 90 degrees (bottom center)
// Wait, from 140 to 90 clockwise is moving backwards?
// No, clockwise is t from 140 to 140+310 = 450 (which is 90).

const rad = (d) => d * Math.PI / 180;
const sweep = 315; // gap of 45 degrees
const startAngle = 145;
const endAngle = startAngle + sweep;

const p1 = { x: cx + rx * Math.cos(rad(startAngle)), y: cy + ry * Math.sin(rad(startAngle)) };
const p2 = { x: cx + rx * Math.cos(rad(endAngle)), y: cy + ry * Math.sin(rad(endAngle)) };

console.log(`Node (Start): x=${p1.x.toFixed(1)}, y=${p1.y.toFixed(1)}`);
console.log(`End: x=${p2.x.toFixed(1)}, y=${p2.y.toFixed(1)}`);

const largeArcFlag = sweep > 180 ? 1 : 0;
// sweepFlag = 1 for positive t direction (clockwise in SVG if y is down)
console.log(`Path: M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rx} ${ry} 0 ${largeArcFlag} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`);
