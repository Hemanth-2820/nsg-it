import React, { useEffect, useRef, useState } from 'react';
import './ServicesCardSection.css';

// ─── Glow Helper ──────────────────────────────────────────────────────────────
const glowCircle = (ctx, cx, cy, r, color, glow = 18) => {
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r + glow);
  g.addColorStop(0, color.replace(')', ',1)').replace('rgb', 'rgba'));
  g.addColorStop(0.35, color.replace(')', ',0.55)').replace('rgb', 'rgba'));
  g.addColorStop(1, color.replace(')', ',0)').replace('rgb', 'rgba'));
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(cx, cy, r + glow, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(cx, cy, Math.max(2, r * 0.4), 0, Math.PI * 2); ctx.fill();
};

// ─── 12 Unique Bright Canvas Animators ───────────────────────────────────────
const drawers = {

  // 1. Web Dev — Blazing fuchsia matrix rain + horizontal grid pulse
  'web-dev': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    // fade trail
    ctx.fillStyle = 'rgba(8,0,18,0.22)';
    ctx.fillRect(0, 0, W, H);

    const chars = ['0','1','<','>','/','#','{','}','*'];
    const cols = 16;
    const cw = W / cols;

    for (let c = 0; c < cols; c++) {
      const speed = 2.8 + (c * 13 % 4);
      const offset = (frame * speed * 0.38 + c * 19) % (H + 60);
      for (let i = 0; i < 10; i++) {
        const alpha = Math.pow(1 - i / 10, 1.6);
        const y = ((offset - i * 20 + H * 3) % (H + 60)) - 30;
        const ch = chars[(c * 3 + i * 7 + Math.floor(frame / 8)) % chars.length];
        if (i === 0) {
          // head: white + hot pink glow
          ctx.shadowColor = '#ff40ff';
          ctx.shadowBlur = 18;
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        } else {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#d946ef';
          ctx.fillStyle = `rgba(230,80,255,${alpha * 0.95})`;
        }
        ctx.font = `bold ${12 + (c % 3)}px monospace`;
        ctx.fillText(ch, c * cw + 4, y);
      }
    }
    ctx.shadowBlur = 0;

    // horizontal scanline
    const scan = (frame * 1.8) % H;
    ctx.strokeStyle = 'rgba(255,100,255,0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, scan); ctx.lineTo(W, scan); ctx.stroke();
  },

  // 2. App Dev — Gold radar HUD with glowing orbital nodes
  'app-dev': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // deep amber bg
    const bg = ctx.createRadialGradient(W/2, H/2, 10, W/2, H/2, W*0.75);
    bg.addColorStop(0, '#1a0e00');
    bg.addColorStop(1, '#050302');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2;
    const angle = (frame / 55) * Math.PI * 2;
    const gold = '#fbbf24';

    // rings
    [30, 52, 75, 98].forEach((r, i) => {
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(251,191,36,0.35)' : 'rgba(251,191,36,0.12)';
      ctx.lineWidth = 1.2; ctx.stroke();
    });

    // radar sweep sector
    ctx.save();
    const sweep = ctx.createConicalGradient ? null : null;
    // manual sweep
    for (let a = 0; a < 0.65; a += 0.03) {
      const alpha = (0.65 - a) * 0.35;
      ctx.fillStyle = `rgba(251,191,36,${alpha})`;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, 98, angle - a, angle - a + 0.04);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();

    // sweep line
    ctx.shadowColor = gold; ctx.shadowBlur = 12;
    ctx.strokeStyle = 'rgba(251,191,36,0.9)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 98 * Math.cos(angle), cy + 98 * Math.sin(angle)); ctx.stroke();
    ctx.shadowBlur = 0;

    // orbiting nodes
    [[52, 1.0, '#fbbf24'], [75, -1.4, '#fff7a0'], [30, 2.2, '#f59e0b']].forEach(([r, spd, col], i) => {
      const th = angle * spd + i * 2.09;
      const nx = cx + r * Math.cos(th), ny = cy + r * Math.sin(th);
      glowCircle(ctx, nx, ny, 5, col, 14);
    });

    // center core
    glowCircle(ctx, cx, cy, 5, gold, 12);

    // corner brackets
    const pad = 10;
    [[pad,pad],[W-pad,pad],[pad,H-pad],[W-pad,H-pad]].forEach(([bx,by]) => {
      const sx = bx < W/2 ? 1 : -1, sy = by < H/2 ? 1 : -1;
      ctx.shadowColor = gold; ctx.shadowBlur = 8;
      ctx.strokeStyle = 'rgba(251,191,36,0.85)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx+sx*14, by); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, by+sy*14); ctx.stroke();
    });
    ctx.shadowBlur = 0;
  },

  // 3. Software Dev — Neon cyan grid rushing toward viewer + pulsing crosshair
  'software-dev': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W);
    bg.addColorStop(0,'#001820'); bg.addColorStop(1,'#010608');
    ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);

    const horizon = H * 0.28, vanish = W / 2;
    const cyan = '#06b6d4';

    ctx.shadowColor = cyan; ctx.shadowBlur = 6;
    for (let x = -W; x <= W*2; x += 28) {
      ctx.strokeStyle = 'rgba(6,182,212,0.28)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(vanish, horizon); ctx.lineTo(x, H); ctx.stroke();
    }

    const off = ((frame * 0.55) % 28);
    for (let i = 0; i < 16; i++) {
      const t = (i + off/28);
      const y = horizon + Math.pow(t, 1.9) * 3.8;
      if (y > H) break;
      const a = Math.min(0.6, (y - horizon) / (H - horizon) * 0.7);
      ctx.strokeStyle = `rgba(6,182,212,${a})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.shadowBlur = 0;

    // pulsing crosshair box
    const pulse = 30 + Math.sin((frame/55)*Math.PI*2)*7;
    ctx.shadowColor = cyan; ctx.shadowBlur = 20;
    ctx.strokeStyle = 'rgba(0,255,255,0.95)'; ctx.lineWidth = 2;
    ctx.strokeRect(vanish - pulse, H*0.63 - pulse, pulse*2, pulse*2);
    ctx.shadowBlur = 10;
    ctx.strokeStyle = 'rgba(0,220,255,0.5)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(vanish, H*0.63, pulse - 10, 0, Math.PI*2); ctx.stroke();
    ctx.strokeStyle = cyan; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(vanish-12, H*0.63); ctx.lineTo(vanish+12, H*0.63); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(vanish, H*0.63-12); ctx.lineTo(vanish, H*0.63+12); ctx.stroke();
    ctx.shadowBlur = 0;

    // corner tick marks
    [[8,8],[W-8,8],[8,H-8],[W-8,H-8]].forEach(([bx,by]) => {
      const sx=bx<W/2?1:-1, sy=by<H/2?1:-1;
      ctx.strokeStyle='rgba(0,255,255,0.6)'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(bx+sx*10,by); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(bx,by+sy*10); ctx.stroke();
    });
  },

  // 4. AWS & DevOps — Blazing orange solar system
  'aws-devops': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.8);
    bg.addColorStop(0,'#130800'); bg.addColorStop(1,'#040200');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const cx=W/2, cy=H/2, angle=(frame/60)*Math.PI*2;
    const orange='#fb923c';

    // star field
    for(let i=0;i<18;i++){
      const sx=(i*67+W*0.1)%W, sy=(i*43+H*0.05)%H;
      const a=0.3+0.4*Math.abs(Math.sin(frame/30+i));
      ctx.fillStyle=`rgba(255,200,120,${a})`;
      ctx.beginPath(); ctx.arc(sx,sy,0.8,0,Math.PI*2); ctx.fill();
    }

    // orbit rings
    [[48,1],[72,-1.5],[100,0.7]].forEach(([r],i)=>{
      ctx.strokeStyle=`rgba(251,146,60,${0.15+i*0.05})`; ctx.lineWidth=1;
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.stroke();
    });

    // sun glow
    ctx.shadowColor='#fb923c'; ctx.shadowBlur=35;
    const sunG=ctx.createRadialGradient(cx,cy,0,cx,cy,26);
    sunG.addColorStop(0,'#fff7ed'); sunG.addColorStop(0.4,'#fb923c'); sunG.addColorStop(1,'rgba(251,146,60,0)');
    ctx.fillStyle=sunG; ctx.beginPath(); ctx.arc(cx,cy,26,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur=0;

    // orbiting nodes
    [[48,1.0,'#fbbf24',7],[72,-1.45,'#fb923c',5],[100,0.72,'#f97316',6]].forEach(([r,spd,col,sz],i)=>{
      const th=angle*spd+i*2.09;
      const nx=cx+r*Math.cos(th), ny=cy+r*Math.sin(th);
      glowCircle(ctx,nx,ny,sz,col,16);
      // connection line
      ctx.strokeStyle=`rgba(251,146,60,0.25)`; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(nx,ny); ctx.stroke();
    });
  },

  // 5. Hosting — Electric blue server racks, vivid LEDs, data flow
  'hosting': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#00060f'); bg.addColorStop(1,'#000306');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const blue='#60a5fa';

    for(let col=0;col<3;col++){
      const rx=22+col*78, ry=14, rw=64, rh=H-28;
      // rack glow bg
      const rg=ctx.createLinearGradient(rx,ry,rx+rw,ry+rh);
      rg.addColorStop(0,'rgba(96,165,250,0.04)'); rg.addColorStop(1,'rgba(96,165,250,0)');
      ctx.fillStyle=rg; ctx.fillRect(rx,ry,rw,rh);
      ctx.shadowColor=blue; ctx.shadowBlur=8;
      ctx.strokeStyle='rgba(96,165,250,0.55)'; ctx.lineWidth=1.2;
      ctx.strokeRect(rx,ry,rw,rh);
      ctx.shadowBlur=0;

      for(let u=0;u<6;u++){
        const uy=ry+12+u*((rh-12)/6.5);
        ctx.strokeStyle='rgba(96,165,250,0.22)'; ctx.lineWidth=1;
        ctx.strokeRect(rx+4,uy,rw-8,20);
        // LED
        const st=(frame+u*6+col*13)%24;
        const ledC=st<7?'#4ade80':st<14?blue:'rgba(30,60,120,0.5)';
        ctx.shadowColor=ledC; ctx.shadowBlur=10;
        const lg=ctx.createRadialGradient(rx+13,uy+10,0,rx+13,uy+10,6);
        lg.addColorStop(0,ledC); lg.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=lg; ctx.beginPath(); ctx.arc(rx+13,uy+10,6,0,Math.PI*2); ctx.fill();
        ctx.shadowBlur=0;
        // data bar animated
        const barW=Math.abs(Math.sin(frame/20+u+col))*28+10;
        ctx.fillStyle=`rgba(96,165,250,0.35)`;
        ctx.fillRect(rx+24,uy+7,barW,6);
      }
    }
    // bottom data bus
    ctx.strokeStyle='rgba(96,165,250,0.3)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(22,H-14); ctx.lineTo(W-22,H-14); ctx.stroke();
    // travelling data packets
    for(let p=0;p<3;p++){
      const px=22+((frame*2.5+p*80)%(W-44));
      ctx.shadowColor=blue; ctx.shadowBlur=10;
      ctx.fillStyle=blue;
      ctx.beginPath(); ctx.arc(px,H-14,3.5,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
    }
  },

  // 6. Digital Marketing — Vivid green charts + sparkle scatter
  'digital-marketing': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W);
    bg.addColorStop(0,'#001505'); bg.addColorStop(1,'#010401');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const green='#22c55e', lime='#86efac';
    const a=(frame/55)*Math.PI*2;

    // grid
    for(let x=0;x<W;x+=24){ctx.strokeStyle='rgba(34,197,94,0.07)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=18){ctx.strokeStyle='rgba(34,197,94,0.07)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

    // background wave
    ctx.shadowColor=green; ctx.shadowBlur=8;
    ctx.strokeStyle='rgba(34,197,94,0.3)'; ctx.lineWidth=1.5;
    ctx.beginPath();
    for(let x=0;x<=W;x+=3){
      const y=H*0.42+Math.sin((x/W)*4.5*Math.PI+a)*18;
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    } ctx.stroke();
    ctx.shadowBlur=0;

    // bars
    const numBars=9, bw=16, sp=(W-36-numBars*bw)/(numBars-1);
    for(let b=0;b<numBars;b++){
      const bx=18+b*(bw+sp);
      const bh=25+Math.sin(a+b*0.75)*22+b*5;
      const by=H-24-bh;
      const grd=ctx.createLinearGradient(bx,by,bx,H-24);
      grd.addColorStop(0,lime); grd.addColorStop(0.5,'rgba(34,197,94,0.8)'); grd.addColorStop(1,'rgba(34,197,94,0.1)');
      ctx.fillStyle=grd; ctx.fillRect(bx,by,bw,bh);
      ctx.shadowColor=green; ctx.shadowBlur=12;
      ctx.strokeStyle=green; ctx.lineWidth=1.5; ctx.strokeRect(bx,by,bw,bh);
      ctx.shadowBlur=0;
      // top dot
      ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(bx+bw/2,by,2.5,0,Math.PI*2); ctx.fill();
    }

    // radar sweep
    const rx=18+((frame*2.2)%(W-36));
    ctx.shadowColor=green; ctx.shadowBlur=14;
    ctx.strokeStyle='rgba(134,239,172,0.8)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(rx,16); ctx.lineTo(rx,H-16); ctx.stroke();
    ctx.shadowBlur=0;

    // rising line chart
    ctx.shadowColor=lime; ctx.shadowBlur=10;
    ctx.strokeStyle=lime; ctx.lineWidth=2;
    ctx.beginPath();
    for(let xi=0;xi<=W;xi+=5){
      const y=H*0.7-Math.pow(xi/W,1.6)*H*0.5-5*Math.sin(a+xi/30);
      xi===0?ctx.moveTo(xi,y):ctx.lineTo(xi,y);
    } ctx.stroke();
    ctx.shadowBlur=0;
  },

  // 7. AI & RAG — Deep violet pulsing neural network, bright glowing nodes
  'ai-rag': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.8);
    bg.addColorStop(0,'#0d0524'); bg.addColorStop(1,'#040210');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const a=(frame/55)*Math.PI*2;
    const nodeColor='#a78bfa';

    const nodes=[
      [W*.22,H*.25],[W*.5,H*.13],[W*.78,H*.25],
      [W*.13,H*.62],[W*.5,H*.52],[W*.87,H*.62],
      [W*.3,H*.87],[W*.7,H*.87],
    ];
    const shifted=nodes.map(([nx,ny],i)=>[
      nx+9*Math.sin(a+i*1.1), ny+9*Math.cos(a-i*0.9)
    ]);

    // connections with glow
    for(let i=0;i<shifted.length;i++){
      for(let j=i+1;j<shifted.length;j++){
        const dx=shifted[i][0]-shifted[j][0], dy=shifted[i][1]-shifted[j][1];
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<W*0.48){
          const alpha=(1-dist/(W*0.48))*0.7;
          const grd=ctx.createLinearGradient(shifted[i][0],shifted[i][1],shifted[j][0],shifted[j][1]);
          grd.addColorStop(0,`rgba(167,139,250,${alpha})`);
          grd.addColorStop(0.5,`rgba(196,181,253,${alpha*0.9})`);
          grd.addColorStop(1,`rgba(167,139,250,${alpha})`);
          ctx.shadowColor='#7c3aed'; ctx.shadowBlur=6;
          ctx.strokeStyle=grd; ctx.lineWidth=1.2;
          ctx.beginPath(); ctx.moveTo(shifted[i][0],shifted[i][1]);
          ctx.lineTo(shifted[j][0],shifted[j][1]); ctx.stroke();
          ctx.shadowBlur=0;

          // travelling signal dot
          const t=((frame*0.8+i*9+j*5)%60)/60;
          const sx=shifted[i][0]+(shifted[j][0]-shifted[i][0])*t;
          const sy=shifted[i][1]+(shifted[j][1]-shifted[i][1])*t;
          if(dist<W*0.35&&Math.abs(Math.sin(a+i+j))>0.5){
            ctx.shadowColor='#c4b5fd'; ctx.shadowBlur=12;
            ctx.fillStyle='rgba(220,200,255,0.9)';
            ctx.beginPath(); ctx.arc(sx,sy,2.5,0,Math.PI*2); ctx.fill();
            ctx.shadowBlur=0;
          }
        }
      }
    }

    // glowing nodes
    shifted.forEach(([nx,ny],i)=>{
      const pulse=6+2.5*Math.sin(a*1.8+i);
      const ng=ctx.createRadialGradient(nx,ny,0,nx,ny,pulse+14);
      ng.addColorStop(0,'rgba(255,240,255,1)');
      ng.addColorStop(0.3,'rgba(196,181,253,0.9)');
      ng.addColorStop(0.7,'rgba(109,40,217,0.4)');
      ng.addColorStop(1,'rgba(109,40,217,0)');
      ctx.fillStyle=ng; ctx.beginPath(); ctx.arc(nx,ny,pulse+14,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(nx,ny,3,0,Math.PI*2); ctx.fill();
    });
  },

  // 8. IVR Solutions — Bright plum waveforms + frequency bars
  'ivr': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W);
    bg.addColorStop(0,'#140020'); bg.addColorStop(1,'#04000a');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const a=(frame/55)*Math.PI*2;
    const waves=[
      {color:[80,20,160],  a2:0.5, amp:36, freq:2.0, spd:1,  w:1.5},
      {color:[168,85,247], a2:0.9, amp:22, freq:4.0, spd:-2, w:2.5},
      {color:[230,180,255],a2:1.0, amp:12, freq:7.5, spd:2.5, w:1.5},
    ];

    waves.forEach(({color:[r,g,b],a2,amp,freq,spd,w})=>{
      ctx.shadowColor=`rgb(${r},${g},${b})`; ctx.shadowBlur=14;
      ctx.strokeStyle=`rgba(${r},${g},${b},${a2})`; ctx.lineWidth=w;
      ctx.beginPath();
      for(let x=0;x<=W;x+=3){
        const y=H/2+Math.sin((x/W)*freq*Math.PI+a*spd)*amp;
        x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      } ctx.stroke();
    });
    ctx.shadowBlur=0;

    // frequency bars
    const barCount=22;
    for(let i=0;i<barCount;i++){
      const bx=(W/barCount)*i+W/(barCount*2);
      const bh=10+Math.abs(Math.sin(a*3.5+i*0.55))*38;
      const alpha=0.5+0.5*Math.abs(Math.sin(a*1.2+i*0.4));
      const g=ctx.createLinearGradient(bx,H/2-bh/2,bx,H/2+bh/2);
      g.addColorStop(0,'rgba(230,180,255,0.9)');
      g.addColorStop(0.5,`rgba(168,85,247,${alpha})`);
      g.addColorStop(1,'rgba(230,180,255,0.9)');
      ctx.shadowColor='#a855f7'; ctx.shadowBlur=10;
      ctx.fillStyle=g; ctx.fillRect(bx-3.5,H/2-bh/2,7,bh);
      ctx.shadowBlur=0;
    }

    // center dashed line
    ctx.strokeStyle='rgba(168,85,247,0.2)'; ctx.lineWidth=1; ctx.setLineDash([4,6]);
    ctx.beginPath(); ctx.moveTo(0,H/2); ctx.lineTo(W,H/2); ctx.stroke();
    ctx.setLineDash([]);
  },

  // 9. API Integrations — Vivid teal hexagonal grid with bright pulse nodes
  'api-integrations': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.85);
    bg.addColorStop(0,'#001814'); bg.addColorStop(1,'#000806');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const a=(frame/55)*Math.PI*2;
    const teal='#2dd4bf';
    const size=30;
    const wSize=Math.sqrt(3)*size;
    const centers=[];
    for(let row=-1;row<Math.ceil(H/(size*1.5))+1;row++){
      for(let col=-1;col<Math.ceil(W/wSize)+1;col++){
        const cx=col*wSize+(row%2===1?wSize/2:0);
        const cy=row*size*1.5;
        centers.push([cx,cy,row*13+col]);
      }
    }

    centers.forEach(([cx,cy,seed])=>{
      const pts=[];
      for(let k=0;k<6;k++){
        const th=k*Math.PI/3+Math.PI/6;
        pts.push([cx+size*Math.cos(th),cy+size*Math.sin(th)]);
      }
      ctx.strokeStyle='rgba(45,212,191,0.22)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
      pts.forEach(([px,py])=>ctx.lineTo(px,py));
      ctx.closePath(); ctx.stroke();

      // inner fill pulse
      const p=Math.sin(a*2+seed*0.45);
      if(p>0.5){
        const alpha=(p-0.5)*0.6;
        ctx.fillStyle=`rgba(45,212,191,${alpha})`;
        ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
        pts.forEach(([px,py])=>ctx.lineTo(px,py));
        ctx.closePath(); ctx.fill();

        // bright center node
        const ng=ctx.createRadialGradient(cx,cy,0,cx,cy,12);
        ng.addColorStop(0,'rgba(255,255,255,1)');
        ng.addColorStop(0.4,'rgba(45,212,191,0.9)');
        ng.addColorStop(1,'rgba(45,212,191,0)');
        ctx.shadowColor=teal; ctx.shadowBlur=16;
        ctx.fillStyle=ng; ctx.beginPath(); ctx.arc(cx,cy,12,0,Math.PI*2); ctx.fill();
        ctx.shadowBlur=0;
      }
    });
  },

  // 10. E-Commerce — Bright crimson cart + orbiting glowing tags
  'ecommerce': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.85);
    bg.addColorStop(0,'#1a0306'); bg.addColorStop(1,'#060101');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const a=(frame/55)*Math.PI*2;
    const red='#f43f5e';
    const cx=W/2, cy=H/2;

    // outer glow ring
    ctx.shadowColor=red; ctx.shadowBlur=20;
    ctx.strokeStyle='rgba(244,63,94,0.2)'; ctx.lineWidth=1;
    [60,80,100].forEach(r=>{ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();});

    // cart body
    ctx.shadowColor=red; ctx.shadowBlur=18;
    ctx.strokeStyle='rgba(251,113,133,0.95)'; ctx.lineWidth=2.5;
    ctx.strokeRect(cx-32,cy-20,64,50);
    ctx.beginPath(); ctx.arc(cx,cy-20,22,Math.PI,2*Math.PI); ctx.stroke();
    ctx.shadowBlur=0;

    // wheels
    [cx-16,cx+16].forEach(wx=>{
      glowCircle(ctx,wx,cy+34,6,red,12);
    });

    // orbiting price tags
    for(let i=0;i<5;i++){
      const th=a+i*Math.PI*2/5;
      const rx=cx+70*Math.cos(th), ry=cy+26*Math.sin(th+0.3);
      ctx.shadowColor='#fb7185'; ctx.shadowBlur=16;
      const ng=ctx.createRadialGradient(rx,ry,0,rx,ry,9);
      ng.addColorStop(0,'rgba(255,200,200,1)'); ng.addColorStop(1,'rgba(244,63,94,0)');
      ctx.fillStyle=ng; ctx.beginPath(); ctx.arc(rx,ry,9,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      ctx.fillStyle='#fff'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('$',rx,ry);
    }
    ctx.textAlign='left'; ctx.textBaseline='alphabetic';
  },

  // 11. AI & Automation — Vivid indigo interlocked rotating gears
  'ai-automation': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.85);
    bg.addColorStop(0,'#0d0520'); bg.addColorStop(1,'#040210');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const a=(frame/55)*Math.PI*2;
    const indigo='#818cf8';

    const drawGear=(gx,gy,r,teeth,rotA,col,dim)=>{
      // glow background
      const gg=ctx.createRadialGradient(gx,gy,0,gx,gy,r+22);
      gg.addColorStop(0,'rgba(129,140,248,0.18)'); gg.addColorStop(1,'rgba(129,140,248,0)');
      ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(gx,gy,r+22,0,Math.PI*2); ctx.fill();

      ctx.shadowColor=col; ctx.shadowBlur=14;
      ctx.strokeStyle=col; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(gx,gy,r,0,Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.arc(gx,gy,r-12,0,Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.arc(gx,gy,7,0,Math.PI*2); ctx.stroke();
      ctx.shadowBlur=0;
      // hub
      ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(gx,gy,3.5,0,Math.PI*2); ctx.fill();

      // teeth
      for(let t=0;t<teeth;t++){
        const th=rotA+t*(Math.PI*2/teeth);
        const x1=gx+r*Math.cos(th), y1=gy+r*Math.sin(th);
        const x2=gx+(r+10)*Math.cos(th), y2=gy+(r+10)*Math.sin(th);
        ctx.shadowColor=col; ctx.shadowBlur=8;
        ctx.strokeStyle=col; ctx.lineWidth=3.5;
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
        ctx.shadowBlur=0;
      }
    };

    drawGear(W*0.35,H*0.44,38,10, a*1.0,  '#818cf8','#3730a3');
    drawGear(W*0.65,H*0.40,28,8,  -a*1.36,'#a5b4fc','#4338ca');
    drawGear(W*0.36,H*0.74,22,7,  a*1.73, '#c7d2fe','#6366f1');

    // connecting rod
    ctx.strokeStyle='rgba(129,140,248,0.25)'; ctx.lineWidth=1; ctx.setLineDash([4,5]);
    ctx.beginPath(); ctx.moveTo(W*0.35,H*0.44); ctx.lineTo(W*0.65,H*0.40); ctx.stroke();
    ctx.setLineDash([]);

    // animated data sparks
    for(let i=0;i<4;i++){
      const t=((frame*1.5+i*15)%60)/60;
      const sx=W*0.35+(W*0.65-W*0.35)*t;
      const sy=H*0.44+(H*0.40-H*0.44)*t;
      ctx.shadowColor='#c7d2fe'; ctx.shadowBlur=12;
      ctx.fillStyle='rgba(199,210,254,0.9)';
      ctx.beginPath(); ctx.arc(sx,sy,2.5,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
    }
  },

  // 12. Security — Vivid ruby shield, rotating laser, corner sentinels
  'security': (canvas, frame) => {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.85);
    bg.addColorStop(0,'#1a0208'); bg.addColorStop(1,'#060001');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    const a=(frame/55)*Math.PI*2;
    const ruby='#f43f5e', rubyBright='#fb7185';
    const cx=W/2, cy=H/2;
    const pulse=44+6*Math.sin(a);

    // ripple rings
    for(let i=0;i<4;i++){
      const rp=pulse+12+i*15;
      ctx.strokeStyle=`rgba(244,63,94,${0.12-i*0.02})`; ctx.lineWidth=1;
      ctx.beginPath(); ctx.arc(cx,cy,rp,0,Math.PI*2); ctx.stroke();
    }

    // shield pts
    const shieldPts=[
      [cx,cy-pulse],
      [cx+pulse,cy-pulse*0.5],
      [cx+pulse*0.85,cy+pulse*0.45],
      [cx,cy+pulse],
      [cx-pulse*0.85,cy+pulse*0.45],
      [cx-pulse,cy-pulse*0.5],
    ];

    // shield inner fill
    ctx.fillStyle='rgba(244,63,94,0.07)';
    ctx.beginPath(); shieldPts.forEach(([px,py],i)=>i===0?ctx.moveTo(px,py):ctx.lineTo(px,py));
    ctx.closePath(); ctx.fill();

    // shield outline
    ctx.shadowColor=ruby; ctx.shadowBlur=22;
    ctx.strokeStyle='rgba(251,113,133,1)'; ctx.lineWidth=2.5;
    ctx.beginPath(); shieldPts.forEach(([px,py],i)=>i===0?ctx.moveTo(px,py):ctx.lineTo(px,py));
    ctx.closePath(); ctx.stroke();
    ctx.shadowBlur=0;

    // corner shield nodes glow
    shieldPts.forEach(([px,py])=>glowCircle(ctx,px,py,4,ruby,12));

    // rotating laser scan
    const ly=cy+Math.sin(a)*H*0.38;
    const scanG=ctx.createLinearGradient(10,ly,W-10,ly);
    scanG.addColorStop(0,'rgba(244,63,94,0)');
    scanG.addColorStop(0.5,'rgba(255,100,120,0.95)');
    scanG.addColorStop(1,'rgba(244,63,94,0)');
    ctx.shadowColor='#f43f5e'; ctx.shadowBlur=18;
    ctx.strokeStyle=scanG; ctx.lineWidth=2.5;
    ctx.beginPath(); ctx.moveTo(10,ly); ctx.lineTo(W-10,ly); ctx.stroke();
    ctx.shadowBlur=0;

    // lock icon center
    ctx.strokeStyle='rgba(251,113,133,0.7)'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.arc(cx,cy-5,8,Math.PI,2*Math.PI); ctx.stroke();
    ctx.fillStyle='rgba(244,63,94,0.8)'; ctx.fillRect(cx-10,cy-4,20,18);
    ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(cx,cy+2,3,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#fff'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(cx,cy+5); ctx.lineTo(cx,cy+11); ctx.stroke();
  },
};

// ─── Card Component ───────────────────────────────────────────────────────────
const ServiceCard = ({ item, index, onSelectService }) => {
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef(null);
  const frameRef = useRef(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!hovered) { cancelAnimationFrame(rafRef.current); return; }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const draw = drawers[item.animKey];
    if (!draw) return;
    const loop = () => {
      frameRef.current += 1;
      draw(canvas, frameRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovered, item.animKey]);

  return (
    <div
      className={`service-pillar-card${hovered ? ' card-hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelectService && onSelectService(index)}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-top-content">
        <h3 className="card-pillar-title">{item.title}</h3>
        <p className="card-pillar-description">{item.description}</p>
      </div>
      <div className="card-hexagon-btn">
        <span className="arrow-sym">&gt;</span>
      </div>
      <div className="card-diagonal-image-wrapper">
        <img src={item.image} alt={item.title} className="card-diagonal-photo" loading="lazy" />
        <canvas ref={canvasRef} width={280} height={220} className="card-canvas-anim" />
      </div>
    </div>
  );
};

