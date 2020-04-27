from flask import Flask, render_template, request, redirect, escape, session, url_for
import bcrypt
import psycopg2
from datetime import datetime

app = Flask(__name__)
app.secret_key = b'_5#2211aay2L"F4Q8z\n\xec]/'


@app.route("/")
def start():

    return render_template('index.html')




if __name__ == "__main__":
    app.run(
        debug=True,
        # host='0.0.0.0',
        port=6969
    )