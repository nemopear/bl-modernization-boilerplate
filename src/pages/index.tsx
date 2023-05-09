import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@mui/material/Button";
import { BaseLayout } from "@/components/Layout";
import { GetStaticPropsContext } from "next/types";
import { getNextIntlMessages } from "@/utils/translation.helper";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations();
  return (
    <BaseLayout>
      {t("Index.title")}
      <div className="space-x-4">
        <Button variant="contained" data-mui-color-scheme="dark">
          Button dark
        </Button>
        <Button variant="contained" data-mui-color-scheme="light">
          Button light
        </Button>
        <Button variant="contained">Button</Button>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended pattern
      // is to put them in JSON files separated by locale (e.g. `en.json`).
      messages: (await import(`../messages/shared/${context.locale}.json`))
        .default,
    },
  };
}
