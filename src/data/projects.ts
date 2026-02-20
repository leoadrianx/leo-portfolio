import { type Project } from "./types";

export const projects: Project[] = [
  {
    title: "Eralink ERP Platform (In Development)",
    description:
      "Architecting a modular, microservices-based ERP platform for industrial complexes, focused on scalability, distributed communication, domain-driven design, and long-term maintainability across enterprise environments.",
    tags: ["C#", "ASP.NET Core", "Angular", "SQL Server", "Microservices"],
  },
  {
    title: "Product Authenticity & Serialization System | GoldenBearing",
    description:
      "Designed and implemented a web-based product authentication and unique code generation system, replacing manual Excel/Access workflows with scalable APIs to manage code lifecycle, validation, and industrial traceability.",
    tags: ["ASP.NET Core", "Angular", "SQL Server", "REST API"],
  },
  {
    title: "Customer Loyalty Platform | GoldenBearing",
    description:
      "Developed a scalable reward and point management platform with secure backend services, enabling customer engagement, automated score calculation, and lifecycle management of loyalty programs.",
    tags: ["C#", "ASP.NET Core", "Angular", "SQL Server"],
  },
  {
    title: "Embedded Geoelectric Device – RS-999",
    description:
      "Engineered a high-reliability geoelectric device in Embedded C with SOLID principles, FAT file system, microSD support, and HMI interface design, achieving 99.9% uptime in field testing environments.",
    tags: ["Embedded C", "HMI", "FAT File System", "System Design"],
  },
  {
    title: "Seismograph System – SPSEISw Series",
    description:
      "Designed and developed scalable seismic data acquisition systems supporting up to 16 channels, real-time Wi-Fi transmission, high-speed ADC integration, and Windows-based monitoring applications.",
    tags: ["Embedded C", "C# WPF", "SPI", "USART", "Wi-Fi"],
  },
  {
    title: "Smart Home Control Platform | FTA",
    description:
      "Designed a modular smart home control system with dual configuration (Web Panel & Mobile App), IO modules, RGB controllers, and network communication via NRF24L01, ENC28J60, Thread, and uIP stack.",
    tags: ["Embedded Systems", "IoT", "API Design", "Networking"],
  },
  {
    title: "Industrial Automation & Unique Code Migration",
    description:
      "Led the transformation of legacy manual industrial workflows into structured web-based automation systems, introducing scalable architecture, improved operational efficiency, and process standardization.",
    tags: ["System Architecture", "Process Engineering", "ASP.NET Core"],
  },
  {
    title: "FPGA-Integrated Industrial Printer System",
    description:
      "Managed reverse engineering and localization of dot-matrix printers, integrating FPGA with microcontroller via EBI to optimize processing speed, memory access, and overall system performance.",
    tags: ["FPGA", "Microcontroller", "Hardware Design", "Embedded C"],
  },
  {
    title: "Cloud Server Motherboard & NFC Access Control",
    description:
      "Contributed to the design of a cloud server motherboard and NFC-based access control systems, including GSM-based door controllers and OTA libraries for ATxmega microcontrollers.",
    tags: ["ATxmega", "NFC", "GSM", "OTA", "Hardware Architecture"],
  },
];
