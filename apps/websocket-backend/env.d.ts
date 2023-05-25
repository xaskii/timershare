declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_URL: string
      PORT: string
    }
  }
}

export {}
