from flask import Flask, render_template
import threading
import webbrowser

app = Flask(__name__)

@app.route('/')
def envelope():
    return render_template('initial.html')

def open_browser():
    webbrowser.open_new('http://127.0.0.1:5000/')

if __name__ == '__main__':
    threading.Timer(1, open_browser).start()  # Open browser after 1 second
    app.run(debug=True)