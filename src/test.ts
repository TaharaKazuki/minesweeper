let a: number
let b: boolean
let c: string

let d: Array<string>

type Permission = 'admin' | 'user' | 'manager'

type BasicUser<A = boolean, P = string[]> = {
  name: string
  surname: string
  age: number
  isAdmin: A
  permission?: P[]
}

type AdvanceUser = {
  account: number
}

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser

type UserWithPermissions = {
  permission: string[]
} & BasicUser

const user: FullUser<boolean, Permission> = {
  name: 'Nick',
  surname: 'Bob',
  age: 30,
  isAdmin: true,
  account: 100,
  permission: ['user'],
}

let usersArray: BasicUser<boolean, Permission>[] = [user, user, user]

const getFirst = <T>(arg: T[]): T => {
  return arg[0]
}

getFirst<BasicUser<boolean, Permission>>(usersArray)

type MathFunc = (a: number, b: number) => number

const mul: MathFunc = (a, b) => a * b

const add: MathFunc = (a: number, b: number): number => a + b
