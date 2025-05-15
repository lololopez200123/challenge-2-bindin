# Challenge Frontend - Restaurant App

## Descripción

Este proyecto es una solución a un desafío frontend que consiste en implementar vistas a partir de wireframes de alta fidelidad para una aplicación de restaurantes. El desafío requiere seleccionar 3 wireframes e implementarlos con precisión visual y responsividad.

## Requisitos del Challenge

### Requisitos funcionales:

- La interfaz se ajusta a los wireframes seleccionados, manteniendo la mayor similitud posible
- Diseño mobile first y responsive, visualizándose correctamente en cualquier tamaño de pantalla

### Requisitos técnicos:

- **Obligatorios**: Vue 3 con Composition API, TypeScript y Tailwind CSS
- **Opcionales**: Nuxt UI

### Aclaraciones:

- El enfoque principal es la fidelidad visual, no la funcionalidad completa
- Se permite el uso de librerías de componentes UI headless para facilitar el desarrollo

## Wireframes Implementados

Para este challenge, se han implementado las siguientes vistas:

1. Home con listado de restaurantes
2. Vista de detalle de restaurante
3. Vista de filtros

## Tecnologías Utilizadas

- Vue 3 + TypeScript
- Vite como bundler
- Tailwind CSS para estilos
- Composition API

## Estructura del Proyecto

El proyecto sigue una arquitectura modular con componentes reutilizables:

- **Base**: Componentes fundamentales como `FilterChip` y `SearchBar`
- **Features**: Componentes específicos organizados por características
- **Layout**: Componentes de estructura como cabeceras y pies de página
- **Views**: Vistas principales de la aplicación

## Ejecución Local

```bash
# Instalar dependencias
npm install
# o
pnpm install

# Iniciar servidor de desarrollo
npm run dev
# o
pnpm dev
```
