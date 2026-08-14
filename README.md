# Portfolio.io — SWE portfolio

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 📌 Project Overview

Portfolio.io is a simple interface to respresent my project and experiences in a vulgarized way for recruiters, i used react and vite for synchronization and UI performance also deployment advantages .

---

## 💡 Highlighted Feature: Real-Time DB Project Toast

Upon first arrival, the application dynamically displays a floating bottom-right toast notification highlighting my latest project storaed inprojects_table/pg database, used parallelly for cv generation api. the database is hosted in supabase server .

### 🔄 Shared Supabase Architecture
Rather than relying on hardcoded static data, the portfolio connects directly to your hosted **Supabase PostgreSQL** database—specifically querying the shared `public.projects` table used across your **CV_GEN / Get_CV API** ecosystem.

```text
       +-------------------------------------------------------+
       |             Supabase PostgreSQL Database              |
       |                   (public.projects)                   |
       +---------------------------+---------------------------+
                                   |
                  +----------------+----------------+
                  |                                 |
                  v                                 v
   +------------------------------+  +------------------------------+
   |   Portfolio.io Frontend      |  |     CV_GEN / Get_CV API      |
   | (React + Supabase JS Client) |  | (FastAPI + RAG Orchestrator) |
   +------------------------------+  +------------------------------+
