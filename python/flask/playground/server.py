from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html", times=3, color='lightblue')

@app.route('/<int:times>')
def box_amount(times):
    return render_template("index.html", times= times, color="lightblue")

@app.route('/<int:times>/<color>')
def box_amount_color(times, color):
    return render_template("index.html", times=times, color=color)

if __name__=='__main__':
    app.run(debug=True, port = 5001)