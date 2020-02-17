import { Container, Breadcrumb } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function() {
    const { crumbs } = useSelector(state => state.breadcrumb);

    if (!crumbs.length) return <div />;

    function renderCrumb(crumb, i) {
        if (crumb.active) {
            return (<Breadcrumb.Item key={i} active>{crumb.name} ativo</Breadcrumb.Item>);
        }

        return (
            <Breadcrumb.Item key={i} href={crumb.link}>
                {crumb.name}
            </Breadcrumb.Item>
        )
    }

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            {crumbs.map((crumb, i) => renderCrumb(crumb, i) )}
        </Breadcrumb>        
    );

}