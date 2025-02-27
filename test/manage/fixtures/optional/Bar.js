import React, { Component } from "react";
import { useIntl } from "intl";
export * as ns from "mod";

const FormattedDummy1 = () => <></>;
const FormattedDummy2 = () => <></>;

export const Bar = () => {
  const intl = useIntl();
  const message = intl.formatMessage({ id: "message1", defaultMessage: "mess" });

  return (
    <div>
      <FormattedDummy1 id="message2" defaultMessage="message 2" />
      <FormattedDummy2 id="message3" />
    </div>
  );
};
