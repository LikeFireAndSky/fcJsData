const string = "string"
const string2 = 'string2'
const string3 = `string3 ${string}`
// 백틱은 템플릿 리터럴이라고 부른다.
// 템플릿 리터럴은 변수를 넣을 수 있다.
// 템플릿 리터럴은 줄바꿈을 할 수 있다.
// 템플릿 리터럴은 ${} 안에 코드를 넣을 수 있다.

console.log(string)

const number = 1
const number2 = 2

console.log(number + 3)

const a = 0.1
const b = 0.2

console.log(Number((a+b).toFixed(1)))

// boolean
const canRead: boolean = true
const test: boolean = false

if (canRead){
    console.log(canRead)
}

// null
let nothing: null = null
console.log(nothing)

setTimeout(()=>{
    const nothing : string = "맨 마지막 입니다"
    console.log(nothing)
}, 1000)

// undefined
let x: undefined = undefined
console.log(x)

// object
const person : object = {
    name: "김사람",
    age: 20
}

console.log(person["name"])

//  Array  (배열)
const fruits = ["사과", "바나나"] //배열 리터럴
console.log(fruits.length)

const user = new Object()
console.log(user)

function User(){
  this.name = "김사람"
  this.age = 20
}

const user2 = new User()
console.log(user2)

const user3 = {
    name: "김사람",
    age: 20
}

console.log(user3.name)

const users = [user, user2, user3]

console.log(users)

function hello(){
    console.log("hello")
}

hello()
console.log(hello, typeof hello)

function add(a: number, b: number){
    return a + b
}

const aFunction = () => {
    console.log("arrow")
    return 1000
}

const bFunction = (c : number) : string => {
  console.log(`arrow number ${c}`)
    return `arrow number ${c}`
}

bFunction(aFunction())

//형변환
const num = 1
const str = "1"

console.log(num + str)
console.log(num + Number(str))

//타입 단언
function jsTypeCheck(data : any) : boolean{
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(jsTypeCheck(123))
console.log(jsTypeCheck([]))
console.log(jsTypeCheck({}))
console.log(jsTypeCheck(null))