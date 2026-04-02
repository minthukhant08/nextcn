type Account = {
    id : string,
    email: string,
    firstName:string,
    lastName:string,
    roles: Roles
}

type AccountResponse = {
    content: Account[]
}