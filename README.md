# 💇‍♀️ Studio Aris - Frontend

Aplicación web desarrollada con Angular para la gestión de un estudio de belleza **Studio Aris**. Permite administrar usuarios, citas, productos, servicios y ventas mediante una interfaz moderna conectada a una API REST.

---

## 🌐 Demo en producción

🔗 https://aris-system-vortex-88-8yfgf9ehw.vercel.app

---

## 🚀 Tecnologías utilizadas

* Angular
* TypeScript
* HTML5
* CSS3
* RxJS
* Angular Router
* HTTP Interceptors

---

## 🔐 Autenticación

El sistema implementa autenticación basada en JWT:

* Login de usuario
* Almacenamiento de token en localStorage
* Interceptor HTTP para envío automático del token
* Protección de rutas mediante Guards
* Redirección automática en errores 401/403

---

## 📌 Funcionalidades principales

### 🔑 Autenticación

* Inicio de sesión
* Manejo de roles (ADMIN / USER)

### 📊 Dashboard

* Visualización de métricas
* Resumen de ventas y citas

### 👤 Usuarios

* Listado de usuarios (ADMIN)

### 📅 Citas

* Crear, cancelar y atender citas
* Filtros por cliente y estado
* Dashboard de citas

### 💰 Ventas

* Registro de ventas
* Dashboard
* Filtros por fechas
* Reporte PDF

### 📦 Productos / Servicios (ADMIN)

* CRUD completo
* Búsqueda dinámica

---

## 🏗️ Arquitectura del proyecto

El proyecto sigue una arquitectura modular basada en separación de responsabilidades:

```id="arch1"
src/
 ├── app/
 │   ├── auth/          # Autenticación (login, módulo auth)
 │   ├── core/          # Lógica global
 │   │    ├── config/        # Configuración (API URL)
 │   │    ├── guards/        # Protección de rutas
 │   │    ├── interceptors/  # Interceptor JWT
 │   │    └── services/      # Servicios HTTP
 │   │
 │   ├── layout/        # Estructura visual
 │   │    ├── navbar/
 │   │    ├── sidebar/
 │   │    └── layout.component.*
 │   │
 │   ├── pages/         # Vistas principales del sistema
 │   │
 │   ├── app.routes.ts  # Definición de rutas
 │   └── app.config.ts  # Configuración global
 │
 ├── public/
 │   └── img/           # Recursos estáticos (logo, favicon)
```

## 🔗 Integración con Backend

El frontend consume una API REST desarrollada en Spring Boot.

📌 Backend desplegado en Railway
📌 Comunicación mediante HTTP (REST API)

Ejemplo:

```id="arch2"
GET /api/ventas/dashboard
```

## ⚙️ Configuración

Editar:

```id="arch3"
src/app/core/config/api.config.ts
```
Ejemplo:

```ts id="arch4"
export const API_CONFIG = {
  url: 'https://tu-backend.railway.app'
};
```
## ▶️ Ejecución local

```bash id="arch5"
npm install
ng serve
```

Abrir en navegador:
```id="arch6"
http://localhost:4200
```
## ☁️ Despliegue

Frontend desplegado en Vercel.
---
## 🎨 Diseño

* Estilo minimalista
* Colores corporativos: marrón, beige y blanco
* Interfaz enfocada en experiencia de usuario

---
## 👨‍💻 Autor

Desarrollado por [Tu Nombre]

Proyecto Fullstack (Angular + Spring Boot) orientado a portafolio profesional.
