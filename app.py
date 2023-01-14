import os
from flask import Flask
from flask import(
    render_template
)

app = Flask(__name__)

app.config.from_mapping(
    SECRET_KEY = os.environ.get('SECRET_KEY'),
    DATABASE_HOST = os.environ.get('FLASK_DATABASE_HOST'),
    DATABASE_PASSWORD = os.environ.get('FLASK_DATABASE_PASSWORD'),
    DATABASE_USER = os.environ.get('FLASK_DATABASE_USER'),
    DATABASE = os.environ.get('FLASK_DATABASE')
)

# Guardar todas las imagenes
CARPETA = os.path.join('uploads')
app.config['CARPETA'] = CARPETA

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)