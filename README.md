# Portafolio de Adrian Auqui

Portafolio web personal con una interfaz inspirada en un escritorio. Las secciones se abren en ventanas interactivas desde la barra inferior. Está construido con Next.js, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js y npm compatibles con las versiones declaradas en `package.json`

## Instalación y uso

```bash
git clone https://github.com/Auky216/Portafolio.git
cd Portafolio
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para generar la versión de producción, ejecuta `npm run build`; para servirla localmente, usa `npm run start`.

## Estructura

- `src/app/page.tsx`: estado de las ventanas y página principal.
- `src/app/components/`: navegación y componentes visuales.
- `public/`: recursos estáticos.

## Estado

Proyecto personal en desarrollo. El fondo de la página principal se carga desde una URL externa; para una publicación estable conviene sustituirlo por un recurso propio o con licencia verificada. No se ha declarado una licencia de reutilización para el código y los recursos del portafolio.
