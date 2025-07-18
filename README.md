# Flowbit Multi-Tenant SaaS Platform

Flowbit is a containerized SaaS platform built with microfrontend architecture, multi-tenant JWT authentication, and n8n workflow automation.

---

## 🚀 Features

-  JWT-based authentication with tenant isolation
-  React + Tailwind shell + microfrontends (Module Federation)
-  Node.js + Express + Prisma backend
-  MongoDB for data persistence
-  n8n for workflow automation
-  Docker Compose for orchestration

---

## 📦 Project Structure

```
flowbit/
│
├── backend/               # Express + Prisma backend
├── frontend-shell/        # React shell application
├── support-tickets-app/   # Microfrontend (example module)
├── docker-compose.yml     # Container orchestration
└── seed/                  # DB seed scripts
```

---

## 🐳 Setup (Local Dev with Docker)

###  Clone the Repo

```bash
git clone https://github.com/your-username/flowbit.git
cd flowbit
```

###  Add `.env` Files

Create `.env` files for the backend and any other services if required.

Example `.env` (backend):

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/flowbit
JWT_SECRET=supersecret
SHARED_SECRET=uX8!pV3m8Lz9@eQ7fC$2rT1y&Wg6NbHd
```



###  Run Docker Compose

```bash
docker-compose up --build
```

---

## 🔗 Services Running

| Service             | URL                         |
|---------------------|-----------------------------|
| Frontend Shell      | http://localhost:3000       |
| Support Tickets App | http://localhost:3001       |
| Backend API         | http://localhost:5000       |
| MongoDB             | mongodb://localhost:27017   |
| n8n Automation      | http://localhost:5678       |

---

## 🧪 Test Users

Seed script includes a test tenant and admin user. Update `seed/seed.js` as needed.

---


## ✅ TODO / Roadmap

- Add role-based access control (RBAC)
- Integrate Stripe for tenant billing
- Tenant-level analytics dashboard
- Microfrontend lazy loading + auth guards

