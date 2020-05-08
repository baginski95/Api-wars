from flask import Flask, render_template, request, redirect, escape, session, url_for
import bcrypt
import requests

app = Flask(__name__)
app.secret_key = b'_5#2211aay2L"F4Q8z\n\xec]/'


@app.route("/", methods=['GET', 'POST'])
@app.route("/<button_id>", methods=['GET', 'POST'])
def start(button_id=None):
    if request.method != "POST":
        # or request.form['button-prev'] == 'https://swapi.dev/api/planets/?page=1'
        response = requests.get('https://swapi.dev/api/planets/').json()

        next_page = response['next']
        prev_page = response['previous']
        planets = response['results']
        print(planets)
        print(prev_page)

    else:
        if button_id == '0':
            print('wykonany if')
            response = requests.get(request.form['button-prev']).json()
            planets = response['results']
            next_page = response['next']
            prev_page = response['previous']
        else:
            print('wykonany else')
            response = requests.get(request.form['button-next']).json()
            planets = response['results']
            next_page = response['next']
            prev_page = response['previous']


    return render_template('index.html', planets=planets, next_page=next_page, prev_page=prev_page)


@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':

        new_user = dict(request.form)

        #data_manager.add_user(new_user)

        return redirect(url_for('start'))

    return render_template('registration_form.html')


if __name__ == "__main__":
    app.run(
        debug=True,
        # host='0.0.0.0',
        port=6969
    )

