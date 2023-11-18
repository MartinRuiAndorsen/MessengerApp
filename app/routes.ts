type Route = '/' | '/about'

type RouteDefinition = {
    name: string
    path: Route
}

export const ROUTES: { [key: string]: RouteDefinition } = {
    Home: {
        name: 'Home',
        path: '/'
    },
    About: {
        name: 'About',
        path: '/about'
    }
}