import { Route, Routes } from "react-router-dom"
import CatsListPage from "../pages/CatsListPage/CatsListPage"
import CatDetailsPage from "../pages/CatDetailsPage/CatDetailsPage"
import EventsListPage from "../pages/EventsListPage/EventsListPage"
import ReportsListPage from "../pages/ReportsListPage/ReportsListPage"



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>INICIO</h1>} />
            <Route path="/registro" element={<h1>Sigup</h1>} />
            <Route path="/inicio-sesion" element={<h1>Login</h1>} />
            <Route path="/perfil" element={<h1>Perfil Admin</h1>} />
            <Route path="/registrar-gato" element={<h1>Formulario registrar gato</h1>} />
            <Route path="/gatos" element={<CatsListPage />} />
            <Route path="/gatos/detalles/:cat_id" element={<CatDetailsPage />} />
            <Route path="/editar-gato/:id" element={<h1>Editar gato</h1>} />
            <Route path="/crear-evento" element={<h1>Formulario crear evento</h1>} />
            <Route path="/eventos" element={<EventsListPage />} />
            <Route path="/eventos/detalles/:id" element={<h1>detalles de eventos</h1>} />
            <Route path="/editar-evento/:id" element={<h1>editar evento</h1>} />
            <Route path="/crear-noticia" element={<h1>Formulario crear noticia</h1>} />
            <Route path="/noticias" element={<ReportsListPage />} />
            <Route path="/noticias/detalles/:id" element={<h1>detalles de noticia</h1>} />
            <Route path="/editar-noticia/:id" element={<h1>editar noticia</h1>} />
            <Route path="*" element={<h1>404</h1>} />


        </Routes>
    )
}

export default AppRoutes