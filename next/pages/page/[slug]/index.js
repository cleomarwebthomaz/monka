import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import renderHTML from 'react-render-html';

import Layout from '../../../components/Layouts';
import Loading from '../../../components/Loading';

import { get } from '../../../services/http';
import Page from '../../../components/Page';

function PageStatic() {
    const [page, setPage] = useState({});
    const [pageTitle, setPageTitle] = useState('Página');

    const router = useRouter()

    useEffect(() => {
        async function getPageData() {
            
            if (router.query.slug && router.query.slug) {
                const page = await get(`/page/${router.query.slug}`);
                setPageTitle(page.title);
                setPage(page);
            }
        }

        getPageData();
    }, [router.query]);

    const crumbs = [
        { name: pageTitle },
    ];
  
    if (!page.id) return <Loading />;

    return (
        <Page title={pageTitle} crumbs={crumbs}>
            <Layout pageTitle={pageTitle}>
                {renderHTML(page.content)}
            </Layout>
        </Page>
    );
}


export default PageStatic;
