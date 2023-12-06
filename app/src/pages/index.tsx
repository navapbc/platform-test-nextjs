import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { FeatureFlagManager } from "src/services/FeatureFlagManager";

import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

interface PageProps {
  isFooEnabled: boolean;
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: PageProps
) => {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <h1>{t("title")}</h1>

      {/* Demonstration of more complex translated strings, with safe-listed links HTML elements */}
      <p className="usa-intro">
        <Trans
          t={t}
          i18nKey="intro"
          components={{
            LinkToNextJs: <a href="https://nextjs.org/docs" />,
          }}
        />
      </p>
      <div className="measure-6">
        <Trans
          t={t}
          i18nKey="body"
          components={{
            ul: <ul className="usa-list" />,
            li: <li />,
          }}
        />
        <p>
          {/* Demonstration of formatters */}
          <Trans
            t={t}
            ns="home"
            i18nKey="formatting"
            values={{
              date: "2021-01-01",
              amount: 1234,
            }}
          />
        </p>
        {/* Demonstration of feature flagging */}
        <p>{t("featureflagging")}</p>
        {props.isFooEnabled && <p>^..^</p>}
      </div>
    </>
  );
};

// Change this to getStaticProps if you're not using server-side rendering
export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  locale,
}) => {
  const translations = await serverSideTranslations(locale ?? "en-US");

  const featureFlags = new FeatureFlagManager("anonymous");
  const isFooEnabled = await featureFlags.isFeatureEnabled("foo");

  return { props: { ...translations, isFooEnabled } };
};

export default Home;
