from flask import Flask, send_from_directory, request, jsonify
import csv
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

tonality_dataset = {}
negations = {'не', 'ні', 'без', 'немає'}

with open('../tonality-data/tonSUM.2.0.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file, delimiter=',')
    for row in reader:
        word = row.get('Word//word combination', '').strip()  # Handle missing key
        tonality_scores = [int(row.get(f'Score {i}', 0)) if row.get(f'Score {i}', '').strip() else 0 for i in range(1, 8)]
        tonality_dataset[word] = tonality_scores

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

@app.route('/analyze-tonality', methods=['POST'])
def analyze_tonality():
    try:
        data = request.get_json()
        user_text = data.get('text', '').lower()

        words = user_text.split()
        total_score = 0
        word_count = 0
        negation = False

        for i, word in enumerate(words):
            word = word.strip('.,?!')
            
            # Check if the word is a negation word and toggle the flag
            if word in negations:
                negation = not negation
                continue
            
            if word in tonality_dataset:
                score = sum(tonality_dataset[word])
                
                # If there was a negation before this word, invert the score
                if negation:
                    score = -score
                    negation = False  # Reset the negation flag after using it
                
                total_score += score
                word_count += 1

        if word_count > 0:
            average_score = total_score / word_count
            tonality = "positive" if average_score >= 0.5 else "negative"
        else:
            tonality = "unknown"

        return jsonify({"tonality": tonality})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)