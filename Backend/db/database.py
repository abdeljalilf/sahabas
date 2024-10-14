import mysql.connector
from mysql.connector import Error

def create_connection():
    connection = None
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',  # Remplace par ton nom d'utilisateur MySQL
            password='Af1802Ie',  # Remplace par ton mot de passe MySQL
            database='sahabas_db'  # Remplace par le nom de ta base de données
        )
        print("Connexion réussie à la base de données")
    except Error as e:
        print(f"L'erreur '{e}' s'est produite")
    return connection
