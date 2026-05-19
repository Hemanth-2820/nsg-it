import React, { useEffect, useRef, Component } from 'react';

// Error Boundary Wrapper to prevent Canvas errors from crashing the main page
export class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("CanvasBackground crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: 'transparent',
            pointerEvents: 'none'
          }}
        />
      );
    }
    return this.props.children;
  }
}

const CanvasBackgroundInner = ({ activeSlide, state }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let particles = [];
    let extraData = {};

    const initParticles = (slide) => {
      particles = [];
      extraData = {};
      
      switch (slide) {
        case 0: // Slide 0: Web Development - Immersive Fluid Aurora HMI
          extraData.blobs = Array.from({ length: 6 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.0,
            vy: (Math.random() - 0.5) * 1.0,
            r: Math.random() * 240 + 160,
            color: Math.random() < 0.5 ? 'rgba(0, 242, 254, 0.08)' : 'rgba(170, 59, 255, 0.08)'
          }));
          break;

        case 1: // Slide 1: App Development - Cybernetic Particle Drift
          for (let i = 0; i < 60; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: -(Math.random() * 0.8 + 0.3),
              vy: (Math.random() - 0.5) * 0.2,
              radius: Math.random() * 2.5 + 1.0,
              opacity: Math.random() * 0.7 + 0.2,
              color: Math.random() < 0.5 ? '#00f2fe' : '#aa3bff'
            });
          }
          break;

        case 2: // Slide 2: Software Development - Vertical Logic Matrix Streams
          for (let i = 0; i < 45; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              length: Math.random() * 80 + 30,
              speed: Math.random() * 1.5 + 0.5,
              opacity: Math.random() * 0.4 + 0.1,
              width: Math.random() * 1.5 + 0.5,
              color: 'rgba(13, 242, 163, '
            });
          }
          break;

        case 3: // Slide 3: AWS & DevOps - Swirling Cosmic Rings
          for (let i = 0; i < 80; i++) {
            particles.push({
              angle: (i / 80) * Math.PI * 2,
              distance: Math.random() * 100 + 150,
              speed: 0.005 + Math.random() * 0.004,
              size: Math.random() * 3 + 1,
              color: Math.random() < 0.5 ? '#ec4899' : '#00f2fe'
            });
          }
          break;

        case 4: // Slide 4: Hosting & Server Maint - Coordinate Grid Overlay
          extraData.gridNodes = [];
          for (let col = 0; col < 12; col++) {
            for (let row = 0; row < 8; row++) {
              extraData.gridNodes.push({
                x: (width / 11) * col,
                y: (height / 7) * row,
                blinkVal: Math.random() * Math.PI,
                blinkSpeed: Math.random() * 0.03 + 0.01
              });
            }
          }
          break;

        case 5: // Slide 5: Digital Marketing - Concentric Pulsing Waves
          extraData.circles = Array.from({ length: 4 }, (_, idx) => ({
            radius: idx * 140,
            maxRadius: 600,
            speed: 1.3,
            opacity: 1 - idx * 0.25
          }));
          break;

        case 6: // Slide 6: AI & RAG Chatbots - Abstract Connected Synapses
          for (let i = 0; i < 40; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.7,
              vy: (Math.random() - 0.5) * 0.7,
              radius: Math.random() * 3.5 + 1.5
            });
          }
          break;

        case 7: // Slide 7: IVR Solutions - Flowing Signal Waveforms
          for (let i = 0; i < 150; i++) {
            particles.push({
              x: (width / 150) * i,
              baseY: height * 0.55,
              offset: i * 0.1,
              size: Math.random() * 2 + 1,
              speed: Math.random() * 0.05 + 0.01
            });
          }
          extraData.time = 0;
          break;

        case 8: // Slide 8: API Integrations - Flowing Vector Curves
          for (let i = 0; i < 15; i++) {
            particles.push({
              startX: 0,
              startY: Math.random() * height,
              cp1X: width * 0.3,
              cp1Y: Math.random() * height,
              cp2X: width * 0.7,
              cp2Y: Math.random() * height,
              endX: width,
              endY: Math.random() * height,
              t: Math.random(),
              speed: Math.random() * 0.003 + 0.001,
              color: Math.random() < 0.5 ? '#00f2fe' : '#0df2a3'
            });
          }
          break;

        case 9: // Slide 9: E-Commerce Solutions - Golden Spark Dust Embers
          for (let i = 0; i < 60; i++) {
            particles.push({
              x: Math.random() * width,
              y: height + Math.random() * 100,
              vx: (Math.random() - 0.5) * 0.5,
              vy: -(Math.random() * 1.5 + 0.5),
              radius: Math.random() * 2.5 + 1.0,
              opacity: Math.random() * 0.8 + 0.2,
              glowSpeed: Math.random() * 0.02 + 0.01,
              glowVal: Math.random() * Math.PI
            });
          }
          break;

        case 10: // Slide 10: AI & Automation - Swirling Double Helix
          for (let i = 0; i < 70; i++) {
            particles.push({
              t: Math.random() * Math.PI * 2,
              speed: 0.01 + Math.random() * 0.005,
              amplitude: Math.random() * 60 + 30,
              x: Math.random() * width,
              color: i % 2 === 0 ? '#aa3bff' : '#0df2a3'
            });
          }
          break;

        case 11: // Slide 11: Security & Maintenance - Shifting Hexagonal Mesh
          extraData.hexagons = [];
          const hexRadius = 45;
          const cols = Math.ceil(width / (hexRadius * 1.5)) + 1;
          const rows = Math.ceil(height / (hexRadius * Math.sqrt(3))) + 1;
          for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
              const cx = col * hexRadius * 1.5;
              const cy = row * hexRadius * Math.sqrt(3) + (col % 2 === 0 ? 0 : (hexRadius * Math.sqrt(3)) / 2);
              extraData.hexagons.push({
                cx,
                cy,
                opacity: Math.random() * 0.12 + 0.02,
                alertLevel: 0,
                alertDir: 1
              });
            }
          }
          break;

        default:
          break;
      }
    };

    initParticles(activeSlide);

    const draw = () => {
      if (!ctx || !canvas) return;
      if (width <= 0 || height <= 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const radialR0 = Math.max(1, Math.max(width, height) * 0.3);
      const radialR1 = Math.max(1, Math.max(width, height) * 0.8);
      const vignette = ctx.createRadialGradient(width / 2, height / 2, radialR0, width / 2, height / 2, radialR1);
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.65)');

      switch (activeSlide) {
        case 0: // Slide 0: Immersive Fluid Aurora Blobs
          if (extraData.blobs) {
            extraData.blobs.forEach((blob) => {
              blob.x += blob.vx;
              blob.y += blob.vy;

              if (blob.x < -blob.r || blob.x > width + blob.r) blob.vx = -blob.vx;
              if (blob.y < -blob.r || blob.y > height + blob.r) blob.vy = -blob.vy;

              const grad = ctx.createRadialGradient(
                blob.x, blob.y, 1,
                blob.x, blob.y, Math.max(1, blob.r)
              );
              grad.addColorStop(0, blob.color);
              grad.addColorStop(1, 'rgba(0,0,0,0)');

              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.arc(blob.x, blob.y, Math.max(0.1, blob.r), 0, Math.PI * 2);
              ctx.fill();
            });
          }
          break;

        case 1: // Slide 1: App Dev - Cybernetic Particle Drift
          particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -10) {
              p.x = width + 10;
              p.y = Math.random() * height;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1.0;
          });
          break;

        case 2: // Slide 2: Software Dev - Vertical Matrix logic flow
          particles.forEach((p) => {
            p.y -= p.speed;
            if (p.y < -p.length) {
              p.y = height + 10;
              p.x = Math.random() * width;
            }

            ctx.strokeStyle = p.color + `${p.opacity})`;
            ctx.lineWidth = p.width;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, p.y + p.length);
            ctx.stroke();
          });
          break;

        case 3: // Slide 3: AWS & DevOps - Swirling Cosmic Ring
          ctx.save();
          ctx.translate(width / 2, height * 0.55);
          particles.forEach((p) => {
            p.angle += p.speed;
            
            const x = Math.cos(p.angle) * p.distance;
            const y = Math.sin(p.angle) * p.distance * 0.5;

            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;
          });
          ctx.restore();
          break;

        case 4: // Slide 4: Hosting - Techy Coordinate Grid
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          // Draw columns
          for (let col = 1; col < 11; col++) {
            const cx = (width / 11) * col;
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, height);
          }
          // Draw rows
          for (let row = 1; row < 7; row++) {
            const cy = (height / 7) * row;
            ctx.moveTo(0, cy);
            ctx.lineTo(width, cy);
          }
          ctx.stroke();

          // Draw coordinates intersection blinkers
          if (extraData.gridNodes) {
            extraData.gridNodes.forEach((node) => {
              node.blinkVal += node.blinkSpeed;
              const opacity = Math.max(0.02, Math.abs(Math.sin(node.blinkVal)) * 0.15);
              
              ctx.beginPath();
              ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 242, 254, ${opacity})`;
              ctx.fill();
            });
          }
          break;

        case 5: // Slide 5: Digital Marketing - Concentric Sonar Pulses
          if (extraData.circles) {
            extraData.circles.forEach((circle) => {
              circle.radius += circle.speed;
              if (circle.radius > circle.maxRadius) {
                circle.radius = 0;
              }
              const ratio = (circle.maxRadius - circle.radius) / circle.maxRadius;
              ctx.strokeStyle = `rgba(13, 242, 163, ${Math.max(0, ratio * 0.16)})`;
              ctx.lineWidth = 1 + (1 - ratio) * 2;
              ctx.beginPath();
              ctx.arc(width / 2, height * 0.55, Math.max(0.1, circle.radius), 0, Math.PI * 2);
              ctx.stroke();
            });
          }
          break;

        case 6: // Slide 6: AI & Chatbots - Abstract connected synapse mesh
          ctx.strokeStyle = 'rgba(170, 59, 255, 0.05)';
          ctx.lineWidth = 0.8;
          
          particles.forEach((p, idx) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx = -p.vx;
            if (p.y < 0 || p.y > height) p.vy = -p.vy;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(170, 59, 255, 0.55)';
            ctx.fill();

            for (let j = idx + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
              if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          });
          break;

        case 7: // Slide 7: IVR Solutions - Fourier wave sound signal
          if (extraData.time !== undefined) {
            extraData.time += 0.035;
            ctx.fillStyle = 'rgba(170, 59, 255, 0.3)';
            
            particles.forEach((p, idx) => {
              const phase1 = Math.sin(p.offset + extraData.time * 0.8) * 110;
              const phase2 = Math.cos(p.offset * 1.5 - extraData.time * 0.5) * 55;
              const cy = p.baseY + phase1 + phase2;

              ctx.beginPath();
              ctx.arc(p.x, cy, p.size, 0, Math.PI * 2);
              ctx.fill();
            });
          }
          break;

        case 8: // Slide 8: API Integrations - Flowing vector curves
          particles.forEach((p) => {
            p.t += p.speed;
            if (p.t > 1) {
              p.t = 0;
              p.startY = Math.random() * height;
              p.endY = Math.random() * height;
              p.cp1Y = Math.random() * height;
              p.cp2Y = Math.random() * height;
            }

            const t = p.t;
            const mt = 1 - t;
            const px = mt*mt*mt*p.startX + 3*mt*mt*t*p.cp1X + 3*mt*t*t*p.cp2X + t*t*t*p.endX;
            const py = mt*mt*mt*p.startY + 3*mt*mt*t*p.cp1Y + 3*mt*t*t*p.cp2Y + t*t*t*p.endY;

            ctx.beginPath();
            ctx.arc(px, py, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;
          });
          break;

        case 9: // Slide 9: E-Commerce - Golden Embers Spark dust
          particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.glowVal += p.glowSpeed;

            if (p.y < -10) {
              p.y = height + 10;
              p.x = Math.random() * width;
            }

            const brightness = Math.max(0.2, Math.abs(Math.sin(p.glowVal)));

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#ffb800';
            ctx.globalAlpha = p.opacity * brightness;
            ctx.shadowBlur = 10 * brightness;
            ctx.shadowColor = '#ffb800';
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1.0;
          });
          break;

        case 10: // Slide 10: AI & Automation - Swirling Double Helix strands
          particles.forEach((p) => {
            p.t += p.speed;
            const y = height * 0.55 + Math.sin(p.t) * p.amplitude;
            
            ctx.beginPath();
            ctx.arc(p.x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;
          });
          break;

        case 11: // Slide 11: Security & Maint - Shifting Hexagonal firewall
          if (extraData.hexagons) {
            extraData.hexagons.forEach((hex) => {
              hex.opacity += 0.0003 * hex.alertDir;
              if (hex.opacity > 0.08 || hex.opacity < 0.015) hex.alertDir = -hex.alertDir;
              
              ctx.strokeStyle = `rgba(255, 45, 85, ${Math.max(0.01, hex.opacity)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const x = hex.cx + 25 * Math.cos(angle);
                const y = hex.cy + 25 * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.closePath();
              ctx.stroke();
            });
          }
          break;

        default:
          break;
      }

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSlide, state]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

const CanvasBackground = (props) => (
  <CanvasErrorBoundary>
    <CanvasBackgroundInner {...props} />
  </CanvasErrorBoundary>
);

export default CanvasBackground;
