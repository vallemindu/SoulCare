from flask import Flask, request, jsonify, render_template,url_for,session,redirect
import json
import random
import re
app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Necessary for session management

# Load JSON dataset
with open('dataset.json', 'r') as f:
    json_data = json.load(f)
    
# Define a function to process user input and respond with a bot message
def process_input(user_input):
    intents = json_data.get('intents', [])
    for intent in intents:
        for pattern in intent.get('patterns', []):
            if re.search(pattern, user_input, re.IGNORECASE):
                responses = intent.get('responses', [])
                return random.choice(responses)
    return 'I didn\'t understand that. Can you please rephrase?'

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.get_json().get('message')
    bot_response = process_input(user_input)
    return jsonify({'response': bot_response})

@app.route('/', methods=['GET'])
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['email']
        password = request.form['password']
        
        # Mock user validation
        if username == 'test@example.com' and password == 'password':
            session['user'] = username
            return redirect(url_for('chatbot'))
        else:
            return render_template('login/index.html', error='Invalid credentials. Please try again.')
    
    return render_template('login/index.html')

@app.route('/chatbot', methods=['GET'])
def chatbot():
    return render_template('chatbot/index.html')
@app.route('/feedback')
def feedback():
    return render_template('feedback/index.html')
if __name__ == '__main__':
    app.run(debug=True)
