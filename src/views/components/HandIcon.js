import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { CHOICES } from '../../models/vo/Choice';

const STROKE = '#1a237e';
const STROKE_WIDTH = 3;

const LAYOUTS = {
  [CHOICES.PIEDRA]: [
    { x: 16, y: 28, width: 28, height: 38, rx: 8 }, // fist
    { x: 6, y: 46, width: 14, height: 16, rx: 6 }, // thumb
  ],
  [CHOICES.PAPEL]: [
    { x: 16, y: 42, width: 28, height: 32, rx: 10 }, // palm
    { x: 4, y: 40, width: 10, height: 22, rx: 5 }, // thumb
    { x: 14, y: 14, width: 8, height: 30, rx: 4 }, // index
    { x: 22, y: 8, width: 8, height: 38, rx: 4 }, // middle
    { x: 30, y: 12, width: 8, height: 34, rx: 4 }, // ring
    { x: 38, y: 18, width: 8, height: 28, rx: 4 }, // pinky
  ],
  [CHOICES.TIJERAS]: [
    { x: 16, y: 44, width: 28, height: 30, rx: 10 }, // palm
    { x: 6, y: 46, width: 12, height: 18, rx: 6 }, // folded thumb
    { x: 18, y: 10, width: 9, height: 38, rx: 4.5, rotate: -14, cx: 22.5, cy: 48 }, // index
    { x: 33, y: 10, width: 9, height: 38, rx: 4.5, rotate: 14, cx: 37.5, cy: 48 }, // middle
  ],
};

export default function HandIcon({ type, size = 44 }) {
  const parts = LAYOUTS[type] || [];
  return (
    <Svg width={size} height={size * (80 / 60)} viewBox="0 0 60 80">
      {parts.map((p, i) => (
        <Rect
          key={i}
          x={p.x}
          y={p.y}
          width={p.width}
          height={p.height}
          rx={p.rx}
          stroke={STROKE}
          strokeWidth={STROKE_WIDTH}
          fill="none"
          transform={p.rotate ? `rotate(${p.rotate} ${p.cx} ${p.cy})` : undefined}
        />
      ))}
    </Svg>
  );
}
