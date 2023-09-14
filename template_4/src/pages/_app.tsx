import { AppProps } from "next/app";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import "../scss/index.scss";
import { appWithTranslation } from "next-i18next";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { DM_Sans, Inter, Noto_Sans_Hebrew, Petrona, Red_Hat_Text } from 'next/font/google';
import { Provider, store } from "@hosting2023/redux-lib";


const RedHatTextFont = Red_Hat_Text({
    weight: ["600"],
    subsets: ["latin"]
});

const PetronaFont = Petrona({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"]
});

const InterFont = Inter({
    weight: ["400", "500"],
    subsets: ["latin"]
});

const Noto_Sans_Hebrew_Font = Noto_Sans_Hebrew({
    weight: ["400"],
    subsets: ["latin"]
});

const DMSans = DM_Sans({
    weight: ["400"],
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
                            font-family: ${RedHatTextFont.style.fontFamily, PetronaFont.style.fontFamily, InterFont.style.fontFamily, Noto_Sans_Hebrew_Font.style.fontFamily, DMSans.style.fontFamily};
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
