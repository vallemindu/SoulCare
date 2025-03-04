Mental Health Chatbot - SoulCare
This is a Flask-based mental health chatbot designed to help users by providing responses to mental health queries and recommending video content based on user inputs. The chatbot uses a pattern-matching algorithm to identify user intent and responds accordingly.

Features
Login Page: Users can log in using predefined credentials.
Chatbot Interface: Users can interact with the chatbot in real-time.
Sentiment Analysis: Based on user responses, the system can provide feedback.
Feedback Page: Allows users to provide feedback about their experience.
Installation
Clone the repository:

git clone https://github.com/vallemindu/SoulCare
cd mental-health-chatbot
Create a virtual environment and activate it:

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install the required dependencies:

pip install -r requirements.txt
Run the application:

python app.py
Open your browser and go to http://127.0.0.1:5000 to use the chatbot.

MP4 Files
Please note that the MP4 video files used for recommendations are NOT included in this repository due to GitHub's file size limits. You can upload your own MP4 files based on your preferences.

Project Structure

├── app.py                 # Main Flask application

├── dataset.json           # Dataset for chatbot intents and responses

├── templates/
│   ├── login/
│   │   └── index.html     # Login page
│   ├── chatbot/
│   │   └── index.html     # Chatbot page
│   └── feedback/
│       └── index.html     # Feedback page


├── static/
│   ├── css/               # CSS files for styling
│   ├── js/                # JavaScript files for chatbot logic
│   ├── login/             # Static files (CSS/JS) for login page
│   ├── chatbot/           # Static files (CSS/JS) for chatbot page
│   ├── feedback/          # Static files (CSS/JS) for feedback page
└── README.md              # This file

Technologies Used
Flask: Web framework for Python
HTML/CSS/JavaScript: For the frontend
JSON: Used for storing chatbot intents and responses
Contributing
Feel free to fork this repository and submit pull requests. Feedback and suggestions are welcome!
