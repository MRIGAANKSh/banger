from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/index')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return '<h1>Hello, World</h1>'

if __name__=="__main__":
    app.run()