
# Gestor Inscripciones Backend

Repositorio destinado al backend del Squad 6. Aceleradora POLO IT.

## Tecnologías Utilizadas

### Dependencias

```json
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.5.2",
    "morgan": "^1.10.0"
}
```

### Dependencias de Desarrollo

```json
"devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/morgan": "^1.9.9",
    "@types/node": "^22.2.0",
    "tsx": "^4.17.0",
    "typescript": "^5.5.4"
}
```

## Herramientas

REST Client: Utilizado para realizar peticiones a la base de datos y testearlas directamente desde Visual Studio Code.

## Instalación

Clona el repositorio.  
Instala las dependencias con `npm install`.  
Configura las variables de entorno en un archivo `.env`.  
Construye la carpeta dist con `npm run build`.
Ejecuta el servidor con `npm run dev`.

## Uso

Las peticiones a la API se pueden realizar utilizando REST Client en Visual Studio Code. La configuración de ejemplo se encuentra en el archivo `videos.http`.