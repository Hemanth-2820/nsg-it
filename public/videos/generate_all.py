import cv2
import numpy as np
import os
import random

def get_writer(name, width=400, height=300, fps=30):
    os.makedirs('public/videos', exist_ok=True)
    filename = f"public/videos/{name}.mp4"
    fourcc = cv2.VideoWriter_fourcc(*'avc1')
    out = cv2.VideoWriter(filename, fourcc, fps, (width, height))
    if not out.isOpened():
        # Fallback codec if avc1 fails
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(filename, fourcc, fps, (width, height))
    return out

def draw_glow_circle(img, center, radius, color, thickness=-1, blur_size=15):
    # Create layer for glow
    glow = np.zeros_like(img)
    cv2.circle(glow, center, radius + blur_size, color, -1)
    # Blur the glow layer
    glow = cv2.GaussianBlur(glow, (blur_size*2+1, blur_size*2+1), 0)
    # Add to main image
    return cv2.addWeighted(img, 1.0, glow, 0.6, 0)

# 1. Web Dev (Fuchsia glowing cascading digital binary code)
def generate_web_dev():
    print("Generating web-dev.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("web-dev", width, height, fps)
    
    # Columns setup
    num_cols = 15
    col_width = width // num_cols
    col_speeds = [random.randint(4, 8) for _ in range(num_cols)]
    col_chars = [[random.choice(['0', '1', '<', '>', '/', '{', '}']) for _ in range(12)] for _ in range(num_cols)]
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        # Deep dark backdrop
        cv2.rectangle(frame, (0, 0), (width, height), (15, 5, 20), -1)
        
        # Grid lines
        for x in range(0, width, 40):
            cv2.line(frame, (x, 0), (x, height), (30, 10, 40), 1)
        
        for col in range(num_cols):
            x = col * col_width + 10
            # Falling position looping
            speed = col_speeds[col]
            offset = int(f * speed) % height
            
            chars = col_chars[col]
            for i, char in enumerate(chars):
                y = (offset - i * 20) % height
                # Gradient opacity/color (fuchsia)
                # BGR for Fuchsia/Neon Pink: B=220, G=40, R=240
                alpha = 1.0 - (i / len(chars))
                b = int(220 * alpha)
                g = int(40 * alpha)
                r = int(240 * alpha)
                
                # Draw character
                cv2.putText(frame, char, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (b, g, r), 1, cv2.LINE_AA)
                
                # Head glows white
                if i == 0:
                    cv2.putText(frame, char, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (255, 255, 255), 1, cv2.LINE_AA)
                    
        out.write(frame)
    out.release()

# 2. App Dev (Gold/orange futuristic circular dashboard loop)
def generate_app_dev():
    print("Generating app-dev.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("app-dev", width, height, fps)
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        # Deep amber/gold backdrop
        cv2.rectangle(frame, (0, 0), (width, height), (5, 10, 20), -1)
        
        center = (width // 2, height // 2)
        angle = (f / frames) * 2 * np.pi
        
        # Gold/amber BGR: B=11, G=158, R=245
        color_gold = (11, 158, 245)
        color_dim = (5, 60, 100)
        
        # Draw tech circles
        cv2.circle(frame, center, 80, color_dim, 1, cv2.LINE_AA)
        cv2.circle(frame, center, 50, color_gold, 1, cv2.LINE_AA)
        
        # Orbiting nodes
        nx = int(center[0] + 50 * np.cos(angle))
        ny = int(center[1] + 50 * np.sin(angle))
        frame = draw_glow_circle(frame, (nx, ny), 6, (255, 255, 255), blur_size=8)
        
        nx2 = int(center[0] + 80 * np.cos(-angle - np.pi/3))
        ny2 = int(center[1] + 80 * np.sin(-angle - np.pi/3))
        frame = draw_glow_circle(frame, (nx2, ny2), 4, color_gold, blur_size=8)
        
        # Radar sweep sweep-line
        sx = int(center[0] + 120 * np.cos(angle))
        sy = int(center[1] + 120 * np.sin(angle))
        cv2.line(frame, center, (sx, sy), color_dim, 1, cv2.LINE_AA)
        
        # Corner brackets
        pad = 20
        cv2.line(frame, (pad, pad), (pad + 20, pad), color_gold, 2)
        cv2.line(frame, (pad, pad), (pad, pad + 20), color_gold, 2)
        cv2.line(frame, (width - pad, pad), (width - pad - 20, pad), color_gold, 2)
        cv2.line(frame, (width - pad, pad), (width - pad, pad + 20), color_gold, 2)
        cv2.line(frame, (pad, height - pad), (pad + 20, height - pad), color_gold, 2)
        cv2.line(frame, (pad, height - pad), (pad, height - pad - 20), color_gold, 2)
        cv2.line(frame, (width - pad, height - pad), (width - pad - 20, height - pad), color_gold, 2)
        cv2.line(frame, (width - pad, height - pad), (width - pad, height - pad - 20), color_gold, 2)
        
        out.write(frame)
    out.release()

# 3. Software Dev (Cyan wireframe 3D grid with moving cyber blocks)
def generate_software_dev():
    print("Generating software-dev.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("software-dev", width, height, fps)
    
    cyan = (212, 182, 6) # Cyan in BGR
    deep_blue = (28, 20, 5)
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), deep_blue, -1)
        
        # Draw perspective grid lines
        horizon = height // 3
        # Vertical vanishing lines
        for x in range(-100, width + 200, 40):
            cv2.line(frame, (width // 2, horizon), (x, height), (100, 80, 20), 1, cv2.LINE_AA)
            
        # Horizontal lines moving down
        offset = (f / frames) * 30
        for i in range(12):
            y = horizon + int(np.power(i + offset/30, 2) * 1.5)
            if y < height:
                cv2.line(frame, (0, y), (width, y), (80, 70, 15), 1, cv2.LINE_AA)
                
        # Pulsing central box
        box_size = 40 + int(6 * np.sin((f / frames) * 2 * np.pi))
        bx1, by1 = width // 2 - box_size, height // 2 - box_size
        bx2, by2 = width // 2 + box_size, height // 2 + box_size
        cv2.rectangle(frame, (bx1, by1), (bx2, by2), cyan, 1, cv2.LINE_AA)
        
        # Cyber brackets inside box
        cv2.circle(frame, (width // 2, height // 2), box_size - 10, cyan, 1, cv2.LINE_AA)
        cv2.line(frame, (width // 2 - 15, height // 2), (width // 2 + 15, height // 2), cyan, 1)
        cv2.line(frame, (width // 2, height // 2 - 15), (width // 2, height // 2 + 15), cyan, 1)
        
        out.write(frame)
    out.release()

# 4. AWS DevOps (Concentric orbiting planet/nodes with orange networking lines)
def generate_aws_devops():
    print("Generating aws-devops.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("aws-devops", width, height, fps)
    
    orange = (22, 115, 249) # Orange in BGR
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (5, 5, 10), -1)
        
        # Draw central glowing globe
        center = (width // 2, height // 2)
        frame = draw_glow_circle(frame, center, 35, orange, blur_size=20)
        cv2.circle(frame, center, 35, (255, 255, 255), -1, cv2.LINE_AA)
        
        # Concentric orbits
        angle = (f / frames) * 2 * np.pi
        radii = [65, 95, 125]
        speeds = [1, -1.5, 0.8]
        
        for idx, (r, speed) in enumerate(zip(radii, speeds)):
            cv2.circle(frame, center, r, (40, 40, 80), 1, cv2.LINE_AA)
            # Orbiting node
            theta = angle * speed
            nx = int(center[0] + r * np.cos(theta))
            ny = int(center[1] + r * np.sin(theta))
            frame = draw_glow_circle(frame, (nx, ny), 5, orange, blur_size=10)
            cv2.circle(frame, (nx, ny), 4, (255, 255, 255), -1, cv2.LINE_AA)
            
            # Draw line between orbital node and center
            cv2.line(frame, center, (nx, ny), (20, 40, 80), 1, cv2.LINE_AA)
            
        out.write(frame)
    out.release()

# 5. Hosting (Precise blue spinning nodes and data stream server racks)
def generate_hosting():
    print("Generating hosting.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("hosting", width, height, fps)
    
    blue = (246, 130, 59) # Blue in BGR
    dim_blue = (80, 40, 15)
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (10, 5, 2), -1)
        
        # Draw 3 server racks
        for i in range(3):
            rx = 60 + i * 110
            ry = 60
            rw, rh = 80, 180
            cv2.rectangle(frame, (rx, ry), (rx + rw, ry + rh), dim_blue, 1, cv2.LINE_AA)
            
            # Internal server units
            for u in range(6):
                uy = ry + 10 + u * 28
                cv2.rectangle(frame, (rx + 5, uy), (rx + rw - 5, uy + 20), (30, 15, 5), 1, cv2.LINE_AA)
                
                # Flashing LEDs
                # BGR for Green: (0, 255, 0), Yellow: (0, 255, 255), Blue: (255, 100, 0)
                led_state = (f + u + i*3) % 15
                if led_state < 4:
                    cv2.circle(frame, (rx + 15, uy + 10), 3, (0, 255, 0), -1, cv2.LINE_AA)
                elif led_state < 8:
                    cv2.circle(frame, (rx + 15, uy + 10), 3, blue, -1, cv2.LINE_AA)
                else:
                    cv2.circle(frame, (rx + 15, uy + 10), 3, (50, 20, 5), -1, cv2.LINE_AA)
                    
                # Data tracks inside server
                cv2.line(frame, (rx + 28, uy + 10), (rx + rw - 15, uy + 10), (50, 30, 10), 1)
                
        out.write(frame)
    out.release()

# 6. Digital Marketing (Neon green rising bar charts, telemetry tracks, and circular radar sweeps)
def generate_marketing():
    print("Generating marketing.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("marketing", width, height, fps)
    
    green = (94, 197, 34) # Green BGR
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (5, 15, 5), -1)
        
        # Draw dynamic line graph in background
        pts = []
        for x in range(30, width - 30, 20):
            # Perfect looping wave
            val = np.sin((x / width) * 4 * np.pi + (f / frames) * 2 * np.pi)
            y = int(150 + val * 50)
            pts.append((x, y))
            
        for i in range(len(pts) - 1):
            cv2.line(frame, pts[i], pts[i+1], (20, 50, 10), 1, cv2.LINE_AA)
            
        # Draw bar charts growing
        num_bars = 8
        bar_w = 20
        spacing = 15
        start_x = (width - (num_bars * (bar_w + spacing))) // 2
        
        for b in range(num_bars):
            bx = start_x + b * (bar_w + spacing)
            # Oscillation
            h_val = 40 + int(60 * np.sin((b / num_bars) * np.pi + (f / frames) * 2 * np.pi))
            by = height - 50 - h_val
            cv2.rectangle(frame, (bx, by), (bx + bar_w, height - 50), green, 1, cv2.LINE_AA)
            cv2.rectangle(frame, (bx + 4, by + 4), (bx + bar_w - 4, height - 50), (10, 40, 10), -1)
            
        # Radar scan line sweeps
        rx = int(30 + (f / frames) * (width - 60))
        cv2.line(frame, (rx, 20), (rx, height - 20), (50, 120, 20), 1, cv2.LINE_AA)
        
        out.write(frame)
    out.release()

# 7. AI & RAG (Synaptic neural networks with violet nodes fading and connecting with light trails)
def generate_ai_rag():
    print("Generating ai-rag.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("ai-rag", width, height, fps)
    
    violet = (246, 92, 139) # Violet in BGR (R=139, G=92, B=246)
    
    # 8 Static nodes inside frame
    nodes = [
        (100, 80), (150, 180), (250, 90), (300, 200),
        (80, 220), (320, 70), (200, 120), (180, 240)
    ]
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (15, 5, 10), -1)
        
        # Slightly move nodes based on sin wave for looping organic feel
        shifted_nodes = []
        angle = (f / frames) * 2 * np.pi
        for idx, (nx, ny) in enumerate(nodes):
            ox = int(8 * np.sin(angle + idx))
            oy = int(8 * np.cos(angle - idx * 2))
            shifted_nodes.append((nx + ox, ny + oy))
            
        # Draw connections
        for i in range(len(shifted_nodes)):
            for j in range(i + 1, len(shifted_nodes)):
                dist = np.hypot(shifted_nodes[i][0] - shifted_nodes[j][0], shifted_nodes[i][1] - shifted_nodes[j][1])
                if dist < 130:
                    # Line opacity based on distance
                    line_alpha = 1.0 - (dist / 130)
                    cv2.line(frame, shifted_nodes[i], shifted_nodes[j], (int(80 * line_alpha), int(30 * line_alpha), int(100 * line_alpha)), 1, cv2.LINE_AA)
                    
        # Draw glowing nodes
        for idx, node in enumerate(shifted_nodes):
            pulse_size = 5 + int(3 * np.sin(angle * 2 + idx))
            frame = draw_glow_circle(frame, node, pulse_size, violet, blur_size=10)
            cv2.circle(frame, node, 4, (255, 255, 255), -1, cv2.LINE_AA)
            
        out.write(frame)
    out.release()

# 8. IVR (Plum audio frequency wave lines moving dynamically)
def generate_ivr():
    print("Generating ivr.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("ivr", width, height, fps)
    
    plum = (119, 39, 219) # Plum in BGR
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (15, 2, 8), -1)
        
        # Draw 3 different overlapping waves
        colors = [
            (50, 15, 80),
            (119, 39, 219),
            (255, 200, 240)
        ]
        amplitudes = [40, 25, 15]
        frequencies = [2.0, 4.0, 6.0]
        speeds = [1, -2, 3]
        
        for w_idx, (col, amp, freq, spd) in enumerate(zip(colors, amplitudes, frequencies, speeds)):
            pts = []
            for x in range(0, width, 5):
                phase = (f / frames) * 2 * np.pi * spd
                val = np.sin((x / width) * freq * np.pi + phase)
                y = int(height // 2 + val * amp)
                pts.append((x, y))
                
            for i in range(len(pts) - 1):
                thickness = 1 if w_idx < 2 else 2
                cv2.line(frame, pts[i], pts[i+1], col, thickness, cv2.LINE_AA)
                
        out.write(frame)
    out.release()

# 9. API Integrations (Glowing hexagonal data grid cells with connecting data pulses)
def generate_api_integrations():
    print("Generating api-integrations.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("api-integrations", width, height, fps)
    
    teal = (166, 184, 20) # Teal BGR
    
    # Generate static hexagons grid points
    # H = size, W = sqrt(3)*size
    size = 35
    w_size = int(np.sqrt(3) * size)
    
    hex_centers = []
    for row in range(5):
        for col in range(5):
            cx = col * w_size + (w_size // 2 if row % 2 == 1 else 0)
            cy = row * int(size * 1.5)
            if cx < width + 50 and cy < height + 50:
                hex_centers.append((cx, cy))
                
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (10, 15, 10), -1)
        
        # Draw hexagons
        for cx, cy in hex_centers:
            # Draw hexagon wireframe
            pts = []
            for a in range(6):
                theta = a * np.pi / 3 + np.pi/6
                px = int(cx + size * np.cos(theta))
                py = int(cy + size * np.sin(theta))
                pts.append((px, py))
            pts = np.array(pts, np.int32)
            cv2.polylines(frame, [pts], True, (30, 45, 10), 1, cv2.LINE_AA)
            
        # Draw pulsing intersection nodes
        angle = (f / frames) * 2 * np.pi
        for idx, (cx, cy) in enumerate(hex_centers):
            pulse = np.sin(angle * 2 + idx)
            if pulse > 0.6:
                frame = draw_glow_circle(frame, (cx, cy), 4, teal, blur_size=8)
                cv2.circle(frame, (cx, cy), 3, (255, 255, 255), -1, cv2.LINE_AA)
                
        out.write(frame)
    out.release()

# 10. E-Commerce (Cascading glowing crimson shopping rings and dynamic checkout flow grids)
def generate_ecommerce():
    print("Generating ecommerce.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("ecommerce", width, height, fps)
    
    crimson = (68, 68, 239) # Crimson BGR
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (15, 5, 5), -1)
        
        center = (width // 2, height // 2)
        angle = (f / frames) * 2 * np.pi
        
        # Draw checkout cart vector procedurally
        # Simple bag outline
        bx, by = width // 2 - 25, height // 2 - 20
        bw, bh = 50, 45
        cv2.rectangle(frame, (bx, by), (bx + bw, by + bh), crimson, 1, cv2.LINE_AA)
        cv2.circle(frame, (width // 2, by), 15, crimson, 1, cv2.LINE_AA)
        
        # Orbiting dynamic ring loops in perspective
        for idx in range(3):
            theta = angle + idx * np.pi/3
            rx = int(center[0] + 65 * np.cos(theta))
            ry = int(center[1] + 20 * np.sin(theta + np.pi/4))
            
            frame = draw_glow_circle(frame, (rx, ry), 5, crimson, blur_size=10)
            cv2.circle(frame, (rx, ry), 3, (255, 255, 255), -1, cv2.LINE_AA)
            
        out.write(frame)
    out.release()

# 11. AI & Automation (Gear cog tracking grids, robotic path lines, and process cards)
def generate_ai_automation():
    print("Generating ai-automation.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("ai-automation", width, height, fps)
    
    indigo = (241, 102, 99) # Indigo BGR
    dim_indigo = (60, 25, 20)
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (12, 5, 12), -1)
        
        # Draw rotating gears
        angle = (f / frames) * 2 * np.pi
        
        centers = [(140, 150), (250, 130)]
        radii = [45, 30]
        speeds = [1.0, -1.5]
        
        for c, r, spd in zip(centers, radii, speeds):
            curr_angle = angle * spd
            cv2.circle(frame, c, r, dim_indigo, 1, cv2.LINE_AA)
            # Gear teeth
            num_teeth = 12
            for t in range(num_teeth):
                theta = curr_angle + t * (2 * np.pi / num_teeth)
                tx1 = int(c[0] + r * np.cos(theta))
                ty1 = int(c[1] + r * np.sin(theta))
                tx2 = int(c[0] + (r + 8) * np.cos(theta))
                ty2 = int(c[1] + (r + 8) * np.sin(theta))
                cv2.line(frame, (tx1, ty1), (tx2, ty2), indigo, 2, cv2.LINE_AA)
                
            cv2.circle(frame, c, r - 12, indigo, 1, cv2.LINE_AA)
            cv2.circle(frame, c, 5, (255, 255, 255), -1, cv2.LINE_AA)
            
        out.write(frame)
    out.release()

# 12. Security (Pulsing ruby shield contours, warning signs, and sweeping laser lines)
def generate_security():
    print("Generating security.mp4...")
    width, height = 400, 300
    fps = 30
    frames = 60
    out = get_writer("security", width, height, fps)
    
    ruby = (72, 29, 225) # Ruby Red BGR
    
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        cv2.rectangle(frame, (0, 0), (width, height), (15, 2, 5), -1)
        
        center = (width // 2, height // 2)
        angle = (f / frames) * 2 * np.pi
        
        # Pulse shield size
        pulse = 45 + int(5 * np.sin(angle))
        
        # Shield procedural drawing
        pts = np.array([
            [center[0], center[1] - pulse],
            [center[0] + pulse, center[1] - pulse // 2],
            [center[0] + pulse // 1.2, center[1] + pulse // 2],
            [center[0], center[1] + pulse],
            [center[0] - pulse // 1.2, center[1] + pulse // 2],
            [center[0] - pulse, center[1] - pulse // 2]
        ], np.int32)
        
        cv2.polylines(frame, [pts], True, ruby, 2, cv2.LINE_AA)
        
        # Sweep laser scanner moving up and down
        ly = int(height // 2 + np.sin(angle) * (height // 2.5))
        cv2.line(frame, (10, ly), (width - 10, ly), (100, 50, 255), 1, cv2.LINE_AA)
        
        # Corner shield nodes
        frame = draw_glow_circle(frame, (center[0], center[1] - pulse), 5, ruby, blur_size=10)
        frame = draw_glow_circle(frame, (center[0], center[1] + pulse), 5, ruby, blur_size=10)
        
        out.write(frame)
    out.release()

def generate_all():
    generate_web_dev()
    generate_app_dev()
    generate_software_dev()
    generate_aws_devops()
    generate_hosting()
    generate_marketing()
    generate_ai_rag()
    generate_ivr()
    generate_api_integrations()
    generate_ecommerce()
    generate_ai_automation()
    generate_security()
    print("ALL 12 PROCEDURAL TECH VIDEOS GENERATED SUCCESSFULLY!")

if __name__ == '__main__':
    generate_all()
