import CustomizedAccordions from "@/components/Accordion/index.";
import Button from "@/components/Button";
import { BaseLayout } from "@/components/Layout";
import Stepper from "@/components/Stepper";
import Tabs from "@/components/Tabs";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const tabs = [
  {
    label: "Tab 1",
    component: <div>Hello, I am tab 1</div>,
  },
  {
    label: "Tab 2",
    component: <div>Hello, I am tab 2</div>,
  },
  {
    label: "Tab 3",
    component: (
      <div>
        <Typography variant="h3">Tab with Heading 3</Typography>
        <p>Hello I am a tab with a heading</p>
      </div>
    ),
  },
];

const steps = ["Step 1", "Step 2", "Step 3"];

const accordionsMock = [
  {
    id: "1",
    title: "A",
    details: "123",
  },
  {
    id: "2",
    title: "B",
    details: <Typography variant="h4">Accordion 2</Typography>,
  },
  {
    id: "3",
    title: "C",
    details: (
      <>
        <Typography variant="h4">Accordion 3</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat
          dignissimos esse!
        </p>
      </>
    ),
  },
];

export default function Home() {
  const t = useTranslations();
  return (
    <BaseLayout>
      <div className="space-y-8">
        <div className="text-primary">{t("Index.title")}</div>
        <div>
          <Typography variant="h2">Buttons</Typography>

          <div className="space-x-4 mt-4">
            <Button variant="contained" data-mui-color-scheme="dark">
              Button dark
            </Button>
            <Button variant="contained" data-mui-color-scheme="light">
              Button light
            </Button>
            <Button variant="contained">Button</Button>
            <Button variant="contained" color="secondary">
              Button
            </Button>
          </div>
        </div>

        <div>
          <Typography variant="h2">Tabs</Typography>
          <Tabs tabs={tabs} />
        </div>

        <div>
          <Typography variant="h2">Stepper</Typography>
          <Stepper steps={steps} />
        </div>

        <div>
          <Typography variant="h2">Accordion</Typography>
          <CustomizedAccordions accordions={accordionsMock} />
        </div>
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
