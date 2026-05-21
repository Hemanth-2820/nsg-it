import re

def run_replacements():
    filepath = "src/components/ServiceDetailPage.jsx"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all Mixkit URLs for review
    urls = re.findall(r'https://assets\.mixkit\.co/videos/preview/mixkit-[a-zA-Z0-9\-_]+\.mp4', content)
    print(f"Found {len(urls)} external Mixkit URLs in ServiceDetailPage.jsx.")

    # Define exact replacements dictionary
    replacements = {
        "mixkit-matrix-style-glowing-digital-code-loop-42867-large.mp4": "/videos/web-dev.mp4",
        "mixkit-retro-futuristic-grid-background-loop-42207-large.mp4": "/videos/software-dev.mp4",
        "mixkit-glowing-connection-lines-on-a-dark-background-loop-42200-large.mp4": "/videos/api-integrations.mp4",
        "mixkit-glowing-cube-made-of-light-beams-loop-42198-large.mp4": "/videos/ai-automation.mp4",
        "mixkit-flowing-energy-particles-glowing-lines-42202-large.mp4": "/videos/marketing.mp4",
        "mixkit-abstract-laser-lights-background-loop-42201-large.mp4": "/videos/app-dev.mp4",
        "mixkit-futuristic-scifi-cyberpunk-interface-loop-42203-large.mp4": "/videos/software-dev.mp4",
        "mixkit-server-room-rack-lights-blinking-loop-42206-large.mp4": "/videos/hosting.mp4",
        "mixkit-abstract-connected-dots-neural-network-42205-large.mp4": "/videos/ai-rag.mp4",
        "mixkit-abstract-animation-of-a-circuit-board-loop-42199-large.mp4": "/videos/app-dev.mp4",
        "mixkit-cyber-security-hologram-scanning-loop-42204-large.mp4": "/videos/security.mp4",
        "mixkit-rotating-planet-earth-in-outer-space-42358-large.mp4": "/videos/aws-devops.mp4",
        "mixkit-neon-abstract-soundwave-frequency-loop-42868-large.mp4": "/videos/ivr.mp4"
    }

    # First do exact mappings
    replaced_count = 0
    for key, val in replacements.items():
        url_pattern = f"https://assets.mixkit.co/videos/preview/{key}"
        if url_pattern in content:
            content = content.replace(url_pattern, val)
            replaced_count += 1

    # Let's clean up any remaining mixkit URLs matching ecommerce and replace them cleanly with relevant local counterparts
    # Web Dev Category (web-dev)
    # Let's map any remaining fuchsias or grids in Web Dev or App Dev
    # Since ServiceDetailPage.jsx has specific categories, let's write it out
    
    # We can also do a smart check on the activeService or subServices to make sure they are fully local
    # Let's check if there are still any external mixkit URLs
    remaining = re.findall(r'https://assets\.mixkit\.co/videos/preview/mixkit-[a-zA-Z0-9\-_]+\.mp4', content)
    print(f"Replaced {replaced_count} categories. Remaining mixkit URLs: {len(remaining)}")
    
    # Let's do a general fallback for any remaining mixkit URLs. We can map them based on keywords or themes
    # or just replace them by matching keywords
    for url in remaining:
        filename = url.split('/')[-1]
        replaced = False
        for key, val in replacements.items():
            if key in filename:
                content = content.replace(url, val)
                replaced = True
                break
        if not replaced:
            # Fallback based on keywords
            if 'matrix' in filename or 'code' in filename:
                content = content.replace(url, "/videos/web-dev.mp4")
            elif 'circuit' in filename or 'board' in filename or 'laser' in filename:
                content = content.replace(url, "/videos/app-dev.mp4")
            elif 'interface' in filename or 'cyber' in filename or 'grid' in filename:
                content = content.replace(url, "/videos/software-dev.mp4")
            elif 'server' in filename:
                content = content.replace(url, "/videos/hosting.mp4")
            elif 'planet' in filename or 'earth' in filename or 'space' in filename:
                content = content.replace(url, "/videos/aws-devops.mp4")
            elif 'particle' in filename or 'energy' in filename:
                content = content.replace(url, "/videos/marketing.mp4")
            elif 'neural' in filename or 'network' in filename or 'dots' in filename:
                content = content.replace(url, "/videos/ai-rag.mp4")
            elif 'soundwave' in filename or 'audio' in filename or 'voice' in filename:
                content = content.replace(url, "/videos/ivr.mp4")
            elif 'connection' in filename or 'lines' in filename:
                content = content.replace(url, "/videos/api-integrations.mp4")
            elif 'cube' in filename or 'light' in filename:
                content = content.replace(url, "/videos/ai-automation.mp4")
            elif 'security' in filename or 'hologram' in filename:
                content = content.replace(url, "/videos/security.mp4")
            else:
                # Default fallback
                content = content.replace(url, "/videos/web-dev.mp4")

    # Double check if any remain
    final_check = re.findall(r'https://assets\.mixkit\.co/videos/preview/mixkit-[a-zA-Z0-9\-_]+\.mp4', content)
    print(f"Final check: {len(final_check)} external URLs remaining.")

    # Save changes
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("ServiceDetailPage.jsx updated successfully with local video paths!")

if __name__ == '__main__':
    run_replacements()
