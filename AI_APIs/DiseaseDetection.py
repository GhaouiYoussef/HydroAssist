from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from PIL import Image
import io
import torch
import uvicorn
import cv2
import numpy as np

app = FastAPI()

# Load YOLO model
model = torch.hub.load('ultralytics/yolov5', 'custom', path='best.pt')

@app.post("/detect-disease/")
async def detect_disease(file: UploadFile = File(...)):
    # Read image file
    image = Image.open(io.BytesIO(await file.read()))

    # Perform detection
    results = model(image)

    # Draw bounding boxes and labels on the image
    results.render()  # updates results.imgs with boxes and labels

    # Convert image to bytes
    img_byte_arr = io.BytesIO()
    results.imgs[0].save(img_byte_arr, format='JPEG')
    img_byte_arr.seek(0)

    return StreamingResponse(img_byte_arr, media_type="image/jpeg")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    # Define a mapping from class IDs to disease names
    id2class = {0: 'Disease1', 1: 'Disease2', 2: 'Disease3'}

    # Example inference code

    @app.post("/detect-disease/")
    async def detect_disease(file: UploadFile = File(...)):
        # Read image file
        image = Image.open(io.BytesIO(await file.read()))
        image = np.array(image)

        # Perform detection
        results = model(image, imgsz=640, verbose=False, conf=0.25, augment=False, iou=0.4, max_det=500)[0]

        # Draw bounding boxes and predicted disease on the image
        for box, cls in zip(results.boxes.xyxy.cpu().numpy(), results.boxes.cls.cpu().numpy()):
            x1, y1, x2, y2 = box
            detected_class = id2class[int(cls)]
            cv2.rectangle(image, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 2)
            cv2.putText(image, detected_class, (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

        # Convert image to bytes
        _, img_encoded = cv2.imencode('.jpg', image)
        img_byte_arr = io.BytesIO(img_encoded.tobytes())
        img_byte_arr.seek(0)

        return StreamingResponse(img_byte_arr, media_type="image/jpeg")