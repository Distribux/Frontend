# Distribux - Frontend

Distribux es una plataforma avanzada diseñada para ayudar a distribuidoras farmacéuticas a optimizar sus procesos de ventas, compras, gestión de inventarios y atención al cliente mediante el uso de inteligencia artificial. La interfaz frontend está desarrollada con tecnologías modernas como React, TypeScript y Tailwind CSS, proporcionando una experiencia rápida, intuitiva y eficiente para los usuarios.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Gestión de Ventas y Compras**: Manejo eficiente de las operaciones de compra y venta de productos farmacéuticos.
- **Control de Inventario**: Monitoreo y administración del inventario en tiempo real.
- **Atención al Cliente con IA**: Interacción con clientes mediante un sistema de inteligencia artificial.
- **Reportes e Insights**: Visualización de datos clave de la distribución y el inventario utilizando gráficos interactivos.
- **Interfaz Intuitiva**: Diseño responsivo y amigable, enfocado en la usabilidad para usuarios de distribuidoras.

## Tecnologías Utilizadas

Distribux se ha construido usando las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos, mejorando la robustez y mantenibilidad del código.
- **Vite**: Herramienta de construcción rápida y ligera, ideal para proyectos React.
- **ShadCN UI**: Librería de componentes de UI preconfigurados para una estética moderna.
- **React Router**: Para la navegación y manejo de rutas en la aplicación.
- **Tailwind CSS**: Framework de CSS de utilidad que permite un diseño rápido y personalizado.
- **Zod**: Herramienta de validación y tipado de esquemas.
- **Zustand**: Manejador de estado ligero y eficiente para React.
- **Recharts**: Biblioteca de gráficos para mostrar datos de manera visual.
- **Lucide React**: Paquete de íconos SVG.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: Versión 14 o superior.
- **npm** o **yarn**: Para manejar dependencias.

---

## Instalación

Para ejecutar el frontend de Distribux en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tuusuario/distribux-frontend.git
    ```

2. **Navega al directorio del proyecto**:

    ```bash
    cd distribux-frontend
    ```

3. Instala las dependencias:

    Usando npm:

    ```bash
    npm install
    ```

    O si prefieres usar yarn:

    ```bash
    yarn install
    ```

4. Ejecuta el proyecto:

    Usando npm:

    ```bash
    npm run dev
    ```

    O con yarn:

    ```bash
    yarn dev
    ```

5. Accede a la aplicación:

    Abre http://localhost:5173 en tu navegador.

## Estructura del Proyecto

La estructura del proyecto sigue una organización modular para facilitar la escalabilidad y mantenibilidad.

```plaintext
distribux/
├── public/               # Archivos públicos como el favicon
├── src/
│   ├── assets/           # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/       # Componentes reutilizables
│   ├── lib/              # Funciones y utilidades compartidas
│   ├── services/         # Lógica de comunicación con APIs y servicios 
│   ├── store/            # Estado global usando Zustand
│   ├── types/            # Tipos y esquemas de datos
│   ├── views/            # Vistas de la aplicación
│   ├── App.tsx           # Componente principal de la aplicación
│   └── main.tsx          # Punto de entrada de la aplicación
├── tailwind.config.js    # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
└── vite.config.ts        # Configuración de Vite
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- **`npm run dev`**: Inicia el servidor de desarrollo en [http://localhost:5173](http://localhost:5173).
- **`npm run build`**: Compila y optimiza la aplicación para producción, generando los archivos en el directorio `dist`.
- **`npm run preview`**: Inicia un servidor local para previsualizar la aplicación en su versión de producción.
- **`npm run lint`**: Ejecuta ESLint para analizar el código en busca de errores de sintaxis y asegurar la calidad del código.
- **`npm run format`**: Formatea automáticamente el código usando Prettier, asegurando consistencia en el estilo de escritura.

## Licencia

Distribux está bajo la licencia MIT. Puedes consultar los términos completos en el archivo [LICENSE](LICENSE).

Este proyecto es de código abierto, por lo que puedes utilizar, modificar y distribuir el software según los términos de la licencia MIT. Se agradece la atribución a los autores originales al compartir cualquier modificación.

## Contacto

Para consultas, sugerencias o contribuciones, puedes ponerte en contacto con el equipo de desarrollo de Distribux:

- **Email**: [rtwba1987@gmail.com](mailto:rtwba1987@gmail.com)

¡Gracias por tu interés en Distribux! Nos encantaría recibir tus comentarios y colaborar para hacer el proyecto aún mejor.
