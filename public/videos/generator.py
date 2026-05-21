import cv2
import numpy as np
import os

def test_generate():
    os.makedirs('public/videos', exist_ok=True)
    width, height = 320, 240
    fps = 30
    duration = 2 # seconds
    num_frames = fps * duration

    # Try different codecs
    codecs = ['avc1', 'mp4v', 'XVID']
    success = False
    
    for codec in codecs:
        try:
            filename = f"public/videos/test_{codec}.mp4"
            fourcc = cv2.VideoWriter_fourcc(*codec)
            out = cv2.VideoWriter(filename, fourcc, fps, (width, height))
            
            if not out.isOpened():
                print(f"Codec {codec} is not supported or failed to open.")
                continue
                
            for i in range(num_frames):
                frame = np.zeros((height, width, 3), dtype=np.uint8)
                # Draw a rotating circle to test animation
                angle = (i / num_frames) * 2 * np.pi
                cx = int(width / 2 + 50 * np.cos(angle))
                cy = int(height / 2 + 50 * np.sin(angle))
                cv2.circle(frame, (cx, cy), 20, (0, 255, 255), -1)
                
                # Draw text
                cv2.putText(frame, "TEST", (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
                
                out.write(frame)
                
            out.release()
            print(f"Successfully generated test video with codec: {codec}")
            success = True
            break
        except Exception as e:
            print(f"Exception for codec {codec}: {e}")
            
    if not success:
        print("All codecs failed.")

if __name__ == '__main__':
    test_generate()
