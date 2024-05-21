# Demo de Prueba Tenica en React 1
Esto vendria siendo una pequeño ejercicio basado en una prueba tecnica real.

## API's: 
- Random Fact:
- Cat Pics: 

## Iniciando el proyecto:
1- Inicializar el template VANILLA de Vite, para configurar el entorno de React desde 0.
```bash
    INPUT:
        > pnpm create vite@latest
    OUTPUT:
        > √ Project name: ... 04-PruebaTecnicaDemo   
        > √ Package name: ... 04-pruebatecnicademo
        > √ Select a framework: » Vanilla
        > √ Select a variant: » JavaScript
```
2- Instalamos el Plugin de Vite para React.js
```bash
    > pnpm install @vitejs/plugin-react -E
```
3- Instalamos las dependencias de React.js
```bash
    > pnpm install react react-dom -E
```
4- Creamos el archivo de [vite.config.js](./vite.config.js)
5- Creamos el punto de entrada en [main.js](./main.jsx) (Ahora llamado main.jsx para que el plugin interprete la transpilación)
6- Instalamos Eslinter Standard (ya configurado en la [carpeta madre](../package.json) del proyecto)
```bash
    > pnpm install standard -D
```
8- Inicializamos la el proyecto para ver si creamos correctamente el punto de entrada
```bash
    INPUT:
        > node --run dev
    OUTPUT ESPERADO:
        > VITE v5.2.11  ready in 630 ms

        > ➜  Local:   http://localhost:5173/
        > ➜  Network: use --host to expose
        > ➜  press h + enter to show help
```