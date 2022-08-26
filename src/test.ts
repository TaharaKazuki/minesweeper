let a: number
let b: boolean
let c: string

let d: Array<string>

type BasicUser<A = boolean> = {
  name: string
  surname: string
  age: number
  isAdmin: A
}

type UserWithPermissions = {
  permission: string[]
} & BasicUser

const user: BasicUser<number> = {
  name: 'Nick',
  surname: 'Bob',
  age: 30,
  isAdmin: 1,
}

let usersArray: BasicUser<number>[] = [user, user, user]

const getFirst = <T>(arg: T[]): T => {
  return arg[0]
}

getFirst<BasicUser<number>>(usersArray)

type MathFunc = (a: number, b: number) => number

const mul: MathFunc = (a, b) => a * b

const add: MathFunc = (a: number, b: number): number => a + b
