from flask import Flask, render_template, request, redirect, escape, session, url_for
import bcrypt
import requests
from util import json_response
import data_manager
import util

app = Flask(__name__)
app.secret_key = b'_5#2211aay2L"F4Q8z\n\xec]/'


@app.route("/", methods=['GET', 'POST'])
@app.route("/<button_id>", methods=['GET', 'POST'])
def start(button_id=None):

    if request.method != "POST":
        response = requests.get('https://swapi.dev/api/planets/').json()

        next_page = response['next']
        prev_page = response['previous']
        planets = response['results']

    else:
        if button_id == '0':
            response = requests.get(request.form['button-prev']).json()
            planets = response['results']
            next_page = response['next']
            prev_page = response['previous']
        else:
            response = requests.get(request.form['button-next']).json()
            planets = response['results']
            next_page = response['next']
            prev_page = response['previous']


    return render_template('index.html', planets=planets, next_page=next_page, prev_page=prev_page)


@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':

        new_user = dict(request.form)
        new_user['password'] = util.hash_password(new_user["password"])

        data_manager.insert_users(new_user)

        return redirect(url_for('start'))

    return render_template('registration_form.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        userdata_to_check = dict(request.form)
        password_from_database = data_manager.checkIfUserExists(userdata_to_check)

        if util.verify_password(userdata_to_check['password'], password_from_database):
            session["user"] = userdata_to_check["username"]
            print("password match")
            return redirect(url_for("start"))
        else:
            print("password DONT match")
            return redirect(url_for("start"))


    else:
        return render_template("login_form.html")


@app.route('/logout')
def logout_user():
    # print()
    session.pop("user",None)

    return redirect(url_for("start"))

@app.route('/get-users')
@json_response
def get_users():
    return data_manager.get_users()


if __name__ == "__main__":
    app.run(
        debug=True,
        # host='0.0.0.0',
        port=6969
    )

