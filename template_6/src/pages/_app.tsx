import { AppProps } from "next/app";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import "../scss/index.scss";
import { appWithTranslation } from "next-i18next";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { Cambay, DM_Sans, Montserrat } from 'next/font/google';
import { Provider, store } from "@hosting2023/redux-lib";

const DMSans = DM_Sans({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
})

const MontserratFont = Montserrat({
    weight: ["600", "500", "400", "300"],
    subsets: ["latin"]
});

const CambayFont = Cambay({
    weight: [ "700", "400"],
    subsets: ["latin"]
})

function MyApp({ Component, pageProps }: AppProps) {
    const { i18n } = useTranslation();
    return (
        <Provider store={store}>
        <div
            dir={i18n.dir ? i18n.dir() : "ltr"}
            className={classNames("app")}
        >
            <style jsx global>{`
                        html {
                            font-family: ${CambayFont.style.fontFamily}, ${MontserratFont.style.fontFamily}, ${DMSans.style.fontFamily};
                        }
                    `}</style>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
        </Provider>
    );
}

export default appWithTranslation(MyApp);
