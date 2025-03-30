# API de CRUD para Tareas

## Introducción

Esta es una API de CRUD para tareas que contengan título y descripción. Es un proyecto pequeño con conexión a una base de datos SQL, alojado y desplegado en Vercel, usando **Node.js** como base junto con el ORM **Sequelize** para manejar la conexión a la base de datos por medio de variables de entorno.

## Endpoints y Funciones

### 1. Obtener todas las tareas

**Endpoint:** `GET /tareas`

**Descripción:** Obtiene la lista de todas las tareas almacenadas en la base de datos.

**Respuesta exitosa (200):**

```json
[
  {
    "pk_id_tarea": 1,
    "titulo": "Comprar comida",
    "descripcion": "Comprar frutas y verduras",
    "estado": true
  },
  {
    "pk_id_tarea": 2,
    "titulo": "Estudiar Node.js",
    "descripcion": "Revisar documentación oficial",
    "estado": true
  }
]
```

---

### 2. Crear una nueva tarea

**Endpoint:** `POST /tareas`

**Descripción:** Agrega una nueva tarea a la base de datos.

**Cuerpo de la solicitud:**

```json
{
  "titulo": "Nueva tarea",
  "descripcion": "Descripción de la tarea"
}
```

**Respuesta exitosa (201):**

```json
{
  "pk_id_tarea": 3,
  "titulo": "Nueva tarea",
  "descripcion": "Descripción de la tarea",
  "estado": true
}
```

---

### 3. Actualizar una tarea

**Endpoint:** `PUT /tareas/:id`

**Descripción:** Modifica el título o descripción de una tarea existente.

**Parámetros:** `id` (ID de la tarea a actualizar)

**Cuerpo de la solicitud:**

```json
{
  "titulo": "Tarea actualizada",
  "descripcion": "Nueva descripción de la tarea",
}
```

**Respuesta exitosa (200):**

```json
{
  "pk_id_tarea": 3,
  "titulo": "Tarea actualizada",
  "descripcion": "Nueva descripción de la tarea",
  "estado": true
}
```

**Error si la tarea no existe (404):**

```json
{
  "message": "Tarea no encontrada"
}
```

---

### 4. Eliminar una tarea

**Endpoint:** `DELETE /tareas/:id`

**Descripción:** Elimina una tarea por su ID.

**Parámetros:** `id` (ID de la tarea a eliminar)

**Respuesta exitosa (200):**

```json
{
  "message": "Tarea eliminada"
}
```

**Error si la tarea no existe (404):**

```json
{
  "message": "Tarea no encontrada"
}
```

## Tecnologías Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Vercel (para despliegue)

## Instalación y Ejecución Local

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/tuusuario/api-tareas.git
   cd api-tareas
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Configurar variables de entorno (`.env`):

   ```ini
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=nombre_base_de_datos
   DB_USER=usuario
   DB_PASS=contraseña
   ```

4. Ejecutar en modo desarrollo:

   ```sh
   npm run dev
   ```

5. Acceder a la API en `http://localhost:3000`

## Autor

Proyecto desarrollado por Marko Adrian Sanchez Cruz (https://github.com/Msanche).

