# Sistema de Monitoreo Industrial - Inyección de Plásticos

Este proyecto está diseñado para la centralización y monitoreo en tiempo real de máquinas de inyección de plástico. La solución permite la convivencia de tecnologías de diversas generaciones, integrando desde equipos de última gama hasta máquinas legacy (antiguas) que carecen de protocolos de comunicación estándar.

## 目的 (Objetivo)
Desarrollar una plataforma capaz de capturar datos operativos de un parque de maquinaria diverso, permitiendo la continuidad del flujo de trabajo entre dispositivos móviles (Android) y entornos de escritorio.

## 🚀 Características Principales
- **Integración Híbrida:** Soporte para protocolos de datos modernos y señales físicas digitales (I/O).
- **Compatibilidad Multi-Marca:** Diseño adaptable a controladores específicos como Battenfeld Unilog B2.
- **Sincronización en la Nube:** Integración total con Google Workspace para reportes y GitHub para el control de versiones del código.
- **Interfaz Adaptable:** Optimizado para dispositivos plegables (Galaxy Fold) y tablets de alta resolución (Tab S11 Ultra).

## 🛠️ Maquinaria Soportada
El sistema está siendo probado y adaptado para las siguientes marcas y modelos:

| Marca | Modelos / Controladores | Método de Integración |
| :--- | :--- | :--- |
| **Battenfeld** | Unilog B2 y modelos recientes | Protocolo / I/O Digital |
| **Haitian** | Modelos antiguos y de nueva generación | I/O Digital / Protocolo |
| **Engel** | Versiones con y sin Euromap | Señales Físicas / Protocolo |
| **Sumitomo / Demag** | Líneas estándar | Protocolo de Datos |
| **Otras** | CLF, LS, BMB, Multiplast, Niigata, Funky | Integración I/O Digital |

## 🔌 Integración de Hardware (Legacy Machines)
Para los equipos que no cuentan con comunicación de datos estándar (sin protocolo Euromap), el proyecto contempla la captura de señales físicas mediante:
- **Entradas Digitales:** Monitoreo de ciclos, alarmas y estado de la máquina (Encendido/Apagado).
- **Módulos I/O:** Conversión de señales de relevador/PLC a datos procesables por la aplicación.

## 📱 Entorno de Desarrollo y Dispositivos
El desarrollo se mantiene sincronizado para asegurar la funcionalidad en:
- **Oppo Reno 10** (Movilidad operativa).
- **Samsung Galaxy Fold 3** (Análisis de datos en pantalla extendida).
- **Samsung Galaxy Tab S11 Ultra** (Consola de supervisión principal).

## 📈 Roadmap (Avances)
- [x] Definición de arquitectura de la aplicación.
- [ ] Mapeo de señales físicas para máquinas Battenfeld Unilog B2.
- [ ] Sincronización de bases de datos con Google Sheets/Workspace.
- [ ] Pruebas de campo con señales I/O en máquinas Haitian antiguas.

---
© 2026 - Desarrollo de Monitoreo Industrial de Inyección
