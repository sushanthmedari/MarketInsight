from flask import Flask, request, jsonify
from flask_cors import CORS
import finnhub
import os
import requests
import json

app = Flask(__name__)
CORS(app)

# Read the API key from the environment variable
api_key = os.getenv("FINNHUB_KEY")
alpaca_key = os.getenv("ALPACA_KEY")
alpaca_secret = os.getenv("ALPACA_SECRET")

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
    news_data = {}

    for entry in data:
        if "bs" in entry["report"]:
            bs_data[entry["year"]] = entry["report"]["bs"]

        if "cf" in entry["report"]:
            cf_data[entry["year"]] = entry["report"]["cf"]

        if "ic" in entry["report"]:
            ic_data[entry["year"]] = entry["report"]["ic"]

    global alpaca_key, alpaca_secret
    start_date = "2023-07-01T00:00:00Z"
    end_date = "2023-07-30T11:59:59Z"

    url = f'https://data.alpaca.markets/v1beta1/news?start={start_date}&end={end_date}&symbols={title}'
    headers = {'content-type': 'application/json', 'Apca-Api-Key-Id': alpaca_key, 'Apca-Api-Secret-Key': alpaca_secret}
   
    response = requests.get(url, headers=headers)
    news_data = json.loads(response.text)

    news_data = news_data.get("news", [])

    result = {
        "bs": bs_data,
        "cf": cf_data,
        "ic": ic_data,
        "news": news_data
    }
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
