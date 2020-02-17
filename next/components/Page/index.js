import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addCrumb, clearCrumbs } from '../../store/actions/breadcrumb';

export default function(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCrumbs());

        if (props.crumbs) {
            props.crumbs.map(crumb => {
               dispatch(addCrumb(crumb.name, crumb.link || ''));
            });
        }
    }, [props.crumbs]);

    return (
        <>
        <Head>
            <title key={props.title}>{props.title}</title>
            {/* {props.description && <meta name="description" content={props.description} />} */}
        </Head>

        {props.children}
        </>
    );

}
