import { Route, Routes } from "react-router-dom"
import CatsListPage from "../pages/CatsListPage/CatsListPage"
import CatDetailsPage from "../pages/CatDetailsPage/CatDetailsPage"
import EventsListPage from "../pages/EventsListPage/EventsListPage"
import ReportsListPage from "../pages/ReportsListPage/ReportsListPage"
import EventDetailsPage from "../pages/EventDetailsPage/EventDetailsPage"
import ReportDetailsPage from "../pages/ReportDetailsPage/ReportDetailsPage"
import NewCatPage from "../pages/NewCatPage/NewCatPage"



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>INICIO</h1>} />
            <Route path="/registro" element={<h1>Sigup</h1>} />
            <Route path="/inicio-sesion" element={<h1>Login</h1>} />
            <Route path="/perfil" element={<h1>Perfil Admin</h1>} />
            <Route path="/registrar-gato" element={<NewCatPage />} />
            <Route path="/gatos" element={<CatsListPage />} />
            <Route path="/gatos/detalles/:cat_id" element={<CatDetailsPage />} />
            <Route path="/editar-gato/:cat_id" element={<h1>Editar gato</h1>} />
            <Route path="/crear-evento" element={<h1>Formulario crear evento</h1>} />
            <Route path="/eventos" element={<EventsListPage />} />
            <Route path="/eventos/detalles/:event_id" element={<EventDetailsPage />} />
            <Route path="/editar-evento/:event_id" element={<h1>editar evento</h1>} />
            <Route path="/crear-noticia" element={<h1>Formulario crear noticia</h1>} />
            <Route path="/noticias" element={<ReportsListPage />} />
            <Route path="/noticias/detalles/:report_id" element={<ReportDetailsPage />} />
            <Route path="/editar-noticia/:report_id" element={<h1>editar noticia</h1>} />
            <Route path="*" element={<h1>404</h1>} />


        </Routes>
    )
}

export default AppRoutes