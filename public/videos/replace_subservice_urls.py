import re

def parse_and_update_subservices():
    filepath = "src/components/ServiceDetailPage.jsx"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # We will parse the serviceDetailsDataset using regular expressions or a state machine to replace the videoUrl of each subservice.
    # A robust way is to find the service blocks, get their themeId, and then replace each "videoUrl: ..." inside the subServices list.
    
    # Let's find each service block in the dataset
    # We can split by themeId to locate each service block
    blocks = content.split('themeId: "')
    header = blocks[0]
    
    new_blocks = []
    for block in blocks[1:]:
        # Extract themeId
        theme_id = block.split('"')[0]
        
        # Split block into subServices part and rest
        subservices_split = block.split('subServices: [')
        if len(subservices_split) < 2:
            new_blocks.append(block)
            continue
            
        block_before_subs = subservices_split[0]
        rest = subservices_split[1]
        
        # Now parse the subservices array
        # Subservices are items like: { name: "...", desc: "...", videoUrl: "..." }
        sub_items = rest.split('}')
        
        new_sub_items = []
        sub_idx = 0
        for item in sub_items[:-1]:
            # Replace the videoUrl inside this item
            # e.g., videoUrl: "/videos/web-dev.mp4"
            if 'videoUrl:' in item:
                new_video_path = f'"/videos/subservices/{theme_id}-{sub_idx}.mp4"'
                item_updated = re.sub(r'videoUrl:\s*["\']/videos/[a-zA-Z0-9\-_.]+\.mp4["\']', f'videoUrl: {new_video_path}', item)
                # Just in case it matches any other formats
                item_updated = re.sub(r'videoUrl:\s*["\']https?://[a-zA-Z0-9\-_./.]+\.mp4["\']', f'videoUrl: {new_video_path}', item_updated)
                new_sub_items.append(item_updated)
                sub_idx += 1
            else:
                new_sub_items.append(item)
                
        # Reconstruct the block
        rest_reconstructed = '}'.join(new_sub_items) + sub_items[-1]
        block_reconstructed = block_before_subs + 'subServices: [' + rest_reconstructed
        new_blocks.append(block_reconstructed)
        
    new_content = 'themeId: "'.join([header] + new_blocks)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("ServiceDetailPage.jsx successfully updated with unique local subservice paths!")

if __name__ == '__main__':
    parse_and_update_subservices()
