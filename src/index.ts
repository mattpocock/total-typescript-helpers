/**
 * Makes the hover overlay of object type more readable.
 * 
 * For instance, If you have a type like this
 * ```ts
 * type Ugly = { a: string } & { b: number }
 * //   ^? { a: string } & { b: number }
 * ```
 * This helper will prettify it:
 * ```ts
 * type Pretty = Prettify<Ugly>
 * //   ^? { a: string; b: number; }
 * ```
*/
export type Prettify<T> = {
	[K in keyof T]: T[K];
} & unknown;

/**
 * Expect that the thing passed to Expect<T> is true.
 *
 * For instance, `Expect<true>` won't error. But
 * `Expect<false>` will error.
 */
export type Expect<T extends true> = T;

/**
 * Checks that X and Y are exactly equal.
 *
 * For instance, `Equal<'a', 'a'>` is true. But
 * `Equal<'a', 'b'>` is false.
 *
 * This also checks for exact intersection equality. So
 * `Equal<{ a: string; b: string  }, { a: string; b: string }>`
 * is true. But `Equal<{ a: string; b: string  }, { a: string; } & { b: string }>`
 * is false.
 */
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
	T
>() => T extends Y ? 1 : 2
	? true
	: false;

/**
 * Checks that Y is assignable to X.
 *
 * For instance, `Extends<string, 'a'>` is true. This is because
 * 'a' can be passed to a function which expects a string.
 *
 * But `Extends<'a', string>` is false. This is because a string
 * CANNOT be passed to a function which expects 'a'.
 */
export type Extends<X, Y> = Y extends X ? true : false;
