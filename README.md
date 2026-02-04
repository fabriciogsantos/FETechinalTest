# 🧪 Creador de Usuarios - Ejercicio Técnico para Rol Frontend

Este es un proyecto de evaluación técnica. Simula una situación real donde un componente fue empezado por otro desarrollador, pero quedó incompleto y mal estructurado.

## 🎯 Tu desafío

Refactorizar y completar el formulario de creación de usuarios en `src/components/UserForm.tsx`, aplicando buenas prácticas con:

- ✅ React Hook Form
- ✅ React Query
- ✅ Chakra UI

### Requisitos funcionales:

- Campos requeridos: `name`, `email`, `role`, `active`
- Validaciones básicas (ej: formato de email)
- Envío de datos usando `useMutation` de React Query
- Mostrar feedback al usuario `loading`, `success` y `error` usando componentes de Chakra UI como `useToast`
- Resetear el formulario al terminar exitosamente

## 🎯 Desafío adicional (opcional, pero valorado):

📌 Propuesta de refactor arquitectónico

Pensá cómo harías para que este formulario sea agnóstico al contenido.
Es decir, que el componente UserForm no esté acoplado a campos como name, email, etc., y pueda usarse para otros tipos de formularios (por ejemplo, creación de productos, configuración de perfiles, etc.)

Para dejar tu solución podés:

- Dejar un comentario o archivo con tu idea de refactor.
- Explicar cómo separarías inputs, validaciones y lógica de envío.
- Esquematizar qué forma tendría una posible configuración externa (como JSON, esquema, etc.).
- Proponer una arquitectura de componentes.
- Documentarlo o explicarlo como te sientas más cómodo/a para asegurarte que vamos a entender la propuesta.
