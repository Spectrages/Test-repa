import { AppProps } from "next/app";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import "../scss/index.scss";
import { appWithTranslation } from "next-i18next";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { Akshar, Fredoka } from 'next/font/google';
import { Provider, store } from "@hosting2023/redux-lib";


const AksharFont = Akshar({
    weight: ["600"],
    subsets: ["latin"]
});

const FredokaFont = Fredoka({
    weight: ["500", "400", "300"],
    subsets: ["latin"]
});

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
                            font-family: ${AksharFont.style.fontFamily}, ${FredokaFont.style.fontFamily };
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
