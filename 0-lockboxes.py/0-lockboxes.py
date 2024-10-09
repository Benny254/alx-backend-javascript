#!/usr/bin/python3
'''
Module Docs
'''


def canUnlockAll(boxes):
    '''
    Function Docs
    '''
    if (boxes):
        numOfBoxes = len(boxes)
        setOfKeys = {0}
        setOfKeys.update(boxes[0])
        visitedBoxes = {0}
        while True:
            newBoxVisited = False
            keys = setOfKeys.copy()
            # print(f"Set of keys copy = {keys}")
            for key in keys:
                # print(f"Key in loop = {key}")
                if key not in visitedBoxes.copy() and key < numOfBoxes:
                    # print(f"box opened = {key}")
                    setOfKeys.update(boxes[key])
                    visitedBoxes.add(key)
                    # print(f"set of Keys updated = {setOfKeys}")
                    # print(f"visitedBoxes updated = {visitedBoxes}")
                    newBoxVisited = True
            if not newBoxVisited:
                break
        for n in range(numOfBoxes):
            if n not in setOfKeys:
                return False
        return True
    return False
