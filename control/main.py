from fastapi import FastAPI
import requests
import uvicorn

app = FastAPI()

def criar_lista_asteroides(resposta_req):
    asteroides_json= resposta_req["near_earth_objects"]
    asteroides= [asteroide for chave, valor in asteroides_json.items() for asteroide in valor]
    print(asteroides)


@app.get("/insta/")
async def root():
    url ="https://api.nasa.gov/planetary/apod?api_key=bxDdukeopxAQIoMaJftdRF4hqTBhB8XqClZqvk6C"
    r = requests.get(url)
    return r.json()

@app.get("/asteroides/")
async def datas(start_date:str,end_date:str):
    params = {
        'start_date': start_date,
        'end_date': end_date,
        'api_key': "Tfopw01qOQ2a6GV7yozQDZBxwIhsoToMKPz1JDiH"
    }
    
    url =f"https://api.nasa.gov/neo/rest/v1/feed?"
    r = requests.get(url, params=params)
    criar_lista_asteroides(r.json())
    return r.json()

if __name__=="__main__":
    
    uvicorn.run(app,host="127.0.0.1",port=8000)