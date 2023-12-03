from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory("../client/build", "index.html")

@app.route("/static/js/<path:filename>")
def static_js(filename):
    return send_from_directory("../client/build/static/js", filename)

@app.route("/static/css/<path:filename>")
def static_css(filename):
    return send_from_directory("../client/build/static/css", filename)

@app.route("/static/media/<path:filename>")
def static_media(filename):
    return send_from_directory("../client/build/static/media", filename)

@app.route("/static/img/<path:filename>")
def static_img(filename):
    return send_from_directory("../client/build/static/img", filename)

@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory("../client/build", "index.html")

if __name__ == "__main__":
    app.run(debug=True)