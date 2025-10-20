import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: parseFloat(amount).toFixed(2),
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(onSuccess);
      }}
      onError={onError}
    />
  );
};

export default PayPalButton;
