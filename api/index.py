from flask import Flask, request, jsonify
from flask_cors import CORS
import finnhub
import os

from controllers.stock_controller import create_stock_data
from controllers.economic_controller import FredPy

app = Flask(__name__)
CORS(app)

# Read the API key from the environment variable
fred_key = os.getenv("FRED_API")


current_stock = []

@app.route("/api/stocks", methods=["GET"])
def get_stock():
    return current_stock

@app.route("/api/stocks", methods=["POST"])
def create_stock():
    data = request.get_json()
    title = data.get("title")
    if not title:
        return {"error": "Title is required"}, 400

    result = create_stock_data(title)

    global current_stock
    if len(result["bs"]) > 0:
        current_stock = result
        return current_stock, 201
    else:
        return current_stock, 201

@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

if __name__ == "__main__":
    app.run()
