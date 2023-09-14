import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styles from "./Index.module.scss";
import Benefits from "@/components/benefits/benefits";
import Cleaning from "@/components/cleaning/cleaning";
import Reveiws from "@/components/reviews/reviews";
import Filter from "@/components/filter/filter";
import Schedule from "@/components/schedule/schedule";
import React, { useState } from 'react';
import Introduction from "@/components/introduction/introduction";
import OfferServices from "@/components/offerServices/offerServices";
import { IGetWorkerResponse } from "@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface";

export default function Index({}: InferGetServerSidePropsType<
    typeof getServerSideProps
>) {
    const { t } = useTranslation("common");
    
    const [workers, setWorkers] = useState<IGetWorkerResponse>([]);
    return (
        <div>
            <Head>
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
                <title>{t("app_title")}</title>
                <meta name="description" content={t("app_description")} />
            </Head>
            <div className={styles.container}>
                <Introduction />
                <OfferServices />
                <Benefits />
                <Cleaning />
                <Reveiws /> 
                <Filter setWorkers={setWorkers}/>
                <Schedule workers={workers} />
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "seo",
                "auth",
                "filters",
            ])),
        },
    };
};
