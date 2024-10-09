def canUnlockAll(boxes):
    opened = set([0])  # Start with the first box opened
    keys = boxes[0]    # Get the keys from the first box
    queue = keys       # Queue to manage boxes to explore
    
    while queue:
        key = queue.pop()
        if key not in opened and key < len(boxes):
            opened.add(key)
            queue.extend(boxes[key])
    
    return len(opened) == len(boxes)