// ─── Services Data ────────────────────────────────────────────────────────────
const servicesData = [
  { title:'Web Development',         animKey:'web-dev',         description:'Crafting immersive, high-performance digital flagships with responsive elegance and custom UX designs.', image:'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80' },
  { title:'App Development',         animKey:'app-dev',         description:'Engineering multi-platform mobile experiences with native precision, robust performance, and fluid layouts.', image:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' },
  { title:'Software Development',    animKey:'software-dev',    description:'Architecting scalable core engines and microservices networks to power complex enterprise applications.', image:'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80' },
  { title:'AWS & DevOps',            animKey:'aws-devops',      description:'Orchestrating elastic cloud fabrics, micro-clusters, and automated continuous delivery automation loops.', image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
  { title:'Hosting & Server Management', animKey:'hosting',     description:'Sustaining high-availability cloud hosting structures, distributed web systems, and dedicated nodes.', image:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80' },
  { title:'Digital Marketing',       animKey:'digital-marketing', description:'Amplifying brand telemetry, market penetration, high-conversion SEO channels, and client outreach.', image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { title:'AI & RAG Chatbots',       animKey:'ai-rag',          description:'Pioneering cognitive conversation interfaces, intelligent retrieval networks, and generative chatbots.', image:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80' },
  { title:'IVR Solutions',           animKey:'ivr',             description:'Forging interactive voice response configurations, complex call structures, and high-fidelity soundscapes.', image:'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80' },
  { title:'API Integrations',        animKey:'api-integrations', description:'Unifying decentralized platforms with robust secure API wrappers and low-latency system data streams.', image:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80' },
  { title:'E-Commerce Solutions',    animKey:'ecommerce',       description:'Catalyzing global digital commerce structures with high-availability search systems and payment engines.', image:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80' },
  { title:'AI & Automation',         animKey:'ai-automation',   description:'Driving hyper-efficient business processes, automated telemetry tracking, and visual robot process grids.', image:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
  { title:'Security & Maintenance',  animKey:'security',        description:'Enforcing zero-trust cybersecurity networks, perimeter firewalls, and active code compliance checks.', image:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80' },
];

// ─── Section Component ────────────────────────────────────────────────────────
const ServicesCardSection = ({ onSelectService }) => (
  <section className="services-card-section">
    <div className="services-section-grid-overlay" />
    <div className="services-section-container">
      <div className="services-cards-grid">
        {servicesData.map((item, index) => (
          <ServiceCard key={index} item={item} index={index} onSelectService={onSelectService} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesCardSection;
