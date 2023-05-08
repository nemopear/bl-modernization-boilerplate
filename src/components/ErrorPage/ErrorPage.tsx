import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type ErrorPageProps = {
    errorCode?: string;
    title: string;
    subTitle?: ReactNode;
    children?: ReactNode;
};
const ErrorPage = ({
    errorCode,
    title,
    subTitle,
    children,
}: ErrorPageProps) => {
    return (
        <>
            <Box sx={{ textAlign: "center" }} id={`error-${errorCode}-page`}>
                {errorCode && (
                    <Typography variant="h1" sx={{ my: 2, fontSize: 72 }}>
                        {errorCode}
                    </Typography>
                )}
                <Typography variant="h2" sx={{ my: 2 }}>
                    {title}
                </Typography>
                {subTitle && (
                    <Typography variant="body1" sx={{ my: 2 }}>
                        {subTitle}
                    </Typography>
                )}

                {children}
            </Box>
        </>
    );
};

export default ErrorPage;
