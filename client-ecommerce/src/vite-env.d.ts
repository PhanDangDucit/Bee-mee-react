/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PORT_DEV: number
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}