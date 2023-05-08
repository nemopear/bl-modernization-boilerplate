import ErrorPageLayout from "../src/components/Layout/ErrorPageLayout";
import ErrorPage from "../src/components/UI/ErrorPage";

const InternalServerError = () => {
    return (
        <ErrorPageLayout>
            <ErrorPage
                errorCode="500"
                title="Internal Server Error"
                subTitle={
                    <>
                        The server has been deserted for a while.
                        <br />
                        Please try again later.
                    </>
                }
            ></ErrorPage>
        </ErrorPageLayout>
    );
};

export default InternalServerError;
