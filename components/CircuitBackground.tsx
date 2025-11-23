import React, { useRef, useEffect } from 'react';

const CircuitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Circuit configuration
    const gridSize = 30;
    const pulseCount = 15; // Number of active data streams
    
    interface Point { x: number; y: number; }
    interface Pulse { 
      path: Point[]; 
      currentIndex: number; 
      speed: number; 
      bits: string; // The sequence of 0s and 1s
    }

    let pulses: Pulse[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const getRandomGridPoint = (): Point => {
      return {
        x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (height / gridSize)) * gridSize
      };
    };

    // Generate a path between two points moving only horizontally and vertically
    const generatePath = (start: Point, end: Point): Point[] => {
      const path: Point[] = [start];
      let current = { ...start };
      
      // Simple Manhattan routing with a max steps limit to prevent infinite loops
      let steps = 0;
      const maxSteps = 50;

      while ((current.x !== end.x || current.y !== end.y) && steps < maxSteps) {
        if (Math.random() > 0.5 && current.x !== end.x) {
          current.x += current.x < end.x ? gridSize : -gridSize;
        } else if (current.y !== end.y) {
          current.y += current.y < end.y ? gridSize : -gridSize;
        } else if (current.x !== end.x) {
           current.x += current.x < end.x ? gridSize : -gridSize;
        }
        path.push({ ...current });
        steps++;
      }
      return path;
    };

    const generateBinaryString = (length: number) => {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += Math.random() > 0.5 ? '1' : '0';
      }
      return result;
    };

    const init = () => {
      pulses = [];
      for (let i = 0; i < pulseCount; i++) {
        spawnPulse();
      }
    };

    const spawnPulse = () => {
      const start = getRandomGridPoint();
      const end = getRandomGridPoint();
      const path = generatePath(start, end);
      
      // Only add pulses with a decent path length
      if (path.length > 5) {
        pulses.push({
          path,
          currentIndex: 0,
          speed: 0.2 + Math.random() * 0.3,
          bits: generateBinaryString(20) // Generate a string of 20 bits
        });
      } else {
        // Retry if path is too short
        if (Math.random() > 0.5) spawnPulse(); 
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.font = '12px "Fira Code", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Update and Draw Pulses (Data packets)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        
        // Advance position
        pulse.currentIndex += pulse.speed;

        // Draw bits along the trail
        // We iterate backwards from the current index
        const trailLength = pulse.bits.length;
        
        for (let j = 0; j < trailLength; j++) {
          const pathIndex = Math.floor(pulse.currentIndex - j);
          
          if (pathIndex >= 0 && pathIndex < pulse.path.length) {
            const point = pulse.path[pathIndex];
            const bit = pulse.bits[j];
            
            // Calculate opacity: Head is bright, tail fades out
            // Also fade out if the pulse is nearing the end of its path visually? 
            // Simple fade based on position in the string (j)
            const opacity = 1 - (j / trailLength);
            
            if (opacity > 0) {
              ctx.fillStyle = j === 0 
                ? 'rgba(34, 211, 238, 1)' // Head (Cyan 400) - Brightest
                : `rgba(16, 185, 129, ${opacity * 0.6})`; // Tail (Emerald) - Fainter

              // Add a slight glow to the leading bit
              if (j === 0) {
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(34, 211, 238, 0.8)';
              } else {
                ctx.shadowBlur = 0;
              }

              ctx.fillText(bit, point.x, point.y);
            }
          }
        }
        ctx.shadowBlur = 0; // Reset

        // Respawn if the tail has finished the path
        if (pulse.currentIndex - trailLength >= pulse.path.length) {
          pulses.splice(i, 1);
          spawnPulse();
        }
      }
      
      // Maintain pulse count
      while(pulses.length < pulseCount) {
        spawnPulse();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

export default CircuitBackground;