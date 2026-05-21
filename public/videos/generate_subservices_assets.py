import cv2
import numpy as np
import os
import random

def get_writer(name, width=320, height=240, fps=24):
    os.makedirs('public/videos/subservices', exist_ok=True)
    filename = f"public/videos/subservices/{name}.mp4"
    fourcc = cv2.VideoWriter_fourcc(*'avc1')
    out = cv2.VideoWriter(filename, fourcc, fps, (width, height))
    if not out.isOpened():
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(filename, fourcc, fps, (width, height))
    return out

def draw_glow_circle(img, center, radius, color, thickness=-1, blur_size=8):
    glow = np.zeros_like(img)
    cv2.circle(glow, center, radius + blur_size, color, -1)
    glow = cv2.GaussianBlur(glow, (blur_size*2+1, blur_size*2+1), 0)
    return cv2.addWeighted(img, 1.0, glow, 0.5, 0)

def draw_glow_line(img, pt1, pt2, color, thickness=1, blur_size=6):
    glow = np.zeros_like(img)
    cv2.line(glow, pt1, pt2, color, thickness + blur_size)
    glow = cv2.GaussianBlur(glow, (blur_size*2+1, blur_size*2+1), 0)
    return cv2.addWeighted(img, 1.0, glow, 0.4, 0)

# Total subservices counts
counts = {
    "web-dev": 10,
    "app-dev": 6,
    "software-dev": 6,
    "aws-devops": 9,
    "hosting": 10,
    "marketing": 8,
    "ai-rag": 7,
    "ivr": 6,
    "api-integrations": 5,
    "ecommerce": 7,
    "ai-automation": 6,
    "security": 8
}

