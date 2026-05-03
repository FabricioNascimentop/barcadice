
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RegistroEtniaSexo
 * 
 */
export type RegistroEtniaSexo = $Result.DefaultSelection<Prisma.$RegistroEtniaSexoPayload>
/**
 * Model Municipio
 * 
 */
export type Municipio = $Result.DefaultSelection<Prisma.$MunicipioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sexo: {
  M: 'M',
  F: 'F'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]


export const Etnia: {
  Branco: 'Branco',
  Preto: 'Preto',
  Pardo: 'Pardo',
  Negro: 'Negro',
  Amarelo: 'Amarelo',
  Indigena: 'Indigena',
  Nao_informado: 'Nao_informado'
};

export type Etnia = (typeof Etnia)[keyof typeof Etnia]

}

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

export type Etnia = $Enums.Etnia

export const Etnia: typeof $Enums.Etnia

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more RegistroEtniaSexos
 * const registroEtniaSexos = await prisma.registroEtniaSexo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more RegistroEtniaSexos
   * const registroEtniaSexos = await prisma.registroEtniaSexo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.registroEtniaSexo`: Exposes CRUD operations for the **RegistroEtniaSexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroEtniaSexos
    * const registroEtniaSexos = await prisma.registroEtniaSexo.findMany()
    * ```
    */
  get registroEtniaSexo(): Prisma.RegistroEtniaSexoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipio`: Exposes CRUD operations for the **Municipio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipios
    * const municipios = await prisma.municipio.findMany()
    * ```
    */
  get municipio(): Prisma.MunicipioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RegistroEtniaSexo: 'RegistroEtniaSexo',
    Municipio: 'Municipio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "registroEtniaSexo" | "municipio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RegistroEtniaSexo: {
        payload: Prisma.$RegistroEtniaSexoPayload<ExtArgs>
        fields: Prisma.RegistroEtniaSexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroEtniaSexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroEtniaSexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>
          }
          findFirst: {
            args: Prisma.RegistroEtniaSexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroEtniaSexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>
          }
          findMany: {
            args: Prisma.RegistroEtniaSexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>[]
          }
          create: {
            args: Prisma.RegistroEtniaSexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>
          }
          createMany: {
            args: Prisma.RegistroEtniaSexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroEtniaSexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>[]
          }
          delete: {
            args: Prisma.RegistroEtniaSexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>
          }
          update: {
            args: Prisma.RegistroEtniaSexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>
          }
          deleteMany: {
            args: Prisma.RegistroEtniaSexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroEtniaSexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroEtniaSexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>[]
          }
          upsert: {
            args: Prisma.RegistroEtniaSexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroEtniaSexoPayload>
          }
          aggregate: {
            args: Prisma.RegistroEtniaSexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroEtniaSexo>
          }
          groupBy: {
            args: Prisma.RegistroEtniaSexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroEtniaSexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroEtniaSexoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroEtniaSexoCountAggregateOutputType> | number
          }
        }
      }
      Municipio: {
        payload: Prisma.$MunicipioPayload<ExtArgs>
        fields: Prisma.MunicipioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findFirst: {
            args: Prisma.MunicipioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findMany: {
            args: Prisma.MunicipioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          create: {
            args: Prisma.MunicipioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          createMany: {
            args: Prisma.MunicipioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          delete: {
            args: Prisma.MunicipioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          update: {
            args: Prisma.MunicipioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          deleteMany: {
            args: Prisma.MunicipioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          upsert: {
            args: Prisma.MunicipioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          aggregate: {
            args: Prisma.MunicipioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipio>
          }
          groupBy: {
            args: Prisma.MunicipioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipioCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    registroEtniaSexo?: RegistroEtniaSexoOmit
    municipio?: MunicipioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MunicipioCountOutputType
   */

  export type MunicipioCountOutputType = {
    indicadores: number
  }

  export type MunicipioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    indicadores?: boolean | MunicipioCountOutputTypeCountIndicadoresArgs
  }

  // Custom InputTypes
  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipioCountOutputType
     */
    select?: MunicipioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeCountIndicadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroEtniaSexoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RegistroEtniaSexo
   */

  export type AggregateRegistroEtniaSexo = {
    _count: RegistroEtniaSexoCountAggregateOutputType | null
    _avg: RegistroEtniaSexoAvgAggregateOutputType | null
    _sum: RegistroEtniaSexoSumAggregateOutputType | null
    _min: RegistroEtniaSexoMinAggregateOutputType | null
    _max: RegistroEtniaSexoMaxAggregateOutputType | null
  }

  export type RegistroEtniaSexoAvgAggregateOutputType = {
    Ano: number | null
    Mes: number | null
    Valor: number | null
  }

  export type RegistroEtniaSexoSumAggregateOutputType = {
    Ano: number | null
    Mes: number | null
    Valor: number | null
  }

  export type RegistroEtniaSexoMinAggregateOutputType = {
    Id: string | null
    MunicipioId: string | null
    Ano: number | null
    Mes: number | null
    Etnia: $Enums.Etnia | null
    Sexo: $Enums.Sexo | null
    Valor: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type RegistroEtniaSexoMaxAggregateOutputType = {
    Id: string | null
    MunicipioId: string | null
    Ano: number | null
    Mes: number | null
    Etnia: $Enums.Etnia | null
    Sexo: $Enums.Sexo | null
    Valor: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type RegistroEtniaSexoCountAggregateOutputType = {
    Id: number
    MunicipioId: number
    Ano: number
    Mes: number
    Etnia: number
    Sexo: number
    Valor: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type RegistroEtniaSexoAvgAggregateInputType = {
    Ano?: true
    Mes?: true
    Valor?: true
  }

  export type RegistroEtniaSexoSumAggregateInputType = {
    Ano?: true
    Mes?: true
    Valor?: true
  }

  export type RegistroEtniaSexoMinAggregateInputType = {
    Id?: true
    MunicipioId?: true
    Ano?: true
    Mes?: true
    Etnia?: true
    Sexo?: true
    Valor?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type RegistroEtniaSexoMaxAggregateInputType = {
    Id?: true
    MunicipioId?: true
    Ano?: true
    Mes?: true
    Etnia?: true
    Sexo?: true
    Valor?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type RegistroEtniaSexoCountAggregateInputType = {
    Id?: true
    MunicipioId?: true
    Ano?: true
    Mes?: true
    Etnia?: true
    Sexo?: true
    Valor?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type RegistroEtniaSexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroEtniaSexo to aggregate.
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEtniaSexos to fetch.
     */
    orderBy?: RegistroEtniaSexoOrderByWithRelationInput | RegistroEtniaSexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroEtniaSexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEtniaSexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEtniaSexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroEtniaSexos
    **/
    _count?: true | RegistroEtniaSexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroEtniaSexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroEtniaSexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroEtniaSexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroEtniaSexoMaxAggregateInputType
  }

  export type GetRegistroEtniaSexoAggregateType<T extends RegistroEtniaSexoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroEtniaSexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroEtniaSexo[P]>
      : GetScalarType<T[P], AggregateRegistroEtniaSexo[P]>
  }




  export type RegistroEtniaSexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroEtniaSexoWhereInput
    orderBy?: RegistroEtniaSexoOrderByWithAggregationInput | RegistroEtniaSexoOrderByWithAggregationInput[]
    by: RegistroEtniaSexoScalarFieldEnum[] | RegistroEtniaSexoScalarFieldEnum
    having?: RegistroEtniaSexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroEtniaSexoCountAggregateInputType | true
    _avg?: RegistroEtniaSexoAvgAggregateInputType
    _sum?: RegistroEtniaSexoSumAggregateInputType
    _min?: RegistroEtniaSexoMinAggregateInputType
    _max?: RegistroEtniaSexoMaxAggregateInputType
  }

  export type RegistroEtniaSexoGroupByOutputType = {
    Id: string
    MunicipioId: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: RegistroEtniaSexoCountAggregateOutputType | null
    _avg: RegistroEtniaSexoAvgAggregateOutputType | null
    _sum: RegistroEtniaSexoSumAggregateOutputType | null
    _min: RegistroEtniaSexoMinAggregateOutputType | null
    _max: RegistroEtniaSexoMaxAggregateOutputType | null
  }

  type GetRegistroEtniaSexoGroupByPayload<T extends RegistroEtniaSexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroEtniaSexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroEtniaSexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroEtniaSexoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroEtniaSexoGroupByOutputType[P]>
        }
      >
    >


  export type RegistroEtniaSexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    MunicipioId?: boolean
    Ano?: boolean
    Mes?: boolean
    Etnia?: boolean
    Sexo?: boolean
    Valor?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroEtniaSexo"]>

  export type RegistroEtniaSexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    MunicipioId?: boolean
    Ano?: boolean
    Mes?: boolean
    Etnia?: boolean
    Sexo?: boolean
    Valor?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroEtniaSexo"]>

  export type RegistroEtniaSexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    MunicipioId?: boolean
    Ano?: boolean
    Mes?: boolean
    Etnia?: boolean
    Sexo?: boolean
    Valor?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroEtniaSexo"]>

  export type RegistroEtniaSexoSelectScalar = {
    Id?: boolean
    MunicipioId?: boolean
    Ano?: boolean
    Mes?: boolean
    Etnia?: boolean
    Sexo?: boolean
    Valor?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type RegistroEtniaSexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "MunicipioId" | "Ano" | "Mes" | "Etnia" | "Sexo" | "Valor" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["registroEtniaSexo"]>
  export type RegistroEtniaSexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }
  export type RegistroEtniaSexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }
  export type RegistroEtniaSexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }

  export type $RegistroEtniaSexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroEtniaSexo"
    objects: {
      Municipio: Prisma.$MunicipioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      MunicipioId: string
      Ano: number
      Mes: number
      Etnia: $Enums.Etnia
      Sexo: $Enums.Sexo
      Valor: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["registroEtniaSexo"]>
    composites: {}
  }

  type RegistroEtniaSexoGetPayload<S extends boolean | null | undefined | RegistroEtniaSexoDefaultArgs> = $Result.GetResult<Prisma.$RegistroEtniaSexoPayload, S>

  type RegistroEtniaSexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroEtniaSexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroEtniaSexoCountAggregateInputType | true
    }

  export interface RegistroEtniaSexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroEtniaSexo'], meta: { name: 'RegistroEtniaSexo' } }
    /**
     * Find zero or one RegistroEtniaSexo that matches the filter.
     * @param {RegistroEtniaSexoFindUniqueArgs} args - Arguments to find a RegistroEtniaSexo
     * @example
     * // Get one RegistroEtniaSexo
     * const registroEtniaSexo = await prisma.registroEtniaSexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroEtniaSexoFindUniqueArgs>(args: SelectSubset<T, RegistroEtniaSexoFindUniqueArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroEtniaSexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroEtniaSexoFindUniqueOrThrowArgs} args - Arguments to find a RegistroEtniaSexo
     * @example
     * // Get one RegistroEtniaSexo
     * const registroEtniaSexo = await prisma.registroEtniaSexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroEtniaSexoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroEtniaSexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroEtniaSexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoFindFirstArgs} args - Arguments to find a RegistroEtniaSexo
     * @example
     * // Get one RegistroEtniaSexo
     * const registroEtniaSexo = await prisma.registroEtniaSexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroEtniaSexoFindFirstArgs>(args?: SelectSubset<T, RegistroEtniaSexoFindFirstArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroEtniaSexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoFindFirstOrThrowArgs} args - Arguments to find a RegistroEtniaSexo
     * @example
     * // Get one RegistroEtniaSexo
     * const registroEtniaSexo = await prisma.registroEtniaSexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroEtniaSexoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroEtniaSexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroEtniaSexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroEtniaSexos
     * const registroEtniaSexos = await prisma.registroEtniaSexo.findMany()
     * 
     * // Get first 10 RegistroEtniaSexos
     * const registroEtniaSexos = await prisma.registroEtniaSexo.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const registroEtniaSexoWithIdOnly = await prisma.registroEtniaSexo.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends RegistroEtniaSexoFindManyArgs>(args?: SelectSubset<T, RegistroEtniaSexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroEtniaSexo.
     * @param {RegistroEtniaSexoCreateArgs} args - Arguments to create a RegistroEtniaSexo.
     * @example
     * // Create one RegistroEtniaSexo
     * const RegistroEtniaSexo = await prisma.registroEtniaSexo.create({
     *   data: {
     *     // ... data to create a RegistroEtniaSexo
     *   }
     * })
     * 
     */
    create<T extends RegistroEtniaSexoCreateArgs>(args: SelectSubset<T, RegistroEtniaSexoCreateArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroEtniaSexos.
     * @param {RegistroEtniaSexoCreateManyArgs} args - Arguments to create many RegistroEtniaSexos.
     * @example
     * // Create many RegistroEtniaSexos
     * const registroEtniaSexo = await prisma.registroEtniaSexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroEtniaSexoCreateManyArgs>(args?: SelectSubset<T, RegistroEtniaSexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroEtniaSexos and returns the data saved in the database.
     * @param {RegistroEtniaSexoCreateManyAndReturnArgs} args - Arguments to create many RegistroEtniaSexos.
     * @example
     * // Create many RegistroEtniaSexos
     * const registroEtniaSexo = await prisma.registroEtniaSexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroEtniaSexos and only return the `Id`
     * const registroEtniaSexoWithIdOnly = await prisma.registroEtniaSexo.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroEtniaSexoCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroEtniaSexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroEtniaSexo.
     * @param {RegistroEtniaSexoDeleteArgs} args - Arguments to delete one RegistroEtniaSexo.
     * @example
     * // Delete one RegistroEtniaSexo
     * const RegistroEtniaSexo = await prisma.registroEtniaSexo.delete({
     *   where: {
     *     // ... filter to delete one RegistroEtniaSexo
     *   }
     * })
     * 
     */
    delete<T extends RegistroEtniaSexoDeleteArgs>(args: SelectSubset<T, RegistroEtniaSexoDeleteArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroEtniaSexo.
     * @param {RegistroEtniaSexoUpdateArgs} args - Arguments to update one RegistroEtniaSexo.
     * @example
     * // Update one RegistroEtniaSexo
     * const registroEtniaSexo = await prisma.registroEtniaSexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroEtniaSexoUpdateArgs>(args: SelectSubset<T, RegistroEtniaSexoUpdateArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroEtniaSexos.
     * @param {RegistroEtniaSexoDeleteManyArgs} args - Arguments to filter RegistroEtniaSexos to delete.
     * @example
     * // Delete a few RegistroEtniaSexos
     * const { count } = await prisma.registroEtniaSexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroEtniaSexoDeleteManyArgs>(args?: SelectSubset<T, RegistroEtniaSexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroEtniaSexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroEtniaSexos
     * const registroEtniaSexo = await prisma.registroEtniaSexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroEtniaSexoUpdateManyArgs>(args: SelectSubset<T, RegistroEtniaSexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroEtniaSexos and returns the data updated in the database.
     * @param {RegistroEtniaSexoUpdateManyAndReturnArgs} args - Arguments to update many RegistroEtniaSexos.
     * @example
     * // Update many RegistroEtniaSexos
     * const registroEtniaSexo = await prisma.registroEtniaSexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroEtniaSexos and only return the `Id`
     * const registroEtniaSexoWithIdOnly = await prisma.registroEtniaSexo.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroEtniaSexoUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroEtniaSexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroEtniaSexo.
     * @param {RegistroEtniaSexoUpsertArgs} args - Arguments to update or create a RegistroEtniaSexo.
     * @example
     * // Update or create a RegistroEtniaSexo
     * const registroEtniaSexo = await prisma.registroEtniaSexo.upsert({
     *   create: {
     *     // ... data to create a RegistroEtniaSexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroEtniaSexo we want to update
     *   }
     * })
     */
    upsert<T extends RegistroEtniaSexoUpsertArgs>(args: SelectSubset<T, RegistroEtniaSexoUpsertArgs<ExtArgs>>): Prisma__RegistroEtniaSexoClient<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroEtniaSexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoCountArgs} args - Arguments to filter RegistroEtniaSexos to count.
     * @example
     * // Count the number of RegistroEtniaSexos
     * const count = await prisma.registroEtniaSexo.count({
     *   where: {
     *     // ... the filter for the RegistroEtniaSexos we want to count
     *   }
     * })
    **/
    count<T extends RegistroEtniaSexoCountArgs>(
      args?: Subset<T, RegistroEtniaSexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroEtniaSexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroEtniaSexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistroEtniaSexoAggregateArgs>(args: Subset<T, RegistroEtniaSexoAggregateArgs>): Prisma.PrismaPromise<GetRegistroEtniaSexoAggregateType<T>>

    /**
     * Group by RegistroEtniaSexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroEtniaSexoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistroEtniaSexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroEtniaSexoGroupByArgs['orderBy'] }
        : { orderBy?: RegistroEtniaSexoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistroEtniaSexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroEtniaSexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroEtniaSexo model
   */
  readonly fields: RegistroEtniaSexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroEtniaSexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroEtniaSexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Municipio<T extends MunicipioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipioDefaultArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistroEtniaSexo model
   */
  interface RegistroEtniaSexoFieldRefs {
    readonly Id: FieldRef<"RegistroEtniaSexo", 'String'>
    readonly MunicipioId: FieldRef<"RegistroEtniaSexo", 'String'>
    readonly Ano: FieldRef<"RegistroEtniaSexo", 'Int'>
    readonly Mes: FieldRef<"RegistroEtniaSexo", 'Int'>
    readonly Etnia: FieldRef<"RegistroEtniaSexo", 'Etnia'>
    readonly Sexo: FieldRef<"RegistroEtniaSexo", 'Sexo'>
    readonly Valor: FieldRef<"RegistroEtniaSexo", 'Int'>
    readonly CreatedAt: FieldRef<"RegistroEtniaSexo", 'DateTime'>
    readonly UpdatedAt: FieldRef<"RegistroEtniaSexo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroEtniaSexo findUnique
   */
  export type RegistroEtniaSexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroEtniaSexo to fetch.
     */
    where: RegistroEtniaSexoWhereUniqueInput
  }

  /**
   * RegistroEtniaSexo findUniqueOrThrow
   */
  export type RegistroEtniaSexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroEtniaSexo to fetch.
     */
    where: RegistroEtniaSexoWhereUniqueInput
  }

  /**
   * RegistroEtniaSexo findFirst
   */
  export type RegistroEtniaSexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroEtniaSexo to fetch.
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEtniaSexos to fetch.
     */
    orderBy?: RegistroEtniaSexoOrderByWithRelationInput | RegistroEtniaSexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroEtniaSexos.
     */
    cursor?: RegistroEtniaSexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEtniaSexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEtniaSexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroEtniaSexos.
     */
    distinct?: RegistroEtniaSexoScalarFieldEnum | RegistroEtniaSexoScalarFieldEnum[]
  }

  /**
   * RegistroEtniaSexo findFirstOrThrow
   */
  export type RegistroEtniaSexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroEtniaSexo to fetch.
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEtniaSexos to fetch.
     */
    orderBy?: RegistroEtniaSexoOrderByWithRelationInput | RegistroEtniaSexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroEtniaSexos.
     */
    cursor?: RegistroEtniaSexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEtniaSexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEtniaSexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroEtniaSexos.
     */
    distinct?: RegistroEtniaSexoScalarFieldEnum | RegistroEtniaSexoScalarFieldEnum[]
  }

  /**
   * RegistroEtniaSexo findMany
   */
  export type RegistroEtniaSexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroEtniaSexos to fetch.
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroEtniaSexos to fetch.
     */
    orderBy?: RegistroEtniaSexoOrderByWithRelationInput | RegistroEtniaSexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroEtniaSexos.
     */
    cursor?: RegistroEtniaSexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroEtniaSexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroEtniaSexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroEtniaSexos.
     */
    distinct?: RegistroEtniaSexoScalarFieldEnum | RegistroEtniaSexoScalarFieldEnum[]
  }

  /**
   * RegistroEtniaSexo create
   */
  export type RegistroEtniaSexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroEtniaSexo.
     */
    data: XOR<RegistroEtniaSexoCreateInput, RegistroEtniaSexoUncheckedCreateInput>
  }

  /**
   * RegistroEtniaSexo createMany
   */
  export type RegistroEtniaSexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroEtniaSexos.
     */
    data: RegistroEtniaSexoCreateManyInput | RegistroEtniaSexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroEtniaSexo createManyAndReturn
   */
  export type RegistroEtniaSexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroEtniaSexos.
     */
    data: RegistroEtniaSexoCreateManyInput | RegistroEtniaSexoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroEtniaSexo update
   */
  export type RegistroEtniaSexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroEtniaSexo.
     */
    data: XOR<RegistroEtniaSexoUpdateInput, RegistroEtniaSexoUncheckedUpdateInput>
    /**
     * Choose, which RegistroEtniaSexo to update.
     */
    where: RegistroEtniaSexoWhereUniqueInput
  }

  /**
   * RegistroEtniaSexo updateMany
   */
  export type RegistroEtniaSexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroEtniaSexos.
     */
    data: XOR<RegistroEtniaSexoUpdateManyMutationInput, RegistroEtniaSexoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroEtniaSexos to update
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * Limit how many RegistroEtniaSexos to update.
     */
    limit?: number
  }

  /**
   * RegistroEtniaSexo updateManyAndReturn
   */
  export type RegistroEtniaSexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * The data used to update RegistroEtniaSexos.
     */
    data: XOR<RegistroEtniaSexoUpdateManyMutationInput, RegistroEtniaSexoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroEtniaSexos to update
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * Limit how many RegistroEtniaSexos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroEtniaSexo upsert
   */
  export type RegistroEtniaSexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroEtniaSexo to update in case it exists.
     */
    where: RegistroEtniaSexoWhereUniqueInput
    /**
     * In case the RegistroEtniaSexo found by the `where` argument doesn't exist, create a new RegistroEtniaSexo with this data.
     */
    create: XOR<RegistroEtniaSexoCreateInput, RegistroEtniaSexoUncheckedCreateInput>
    /**
     * In case the RegistroEtniaSexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroEtniaSexoUpdateInput, RegistroEtniaSexoUncheckedUpdateInput>
  }

  /**
   * RegistroEtniaSexo delete
   */
  export type RegistroEtniaSexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    /**
     * Filter which RegistroEtniaSexo to delete.
     */
    where: RegistroEtniaSexoWhereUniqueInput
  }

  /**
   * RegistroEtniaSexo deleteMany
   */
  export type RegistroEtniaSexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroEtniaSexos to delete
     */
    where?: RegistroEtniaSexoWhereInput
    /**
     * Limit how many RegistroEtniaSexos to delete.
     */
    limit?: number
  }

  /**
   * RegistroEtniaSexo without action
   */
  export type RegistroEtniaSexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
  }


  /**
   * Model Municipio
   */

  export type AggregateMunicipio = {
    _count: MunicipioCountAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  export type MunicipioMinAggregateOutputType = {
    Id: string | null
    Nome: string | null
    Estado: string | null
    Regiao: string | null
  }

  export type MunicipioMaxAggregateOutputType = {
    Id: string | null
    Nome: string | null
    Estado: string | null
    Regiao: string | null
  }

  export type MunicipioCountAggregateOutputType = {
    Id: number
    Nome: number
    Estado: number
    Regiao: number
    _all: number
  }


  export type MunicipioMinAggregateInputType = {
    Id?: true
    Nome?: true
    Estado?: true
    Regiao?: true
  }

  export type MunicipioMaxAggregateInputType = {
    Id?: true
    Nome?: true
    Estado?: true
    Regiao?: true
  }

  export type MunicipioCountAggregateInputType = {
    Id?: true
    Nome?: true
    Estado?: true
    Regiao?: true
    _all?: true
  }

  export type MunicipioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipio to aggregate.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipios
    **/
    _count?: true | MunicipioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipioMaxAggregateInputType
  }

  export type GetMunicipioAggregateType<T extends MunicipioAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipio[P]>
      : GetScalarType<T[P], AggregateMunicipio[P]>
  }




  export type MunicipioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipioWhereInput
    orderBy?: MunicipioOrderByWithAggregationInput | MunicipioOrderByWithAggregationInput[]
    by: MunicipioScalarFieldEnum[] | MunicipioScalarFieldEnum
    having?: MunicipioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipioCountAggregateInputType | true
    _min?: MunicipioMinAggregateInputType
    _max?: MunicipioMaxAggregateInputType
  }

  export type MunicipioGroupByOutputType = {
    Id: string
    Nome: string
    Estado: string
    Regiao: string
    _count: MunicipioCountAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  type GetMunicipioGroupByPayload<T extends MunicipioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
        }
      >
    >


  export type MunicipioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Estado?: boolean
    Regiao?: boolean
    indicadores?: boolean | Municipio$indicadoresArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Estado?: boolean
    Regiao?: boolean
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Estado?: boolean
    Regiao?: boolean
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectScalar = {
    Id?: boolean
    Nome?: boolean
    Estado?: boolean
    Regiao?: boolean
  }

  export type MunicipioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Nome" | "Estado" | "Regiao", ExtArgs["result"]["municipio"]>
  export type MunicipioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    indicadores?: boolean | Municipio$indicadoresArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MunicipioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MunicipioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipio"
    objects: {
      indicadores: Prisma.$RegistroEtniaSexoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Nome: string
      Estado: string
      Regiao: string
    }, ExtArgs["result"]["municipio"]>
    composites: {}
  }

  type MunicipioGetPayload<S extends boolean | null | undefined | MunicipioDefaultArgs> = $Result.GetResult<Prisma.$MunicipioPayload, S>

  type MunicipioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipioCountAggregateInputType | true
    }

  export interface MunicipioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipio'], meta: { name: 'Municipio' } }
    /**
     * Find zero or one Municipio that matches the filter.
     * @param {MunicipioFindUniqueArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipioFindUniqueArgs>(args: SelectSubset<T, MunicipioFindUniqueArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipioFindUniqueOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipioFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipioFindFirstArgs>(args?: SelectSubset<T, MunicipioFindFirstArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipioFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipios
     * const municipios = await prisma.municipio.findMany()
     * 
     * // Get first 10 Municipios
     * const municipios = await prisma.municipio.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const municipioWithIdOnly = await prisma.municipio.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends MunicipioFindManyArgs>(args?: SelectSubset<T, MunicipioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipio.
     * @param {MunicipioCreateArgs} args - Arguments to create a Municipio.
     * @example
     * // Create one Municipio
     * const Municipio = await prisma.municipio.create({
     *   data: {
     *     // ... data to create a Municipio
     *   }
     * })
     * 
     */
    create<T extends MunicipioCreateArgs>(args: SelectSubset<T, MunicipioCreateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipios.
     * @param {MunicipioCreateManyArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipioCreateManyArgs>(args?: SelectSubset<T, MunicipioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipios and returns the data saved in the database.
     * @param {MunicipioCreateManyAndReturnArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipios and only return the `Id`
     * const municipioWithIdOnly = await prisma.municipio.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipioCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipio.
     * @param {MunicipioDeleteArgs} args - Arguments to delete one Municipio.
     * @example
     * // Delete one Municipio
     * const Municipio = await prisma.municipio.delete({
     *   where: {
     *     // ... filter to delete one Municipio
     *   }
     * })
     * 
     */
    delete<T extends MunicipioDeleteArgs>(args: SelectSubset<T, MunicipioDeleteArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipio.
     * @param {MunicipioUpdateArgs} args - Arguments to update one Municipio.
     * @example
     * // Update one Municipio
     * const municipio = await prisma.municipio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipioUpdateArgs>(args: SelectSubset<T, MunicipioUpdateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipios.
     * @param {MunicipioDeleteManyArgs} args - Arguments to filter Municipios to delete.
     * @example
     * // Delete a few Municipios
     * const { count } = await prisma.municipio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipioDeleteManyArgs>(args?: SelectSubset<T, MunicipioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipioUpdateManyArgs>(args: SelectSubset<T, MunicipioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios and returns the data updated in the database.
     * @param {MunicipioUpdateManyAndReturnArgs} args - Arguments to update many Municipios.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipios and only return the `Id`
     * const municipioWithIdOnly = await prisma.municipio.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MunicipioUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipio.
     * @param {MunicipioUpsertArgs} args - Arguments to update or create a Municipio.
     * @example
     * // Update or create a Municipio
     * const municipio = await prisma.municipio.upsert({
     *   create: {
     *     // ... data to create a Municipio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipio we want to update
     *   }
     * })
     */
    upsert<T extends MunicipioUpsertArgs>(args: SelectSubset<T, MunicipioUpsertArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioCountArgs} args - Arguments to filter Municipios to count.
     * @example
     * // Count the number of Municipios
     * const count = await prisma.municipio.count({
     *   where: {
     *     // ... the filter for the Municipios we want to count
     *   }
     * })
    **/
    count<T extends MunicipioCountArgs>(
      args?: Subset<T, MunicipioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MunicipioAggregateArgs>(args: Subset<T, MunicipioAggregateArgs>): Prisma.PrismaPromise<GetMunicipioAggregateType<T>>

    /**
     * Group by Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MunicipioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipioGroupByArgs['orderBy'] }
        : { orderBy?: MunicipioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MunicipioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipio model
   */
  readonly fields: MunicipioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    indicadores<T extends Municipio$indicadoresArgs<ExtArgs> = {}>(args?: Subset<T, Municipio$indicadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroEtniaSexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Municipio model
   */
  interface MunicipioFieldRefs {
    readonly Id: FieldRef<"Municipio", 'String'>
    readonly Nome: FieldRef<"Municipio", 'String'>
    readonly Estado: FieldRef<"Municipio", 'String'>
    readonly Regiao: FieldRef<"Municipio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Municipio findUnique
   */
  export type MunicipioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio findUniqueOrThrow
   */
  export type MunicipioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio findFirst
   */
  export type MunicipioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio findFirstOrThrow
   */
  export type MunicipioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio findMany
   */
  export type MunicipioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio create
   */
  export type MunicipioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipio.
     */
    data: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
  }

  /**
   * Municipio createMany
   */
  export type MunicipioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipio createManyAndReturn
   */
  export type MunicipioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipio update
   */
  export type MunicipioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipio.
     */
    data: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
    /**
     * Choose, which Municipio to update.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio updateMany
   */
  export type MunicipioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipio updateManyAndReturn
   */
  export type MunicipioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipio upsert
   */
  export type MunicipioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipio to update in case it exists.
     */
    where: MunicipioWhereUniqueInput
    /**
     * In case the Municipio found by the `where` argument doesn't exist, create a new Municipio with this data.
     */
    create: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
    /**
     * In case the Municipio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
  }

  /**
   * Municipio delete
   */
  export type MunicipioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter which Municipio to delete.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio deleteMany
   */
  export type MunicipioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipios to delete
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to delete.
     */
    limit?: number
  }

  /**
   * Municipio.indicadores
   */
  export type Municipio$indicadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroEtniaSexo
     */
    select?: RegistroEtniaSexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroEtniaSexo
     */
    omit?: RegistroEtniaSexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroEtniaSexoInclude<ExtArgs> | null
    where?: RegistroEtniaSexoWhereInput
    orderBy?: RegistroEtniaSexoOrderByWithRelationInput | RegistroEtniaSexoOrderByWithRelationInput[]
    cursor?: RegistroEtniaSexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroEtniaSexoScalarFieldEnum | RegistroEtniaSexoScalarFieldEnum[]
  }

  /**
   * Municipio without action
   */
  export type MunicipioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RegistroEtniaSexoScalarFieldEnum: {
    Id: 'Id',
    MunicipioId: 'MunicipioId',
    Ano: 'Ano',
    Mes: 'Mes',
    Etnia: 'Etnia',
    Sexo: 'Sexo',
    Valor: 'Valor',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type RegistroEtniaSexoScalarFieldEnum = (typeof RegistroEtniaSexoScalarFieldEnum)[keyof typeof RegistroEtniaSexoScalarFieldEnum]


  export const MunicipioScalarFieldEnum: {
    Id: 'Id',
    Nome: 'Nome',
    Estado: 'Estado',
    Regiao: 'Regiao'
  };

  export type MunicipioScalarFieldEnum = (typeof MunicipioScalarFieldEnum)[keyof typeof MunicipioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Etnia'
   */
  export type EnumEtniaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Etnia'>
    


  /**
   * Reference to a field of type 'Etnia[]'
   */
  export type ListEnumEtniaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Etnia[]'>
    


  /**
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'Sexo[]'
   */
  export type ListEnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RegistroEtniaSexoWhereInput = {
    AND?: RegistroEtniaSexoWhereInput | RegistroEtniaSexoWhereInput[]
    OR?: RegistroEtniaSexoWhereInput[]
    NOT?: RegistroEtniaSexoWhereInput | RegistroEtniaSexoWhereInput[]
    Id?: StringFilter<"RegistroEtniaSexo"> | string
    MunicipioId?: StringFilter<"RegistroEtniaSexo"> | string
    Ano?: IntFilter<"RegistroEtniaSexo"> | number
    Mes?: IntFilter<"RegistroEtniaSexo"> | number
    Etnia?: EnumEtniaFilter<"RegistroEtniaSexo"> | $Enums.Etnia
    Sexo?: EnumSexoFilter<"RegistroEtniaSexo"> | $Enums.Sexo
    Valor?: IntFilter<"RegistroEtniaSexo"> | number
    CreatedAt?: DateTimeFilter<"RegistroEtniaSexo"> | Date | string
    UpdatedAt?: DateTimeFilter<"RegistroEtniaSexo"> | Date | string
    Municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
  }

  export type RegistroEtniaSexoOrderByWithRelationInput = {
    Id?: SortOrder
    MunicipioId?: SortOrder
    Ano?: SortOrder
    Mes?: SortOrder
    Etnia?: SortOrder
    Sexo?: SortOrder
    Valor?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Municipio?: MunicipioOrderByWithRelationInput
  }

  export type RegistroEtniaSexoWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    MunicipioId_Ano_Mes_Etnia_Sexo?: RegistroEtniaSexoMunicipioIdAnoMesEtniaSexoCompoundUniqueInput
    AND?: RegistroEtniaSexoWhereInput | RegistroEtniaSexoWhereInput[]
    OR?: RegistroEtniaSexoWhereInput[]
    NOT?: RegistroEtniaSexoWhereInput | RegistroEtniaSexoWhereInput[]
    MunicipioId?: StringFilter<"RegistroEtniaSexo"> | string
    Ano?: IntFilter<"RegistroEtniaSexo"> | number
    Mes?: IntFilter<"RegistroEtniaSexo"> | number
    Etnia?: EnumEtniaFilter<"RegistroEtniaSexo"> | $Enums.Etnia
    Sexo?: EnumSexoFilter<"RegistroEtniaSexo"> | $Enums.Sexo
    Valor?: IntFilter<"RegistroEtniaSexo"> | number
    CreatedAt?: DateTimeFilter<"RegistroEtniaSexo"> | Date | string
    UpdatedAt?: DateTimeFilter<"RegistroEtniaSexo"> | Date | string
    Municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
  }, "Id" | "MunicipioId_Ano_Mes_Etnia_Sexo">

  export type RegistroEtniaSexoOrderByWithAggregationInput = {
    Id?: SortOrder
    MunicipioId?: SortOrder
    Ano?: SortOrder
    Mes?: SortOrder
    Etnia?: SortOrder
    Sexo?: SortOrder
    Valor?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: RegistroEtniaSexoCountOrderByAggregateInput
    _avg?: RegistroEtniaSexoAvgOrderByAggregateInput
    _max?: RegistroEtniaSexoMaxOrderByAggregateInput
    _min?: RegistroEtniaSexoMinOrderByAggregateInput
    _sum?: RegistroEtniaSexoSumOrderByAggregateInput
  }

  export type RegistroEtniaSexoScalarWhereWithAggregatesInput = {
    AND?: RegistroEtniaSexoScalarWhereWithAggregatesInput | RegistroEtniaSexoScalarWhereWithAggregatesInput[]
    OR?: RegistroEtniaSexoScalarWhereWithAggregatesInput[]
    NOT?: RegistroEtniaSexoScalarWhereWithAggregatesInput | RegistroEtniaSexoScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"RegistroEtniaSexo"> | string
    MunicipioId?: StringWithAggregatesFilter<"RegistroEtniaSexo"> | string
    Ano?: IntWithAggregatesFilter<"RegistroEtniaSexo"> | number
    Mes?: IntWithAggregatesFilter<"RegistroEtniaSexo"> | number
    Etnia?: EnumEtniaWithAggregatesFilter<"RegistroEtniaSexo"> | $Enums.Etnia
    Sexo?: EnumSexoWithAggregatesFilter<"RegistroEtniaSexo"> | $Enums.Sexo
    Valor?: IntWithAggregatesFilter<"RegistroEtniaSexo"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"RegistroEtniaSexo"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"RegistroEtniaSexo"> | Date | string
  }

  export type MunicipioWhereInput = {
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    Id?: StringFilter<"Municipio"> | string
    Nome?: StringFilter<"Municipio"> | string
    Estado?: StringFilter<"Municipio"> | string
    Regiao?: StringFilter<"Municipio"> | string
    indicadores?: RegistroEtniaSexoListRelationFilter
  }

  export type MunicipioOrderByWithRelationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Estado?: SortOrder
    Regiao?: SortOrder
    indicadores?: RegistroEtniaSexoOrderByRelationAggregateInput
  }

  export type MunicipioWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Nome?: string
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    Estado?: StringFilter<"Municipio"> | string
    Regiao?: StringFilter<"Municipio"> | string
    indicadores?: RegistroEtniaSexoListRelationFilter
  }, "Id" | "Nome">

  export type MunicipioOrderByWithAggregationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Estado?: SortOrder
    Regiao?: SortOrder
    _count?: MunicipioCountOrderByAggregateInput
    _max?: MunicipioMaxOrderByAggregateInput
    _min?: MunicipioMinOrderByAggregateInput
  }

  export type MunicipioScalarWhereWithAggregatesInput = {
    AND?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    OR?: MunicipioScalarWhereWithAggregatesInput[]
    NOT?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Municipio"> | string
    Nome?: StringWithAggregatesFilter<"Municipio"> | string
    Estado?: StringWithAggregatesFilter<"Municipio"> | string
    Regiao?: StringWithAggregatesFilter<"Municipio"> | string
  }

  export type RegistroEtniaSexoCreateInput = {
    Id?: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Municipio: MunicipioCreateNestedOneWithoutIndicadoresInput
  }

  export type RegistroEtniaSexoUncheckedCreateInput = {
    Id?: string
    MunicipioId: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RegistroEtniaSexoUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Municipio?: MunicipioUpdateOneRequiredWithoutIndicadoresNestedInput
  }

  export type RegistroEtniaSexoUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    MunicipioId?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEtniaSexoCreateManyInput = {
    Id?: string
    MunicipioId: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RegistroEtniaSexoUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEtniaSexoUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    MunicipioId?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipioCreateInput = {
    Id?: string
    Nome: string
    Estado: string
    Regiao: string
    indicadores?: RegistroEtniaSexoCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateInput = {
    Id?: string
    Nome: string
    Estado: string
    Regiao: string
    indicadores?: RegistroEtniaSexoUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    Regiao?: StringFieldUpdateOperationsInput | string
    indicadores?: RegistroEtniaSexoUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    Regiao?: StringFieldUpdateOperationsInput | string
    indicadores?: RegistroEtniaSexoUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioCreateManyInput = {
    Id?: string
    Nome: string
    Estado: string
    Regiao: string
  }

  export type MunicipioUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    Regiao?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipioUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    Regiao?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumEtniaFilter<$PrismaModel = never> = {
    equals?: $Enums.Etnia | EnumEtniaFieldRefInput<$PrismaModel>
    in?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    not?: NestedEnumEtniaFilter<$PrismaModel> | $Enums.Etnia
  }

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MunicipioScalarRelationFilter = {
    is?: MunicipioWhereInput
    isNot?: MunicipioWhereInput
  }

  export type RegistroEtniaSexoMunicipioIdAnoMesEtniaSexoCompoundUniqueInput = {
    MunicipioId: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
  }

  export type RegistroEtniaSexoCountOrderByAggregateInput = {
    Id?: SortOrder
    MunicipioId?: SortOrder
    Ano?: SortOrder
    Mes?: SortOrder
    Etnia?: SortOrder
    Sexo?: SortOrder
    Valor?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RegistroEtniaSexoAvgOrderByAggregateInput = {
    Ano?: SortOrder
    Mes?: SortOrder
    Valor?: SortOrder
  }

  export type RegistroEtniaSexoMaxOrderByAggregateInput = {
    Id?: SortOrder
    MunicipioId?: SortOrder
    Ano?: SortOrder
    Mes?: SortOrder
    Etnia?: SortOrder
    Sexo?: SortOrder
    Valor?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RegistroEtniaSexoMinOrderByAggregateInput = {
    Id?: SortOrder
    MunicipioId?: SortOrder
    Ano?: SortOrder
    Mes?: SortOrder
    Etnia?: SortOrder
    Sexo?: SortOrder
    Valor?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RegistroEtniaSexoSumOrderByAggregateInput = {
    Ano?: SortOrder
    Mes?: SortOrder
    Valor?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumEtniaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Etnia | EnumEtniaFieldRefInput<$PrismaModel>
    in?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    not?: NestedEnumEtniaWithAggregatesFilter<$PrismaModel> | $Enums.Etnia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtniaFilter<$PrismaModel>
    _max?: NestedEnumEtniaFilter<$PrismaModel>
  }

  export type EnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegistroEtniaSexoListRelationFilter = {
    every?: RegistroEtniaSexoWhereInput
    some?: RegistroEtniaSexoWhereInput
    none?: RegistroEtniaSexoWhereInput
  }

  export type RegistroEtniaSexoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipioCountOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Estado?: SortOrder
    Regiao?: SortOrder
  }

  export type MunicipioMaxOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Estado?: SortOrder
    Regiao?: SortOrder
  }

  export type MunicipioMinOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Estado?: SortOrder
    Regiao?: SortOrder
  }

  export type MunicipioCreateNestedOneWithoutIndicadoresInput = {
    create?: XOR<MunicipioCreateWithoutIndicadoresInput, MunicipioUncheckedCreateWithoutIndicadoresInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutIndicadoresInput
    connect?: MunicipioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEtniaFieldUpdateOperationsInput = {
    set?: $Enums.Etnia
  }

  export type EnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MunicipioUpdateOneRequiredWithoutIndicadoresNestedInput = {
    create?: XOR<MunicipioCreateWithoutIndicadoresInput, MunicipioUncheckedCreateWithoutIndicadoresInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutIndicadoresInput
    upsert?: MunicipioUpsertWithoutIndicadoresInput
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutIndicadoresInput, MunicipioUpdateWithoutIndicadoresInput>, MunicipioUncheckedUpdateWithoutIndicadoresInput>
  }

  export type RegistroEtniaSexoCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<RegistroEtniaSexoCreateWithoutMunicipioInput, RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput> | RegistroEtniaSexoCreateWithoutMunicipioInput[] | RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput | RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput[]
    createMany?: RegistroEtniaSexoCreateManyMunicipioInputEnvelope
    connect?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
  }

  export type RegistroEtniaSexoUncheckedCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<RegistroEtniaSexoCreateWithoutMunicipioInput, RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput> | RegistroEtniaSexoCreateWithoutMunicipioInput[] | RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput | RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput[]
    createMany?: RegistroEtniaSexoCreateManyMunicipioInputEnvelope
    connect?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
  }

  export type RegistroEtniaSexoUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<RegistroEtniaSexoCreateWithoutMunicipioInput, RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput> | RegistroEtniaSexoCreateWithoutMunicipioInput[] | RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput | RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput[]
    upsert?: RegistroEtniaSexoUpsertWithWhereUniqueWithoutMunicipioInput | RegistroEtniaSexoUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: RegistroEtniaSexoCreateManyMunicipioInputEnvelope
    set?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    disconnect?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    delete?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    connect?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    update?: RegistroEtniaSexoUpdateWithWhereUniqueWithoutMunicipioInput | RegistroEtniaSexoUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: RegistroEtniaSexoUpdateManyWithWhereWithoutMunicipioInput | RegistroEtniaSexoUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: RegistroEtniaSexoScalarWhereInput | RegistroEtniaSexoScalarWhereInput[]
  }

  export type RegistroEtniaSexoUncheckedUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<RegistroEtniaSexoCreateWithoutMunicipioInput, RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput> | RegistroEtniaSexoCreateWithoutMunicipioInput[] | RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput | RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput[]
    upsert?: RegistroEtniaSexoUpsertWithWhereUniqueWithoutMunicipioInput | RegistroEtniaSexoUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: RegistroEtniaSexoCreateManyMunicipioInputEnvelope
    set?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    disconnect?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    delete?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    connect?: RegistroEtniaSexoWhereUniqueInput | RegistroEtniaSexoWhereUniqueInput[]
    update?: RegistroEtniaSexoUpdateWithWhereUniqueWithoutMunicipioInput | RegistroEtniaSexoUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: RegistroEtniaSexoUpdateManyWithWhereWithoutMunicipioInput | RegistroEtniaSexoUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: RegistroEtniaSexoScalarWhereInput | RegistroEtniaSexoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumEtniaFilter<$PrismaModel = never> = {
    equals?: $Enums.Etnia | EnumEtniaFieldRefInput<$PrismaModel>
    in?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    not?: NestedEnumEtniaFilter<$PrismaModel> | $Enums.Etnia
  }

  export type NestedEnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEtniaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Etnia | EnumEtniaFieldRefInput<$PrismaModel>
    in?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etnia[] | ListEnumEtniaFieldRefInput<$PrismaModel>
    not?: NestedEnumEtniaWithAggregatesFilter<$PrismaModel> | $Enums.Etnia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtniaFilter<$PrismaModel>
    _max?: NestedEnumEtniaFilter<$PrismaModel>
  }

  export type NestedEnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MunicipioCreateWithoutIndicadoresInput = {
    Id?: string
    Nome: string
    Estado: string
    Regiao: string
  }

  export type MunicipioUncheckedCreateWithoutIndicadoresInput = {
    Id?: string
    Nome: string
    Estado: string
    Regiao: string
  }

  export type MunicipioCreateOrConnectWithoutIndicadoresInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutIndicadoresInput, MunicipioUncheckedCreateWithoutIndicadoresInput>
  }

  export type MunicipioUpsertWithoutIndicadoresInput = {
    update: XOR<MunicipioUpdateWithoutIndicadoresInput, MunicipioUncheckedUpdateWithoutIndicadoresInput>
    create: XOR<MunicipioCreateWithoutIndicadoresInput, MunicipioUncheckedCreateWithoutIndicadoresInput>
    where?: MunicipioWhereInput
  }

  export type MunicipioUpdateToOneWithWhereWithoutIndicadoresInput = {
    where?: MunicipioWhereInput
    data: XOR<MunicipioUpdateWithoutIndicadoresInput, MunicipioUncheckedUpdateWithoutIndicadoresInput>
  }

  export type MunicipioUpdateWithoutIndicadoresInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    Regiao?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipioUncheckedUpdateWithoutIndicadoresInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    Regiao?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroEtniaSexoCreateWithoutMunicipioInput = {
    Id?: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput = {
    Id?: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RegistroEtniaSexoCreateOrConnectWithoutMunicipioInput = {
    where: RegistroEtniaSexoWhereUniqueInput
    create: XOR<RegistroEtniaSexoCreateWithoutMunicipioInput, RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput>
  }

  export type RegistroEtniaSexoCreateManyMunicipioInputEnvelope = {
    data: RegistroEtniaSexoCreateManyMunicipioInput | RegistroEtniaSexoCreateManyMunicipioInput[]
    skipDuplicates?: boolean
  }

  export type RegistroEtniaSexoUpsertWithWhereUniqueWithoutMunicipioInput = {
    where: RegistroEtniaSexoWhereUniqueInput
    update: XOR<RegistroEtniaSexoUpdateWithoutMunicipioInput, RegistroEtniaSexoUncheckedUpdateWithoutMunicipioInput>
    create: XOR<RegistroEtniaSexoCreateWithoutMunicipioInput, RegistroEtniaSexoUncheckedCreateWithoutMunicipioInput>
  }

  export type RegistroEtniaSexoUpdateWithWhereUniqueWithoutMunicipioInput = {
    where: RegistroEtniaSexoWhereUniqueInput
    data: XOR<RegistroEtniaSexoUpdateWithoutMunicipioInput, RegistroEtniaSexoUncheckedUpdateWithoutMunicipioInput>
  }

  export type RegistroEtniaSexoUpdateManyWithWhereWithoutMunicipioInput = {
    where: RegistroEtniaSexoScalarWhereInput
    data: XOR<RegistroEtniaSexoUpdateManyMutationInput, RegistroEtniaSexoUncheckedUpdateManyWithoutMunicipioInput>
  }

  export type RegistroEtniaSexoScalarWhereInput = {
    AND?: RegistroEtniaSexoScalarWhereInput | RegistroEtniaSexoScalarWhereInput[]
    OR?: RegistroEtniaSexoScalarWhereInput[]
    NOT?: RegistroEtniaSexoScalarWhereInput | RegistroEtniaSexoScalarWhereInput[]
    Id?: StringFilter<"RegistroEtniaSexo"> | string
    MunicipioId?: StringFilter<"RegistroEtniaSexo"> | string
    Ano?: IntFilter<"RegistroEtniaSexo"> | number
    Mes?: IntFilter<"RegistroEtniaSexo"> | number
    Etnia?: EnumEtniaFilter<"RegistroEtniaSexo"> | $Enums.Etnia
    Sexo?: EnumSexoFilter<"RegistroEtniaSexo"> | $Enums.Sexo
    Valor?: IntFilter<"RegistroEtniaSexo"> | number
    CreatedAt?: DateTimeFilter<"RegistroEtniaSexo"> | Date | string
    UpdatedAt?: DateTimeFilter<"RegistroEtniaSexo"> | Date | string
  }

  export type RegistroEtniaSexoCreateManyMunicipioInput = {
    Id?: string
    Ano: number
    Mes: number
    Etnia: $Enums.Etnia
    Sexo: $Enums.Sexo
    Valor: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RegistroEtniaSexoUpdateWithoutMunicipioInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEtniaSexoUncheckedUpdateWithoutMunicipioInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroEtniaSexoUncheckedUpdateManyWithoutMunicipioInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ano?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Etnia?: EnumEtniaFieldUpdateOperationsInput | $Enums.Etnia
    Sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    Valor?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}