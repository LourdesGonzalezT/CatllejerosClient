import { Route, Routes } from "react-router-dom"




const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>INICIO</h1>} />
            <Route path="/registro" element={<h1>Sigup</h1>} />
            <Route path="/inicio-sesion" element={<h1>Login</h1>} />
            <Route path="/perfil" element={<h1>Perfil Admin</h1>} />
            <Route path="/registrar-gato" element={<h1>Formulario registrar gato</h1>} />
            <Route path="/gatos" element={<h1>Listado de gatos en adopción</h1>} />
            <Route path="/gatos/detalles/:id" element={<h1>Detalles de gato</h1>} />
            <Route path="/editar-gato/:id" element={<h1>Editar gato</h1>} />
            <Route path="/crear-evento" element={<h1>Formulario crear evento</h1>} />
            <Route path="/eventos" element={<h1>Listado de eventos</h1>} />
            <Route path="/eventos/detalles/:id" element={<h1>detalles de eventos</h1>} />
            <Route path="/editar-evento/:id" element={<h1>editar evento</h1>} />
            <Route path="/crear-noticia" element={<h1>Formulario crear noticia</h1>} />
            <Route path="/noticias" element={<h1>Listado de noticias</h1>} />
            <Route path="/noticias/detalles/:id" element={<h1>detalles de noticia</h1>} />
            <Route path="/editar-noticia/:id" element={<h1>editar noticia</h1>} />
            <Route path="*" element={<h1>404</h1>} />


        </Routes>
    )
}

export default AppRoutes