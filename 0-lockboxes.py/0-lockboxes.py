#!/usr/bin/python3
'''The LockBoxes Challenge'''


def canUnlockAll(boxes):
    '''To determines if all the boxes can be opened or not
    Returns:
        True: all boxes can be opened
        False: not all boxes can be opened
    '''
    length = len(boxes)
    keys = set()
    opened_boxes = []
    a = 0

    while a < length:
        oldi = a
        opened_boxes.append(a)
        keys.update(boxes[a])
        for key in keys:
            if key != 0 and key < length and key not in opened_boxes:
                a = key
                break
        if oldi != a:
            continue
        else:
            break

    for a in range(length):
        if a not in opened_boxes and a != 0:
            return False
    return True
