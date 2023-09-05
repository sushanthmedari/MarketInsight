import finnhub
import requests
import json
import os

api_key = os.getenv("FINNHUB_KEY")
alpaca_key = os.getenv("ALPACA_KEY")
alpaca_secret = os.getenv("ALPACA_SECRET")

finnhub_client = finnhub.Client(api_key=api_key)

def create_stock_data(title):
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

    start_date = "2023-08-01T00:00:00Z"
    end_date = "2023-08-30T11:59:59Z"

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

    return result
