import ErrorPage from "@/components/ErrorPage/ErrorPage";
import ErrorPageLayout from "@/components/Layout/ErrorPageLayout";
import { Button } from "@mui/material";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <ErrorPageLayout>
      <ErrorPage
        errorCode="404"
        title="Page Not Found"
        subTitle={
          <>
            We&apos;re sorry, the page you requested could not be found. <br />
            Please go back to homepage.
          </>
        }
      >
        <Link legacyBehavior href="/" passHref>
          <Button variant="contained" sx={{ my: 2 }}>
            Back to home
          </Button>
        </Link>
      </ErrorPage>
    </ErrorPageLayout>
  );
};

export default PageNotFound;
