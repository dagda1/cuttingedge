declare module '@qiwi/npm-registry-client' {
  import { ReadStream } from 'fs'
  import { Packument } from '@qiwi/npm-types'
  type TAuth = { alwaysAuth?: boolean } & (
    {
      username: string
      password: string
      email?: string
    } | { token: string })

  type TPackage = {
    version: string
    message: string
  }

  type TCallback<T = any> = (error: any, data: T, raw: any, res: any) => void

  type TPackageMetadata = {
    name: string
    version: string
  }

  type TAccess = 'public' | 'restricted'
  type TResultInfo = {
    success: boolean
    error?: string
  }

  type TConfig = {
    proxy?: {
      http: string
      https?: string
      localAddress: string
    }
    ssl?: {
      ca: string
      certificate: string
      key: string
      strict?: boolean
    }
    retry?: {
      retries?: number
      factor?: number
      minTimeout?: number
      maxTimeout?: number
    }
    userAgent?: string
    log?: any
    defaultTag?: string
    couchToken?: string
    sessionToken?: string
    maxSockets?: number
    isFromCI?: boolean
    scope?: string
  }

  class RegClient {
    constructor(config?: TConfig)

    deprecate(
      uri: string,
      params: TPackage & { auth: TAuth },
      cb: TCallback<TResultInfo | null>
    ): void

    get(
      uri: string,
      params: any,
      cb: TCallback<Packument | TResultInfo | null>
    ): void

    publish(
      uri: string,
      params: {
        metadata: TPackageMetadata
        access: TAccess
        auth: TAuth
        body: ReadStream
      },
      cb: TCallback
    ): void

    distTags: {
      fetch(
        uri: string,
        params: {
          package: string
          auth: TAuth
        },
        cb: TCallback<TResultInfo | null | Record<string, string>>
      ): void

      add(
        uri: string,
        params: {
          package: string
          distTag: string
          version: string
          auth: TAuth
        },
        cb: TCallback<TResultInfo | null>
      ): void

      set(
        uri: string,
        params: {
          package: string
          distTags: Record<string, string>
          auth: TAuth
        },
        cb: TCallback<TResultInfo | null>
      ): void

      update(
        uri: string,
        params: {
          package: string
          distTags: Record<string, string>
          auth: TAuth
        },
        cb: TCallback<TResultInfo | null>
      ): void

      rm(
        uri: string,
        params: {
          package: string
          distTag: string
          auth: TAuth
        },
        cb: TCallback<TResultInfo | null>
      ): void
    }
  }
  export = RegClient
}
