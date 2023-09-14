import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styles from "./Index.module.scss";
import Benefits from "@/components/benefits/benefits";
import Cleaning from "@/components/cleaning/cleaning";
import Preapare from "@/components/prepare/prepare";
import OurCleaningServices from "@/components/ourCleaningServices/ourCleaningServices";
import Reveiws from "@/components/reviews/reviews";
import Filter from "@/components/filter/filter";
import Schedule from "@/components/schedule/schedule";
import Anwsers from "@/components/questions/questions";
import React, { useState } from 'react';
import Introduction from "@/components/introduction/introduction";
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
                <Benefits />
                <Cleaning />
                <Preapare />
                <OurCleaningServices />
                <Filter setWorkers={setWorkers}/>
                <Schedule workers={workers} />
                <Reveiws />
                <Anwsers />
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
