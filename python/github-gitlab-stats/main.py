from typing import Union
from fastapi import FastAPI
import requests

app = FastAPI()


@app.get("/{username}")
async def read_userstats(username: str):
    r = requests.get("http://127.0.0.1:3001")
    print(r)
    return r.json()


@app.get("/")
async def read_root():
    return {"msg": "Hello World"}
