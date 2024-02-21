import roomRoutes from "./roomRoute"
import subjectRoutes from './subjectRoutes';

export default (app: any): void => {
    app.use(
        roomRoutes,
        subjectRoutes
    )
}
