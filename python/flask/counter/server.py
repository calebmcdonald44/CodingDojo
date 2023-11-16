from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "lfsdkj3b5bbj7h2io3551z"


@app.route('/')
def load():
    if not 'count' in session:
        session['count'] = 0
    return render_template('index.html')

@app.route('/count')
def count_increase():
    session['count'] += 1
    return redirect('/')

@app.route('/reset')
def reset_count():
    session['count'] = 0
    return redirect('/')

if __name__=="__main__":  
    app.run(debug=True, port = 5001) 