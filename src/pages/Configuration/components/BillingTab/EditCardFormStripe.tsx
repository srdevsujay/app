import React, { useState, useEffect } from "react";
import { ButtonCreate } from "../../../../styled-components/button/index";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";

interface EditCardFormProps {
  customerId: string;
}

const EditCardFormStripe: React.FC<EditCardFormProps> = ({ customerId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Obtén los detalles de la tarjeta actual del cliente aquí y actualiza el formulario si es necesario
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe aún no ha sido cargado, espera o muestra un mensaje de error
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Actualiza la tarjeta del cliente en Stripe utilizando el paymentMethod.id y customerId
      // Stripe API request: stripe.paymentMethods.attach(paymentMethod.id, { customer: customerId });
      // Stripe API request: stripe.customers.update(customerId, { invoice_settings: { default_payment_method: paymentMethod.id } });

      // Mostrar un mensaje de éxito al usuario o redirigir a otra página
      console.log("Tarjeta actualizada exitosamente!");
    } catch (error) {
      // setError(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mt-4">
        <div className="form-group col-sm-12">
          <label>Nueva Tarjeta de Crédito</label>
          <CardElement />
        </div>
      </div>
      {error && <p>{error}</p>}
      <ButtonCreate
        className="btn btn-add mr-2 font-14 mt-2"
        type="submit"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Procesando..." : "Guardar Tarjeta"}
      </ButtonCreate>
    </form>
  );
};

export default EditCardFormStripe;
