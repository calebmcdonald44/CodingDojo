from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    form_request = request.form
    strawberry_total = int(request.form['strawberry'])
    raspberry_total = int(request.form['raspberry'])
    apple_total = int(request.form['apple'])
    fruit_total = strawberry_total + raspberry_total + apple_total
    print(f"Charging {form_request['firstName']} for {fruit_total} fruits.")
    return render_template("checkout.html", fruit_total=fruit_total, strawberry_total=strawberry_total, raspberry_total=raspberry_total, apple_total=apple_total, form_request=form_request)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    