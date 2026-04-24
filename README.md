# 🦶 MAX PIE — Clínica de Podología

Sitio web oficial de **MAX PIE**, una clínica especializada en podología clínica. Desarrollado como una aplicación web full-stack moderna con React en el frontend y Node.js/Express en el backend.

---

## ✨ Funcionalidades

- **Página de inicio** con hero, servicios destacados, sección "quiénes somos" y testimonios de pacientes.
- **Catálogo de servicios** consultado desde una API REST.
- **Página "Nosotros"** con información del equipo y la clínica.
- **Formulario de contacto** conectado al backend.
- **Botón de WhatsApp** flotante para contacto directo.
- Diseño completamente **responsivo** para móvil, tablet y escritorio.
- Navegación SPA (Single Page Application) con React Router.

---

## 🛠️ Stack Tecnológico

### Frontend (`/client`)
| Tecnología | Uso |
|---|---|
| React 19 | UI y componentes |
| Vite 8 | Bundler y servidor de desarrollo |
| React Router DOM 7 | Navegación entre páginas |
| Lucide React | Iconografía |
| CSS Vanilla | Estilos personalizados |

### Backend (`/server`)
| Tecnología | Uso |
|---|---|
| Node.js | Runtime de JavaScript |
| Express 5 | Framework HTTP y API REST |
| CORS | Control de acceso entre dominios |
| TypeScript | Tipado estático |

---

## 🗂️ Estructura del Proyecto

```
MAX PIE/
├── client/                  # Frontend React + Vite
│   ├── public/
│   │   └── images/          # Imágenes estáticas
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── TopBar.jsx
│   │   ├── pages/           # Páginas de la aplicación
│   │   │   ├── Home.jsx
│   │   │   ├── ServicesPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   └── ContactPage.tsx
│   │   ├── styles/          # Estilos por componente
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   └── nginx.conf
│
├── server/                  # Backend Express API
│   └── src/
│       ├── routes/          # Rutas de la API
│       │   ├── services.js
│       │   ├── testimonials.js
│       │   └── contact.js
│       ├── data/            # Datos estáticos JSON
│       │   ├── services.json
│       │   └── testimonials.json
│       └── server.js
│   └── Dockerfile
│
├── docker-compose.yml       # Orquestación de contenedores
└── README.md
```

---

## 🚀 Cómo correr el proyecto

### Opción 1: Con Docker (Recomendado)

Asegúrate de tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo.

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/max-pie.git
cd max-pie

# Construir y levantar todos los servicios
docker compose up --build -d
```

La aplicación estará disponible en:
- **Frontend:** http://localhost
- **Backend API:** http://localhost:3001

Para detener los contenedores:
```bash
docker compose down
```

---

### Opción 2: Desarrollo Local (Sin Docker)

**Requisitos:** Node.js 18+ instalado.

**1. Levantar el servidor (backend):**
```bash
cd server
npm install
npm run dev
```
El servidor correrá en `http://localhost:3001`.

**2. Levantar el cliente (frontend):**
```bash
cd client
npm install
npm run dev
```
El cliente correrá en `http://localhost:5173`.

---

## 🌐 API Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/health` | Estado del servidor |
| `GET` | `/api/services` | Lista de servicios de podología |
| `GET` | `/api/testimonials` | Testimonios de pacientes |
| `POST` | `/api/contact` | Envío del formulario de contacto |

---

## 📄 Variables de Entorno

### Cliente (`client/.env`)
```env
VITE_API_URL=http://localhost:3001/api
```

### Servidor (`server/.env`)
```env
PORT=3001
NODE_ENV=development
```

---

## 📝 Licencia

Este proyecto es privado. Todos los derechos reservados © MAX PIE Podología.
