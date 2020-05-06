from flask import Flask, render_template, request, redirect, escape, session, url_for
import bcrypt
import requests

app = Flask(__name__)
app.secret_key = b'_5#2211aay2L"F4Q8z\n\xec]/'


@app.route("/")
def start():
    response = requests.get('https://swapi.dev/api/planets/').json()
    next_page = response['next']
    planets = response['results']
    print(planets)


    return render_template('index.html', planets=planets, next_page=next_page)


if __name__ == "__main__":
    app.run(
        debug=True,
        # host='0.0.0.0',
        port=6969
    )