import json
import pandas as pd
import requests
import os

fred_key = os.getenv("FRED_API")

class FredPy:

    def __init__(self, token=None):
        self.token = token
        self.url = "https://api.stlouisfed.org/fred/series/observations" + \
                    "?series_id={seriesID}&api_key={key}&file_type=json" + \
                    "&observation_start={start}&observation_end={end}&units={units}"

    def set_token(self, token):
        self.token = token


    def get_series(self, seriesID, start, end, units):

        # The URL string with the values inserted into it
        url_formatted = self.url.format(
            seriesID=seriesID, start=start, end=end, units=units, key=self.token
        )

        response = requests.get(url_formatted)

        return response 


fredpy = FredPy()

# Set the API key
fredpy.set_token(fred_key)

# Test getting the GDP series
data = fredpy.get_series(
    seriesID = 'GDP', 
    start = '2005-01-01',
    end = '2021-12-01', 
    units = 'pc1'
)

print(fred_key)