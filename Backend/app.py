from flask import Flask, jsonify
from flask_cors import CORS
from models import get_sahabas

app = Flask(__name__)
CORS(app)  # Pour autoriser les requêtes Cross-Origin

@app.route('/', methods=['GET'])  # Ajout de la route pour la racine
def home():
    return jsonify({"message": "Bienvenue sur l'API Sahabas"}), 200

@app.route('/api/sahabas', methods=['GET'])
def sahabas():
    try:
        sahabas_list = get_sahabas()
        return jsonify(sahabas_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
