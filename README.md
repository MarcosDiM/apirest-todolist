# 📋 Sprint Task Manager API - Java & MongoDB

API RESTful desarrollada en Java que permite gestionar Backlogs, Sprints y Tareas. Pensada para organizar proyectos ágiles mediante la creación de tareas, agrupación en sprints y gestión de un backlog dinámico.

## 📌 Tecnologías utilizadas

- **Node.js**  
- **Express.js**  
- **Mongoose** (ODM para MongoDB)  
- **dotenv** (variables de entorno)  
- **express-validator** (validación de requests)  
- **Swagger (swagger-jsdoc + swagger-ui-express)**
- **Nodemon** (hot reload en desarrollo)

## 📖 Entidades del sistema

- **Backlog**: listado general de tareas pendientes para un proyecto.
- **Sprint**: agrupación de tareas a realizar en un ciclo de trabajo determinado.
- **Task**: tarea individual, con nombre, descripción, estado y fecha limite.

## 🚀 Funcionalidades

- Crear, leer, actualizar y eliminar Sprints y Tasks.
- Asociar tareas a sprints o al backlog.
- Gestionar tareas de manera individual en el sprint cambiando de estado entre pendiente / en-proceso / completadas.
- Persistencia de datos en MongoDB.

## 📫 Autor

**Marcos Di Meco**  
📧 marcosdimecom@gmail.com  
📍 Mendoza, Argentina
