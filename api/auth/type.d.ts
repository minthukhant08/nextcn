
type User = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    roles: Roles[]
}

type Roles = 'ADMIN' | 'USER'

type LoginResponse = {
    accessToken: string
    refreshToken: string
    user: User
}

