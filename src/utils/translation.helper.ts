import { AbstractIntlMessages } from "next-intl";

export const getNextIntlMessages = async (
  pageName: string,
  locale: any = process.env.NEXT_PUBLIC_LANG
): Promise<any> => {
  return (await import(`@/messages/shared/${locale}.json`)).default;

  // ...(await import(`@/messages/shared/${locale}.json`)).default,
  // ...(await import(`@/messages/error/${locale}.json`)).default,
  // ...(await import(`@/messages/${pageName}/${locale}.json`)).default,
};
