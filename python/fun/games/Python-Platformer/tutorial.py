import os
import random
import math
import pygame
from os import listdir
from os.path import isfile, join

pygame.init()

pygame.display.set_caption("Platformer")

BG_COLOR = (255, 255, 255)
WIDTH, HEIGHT = 1000, 800
FPS = 60
PLAYER_VL = 5  # player speed

window = pygame.display.set_mode((WIDTH, HEIGHT))


def get_background(name):
    image = pygame.image.load(join('assets', 'Background', name))
    _, _, width, height = image.get_rect()
    tiles = []

    for i in range(WIDTH // width + 1):
        for j in range(HEIGHT // height + 1):
            pos = [i * width, j * height]
            tiles.append(pos)

    return tiles, image


def main(window):
    clock = pygame.time.Clock()
    background = get_background('Blue.png')

    run = True
    while run:
        # ensuring it runs at a specified number of frames per second (FPS).
        clock.tick(FPS)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                break

    pygame.quit()
    quit()


# In Python, the __name__ variable is a special variable
# that holds the name of the current module.
# When a Python module is run directly as the main program,
# its __name__ value is set to "__main__".
# This allows you to write code that should only be executed
# when the module is run directly,
# and not when it is imported as a module by another script.
if __name__ == "__main__":
    main(window)
