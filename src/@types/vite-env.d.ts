/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const APP_VERSION: string;
declare const APP_VERSION_DATE: string;
