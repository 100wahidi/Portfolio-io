# 📈 Portfolio.io — Quantitative & AI Engineering Portfolio

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 📌 Project Overview

**Portfolio.io** is a full-stack, quantitative finance and AI engineering portfolio platform built with **React**, **Tailwind CSS**, and **Supabase PostgreSQL**, inspired by modern QRT dark-themed trading desk interfaces. Designed for high scannability and technical depth, the application showcases quantitative trading tools, fixed-income yield curve analytics, deep learning models, and GenAI microservices while featuring interactive full-screen diagram Lightboxes, smooth tab navigation, and live data synchronization.

---

## 💡 Highlighted Feature: Real-Time DB Project Toast

Upon first arrival, the application dynamically displays a floating bottom-right toast notification highlighting your latest research or SaaS project.

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
