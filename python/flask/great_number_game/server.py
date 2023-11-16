from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "dap4J6kcZ23n0K49z"

@app.route('/')
def home():
    # print(session['justRight'])
    if not 'guess' in session:
        session['tooHigh'] = False
        session['tooLow'] = False
        session['justRight'] = False
    if session['justRight'] != False or not 'number' in session:
        session['number'] = random.randint(1, 100)
    print(session['number'])
    return render_template('index.html')

@app.route('/guess_check', methods = ['POST'])
def guess_checker():
    session['guess'] = int(request.form['guess'])
    if (session['guess']) > session['number']:
        return redirect('/high')
    elif (session['guess']) < session['number']:
        return redirect('/low')
    else:
        return redirect('correct')

@app.route('/high')
def too_high():
    session['tooLow'] = False
    session['justRight'] = False
    session['tooHigh'] = True
    return redirect('/')

@app.route('/low')
def too_low():
    session['tooHigh'] = False
    session['justRight'] = False
    session['tooLow'] = True
    return redirect('/')

@app.route('/correct')
def just_right():
    session['tooHigh'] = False
    session['tooLow'] = False
    session['justRight'] = True
    session['correctGuess'] = session['number']
    return redirect('/')

if __name__=='__main__':
    app.run(debug=True, port = 5001)
