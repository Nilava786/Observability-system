# Complete Observability System (Metrics, Logs & Traces)

This project sets up a complete observability stack using **Prometheus** for metrics, **Grafana** for visualization, **Loki** for log aggregation, and **Jaeger** for distributed tracing. Everything is orchestrated with **Docker Compose**, making it easy to spin up and explore observability tools locally.

---

## ✨ Stack Overview

| Component   | Purpose                         | Port        |
|------------|----------------------------------|-------------|
| Prometheus | Metrics collection and alerting | `9090`      |
| Grafana    | Dashboards and visualizations   | `3000`      |
| Loki       | Log aggregation                 | `3100`      |
| Jaeger     | Distributed tracing             | `16686` (UI)<br>`16685` (gRPC) |
| App        | Sample app emitting telemetry   | `depends` on config |

---

## 🔧 Prerequisites

- Docker
- Docker Compose
  
Start the stack

docker-compose up -d
Access the tools


Tool	URL
Grafana	http://localhost:3000
Prometheus	http://localhost:9090
Loki	http://localhost:3100
Jaeger	http://localhost:16686

🧪 Features

Pre-configured Grafana dashboards for Prometheus, Loki, and Jaeger

Prometheus Alertmanager integration (optional)

Jaeger tracing from instrumented apps

Log queries using Loki via Grafana Explore

Everything runs in Docker Compose for fast setup