def generate_subservice_video(theme_id, idx):
    name = f"{theme_id}-{idx}"
    print(f"Rendering highly unique graphic for sub-service: {name}.mp4...")
    
    # Deterministic seeding based on theme & index to ensure 100% stable, repeatable uniqueness
    random.seed(hash(name))
    np.random.seed(idx * 59 + 17)
    
    width, height = 320, 240
    fps = 24
    frames = 48 # 2 second loop
    out = get_writer(name, width, height, fps)
    
    # Theme base colors
    colors = {
        "web-dev": (239, 70, 217),      # Fuchsia BGR
        "app-dev": (11, 158, 245),      # Gold BGR
        "software-dev": (212, 182, 6),  # Cyan BGR
        "aws-devops": (22, 115, 249),   # Orange BGR
        "hosting": (246, 130, 59),      # Blue BGR
        "marketing": (94, 197, 34),     # Green BGR
        "ai-rag": (246, 92, 139),       # Violet BGR
        "ivr": (119, 39, 219),          # Plum BGR
        "api-integrations": (166, 184, 20), # Teal BGR
        "ecommerce": (68, 68, 239),     # Crimson BGR
        "ai-automation": (241, 102, 99), # Indigo BGR
        "security": (72, 29, 225)       # Ruby BGR
    }
    
    base_color = colors.get(theme_id, (255, 255, 255))
    
    # Vary base color slightly to guarantee unique shade for each card
    h_var = random.randint(-15, 15)
    s_var = random.randint(-10, 10)
    v_var = random.randint(-10, 10)
    hsv = cv2.cvtColor(np.uint8([[list(base_color)]]), cv2.COLOR_BGR2HSV)[0][0]
    h = (int(hsv[0]) + h_var) % 180
    s = int(np.clip(int(hsv[1]) + s_var, 150, 255))
    v = int(np.clip(int(hsv[2]) + v_var, 150, 255))
    color = tuple(map(int, cv2.cvtColor(np.uint8([[[h, s, v]]]), cv2.COLOR_HSV2BGR)[0][0]))
    dim_color = (int(color[0]*0.25), int(color[1]*0.25), int(color[2]*0.25))
    mid_color = (int(color[0]*0.6), int(color[1]*0.6), int(color[2]*0.6))
    
    # Render all 48 frames
    for f in range(frames):
        frame = np.zeros((height, width, 3), dtype=np.uint8)
        # Background: subtle tech space with dim color
        cv2.rectangle(frame, (0, 0), (width, height), (int(color[0]*0.03), int(color[1]*0.03), int(color[2]*0.03)), -1)
        
        # Add dynamic perspective grid coordinates
        angle = (f / frames) * 2 * np.pi
        
        # ----------------------------------------------------
        # CATEGORY 1: WEB-DEV (10 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        if theme_id == "web-dev":
            if idx == 0: # Business Websites - Rotating Isometric Wireframe Building Block
                cp = (width // 2, height // 2)
                sz = 35
                pts = []
                for a in range(4):
                    theta = angle + a * np.pi / 2
                    x = int(cp[0] + sz * 1.5 * np.cos(theta))
                    y = int(cp[1] + sz * 0.7 * np.sin(theta))
                    pts.append((x, y))
                cv2.polylines(frame, [np.array(pts)], True, color, 1, cv2.LINE_AA)
                for pt in pts:
                    cv2.line(frame, pt, (pt[0], pt[1] - 40), color, 1, cv2.LINE_AA)
                top_pts = [(pt[0], pt[1] - 40) for pt in pts]
                cv2.polylines(frame, [np.array(top_pts)], True, color, 1, cv2.LINE_AA)
                frame = draw_glow_circle(frame, (cp[0], cp[1] - 20), 4, color, blur_size=6)
                
            elif idx == 1: # Company Websites - Interconnected Organization Network
                nodes = [(60, 120), (120, 70), (120, 170), (200, 70), (200, 170), (260, 120)]
                for i, n1 in enumerate(nodes):
                    for j, n2 in enumerate(nodes):
                        if i < j and (abs(n1[0]-n2[0]) < 100 and abs(n1[1]-n2[1]) < 120):
                            cv2.line(frame, n1, n2, dim_color, 1, cv2.LINE_AA)
                for idx_n, n in enumerate(nodes):
                    pulse_r = int(5 + 2 * np.sin(angle * 2 + idx_n))
                    frame = draw_glow_circle(frame, n, pulse_r, color, blur_size=6)
                    cv2.circle(frame, n, 2, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 2: # Portfolio Websites - Floating Creative Page Gallery
                for i in range(3):
                    shift = (i * 80 + f * 2) % 240
                    px = 40 + shift
                    py = int(70 + 40 * np.sin(angle + i))
                    cv2.rectangle(frame, (int(px), py), (int(px + 60), py + 80), dim_color, 1, cv2.LINE_AA)
                    cv2.rectangle(frame, (int(px + 5), py + 5), (int(px + 55), py + 45), color, 1, cv2.LINE_AA)
                    cv2.line(frame, (int(px + 5), py + 60), (int(px + 45), py + 60), color, 1)
                    cv2.line(frame, (int(px + 5), py + 70), (int(px + 30), py + 70), color, 1)
                    
            elif idx == 3: # Landing Pages - Lead Capture Funnel and CTA Button
                # Funnel lines
                cv2.line(frame, (80, 50), (140, 150), color, 2, cv2.LINE_AA)
                cv2.line(frame, (240, 50), (180, 150), color, 2, cv2.LINE_AA)
                cv2.line(frame, (140, 150), (140, 190), color, 1, cv2.LINE_AA)
                cv2.line(frame, (180, 150), (180, 190), color, 1, cv2.LINE_AA)
                # Descending particles
                for i in range(4):
                    py = int(50 + ((f * 3 + i * 40) % 130))
                    px = int(160 + (py - 50) * 0.2 * np.sin(angle + i))
                    if py < 150:
                        cv2.circle(frame, (px, py), 3, color, -1, cv2.LINE_AA)
                # Pulsing CTA button at bottom
                btn_sz = int(10 + 2 * np.sin(angle * 2))
                cv2.rectangle(frame, (120 - btn_sz, 195), (200 + btn_sz, 220), color, -1, cv2.LINE_AA)
                cv2.putText(frame, "GET", (145, 211), cv2.FONT_HERSHEY_SIMPLEX, 0.35, (255,255,255), 1, cv2.LINE_AA)
                
            elif idx == 4: # E-Commerce Websites - 3D Wireframe Shopping Cart
                cart_angle = angle
                cx, cy = width // 2, height // 2 + 10
                # Draw cart outline in rotation
                r = 30
                pts = []
                for a in range(4):
                    th = cart_angle + a * np.pi/2
                    x = int(cx + r * np.cos(th))
                    y = int(cy + r * 0.4 * np.sin(th))
                    pts.append((x, y))
                cv2.polylines(frame, [np.array(pts)], True, color, 2, cv2.LINE_AA)
                cv2.line(frame, pts[0], (pts[0][0], pts[0][1] - 25), color, 2, cv2.LINE_AA)
                cv2.line(frame, pts[1], (pts[1][0], pts[1][1] - 25), color, 2, cv2.LINE_AA)
                # Wheels
                cv2.circle(frame, (cx - 15, cy + 20), 5, color, -1, cv2.LINE_AA)
                cv2.circle(frame, (cx + 15, cy + 20), 5, color, -1, cv2.LINE_AA)
                # Pulsing price tags floating up
                tag_y = int(120 - (f * 2) % 80)
                cv2.putText(frame, "$", (cx - 5, tag_y), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255,255,255), 1, cv2.LINE_AA)
                
            elif idx == 5: # Custom Web Applications - State-Machine Graph System
                c1, c2, c3 = (80, 120), (160, 70), (240, 140)
                cv2.line(frame, c1, c2, color, 1, cv2.LINE_AA)
                cv2.line(frame, c2, c3, color, 1, cv2.LINE_AA)
                cv2.line(frame, c3, c1, color, 1, cv2.LINE_AA)
                # Pulsing data rings
                for idx_c, center in enumerate([c1, c2, c3]):
                    r_pulse = int(12 + 4 * np.sin(angle * 2.5 + idx_c))
                    cv2.circle(frame, center, r_pulse, color, 1, cv2.LINE_AA)
                    cv2.circle(frame, center, 4, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 6: # Admin Dashboards - Grid, Dual Line Charts, & Radar
                # Grid background
                for x in range(20, width-20, 25):
                    cv2.line(frame, (x, 40), (x, height-40), (15, 5, 20), 1)
                for y in range(40, height-40, 20):
                    cv2.line(frame, (20, y), (width-20, y), (15, 5, 20), 1)
                # Line chart
                pts = []
                for x_idx, x in enumerate(range(30, width-30, 15)):
                    y_val = int(140 + 30 * np.sin(angle + x_idx * 0.5) + 10 * np.cos(angle * 2 + x_idx))
                    pts.append((x, y_val))
                for i in range(len(pts)-1):
                    cv2.line(frame, pts[i], pts[i+1], color, 2, cv2.LINE_AA)
                    cv2.circle(frame, pts[i], 2, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 7: # SaaS Platforms - Core Database Cloud and Orbiting Keys
                center = (width // 2, height // 2)
                # Central cloud-like nodes
                frame = draw_glow_circle(frame, (center[0]-15, center[1]), 18, color, blur_size=10)
                frame = draw_glow_circle(frame, (center[0]+15, center[1]), 18, color, blur_size=10)
                frame = draw_glow_circle(frame, (center[0], center[1]-15), 18, color, blur_size=10)
                # Orbiting satellites
                for i in range(3):
                    th = angle + i * 2 * np.pi / 3
                    rx = int(center[0] + 60 * np.cos(th))
                    ry = int(center[1] + 25 * np.sin(th))
                    cv2.line(frame, center, (rx, ry), dim_color, 1, cv2.LINE_AA)
                    frame = draw_glow_circle(frame, (rx, ry), 4, color, blur_size=6)
                    cv2.circle(frame, (rx, ry), 2, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 8: # Responsive Website Design - Desktop, Tablet, & Phone Outlines
                center = (width // 2, height // 2)
                # Desktop
                cv2.rectangle(frame, (center[0] - 70, center[1] - 50), (center[0] + 70, center[1] + 30), color, 1, cv2.LINE_AA)
                cv2.line(frame, (center[0] - 15, center[1] + 30), (center[0] - 10, center[1] + 45), color, 1)
                cv2.line(frame, (center[0] + 15, center[1] + 30), (center[0] + 10, center[1] + 45), color, 1)
                cv2.line(frame, (center[0] - 25, center[1] + 45), (center[0] + 25, center[1] + 45), color, 1)
                # Tablet
                tab_w = int(35 + 5 * np.sin(angle))
                cv2.rectangle(frame, (center[0] + 15, center[1] - 10), (center[0] + 15 + tab_w, center[1] + 35), color, 1, cv2.LINE_AA)
                # Phone
                phone_h = int(30 + 5 * np.sin(angle * 1.5))
                cv2.rectangle(frame, (center[0] - 55, center[1] + 5), (center[0] - 35, center[1] + 5 + phone_h), color, 1, cv2.LINE_AA)
                
            else: # idx 9: Website Redesign - Swipe Scan Line Code Overhaul
                # Draw grid code
                for i in range(8):
                    y = 50 + i * 20
                    cv2.line(frame, (40, y), (180, y), dim_color, 1)
                # Laser swipe
                laser_x = int(60 + 100 * np.sin(angle) + 100)
                cv2.line(frame, (laser_x, 30), (laser_x, height-30), color, 2, cv2.LINE_AA)
                # Right of laser draws high-fidelity neon graphs
                if laser_x > 30:
                    pts = []
                    for lx in range(30, laser_x, 10):
                        ly = int(120 + 35 * np.sin((lx/width)*6*np.pi + angle))
                        pts.append((lx, ly))
                    for i in range(len(pts)-1):
                        cv2.line(frame, pts[i], pts[i+1], color, 2, cv2.LINE_AA)

        # ----------------------------------------------------
        # CATEGORY 2: APP-DEV (6 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "app-dev":
            if idx == 0: # Android App Development - Phone outline with abstract micro-gears
                center = (width // 2, height // 2)
                # Phone body
                cv2.rectangle(frame, (center[0]-35, center[1]-60), (center[0]+35, center[1]+60), color, 2, cv2.LINE_AA)
                cv2.circle(frame, (center[0], center[1]+50), 4, color, 1, cv2.LINE_AA)
                # Spinning micro gears inside
                gear_r = 12
                g_angle = angle * 2
                gc = (center[0], center[1]-10)
                cv2.circle(frame, gc, gear_r, color, 1, cv2.LINE_AA)
                for t in range(6):
                    theta = g_angle + t * np.pi / 3
                    tx1 = int(gc[0] + gear_r * np.cos(theta))
                    ty1 = int(gc[1] + gear_r * np.sin(theta))
                    tx2 = int(gc[0] + (gear_r+4) * np.cos(theta))
                    ty2 = int(gc[1] + (gear_r+4) * np.sin(theta))
                    cv2.line(frame, (tx1, ty1), (tx2, ty2), color, 1, cv2.LINE_AA)
                    
            elif idx == 1: # Cross Platform Apps - Intersecting Infinity Loops
                center = (width // 2, height // 2)
                for i in range(2):
                    pts = []
                    shift_a = angle + i * np.pi/2
                    for t in np.linspace(0, 2*np.pi, 30):
                        x = int(center[0] + 65 * np.sin(t) / (1 + np.cos(t)**2))
                        y = int(center[1] + 40 * np.sin(t)*np.cos(t) / (1 + np.cos(t)**2))
                        # Rotate points based on cross platform dual compiles
                        rot_x = int(center[0] + (x - center[0]) * np.cos(shift_a*0.2) - (y - center[1]) * np.sin(shift_a*0.2))
                        rot_y = int(center[1] + (x - center[0]) * np.sin(shift_a*0.2) + (y - center[1]) * np.cos(shift_a*0.2))
                        pts.append((rot_x, rot_y))
                    cv2.polylines(frame, [np.array(pts)], True, color, 1, cv2.LINE_AA)
                    # Pulsing core nodes on the loop
                    pulse_idx = int((f + i * 15) % len(pts))
                    cv2.circle(frame, pts[pulse_idx], 4, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 2: # Business Applications - Isometric Enterprise Flow Chart
                pts = [(60, 160), (120, 100), (180, 100), (240, 160)]
                for i in range(len(pts)-1):
                    cv2.line(frame, pts[i], pts[i+1], dim_color, 2, cv2.LINE_AA)
                # Render floating cubes on flow chart node positions
                for i, pt in enumerate(pts):
                    h_val = int(8 * np.sin(angle * 2 + i))
                    c_pt = (pt[0], pt[1] + h_val)
                    cv2.rectangle(frame, (c_pt[0]-15, c_pt[1]-15), (c_pt[0]+15, c_pt[1]+15), color, 1, cv2.LINE_AA)
                    cv2.circle(frame, c_pt, 3, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 3: # E-Commerce Apps - Phone Store UI with active pulsing Cart CTA
                center = (width // 2, height // 2)
                cv2.rectangle(frame, (center[0]-40, center[1]-60), (center[0]+40, center[1]+60), color, 1, cv2.LINE_AA)
                # Store grid items
                cv2.rectangle(frame, (center[0]-30, center[1]-45), (center[0]-5, center[1]-15), dim_color, 1)
                cv2.rectangle(frame, (center[0]+5, center[1]-45), (center[0]+30, center[1]-15), dim_color, 1)
                # Pulsing buy button
                btn_sz = int(2 + 2 * np.sin(angle * 3))
                cv2.rectangle(frame, (center[0]-25 - btn_sz, center[1]+15), (center[0]+25 + btn_sz, center[1]+35), color, -1, cv2.LINE_AA)
                cv2.circle(frame, (center[0], center[1]+25), 2, (255,255,255), -1)
                
            elif idx == 4: # Custom Mobile Apps - Spinning Camera Aperture
                center = (width // 2, height // 2)
                r = 35
                cv2.circle(frame, center, r, color, 1, cv2.LINE_AA)
                # Blades
                for i in range(8):
                    th = angle + i * np.pi / 4
                    x1 = int(center[0] + r * np.cos(th))
                    y1 = int(center[1] + r * np.sin(th))
                    x2 = int(center[0] + (r-15) * np.cos(th + np.pi/6))
                    y2 = int(center[1] + (r-15) * np.sin(th + np.pi/6))
                    cv2.line(frame, (x1, y1), (x2, y2), color, 1, cv2.LINE_AA)
                frame = draw_glow_circle(frame, center, 8, color, blur_size=6)
                
            else: # idx 5: API-Based Mobile Apps - Phone casting sockets to database cloud
                center = (width // 2, height // 2)
                # Phone at bottom left
                phone = (70, 160)
                cv2.rectangle(frame, (phone[0]-20, phone[1]-35), (phone[0]+20, phone[1]+35), color, 1, cv2.LINE_AA)
                # Cloud at top right
                cloud = (240, 70)
                frame = draw_glow_circle(frame, cloud, 15, color, blur_size=8)
                frame = draw_glow_circle(frame, (cloud[0]+15, cloud[1]), 12, color, blur_size=6)
                frame = draw_glow_circle(frame, (cloud[0]-15, cloud[1]), 12, color, blur_size=6)
                # Connecting lines pulsing
                cv2.line(frame, (phone[0]+15, phone[1]-20), (cloud[0]-25, cloud[1]+5), color, 1, cv2.LINE_AA)
                pulse_x = int(phone[0]+15 + (cloud[0]-phone[0]-40) * ((f/frames)%1.0))
                pulse_y = int(phone[1]-20 + (cloud[1]-phone[1]+25) * ((f/frames)%1.0))
                cv2.circle(frame, (pulse_x, pulse_y), 4, (255,255,255), -1, cv2.LINE_AA)

        # ----------------------------------------------------
        # CATEGORY 3: SOFTWARE-DEV (6 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "software-dev":
            if idx == 0: # Custom Software Development - Stack of rotating 3D code blocks
                center = (width // 2, height // 2)
                for i in range(3):
                    sz = 40 - i * 8
                    cy = center[1] + i * 20 - 20
                    pts = []
                    for a in range(4):
                        th = angle + a * np.pi/2 + i * 0.4
                        x = int(center[0] + sz * 1.5 * np.cos(th))
                        y = int(cy + sz * 0.6 * np.sin(th))
                        pts.append((x, y))
                    cv2.polylines(frame, [np.array(pts)], True, color, 1, cv2.LINE_AA)
                    cv2.fillPoly(frame, [np.array(pts)], dim_color)
                    
            elif idx == 1: # Billing Software - Scanner Barcode with Laser Read
                # Barcode stripes
                for i in range(12):
                    x = 70 + i * 15
                    w_bar = int(3 + 5 * np.sin(i*2.5))
                    cv2.rectangle(frame, (x, 60), (x + w_bar, 140), (255,255,255) if i%2==0 else color, -1)
                # Red scanning laser
                laser_y = int(60 + 80 * (0.5 + 0.5 * np.sin(angle)))
                frame = draw_glow_line(frame, (50, laser_y), (width-50, laser_y), color, thickness=2, blur_size=8)
                
            elif idx == 2: # Inventory Systems - 3D grid layout warehouse blocks
                center = (width // 2, height // 2)
                for row in range(3):
                    for col in range(3):
                        cx = center[0] + (col - 1) * 55
                        cy = center[1] + (row - 1) * 35
                        h_val = (f + row * 4 + col * 8) % 15
                        if h_val < 5:
                            cv2.rectangle(frame, (cx-20, cy-12), (cx+20, cy+12), color, -1, cv2.LINE_AA)
                        else:
                            cv2.rectangle(frame, (cx-20, cy-12), (cx+20, cy+12), dim_color, 1, cv2.LINE_AA)
                            
            elif idx == 3: # Management Systems - Gantt chart grid system with task nodes
                for i in range(4):
                    y = 60 + i * 35
                    cv2.line(frame, (40, y), (width-40, y), dim_color, 1)
                    # Task block
                    start_x = int(60 + i * 30 + 15 * np.sin(angle + i))
                    w_block = 45 + i * 10
                    cv2.rectangle(frame, (start_x, y-8), (start_x + w_block, y+8), color, -1, cv2.LINE_AA)
                    cv2.circle(frame, (start_x + w_block, y), 3, (255,255,255), -1)
                    
            elif idx == 4: # Automation Software - Conveyor belt with laser processes
                # Belt wheels
                cv2.circle(frame, (80, 140), 15, dim_color, 1)
                cv2.circle(frame, (240, 140), 15, dim_color, 1)
                cv2.line(frame, (80, 125), (240, 125), color, 2)
                cv2.line(frame, (80, 155), (240, 155), color, 2)
                # Rotating block
                bx = int(80 + ((f * 4) % 160))
                cv2.rectangle(frame, (bx, 105), (bx+20, 125), color, -1)
                # Processing beam
                if 140 < bx < 180:
                    cv2.line(frame, (160, 40), (bx+10, 105), (255,255,255), 2, cv2.LINE_AA)
                    frame = draw_glow_circle(frame, (bx+10, 105), 5, color, blur_size=6)
                    
            else: # idx 5: Desktop Applications - Classic GUI frames scaling
                for i in range(2):
                    scale = 0.5 + 0.3 * np.sin(angle + i * np.pi/2)
                    dw = int(140 * scale)
                    dh = int(100 * scale)
                    dx = width // 2 - dw // 2 + i * 20 - 10
                    dy = height // 2 - dh // 2 + i * 15 - 10
                    # Outer frame
                    cv2.rectangle(frame, (dx, dy), (dx + dw, dy + dh), color, 1, cv2.LINE_AA)
                    # Title bar
                    cv2.rectangle(frame, (dx, dy), (dx + dw, dy + 15), color, -1)
                    # Window controls
                    cv2.circle(frame, (dx+10, dy+7), 2, (255,255,255), -1)
                    cv2.circle(frame, (dx+18, dy+7), 2, (255,255,255), -1)

        # ----------------------------------------------------
        # CATEGORY 4: AWS-DEVOPS (9 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "aws-devops":
            if idx == 0: # AWS Cloud Setup - Central cloud with radiating satellite clusters
                center = (width // 2, height // 2)
                frame = draw_glow_circle(frame, center, 20, color, blur_size=10)
                # Orbiting clusters
                for i in range(4):
                    th = angle + i * np.pi / 2
                    sx = int(center[0] + 70 * np.cos(th))
                    sy = int(center[1] + 45 * np.sin(th))
                    cv2.line(frame, center, (sx, sy), dim_color, 1)
                    cv2.circle(frame, (sx, sy), 8, color, -1, cv2.LINE_AA)
                    cv2.circle(frame, (sx, sy), 3, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 1: # DevOps Solutions - Infinite Möbius loop pipeline
                center = (width // 2, height // 2)
                pts = []
                for t in np.linspace(0, 2*np.pi, 40):
                    x = int(center[0] + 80 * np.cos(t))
                    y = int(center[1] + 30 * np.sin(2*t) * 0.7)
                    pts.append((x, y))
                cv2.polylines(frame, [np.array(pts)], True, color, 1, cv2.LINE_AA)
                # Running runner node
                run_idx = int(f % len(pts))
                frame = draw_glow_circle(frame, pts[run_idx], 5, color, blur_size=6)
                cv2.circle(frame, pts[run_idx], 2, (255,255,255), -1)
                
            elif idx == 2: # CI/CD Pipeline Setup - Multi Stage compile flow
                # Three gates
                stages = ["TEST", "BUILD", "DEPLOY"]
                for i, stg in enumerate(stages):
                    x = 45 + i * 90
                    # Gate Box
                    cv2.rectangle(frame, (x, 90), (x + 65, 140), color, 1, cv2.LINE_AA)
                    cv2.putText(frame, stg, (x + 8, 118), cv2.FONT_HERSHEY_SIMPLEX, 0.35, color, 1, cv2.LINE_AA)
                    # Connection path arrow
                    if i < 2:
                        cv2.line(frame, (x + 65, 115), (x + 90, 115), color, 1)
                        # Sliding spark
                        spark_x = int(x + 65 + ((f * 2) % 25))
                        cv2.circle(frame, (spark_x, 115), 2, (255,255,255), -1)
                        
            elif idx == 3: # Docker Configuration - Moving stack of docker containers
                center = (width // 2, height // 2)
                for i in range(3):
                    dx = center[0] - 30 + i * 15
                    dy = center[1] + 30 - i * 22
                    # Flat isometric container
                    pts = np.array([
                        [dx, dy], [dx + 35, dy - 10], [dx + 70, dy], [dx + 35, dy + 10]
                    ], np.int32)
                    cv2.polylines(frame, [pts], True, color, 1, cv2.LINE_AA)
                    cv2.fillPoly(frame, [pts], dim_color)
                    # Side paneling
                    cv2.line(frame, (dx, dy), (dx, dy + 12), color, 1)
                    cv2.line(frame, (dx + 35, dy + 10), (dx + 35, dy + 22), color, 1)
                    cv2.line(frame, (dx + 70, dy), (dx + 70, dy + 12), color, 1)
                    
            elif idx == 4: # Kubernetes Setup - Rotating ship wheel hub with cluster nodes
                center = (width // 2, height // 2)
                r_wheel = 30
                # Outer wheel circle
                cv2.circle(frame, center, r_wheel, color, 1, cv2.LINE_AA)
                # Inner helm circles
                cv2.circle(frame, center, 8, color, -1, cv2.LINE_AA)
                for i in range(8):
                    th = angle + i * np.pi / 4
                    x1 = int(center[0] + 8 * np.cos(th))
                    y1 = int(center[1] + 8 * np.sin(th))
                    x2 = int(center[0] + (r_wheel+12) * np.cos(th))
                    y2 = int(center[1] + (r_wheel+12) * np.sin(th))
                    cv2.line(frame, (x1, y1), (x2, y2), color, 1, cv2.LINE_AA)
                    cv2.circle(frame, (x2, y2), 3, (255,255,255), -1)
                    
            elif idx == 5: # Server Deployment - 3D Isometric server columns with LED lights
                for col in range(2):
                    cx = 60 + col * 120
                    for u in range(3):
                        uy = 50 + u * 45
                        # Outer server casing
                        pts = np.array([[cx, uy], [cx + 40, uy - 12], [cx + 80, uy], [cx + 40, uy + 12]], np.int32)
                        cv2.polylines(frame, [pts], True, color, 1, cv2.LINE_AA)
                        # LEDs blinking
                        state = (f + u + col * 4) % 12
                        led_color = (0,255,0) if state < 4 else color if state < 8 else (30,10,15)
                        cv2.circle(frame, (cx + 15, uy + 3), 2, led_color, -1, cv2.LINE_AA)
                        cv2.circle(frame, (cx + 25, uy + 5), 2, led_color, -1, cv2.LINE_AA)
                        
            elif idx == 6: # Infrastructure Automation - Cable lines auto mapping virtual nodes
                c1, c2, c3, c4 = (60, 60), (260, 60), (60, 180), (260, 180)
                nodes = [c1, c2, c3, c4]
                # Render connections
                for n1 in nodes:
                    for n2 in nodes:
                        if n1 != n2:
                            cv2.line(frame, n1, n2, dim_color, 1)
                # Moving connector packets
                for i in range(4):
                    p_from = nodes[i]
                    p_to = nodes[(i + 1) % 4]
                    dist_x = p_to[0] - p_from[0]
                    dist_y = p_to[1] - p_from[1]
                    pct = ((f * 1.5 + i * 12) % 48) / 48
                    px = int(p_from[0] + dist_x * pct)
                    py = int(p_from[1] + dist_y * pct)
                    frame = draw_glow_circle(frame, (px, py), 4, color, blur_size=5)
                    
            elif idx == 7: # Monitoring & Logging - Live dynamic pulse EKG cardiogram wave
                pts = []
                for x_idx, x in enumerate(range(20, width-20, 6)):
                    # Simulating heartbeat EKG shape
                    cycle = (x_idx - f * 0.7) % 30
                    if 12 < cycle < 15:
                        y = 120 - 45
                    elif 15 <= cycle < 18:
                        y = 120 + 35
                    else:
                        y = 120
                    pts.append((x, int(y)))
                for i in range(len(pts)-1):
                    cv2.line(frame, pts[i], pts[i+1], color, 2, cv2.LINE_AA)
                    
            else: # idx 8: Cloud Architecture Setup - Multi-Region database clusters sync
                center = (width // 2, height // 2)
                # Primary
                cv2.rectangle(frame, (center[0]-30, center[1]-45), (center[0]+30, center[1]-15), color, 1, cv2.LINE_AA)
                # Secondary clusters
                c1, c2 = (60, 160), (260, 160)
                cv2.rectangle(frame, (c1[0]-20, c1[1]-15), (c1[0]+20, c1[1]+15), dim_color, 1, cv2.LINE_AA)
                cv2.rectangle(frame, (c2[0]-20, c2[1]-15), (c2[0]+20, c2[1]+15), dim_color, 1, cv2.LINE_AA)
                # Sync waves
                cv2.line(frame, (center[0]-15, center[1]-15), (c1[0], c1[1]-15), color, 1, cv2.LINE_AA)
                cv2.line(frame, (center[0]+15, center[1]-15), (c2[0], c2[1]-15), color, 1, cv2.LINE_AA)
                pulse = int(5 + 3 * np.sin(angle * 3))
                cv2.circle(frame, (c1[0], c1[1]), pulse, color, 1)
                cv2.circle(frame, (c2[0], c2[1]), pulse, color, 1)

        # ----------------------------------------------------
        # CATEGORY 5: HOSTING (10 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "hosting":
            if idx == 0: # Web Hosting - Wireframe spinning globe with satellite web server
                center = (width // 2, height // 2)
                # Latitudes & Longitudes
                cv2.circle(frame, center, 40, dim_color, 1, cv2.LINE_AA)
                for i in range(2):
                    rx = int(40 * np.cos(angle + i * np.pi/2))
                    cv2.ellipse(frame, center, (abs(rx), 40), 0, 0, 360, color, 1, cv2.LINE_AA)
                # Connecting server
                srv = (center[0] + 65, center[1] - 30)
                cv2.rectangle(frame, (srv[0]-15, srv[1]-12), (srv[0]+15, srv[1]+12), color, 1, cv2.LINE_AA)
                cv2.line(frame, center, srv, color, 1, cv2.LINE_AA)
                
            elif idx == 1: # Cloud Hosting - Modular clouds exchanging dynamic vertical beams
                c1, c2 = (110, 100), (210, 100)
                # Clouds
                for center in [c1, c2]:
                    frame = draw_glow_circle(frame, center, 15, color, blur_size=8)
                    frame = draw_glow_circle(frame, (center[0]+12, center[1]), 10, color, blur_size=6)
                    frame = draw_glow_circle(frame, (center[0]-12, center[1]), 10, color, blur_size=6)
                # Vertical laser transfer
                beam_x = int(c1[0] + 50 + 20 * np.sin(angle))
                cv2.line(frame, (beam_x, 115), (beam_x, height - 50), color, 1, cv2.LINE_AA)
                
            elif idx == 2: # VPS Server Setup - Sliced isolated virtual servers
                center = (width // 2, height // 2)
                for i in range(3):
                    dy = center[1] - 35 + i * 30
                    cv2.rectangle(frame, (center[0]-45, dy), (center[0]+45, dy + 20), color, 1, cv2.LINE_AA)
                    cv2.rectangle(frame, (center[0]-40, dy + 3), (center[0]-25, dy + 17), dim_color, -1)
                    # Flashing nodes
                    if (f // 4) % 3 == i:
                        cv2.circle(frame, (center[0]+30, dy + 10), 3, (255,255,255), -1)
                        
            elif idx == 3: # Dedicated Server - Monolithic colossal server core unit
                center = (width // 2, height // 2)
                # Tower block
                cv2.rectangle(frame, (center[0]-35, center[1]-70), (center[0]+35, center[1]+70), color, 2, cv2.LINE_AA)
                # Heat radiating ripples
                for i in range(3):
                    r_pulse = int(45 + i * 15 + 5 * np.sin(angle * 2.5))
                    cv2.circle(frame, center, r_pulse, dim_color, 1, cv2.LINE_AA)
                # Core status
                cv2.circle(frame, center, 8, color, -1)
                
            elif idx == 4: # Domain Setup - Dynamic typing browser URL address box
                center = (width // 2, height // 2)
                cv2.rectangle(frame, (40, center[1]-20), (width-40, center[1]+20), color, 1, cv2.LINE_AA)
                text = "NSG-IT.COM"
                progress = int(1 + (f // 4) % (len(text) + 1))
                typed = text[:progress]
                cv2.putText(frame, "www." + typed, (65, center[1]+6), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (255,255,255), 1, cv2.LINE_AA)
                
            elif idx == 5: # SSL Installation - Opening/locking giant 3D padlock outline
                center = (width // 2, height // 2)
                padlock_y = center[1] + 10
                # Shackle arc
                shackle_h = int(25 + 10 * np.sin(angle))
                cv2.ellipse(frame, (center[0], padlock_y - 12), (20, shackle_h), 0, 180, 360, color, 2, cv2.LINE_AA)
                # Body lock
                cv2.rectangle(frame, (center[0]-30, padlock_y - 12), (center[0]+30, padlock_y + 35), color, -1, cv2.LINE_AA)
                cv2.circle(frame, (center[0], padlock_y + 5), 5, (0, 0, 0), -1)
                cv2.line(frame, (center[0], padlock_y + 5), (center[0], padlock_y + 20), (0, 0, 0), 2)
                
            elif idx == 6: # Server Optimization - Tachometer dial revving high performance
                center = (width // 2, height // 2 + 10)
                r = 45
                cv2.ellipse(frame, center, (r, r), 0, 140, 400, color, 2, cv2.LINE_AA)
                # Needle pointing
                needle_th = 140 + 200 * (0.5 + 0.5 * np.sin(angle * 2))
                rad = np.radians(needle_th)
                nx = int(center[0] + (r-8) * np.cos(rad))
                ny = int(center[1] + (r-8) * np.sin(rad))
                cv2.line(frame, center, (nx, ny), (0,0,255), 2, cv2.LINE_AA)
                cv2.circle(frame, center, 4, color, -1)
                
            elif idx == 7: # Website Migration - Files floating across server terminals
                s1, s2 = (60, 150), (260, 150)
                # Server terminals
                for terminal in [s1, s2]:
                    cv2.rectangle(frame, (terminal[0]-15, terminal[1]-30), (terminal[0]+15, terminal[1]+30), color, 1, cv2.LINE_AA)
                # File blocks sliding
                pct = ((f * 2.2) % 48) / 48
                fx = int(s1[0] + (s2[0] - s1[0]) * pct)
                fy = int(s1[1] - 10 + 15 * np.sin(pct * np.pi))
                cv2.rectangle(frame, (fx-8, fy-10), (fx+8, fy+10), color, -1, cv2.LINE_AA)
                cv2.circle(frame, (fx, fy), 2, (255,255,255), -1)
                
            elif idx == 8: # Email Hosting - Floating letters emerging from envelopes
                center = (width // 2, height // 2)
                # Envelope
                cv2.rectangle(frame, (center[0]-30, center[1]+10), (center[0]+30, center[1]+40), color, 1, cv2.LINE_AA)
                cv2.line(frame, (center[0]-30, center[1]+10), (center[0], center[1]+25), color, 1)
                cv2.line(frame, (center[0]+30, center[1]+10), (center[0], center[1]+25), color, 1)
                # Flying mail letters
                for i in range(2):
                    shift_y = int(50 - ((f * 2 + i * 24) % 80))
                    shift_x = int(center[0] + 30 * np.sin(angle + i))
                    cv2.rectangle(frame, (shift_x-10, shift_y-6), (shift_x+10, shift_y+6), color, -1, cv2.LINE_AA)
                    cv2.circle(frame, (shift_x, shift_y), 2, (255,255,255), -1)
                    
            else: # idx 9: Backup & Recovery - Circular backup sync wheel
                center = (width // 2, height // 2)
                # Outer arrow loop
                cv2.ellipse(frame, center, (35, 35), 0, 0, 300, color, 2, cv2.LINE_AA)
                # Arrow head pointing
                th_arrow = np.radians(300)
                ax = int(center[0] + 35 * np.cos(th_arrow))
                ay = int(center[1] + 35 * np.sin(th_arrow))
                cv2.circle(frame, (ax, ay), 4, color, -1)
                # Database stacks
                cv2.rectangle(frame, (center[0]-15, center[1]-10), (center[0]+15, center[1]+10), dim_color, -1)
                cv2.circle(frame, center, 3, (255,255,255), -1)

        # ----------------------------------------------------
        # CATEGORY 6: MARKETING (8 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "marketing":
            if idx == 0: # SEO Optimization - Magnifying glass scanning ranking pages
                center = (width // 2, height // 2)
                # Page lines
                for i in range(4):
                    cv2.line(frame, (70, 70 + i * 15), (200, 70 + i * 15), dim_color, 1)
                # Magnifying lens sweeping
                mx = int(width//2 + 35 * np.sin(angle))
                my = int(height//2 + 20 * np.cos(angle))
                frame = draw_glow_circle(frame, (mx, my), 18, color, blur_size=7)
                cv2.circle(frame, (mx, my), 18, (255,255,255), 1, cv2.LINE_AA)
                cv2.line(frame, (mx+13, my+13), (mx+30, my+30), color, 2, cv2.LINE_AA)
                
            elif idx == 1: # Social Media Marketing - Thumbs up & hearts floating up
                for i in range(4):
                    shift_y = int(180 - ((f * 2.5 + i * 35) % 150))
                    shift_x = int(60 + i * 50 + 20 * np.sin(angle + i))
                    if i % 2 == 0: # Draw Heart
                        cv2.circle(frame, (shift_x-5, shift_y), 5, color, -1, cv2.LINE_AA)
                        cv2.circle(frame, (shift_x+5, shift_y), 5, color, -1, cv2.LINE_AA)
                        cv2.circle(frame, (shift_x, shift_y+5), 5, color, -1, cv2.LINE_AA)
                    else: # Draw Thumbs up bubble
                        cv2.circle(frame, (shift_x, shift_y), 7, color, -1, cv2.LINE_AA)
                        cv2.circle(frame, (shift_x+3, shift_y-2), 3, (255,255,255), -1)
                        
            elif idx == 2: # Google Ads - Pay-per-click mouse pointer cash triggers
                center = (width // 2, height // 2)
                cv2.rectangle(frame, (center[0]-40, center[1]-20), (center[0]+40, center[1]+20), color, 1, cv2.LINE_AA)
                cv2.putText(frame, "ADS", (center[0]-18, center[1]+5), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (255,255,255), 1, cv2.LINE_AA)
                # Mouse cursor
                mx = int(center[0] - 25 + 10 * np.sin(angle * 2.5))
                my = int(center[1] + 15 + 8 * np.cos(angle * 2.5))
                pts = np.array([[mx, my], [mx+15, my+5], [mx+5, my+12]], np.int32)
                cv2.fillPoly(frame, [pts], (255,255,255))
                
            elif idx == 3: # Meta Ads - Dynamic bullseye circles target hit
                center = (width // 2, height // 2)
                for i in range(3):
                    r_pulse = int(20 + i * 25 - (f % 25))
                    if r_pulse > 0:
                        cv2.circle(frame, center, r_pulse, color, 1, cv2.LINE_AA)
                # Center core bullseye
                frame = draw_glow_circle(frame, center, 6, color, blur_size=8)
                cv2.circle(frame, center, 3, (255,255,255), -1)
                
            elif idx == 4: # Lead Generation - Magnet drawing files from edges
                center = (width // 2, height // 2)
                # Magnet wireframe horseshoe
                cv2.ellipse(frame, (center[0], center[1]+10), (15, 20), 0, 180, 360, color, 3, cv2.LINE_AA)
                # Floating data nodes attracted
                for i in range(4):
                    pct = ((f * 1.5 + i * 12) % 48) / 48
                    nx = int(width - (width/2 - 20)*pct if i%2==0 else (width/2 - 20)*pct)
                    ny = int(40 + i * 40)
                    cv2.circle(frame, (nx, ny), 3, color, -1)
                    
            elif idx == 5: # Performance Marketing - Rapidly rising compound line chart
                # Axis lines
                cv2.line(frame, (40, 180), (width-40, 180), dim_color, 1)
                cv2.line(frame, (40, 40), (40, 180), dim_color, 1)
                pts = []
                for x_idx, x in enumerate(range(40, width-40, 15)):
                    # Exponential dynamic lift curve
                    y = 180 - int(20 + 0.007 * (x-40)**2 * (0.8 + 0.2 * np.sin(angle + x_idx)))
                    pts.append((x, y))
                for i in range(len(pts)-1):
                    cv2.line(frame, pts[i], pts[i+1], color, 2, cv2.LINE_AA)
                    cv2.circle(frame, pts[i], 3, (255,255,255), -1, cv2.LINE_AA)
                    
            elif idx == 6: # Email Marketing - Falling waterfall of emails folding to planes
                for i in range(3):
                    fx = 50 + i * 100
                    fy = int(40 + ((f * 3.5 + i * 40) % 150))
                    # Draw letter plane outline
                    pts = np.array([[fx, fy], [fx-15, fy+20], [fx+15, fy+20]], np.int32)
                    cv2.polylines(frame, [pts], True, color, 1, cv2.LINE_AA)
                    cv2.circle(frame, (fx, fy+8), 3, (255,255,255), -1)
                    
            else: # idx 7: Content Marketing - Glowing typewriter text cursor
                center = (width // 2, height // 2)
                # Static header outlines
                cv2.rectangle(frame, (40, 50), (280, 180), dim_color, 1, cv2.LINE_AA)
                # Blinking terminal writing cursor
                cursor_state = (f // 6) % 2
                cv2.putText(frame, "CREATING TECH CONTENT...", (55, 110), cv2.FONT_HERSHEY_SIMPLEX, 0.45, color, 1, cv2.LINE_AA)
                if cursor_state == 0:
                    cv2.rectangle(frame, (250, 96), (262, 114), color, -1)

        # ----------------------------------------------------
        # CATEGORY 7: AI-RAG (7 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "ai-rag":
            if idx == 0: # AI Chatbot Development - Speaking robot facial wireframe HUD
                center = (width // 2, height // 2)
                # Robo eyes
                cv2.rectangle(frame, (center[0]-30, center[1]-20), (center[0]-10, center[1]-10), color, 1, cv2.LINE_AA)
                cv2.rectangle(frame, (center[0]+10, center[1]-20), (center[0]+30, center[1]-10), color, 1, cv2.LINE_AA)
                # Speaking sound ripples mouth
                mouth_h = int(abs(5 + 8 * np.sin(angle * 4)))
                cv2.ellipse(frame, (center[0], center[1]+15), (20, mouth_h), 0, 0, 360, color, 1, cv2.LINE_AA)
                
            elif idx == 1: # RAG-Based Chatbots - Vector query searching library stacks
                for i in range(4):
                    y = 60 + i * 30
                    cv2.rectangle(frame, (40, y), (200, y+18), dim_color, 1)
                # Searching laser dot
                scan_y = int(60 + 100 * (0.5 + 0.5 * np.sin(angle)))
                frame = draw_glow_circle(frame, (120, scan_y), 6, color, blur_size=7)
                cv2.circle(frame, (120, scan_y), 2, (255,255,255), -1)
                
            elif idx == 2: # Website Chatbots - Floating sliding chat bubble widget
                center = (width // 2, height // 2)
                # Bubble casing
                cv2.rectangle(frame, (50, center[1]-35), (270, center[1]+25), color, 1, cv2.LINE_AA)
                # Speech tail
                pts = np.array([[65, center[1]+25], [65, center[1]+35], [80, center[1]+25]], np.int32)
                cv2.fillPoly(frame, [pts], color)
                # Dots pulsing inside
                for i in range(3):
                    dot_y = int(center[1] + 3 * np.sin(angle * 3 + i * 1.5))
                    cv2.circle(frame, (130 + i * 20, dot_y), 3, color, -1, cv2.LINE_AA)
                    
            elif idx == 3: # WhatsApp Chatbots - Green phone notification loops
                center = (width // 2, height // 2)
                # Notification circles
                for i in range(3):
                    r_pulse = int(18 + i * 20 - (f % 20))
                    if r_pulse > 0:
                        cv2.circle(frame, center, r_pulse, color, 1, cv2.LINE_AA)
                # Phone silhouette
                cv2.rectangle(frame, (center[0]-15, center[1]-25), (center[0]+15, center[1]+25), color, -1, cv2.LINE_AA)
                cv2.circle(frame, (center[0], center[1]), 4, (255,255,255), -1)
                
            elif idx == 4: # Customer Support Bots - Headset wireframe with flashing status
                center = (width // 2, height // 2)
                # Head arch
                cv2.ellipse(frame, (center[0], center[1]-10), (30, 30), 0, 180, 360, color, 2, cv2.LINE_AA)
                # Earpads
                cv2.rectangle(frame, (center[0]-35, center[1]-15), (center[0]-28, center[1]+10), color, -1)
                cv2.rectangle(frame, (center[0]+28, center[1]-15), (center[0]+35, center[1]+10), color, -1)
                # Mic extension
                cv2.line(frame, (center[0]-30, center[1]+5), (center[0]-12, center[1]+20), color, 2)
                # Flashing tip
                state = (f // 4) % 2
                tip_color = (255,255,255) if state==0 else color
                cv2.circle(frame, (center[0]-12, center[1]+20), 3, tip_color, -1)
                
            elif idx == 5: # Automation Bots - Robotic mesh hand executing screen scripts
                center = (width // 2, height // 2)
                # Joint node clusters
                joints = [(center[0]-40, center[1]+50), (center[0]-20, center[1]+15), (center[0]-5, center[1]-15), (center[0]+25, center[1]-20)]
                for i in range(len(joints)-1):
                    cv2.line(frame, joints[i], joints[i+1], color, 2, cv2.LINE_AA)
                for jt in joints:
                    cv2.circle(frame, jt, 4, (255,255,255), -1)
                # Pulsing ray from finger tip
                finger = joints[-1]
                frame = draw_glow_circle(frame, finger, int(8 + 3 * np.sin(angle * 3.5)), color, blur_size=7)
                
            else: # idx 6: AI-Based Response Systems - Mail sorter dynamic cards sliding
                for i in range(3):
                    offset = (i * 80 + f * 2.5) % 240
                    cx = 40 + offset
                    cy = int(90 + 20 * np.sin(angle + i))
                    # Draw file folder
                    cv2.rectangle(frame, (int(cx), cy), (int(cx+50), cy+40), color, 1, cv2.LINE_AA)
                    cv2.rectangle(frame, (int(cx+5), cy-8), (int(cx+22), cy), color, 1, cv2.LINE_AA)
                    # Flashing check
                    cv2.circle(frame, (int(cx+25), cy+20), 4, (0, 255, 0), -1)

        # ----------------------------------------------------
        # CATEGORY 8: IVR (6 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "ivr":
            if idx == 0: # IVR Setup - Dial Pad Keys flashing in call sequence
                for row in range(3):
                    for col in range(3):
                        x = 80 + col * 45
                        y = 60 + row * 45
                        state = (f // 5) % 9
                        if state == (row * 3 + col):
                            cv2.rectangle(frame, (x-15, y-15), (x+15, y+15), color, -1, cv2.LINE_AA)
                            cv2.circle(frame, (x, y), 3, (255,255,255), -1)
                        else:
                            cv2.rectangle(frame, (x-15, y-15), (x+15, y+15), dim_color, 1, cv2.LINE_AA)
                            
            elif idx == 1: # Automated Voice Systems - Concentric sound acoustic ripples
                center = (width // 2, height // 2)
                for i in range(4):
                    r_pulse = int(15 + i * 22 - (f % 22))
                    if r_pulse > 0:
                        cv2.circle(frame, center, r_pulse, color, 1, cv2.LINE_AA)
                frame = draw_glow_circle(frame, center, 10, color, blur_size=8)
                
            elif idx == 2: # Business Call Management - Routing hub connecting to support
                center = (width // 2, height // 2)
                cv2.circle(frame, center, 15, color, -1, cv2.LINE_AA)
                # Outbound agent links
                for i in range(3):
                    th = angle + i * 2 * np.pi / 3
                    ax = int(center[0] + 65 * np.cos(th))
                    ay = int(center[1] + 35 * np.sin(th))
                    cv2.line(frame, center, (ax, ay), color, 1)
                    cv2.circle(frame, (ax, ay), 6, color, -1)
                    cv2.circle(frame, (ax, ay), 2, (255,255,255), -1)
                    
            elif idx == 3: # Customer Support IVR - Queue pipeline stack of caller circles
                for i in range(4):
                    cx = int(60 + i * 65 + 10 * np.sin(angle + i))
                    cy = height // 2
                    # Caller head silhouettes
                    cv2.circle(frame, (cx, cy-5), 8, color, 1, cv2.LINE_AA)
                    cv2.ellipse(frame, (cx, cy+15), (14, 8), 0, 180, 360, color, 1, cv2.LINE_AA)
                    if i == 0:
                        frame = draw_glow_circle(frame, (cx, cy-5), 8, color, blur_size=6)
                        
            elif idx == 4: # Cloud IVR Solutions - Phone receiver floating in cloud mesh
                center = (width // 2, height // 2)
                # Cloud
                frame = draw_glow_circle(frame, center, 18, color, blur_size=10)
                frame = draw_glow_circle(frame, (center[0]+15, center[1]), 14, color, blur_size=8)
                frame = draw_glow_circle(frame, (center[0]-15, center[1]), 14, color, blur_size=8)
                # Phone receiver outline inside
                rec_y = int(center[1] + 5 * np.sin(angle * 2))
                cv2.ellipse(frame, (center[0], rec_y + 10), (16, 10), 0, 180, 360, (255,255,255), 2, cv2.LINE_AA)
                cv2.circle(frame, (center[0]-16, rec_y+5), 3, (255,255,255), -1)
                cv2.circle(frame, (center[0]+16, rec_y+5), 3, (255,255,255), -1)
                
            else: # idx 5: Multi-Level IVR Systems - Expanding hierarchy branching tree
                c1 = (width // 2, 60)
                c2, c3 = (90, 150), (230, 150)
                # Connections
                cv2.line(frame, c1, c2, color, 1, cv2.LINE_AA)
                cv2.line(frame, c1, c3, color, 1, cv2.LINE_AA)
                # Branch sub nodes
                cv2.line(frame, c2, (60, 200), dim_color, 1)
                cv2.line(frame, c2, (120, 200), dim_color, 1)
                cv2.line(frame, c3, (200, 200), dim_color, 1)
                cv2.line(frame, c3, (260, 200), dim_color, 1)
                # Nodes
                for node in [c1, c2, c3]:
                    cv2.circle(frame, node, 6, color, -1, cv2.LINE_AA)
                    cv2.circle(frame, node, 2, (255,255,255), -1)

        # ----------------------------------------------------
        # CATEGORY 9: API-INTEGRATIONS (5 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "api-integrations":
            if idx == 0: # Third-Party API Integration - Two glowing jigsaw pieces locking
                center = (width // 2, height // 2)
                # Piece 1 Left
                p1_x = int(center[0] - 30 + 10 * np.sin(angle))
                cv2.rectangle(frame, (p1_x - 15, center[1] - 15), (p1_x + 15, center[1] + 15), color, 1, cv2.LINE_AA)
                # Intersecting joint
                cv2.circle(frame, (p1_x + 15, center[1]), 5, color, -1)
                # Piece 2 Right
                p2_x = int(center[0] + 30 - 10 * np.sin(angle))
                cv2.rectangle(frame, (p2_x - 15, center[1] - 15), (p2_x + 15, center[1] + 15), color, 1, cv2.LINE_AA)
                cv2.circle(frame, (p2_x - 15, center[1]), 5, (0, 0, 0), -1) # Socket hollow
                cv2.circle(frame, (p2_x - 15, center[1]), 5, color, 1)
                
            elif idx == 1: # Payment Gateway Integration - Swipe credit card scanning
                center = (width // 2, height // 2)
                # Card
                card_angle = angle * 0.5
                pts = []
                for a in range(4):
                    th = card_angle + a * np.pi/2
                    x = int(center[0] + 45 * np.cos(th))
                    y = int(center[1] + 25 * 0.6 * np.sin(th))
                    pts.append((x, y))
                cv2.polylines(frame, [np.array(pts)], True, color, 1, cv2.LINE_AA)
                # Magnetic stripe
                cv2.line(frame, pts[0], pts[1], color, 3)
                # Processing green checkmark
                state = (f // 8) % 2
                if state == 0:
                    cv2.line(frame, (center[0]-10, center[1]+30), (center[0]-3, center[1]+37), (0, 255, 0), 2)
                    cv2.line(frame, (center[0]-3, center[1]+37), (center[0]+12, center[1]+22), (0, 255, 0), 2)
                    
            elif idx == 2: # WhatsApp API Integration - Speech bubbles syncing via database wires
                c1, c2 = (80, 80), (240, 160)
                # Nodes
                cv2.rectangle(frame, (c1[0]-25, c1[1]-15), (c1[0]+25, c1[1]+15), color, 1, cv2.LINE_AA)
                cv2.rectangle(frame, (c2[0]-25, c2[1]-15), (c2[0]+25, c2[1]+15), color, 1, cv2.LINE_AA)
                # Connecting cable
                cv2.line(frame, c1, c2, color, 1, cv2.LINE_AA)
                # Syncing sparks
                pct = ((f * 2) % 48) / 48
                sx = int(c1[0] + (c2[0] - c1[0]) * pct)
                sy = int(c1[1] + (c2[1] - c1[1]) * pct)
                frame = draw_glow_circle(frame, (sx, sy), 4, color, blur_size=6)
                
            elif idx == 3: # SMS & Email API Setup - Letters flying alongside phone alerts
                center = (width // 2, height // 2)
                # SMS Phone bubble
                sms_x = int(70 + 15 * np.cos(angle))
                cv2.circle(frame, (sms_x, 120), 18, color, 1, cv2.LINE_AA)
                cv2.putText(frame, "SMS", (sms_x - 11, 124), cv2.FONT_HERSHEY_SIMPLEX, 0.35, color, 1, cv2.LINE_AA)
                # Email flyer
                mail_x = int(230 - 15 * np.cos(angle))
                cv2.rectangle(frame, (mail_x-18, 110), (mail_x+18, 130), color, 1, cv2.LINE_AA)
                cv2.line(frame, (mail_x-18, 110), (mail_x, 120), color, 1)
                cv2.line(frame, (mail_x+18, 110), (mail_x, 120), color, 1)
                
            else: # idx 4: Automation Integrations - Sequential chain reaction logic triggers
                for i in range(4):
                    x = 50 + i * 70
                    y = int(120 + 25 * np.sin(angle + i))
                    cv2.circle(frame, (x, y), 8, color, -1, cv2.LINE_AA)
                    cv2.circle(frame, (x, y), 3, (255,255,255), -1, cv2.LINE_AA)
                    # Connection links
                    if i < 3:
                        next_y = int(120 + 25 * np.sin(angle + i + 1))
                        cv2.line(frame, (x+8, y), (x+62, next_y), dim_color, 1)

        # ----------------------------------------------------
        # CATEGORY 10: ECOMMERCE (7 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "ecommerce":
            if idx == 0: # Online Store Development - Isometric store storefront with glowing OPEN sign
                center = (width // 2, height // 2)
                # Store roof & frame
                cv2.rectangle(frame, (center[0]-45, center[1]-30), (center[0]+45, center[1]+40), color, 1, cv2.LINE_AA)
                cv2.line(frame, (center[0]-55, center[1]-30), (center[0]+55, center[1]-30), color, 3)
                # Awnings
                for i in range(4):
                    ax = center[0] - 40 + i * 26
                    cv2.circle(frame, (ax, center[1]-20), 6, color, -1)
                # Flashing open sign
                state = (f // 6) % 2
                sign_color = (0, 255, 0) if state==0 else dim_color
                cv2.putText(frame, "OPEN", (center[0]-16, center[1]+15), cv2.FONT_HERSHEY_SIMPLEX, 0.35, sign_color, 1, cv2.LINE_AA)
                
            elif idx == 1: # Product Management Systems - Price tag labeling rotating item
                center = (width // 2, height // 2)
                # Spinning box product
                sz = 20
                pts = []
                for a in range(4):
                    th = angle + a * np.pi/2
                    x = int(center[0] - 25 + sz * np.cos(th))
                    y = int(center[1] + sz * 0.5 * np.sin(th))
                    pts.append((x, y))
                cv2.polylines(frame, [np.array(pts)], True, color, 1, cv2.LINE_AA)
                # Tag floating above
                tag_y = int(60 + 5 * np.sin(angle * 2))
                cv2.rectangle(frame, (center[0]+15, tag_y-10), (center[0]+45, tag_y+8), color, 1, cv2.LINE_AA)
                cv2.line(frame, (center[0]-10, center[1]-10), (center[0]+15, tag_y), color, 1)
                
            elif idx == 2: # Payment Gateway Integration - Thumb biometric finger scanner
                center = (width // 2, height // 2)
                # Scanner pad
                cv2.rectangle(frame, (center[0]-25, center[1]-35), (center[0]+25, center[1]+35), color, 1, cv2.LINE_AA)
                # Glowing fingerprint scan lines
                for i in range(4):
                    sy = center[1] - 20 + i * 12
                    w_line = int(15 - 5 * np.sin(angle + i))
                    cv2.line(frame, (center[0] - w_line, sy), (center[0] + w_line, sy), color, 2, cv2.LINE_AA)
                # Scanner swipe line
                sweep_y = int(center[1] - 30 + 60 * (0.5 + 0.5 * np.sin(angle * 1.8)))
                frame = draw_glow_line(frame, (center[0]-22, sweep_y), (center[0]+22, sweep_y), (0,255,0), thickness=2, blur_size=6)
                
            elif idx == 3: # Shopify Development - Custom checkout bag moving
                center = (width // 2, height // 2)
                bag_y = int(center[1] + 5 * np.sin(angle * 2))
                # Bag shackle
                cv2.ellipse(frame, (center[0], bag_y - 12), (10, 12), 0, 180, 360, color, 1, cv2.LINE_AA)
                # Bag body
                cv2.rectangle(frame, (center[0]-20, bag_y - 12), (center[0]+20, bag_y + 25), color, -1, cv2.LINE_AA)
                # Shopify Logo 'S'
                cv2.putText(frame, "S", (center[0]-4, bag_y + 10), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (255,255,255), 1, cv2.LINE_AA)
                
            elif idx == 4: # WooCommerce Development - Plugin gear connecting database catalog
                c1, c2 = (110, 120), (210, 120)
                # Rotating gear on left
                cv2.circle(frame, c1, 20, color, 1, cv2.LINE_AA)
                for t in range(4):
                    th = angle + t * np.pi / 2
                    cv2.line(frame, c1, (int(c1[0] + 28 * np.cos(th)), int(c1[1] + 28 * np.sin(th))), color, 2, cv2.LINE_AA)
                # Catalog database on right
                cv2.rectangle(frame, (c2[0]-15, c2[1]-20), (c2[0]+15, c2[1]+20), color, 1, cv2.LINE_AA)
                cv2.line(frame, c1, c2, color, 1, cv2.LINE_AA)
                
            elif idx == 5: # Multi-Vendor Platforms - Multiple vendor pipelines feeding shopping cart
                center = (width // 2, height // 2 + 25)
                # Main Cart at bottom
                cv2.rectangle(frame, (center[0]-20, center[1]-10), (center[0]+20, center[1]+15), color, -1, cv2.LINE_AA)
                # Sub Vendors
                v1, v2, v3 = (60, 60), (160, 45), (260, 60)
                for v in [v1, v2, v3]:
                    cv2.circle(frame, v, 6, color, 1, cv2.LINE_AA)
                    cv2.line(frame, v, (center[0], center[1]-10), dim_color, 1)
                    # Sliding purchase packages
                    pct = ((f * 1.8 + v[0]) % 48) / 48
                    px = int(v[0] + (center[0] - v[0]) * pct)
                    py = int(v[1] + (center[1]-10 - v[1]) * pct)
                    cv2.circle(frame, (px, py), 3, (255,255,255), -1)
                    
            else: # idx 6: Order Management Systems - Dynamic package box folding
                center = (width // 2, height // 2)
                # Isometric package box
                sz = int(25 + 3 * np.sin(angle))
                pts = np.array([
                    [center[0], center[1]-sz], [center[0]+sz*1.4, center[1]-sz*0.4],
                    [center[0]+sz*1.4, center[1]+sz*0.6], [center[0], center[1]+sz*1.2],
                    [center[0]-sz*1.4, center[1]+sz*0.6], [center[0]-sz*1.4, center[1]-sz*0.4]
                ], np.int32)
                cv2.polylines(frame, [pts], True, color, 1, cv2.LINE_AA)
                # Tape seal line
                cv2.line(frame, (center[0], center[1]-sz), (center[0], int(center[1]+sz*1.2)), color, 1, cv2.LINE_AA)

        # ----------------------------------------------------
        # CATEGORY 11: AI-AUTOMATION (6 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        elif theme_id == "ai-automation":
            if idx == 0: # AI Integrations - Synaptic brain node bridges human thoughts to code
                center = (width // 2, height // 2)
                # Brain silhouette node left
                b_node = (80, 120)
                frame = draw_glow_circle(frame, b_node, 15, color, blur_size=8)
                # Chip silhouette right
                c_node = (240, 120)
                cv2.rectangle(frame, (c_node[0]-15, c_node[1]-15), (c_node[0]+15, c_node[1]+15), color, 1, cv2.LINE_AA)
                # Bridging pulses
                cv2.line(frame, b_node, c_node, color, 1, cv2.LINE_AA)
                pulse_x = int(b_node[0] + (c_node[0] - b_node[0]) * ((f/frames)%1.0))
                cv2.circle(frame, (pulse_x, 120), 4, (255,255,255), -1, cv2.LINE_AA)
                
            elif idx == 1: # Workflow Automation - Sliding project scheduler tasks
                for i in range(3):
                    y = 70 + i * 40
                    cv2.line(frame, (40, y), (280, y), dim_color, 1)
                    # Task block
                    start_x = int(60 + i * 35 + 20 * np.sin(angle * 1.5 + i))
                    w_block = 50 + i * 12
                    cv2.rectangle(frame, (start_x, y-6), (start_x+w_block, y+6), color, -1, cv2.LINE_AA)
                    cv2.circle(frame, (start_x+w_block, y), 2, (255,255,255), -1)
                    
            elif idx == 2: # Smart Business Automation - Dynamic financial ledger calculator
                center = (width // 2, height // 2)
                cv2.rectangle(frame, (center[0]-35, center[1]-45), (center[0]+35, center[1]+45), color, 1, cv2.LINE_AA)
                # Calculator keys grid
                for row in range(3):
                    for col in range(2):
                        x = center[0] - 20 + col * 25
                        y = center[1] - 20 + row * 20
                        state = (f // 4) % 6
                        btn_color = color if state==(row*2+col) else dim_color
                        cv2.rectangle(frame, (x-6, y-5), (x+6, y+5), btn_color, -1)
                        
            elif idx == 3: # AI-Based Features - Camera scanner scanning face metrics
                center = (width // 2, height // 2)
                # Abstract face outline
                cv2.ellipse(frame, center, (30, 45), 0, 0, 360, color, 1, cv2.LINE_AA)
                # Scanning lines
                for i in range(3):
                    y = int(center[1] - 35 + i * 30 + 10 * np.sin(angle))
                    cv2.line(frame, (center[0]-20, y), (center[0]+20, y), color, 1, cv2.LINE_AA)
                # Dynamic node trackers
                pts = [(center[0]-15, center[1]-15), (center[0]+15, center[1]-15), (center[0], center[1]+15)]
                for pt in pts:
                    cv2.circle(frame, pt, 2, (255,255,255), -1)
                    
            elif idx == 4: # Process Automation - Sorter sorting color data balls
                # Funnels
                cv2.line(frame, (60, 60), (140, 130), color, 2, cv2.LINE_AA)
                cv2.line(frame, (260, 60), (180, 130), color, 2, cv2.LINE_AA)
                # Dynamic sorting ball falling
                ball_y = int(60 + ((f * 3.5) % 120))
                ball_x = int(160 + (ball_y-60)*0.2 * np.sin(angle * 3))
                cv2.circle(frame, (ball_x, ball_y), 5, (0,255,0) if f%2==0 else color, -1, cv2.LINE_AA)
                
            else: # idx 5: Business Automation System - Lever pulled automatically
                center = (width // 2, height // 2)
                cv2.rectangle(frame, (center[0]-25, center[1]-15), (center[0]+25, center[1]+40), color, 1, cv2.LINE_AA)
                # Automated lever arm
                lever_angle = np.radians(45 + 90 * (0.5 + 0.5 * np.sin(angle * 2.2)))
                lx = int(center[0] + 55 * np.cos(lever_angle))
                ly = int(center[1] - 55 * np.sin(lever_angle))
                cv2.line(frame, center, (lx, ly), color, 3, cv2.LINE_AA)
                frame = draw_glow_circle(frame, (lx, ly), 6, color, blur_size=7)

        # ----------------------------------------------------
        # CATEGORY 12: SECURITY (8 UNIQUE CONCEPTS)
        # ----------------------------------------------------
        else: # theme_id == "security"
            if idx == 0: # Website Maintenance - Rotating screwdriver and wrench gears
                center = (width // 2, height // 2)
                cv2.circle(frame, center, 22, color, 1, cv2.LINE_AA)
                # Gears
                for t in range(6):
                    th = angle + t * np.pi / 3
                    cv2.line(frame, center, (int(center[0] + 30 * np.cos(th)), int(center[1] + 30 * np.sin(th))), color, 3, cv2.LINE_AA)
                # Overlay wrench arm
                cv2.line(frame, (center[0]-50, center[1]+50), center, (255,255,255), 3, cv2.LINE_AA)
                
            elif idx == 1: # Performance Optimization - Rocket ship launching with fire flames
                center = (width // 2, height // 2)
                rocket_y = int(center[1] - 15 + 12 * np.sin(angle * 3.5))
                # Body
                cv2.rectangle(frame, (center[0]-10, rocket_y - 25), (center[0]+10, rocket_y + 15), color, 1, cv2.LINE_AA)
                # Nose
                pts = np.array([[center[0], rocket_y - 42], [center[0]-10, rocket_y - 25], [center[0]+10, rocket_y - 25]], np.int32)
                cv2.fillPoly(frame, [pts], color)
                # Fire flames pulsing at bottom
                flame_h = int(15 + 10 * np.sin(angle * 8))
                cv2.ellipse(frame, (center[0], rocket_y + 20), (5, flame_h), 0, 0, 360, (0, 165, 255), -1)
                
            elif idx == 2: # Bug Fixing - Digital scanner targets insect and dissolves it
                center = (width // 2, height // 2)
                # Bug outline
                cv2.circle(frame, center, 8, color, -1, cv2.LINE_AA)
                cv2.line(frame, (center[0]-15, center[1]), (center[0]+15, center[1]), color, 1)
                cv2.line(frame, (center[0]-12, center[1]-12), (center[0]+12, center[1]+12), color, 1)
                cv2.line(frame, (center[0]-12, center[1]+12), (center[0]+12, center[1]-12), color, 1)
                # Laser scanner sweeps and shrinks bug
                r_scan = int(25 + 5 * np.sin(angle * 4))
                cv2.circle(frame, center, r_scan, (0, 255, 0), 1, cv2.LINE_AA)
                
            elif idx == 3: # Website Security - Monolithic brick firewall blocks attacks
                # Firewall blocks
                for row in range(3):
                    for col in range(4):
                        bx = 45 + col * 60 + (30 if row%2==1 else 0)
                        by = 70 + row * 26
                        cv2.rectangle(frame, (bx, by), (bx+50, by+20), color, 1, cv2.LINE_AA)
                        cv2.fillPoly(frame, [np.array([[bx,by],[bx+50,by],[bx+50,by+20],[bx,by+20]])], dim_color)
                # Intruding pulses bounced off
                for i in range(2):
                    pct = ((f * 2.2 + i * 24) % 48) / 48
                    ex = int(width - (width/2)*pct)
                    ey = int(90 + i * 35)
                    if ex > width/2 + 25:
                        cv2.circle(frame, (ex, ey), 4, (0,0,255), -1)
                    else: # Splash sparks
                        cv2.circle(frame, (int(width/2+25), ey), 6, color, -1)
                        
            elif idx == 4: # Malware Protection - Cross shield blocking dynamic virus cells
                center = (width // 2, height // 2)
                # Security shield cross outline
                pts = np.array([
                    [center[0], center[1]-30], [center[0]+25, center[1]-30],
                    [center[0]+20, center[1]+15], [center[0], center[1]+30],
                    [center[0]-20, center[1]+15], [center[0]-25, center[1]-30]
                ], np.int32)
                cv2.polylines(frame, [pts], True, color, 2, cv2.LINE_AA)
                cv2.fillPoly(frame, [pts], dim_color)
                # Pulsing secure aura
                shield_pulse = int(5 + 3 * np.sin(angle * 2.5))
                cv2.circle(frame, center, shield_pulse, (0,255,0), 1)
                
            elif idx == 5: # Backup Management - Vault security door wheel spinning
                center = (width // 2, height // 2)
                # Door outline
                cv2.circle(frame, center, 45, color, 2, cv2.LINE_AA)
                # Vault spokes spinning
                v_angle = angle * 0.7
                for t in range(4):
                    th = v_angle + t * np.pi / 2
                    vx = int(center[0] + 35 * np.cos(th))
                    vy = int(center[1] + 35 * np.sin(th))
                    cv2.line(frame, center, (vx, vy), color, 3, cv2.LINE_AA)
                    cv2.circle(frame, (vx, vy), 6, color, -1)
                cv2.circle(frame, center, 8, (255,255,255), -1)
                
            elif idx == 6: # Technical Support - Floating ring lifesaver beacon pulsing
                center = (width // 2, height // 2)
                lifesaver_y = int(center[1] + 8 * np.sin(angle * 2.5))
                # Outer ring
                cv2.circle(frame, (center[0], lifesaver_y), 35, color, 8, cv2.LINE_AA)
                # Inner details
                cv2.circle(frame, (center[0], lifesaver_y), 35, (255,255,255), 1, cv2.LINE_AA)
                cv2.circle(frame, (center[0], lifesaver_y), 20, (0,0,0), -1)
                
            else: # idx 7: Server Security Monitoring - Sweeping radar tracking alert threat
                center = (width // 2, height // 2)
                cv2.circle(frame, center, 50, color, 1, cv2.LINE_AA)
                cv2.circle(frame, center, 25, dim_color, 1, cv2.LINE_AA)
                # Sweep line
                rad = angle
                sx = int(center[0] + 50 * np.cos(rad))
                sy = int(center[1] + 50 * np.sin(rad))
                cv2.line(frame, center, (sx, sy), color, 2, cv2.LINE_AA)
                # Threat blip flashing
                blip_state = (f // 8) % 2
                bx, by = center[0] + 30, center[1] - 20
                if blip_state == 0:
                    frame = draw_glow_circle(frame, (bx, by), 5, (0, 0, 255), blur_size=7)
                    cv2.circle(frame, (bx, by), 2, (255,255,255), -1)
        
        out.write(frame)
        
    out.release()
    print(f"Unique sub-service technology loop successfully written: {name}.mp4")

def generate_all_subservices():
    for theme_id, total in counts.items():
        for i in range(total):
            generate_subservice_video(theme_id, i)
    print("FINISHED GENERATING ALL 88 BESPOKE 3D TECHNOLOGY SUB-SERVICE VIDEOS!")

if __name__ == '__main__':
    generate_all_subservices()
