# Cerrajería Covarrubias

Sitio web para un negocio familiar de cerrajería con cuatro sucursales en Gómez Palacio, Torreón y Durango. Desarrollé este proyecto como un caso práctico para presentar sus servicios y facilitar que los clientes encuentren y contacten la sucursal que necesitan.

## Funcionalidades

- Página principal con presentación del negocio y servicios automotrices, residenciales y comerciales.
- Página independiente para cada sucursal.
- Contacto mediante llamadas, WhatsApp y Facebook.
- Direcciones, horarios y mapas de ubicación por sucursal.
- Diseño adaptable a celulares y computadoras, con identidad visual en azul marino y dorado.
- Iconos SVG para mantener una apariencia uniforme entre dispositivos.

## Tecnologías

HTML5 y CSS3, sin frameworks ni dependencias externas. Los mapas se integran mediante Google Maps.

## Organización del proyecto

```text
Paginaweb/
├── index.html             Página principal, servicios y preguntas frecuentes
├── css/
│   ├── inicio.css         Estilos generales, menú y portada
│   └── sucursal.css       Estilos compartidos por las cuatro sucursales
├── sucursales/
│   ├── matriz.html        Matriz de Gómez Palacio
│   ├── matamoros.html     Sucursal Matamoros, Gómez Palacio
│   ├── torreon.html       Sucursal Torreón
│   └── durango.html       Sucursal Durango
├── img/
│   └── logotipo.png       Logotipo del negocio
└── README.md              Presentación y documentación del proyecto
```

Cada sucursal contiene sus datos de contacto, horarios y ubicación directamente en su archivo HTML. Todas las páginas cargan inicio.css; las páginas de sucursal también cargan sucursal.css para mantener un diseño uniforme. El sitio no requiere JavaScript ni generación de páginas.

