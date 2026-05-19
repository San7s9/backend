// Configuración global de la aplicación.
// Lee variables de entorno y usa valores por defecto si no están definidas.
export const CONFIG = {
    db: process.env.DB_CONNECTION || 'mongodb+srv://manuelcastrobarinasdev_db_user:1qmTzsNUgCPn6KNQ@cluster0.bhsovwb.mongodb.net/fullstack',
    db_test: process.env.DB_CONNECTION_TEST || 'mongodb+srv://manuelcastrobarinasdev_db_user:1qmTzsNUgCPn6KNQ@cluster0.bhsovwb.mongodb.net/fullstack_test',
    app: {
        // Puerto en el que escucha el servidor HTTP
        port: process.env.PORT || 3000
    },
    jwt_key: process.env.JWT_KEY || 'fullstack_jwt_keyadasdas',
}