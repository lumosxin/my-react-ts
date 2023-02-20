declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string,
    readonly NODE_ENV: string
  }
}