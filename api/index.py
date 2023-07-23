from flask import Flask, request, jsonify
from flask_cors import CORS
import finnhub
import os

app = Flask(__name__)
CORS(app)

# Read the API key from the environment variable
api_key = os.getenv("API_KEY")

# Setup client
finnhub_client = finnhub.Client(api_key=api_key)

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
    
    financials = finnhub_client.financials_reported(symbol=title, freq='annual')
    data = financials["data"]

    bs_data = {}
    cf_data = {}
    ic_data = {}

    for entry in data:
        if "bs" in entry["report"]:
            bs_data[entry["year"]] = entry["report"]["bs"]

        if "cf" in entry["report"]:
            cf_data[entry["year"]] = entry["report"]["cf"]

        if "ic" in entry["report"]:
            ic_data[entry["year"]] = entry["report"]["ic"]

    result = {
        "bs": bs_data,
        "cf": cf_data,
        "ic": ic_data
    }
    if len(result["bs"]) > 0:
        current_stock.append(result)
        return result, 201
    else:
        return result, 201

    

@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}


if __name__ == "__main__":
    app.run()
