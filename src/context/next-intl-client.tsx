"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

type Props = {
  messages: AbstractIntlMessages;
  locale: string;
  children: ReactNode;
};

export default function NextIntlProvider({
  messages,
  locale,
  children,
}: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>,
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}