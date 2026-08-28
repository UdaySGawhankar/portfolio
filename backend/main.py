from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Portfolio API")

# Update this array with your live Vercel URL
origins = [
    "http://localhost:3000",
    "https://portfolio-2zs2.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows any domain to submit the form
    allow_credentials=False, # Must be False when origins is "*"
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data structure expected from the frontend
class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def health_check():
    return {"status": "Backend API is online"}

@app.post("/contact")
def receive_message(msg: ContactMessage):
    # We will connect PostgreSQL here later. For now, it successfully receives the payload.
    return {"status": "success", "reply": f"Message received from {msg.name}"}