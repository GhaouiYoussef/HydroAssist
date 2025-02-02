from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class MonitoringData(BaseModel):
    pH: float
    EC: float
    ajout_solution_a: float
    ajout_solution_b: float
    ajout_acide_nitrique: float
    ajout_eau_osmosee: float

@app.post("/monitoring")
async def monitor(data: MonitoringData):
    return {
        "pH": data.pH,
        "EC": data.EC,
        "Ajout Solution A en litre": data.ajout_solution_a,
        "Ajout Solution B en litre": data.ajout_solution_b,
        "Ajout Acide nitrique": data.ajout_acide_nitrique,
        "Ajout d'eau osmosée par litre": data.ajout_eau_osmosee
    }