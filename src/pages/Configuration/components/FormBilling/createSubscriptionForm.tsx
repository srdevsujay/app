import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51N48nDHu6fNfl0OWv7GJvUqJ6pTBCCs5yeSWyTK38IzA1wDKdRPFbSDn4vRh6UJjP7ZWSmuogMsHJOkAnUQTGeZd00NfNxhfYX",
    {
        apiVersion: "2022-11-15",
    }
);

export async function createSubscription(
    cardNumber: string,
    cardExpiryMonth: string,
    cardExpiryYear: string,
    plan: string,
    email: string,
    coupon: string
): Promise<any> {
    console.log("entra al fetch ", coupon);
    try {
        const customer = await stripe.customers.create({
            email,
            payment_method: {
                card: {
                    number: cardNumber,
                    exp_month: cardExpiryMonth,
                    exp_year: cardExpiryYear,
                },
            },
        } as any);

        console.log("customer", customer);

        // Aplicar el cupón al cliente (si se proporciona un cupón)
        if (coupon) {
            await stripe.customers.update(customer.id, {
                coupon,
            });
        }

        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{plan}],
            trial_period_days: 14
        });
        console.log("subscription-por aca si pasa", subscription);

        return subscription;
    } catch (error) {
        console.log("error", error);

        // Manejo de errores
    }
}
