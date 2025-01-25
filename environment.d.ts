// Declare environment variables types
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string
            TELEGRAM_BOT_TOKEN: string
        }
    }
}

// Convert the file into a module by adding an empty export statement
export { }