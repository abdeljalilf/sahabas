from db.database import create_connection

def get_sahabas():
    connection = create_connection()
    if connection is None:
        return []  # Renvoie une liste vide si la connexion échoue
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT link_source, sahabi_name, definition, remarques FROM sahabis")  # Assurez-vous que les noms correspondent
        sahabas = cursor.fetchall()
        return sahabas
    except Exception as e:
        print(f"L'erreur '{e}' s'est produite lors de la récupération des sahabas")
        return []  # Renvoie une liste vide en cas d'erreur
    finally:
        cursor.close()
        connection.close()
