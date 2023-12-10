import { Col } from "react-bootstrap"
import ReportCard from "../ReportCard/ReportCard"

const ReportsList = ({ reports }) => {
    return (
        reports.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <ReportCard {...elm} />
                </Col>
            )
        })
    )
}

export default ReportsList