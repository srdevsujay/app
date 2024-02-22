import React, {useEffect, useState} from "react";
import Stripe from "stripe";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {createSubscriptionStripe} from "../../../../redux/state/slices/configuration/configurationThunk";
import {ButtonCreate} from "../../../../styled-components/button/index";
import {useAppDispatch, useAppSelector} from "../../../../hooks/appDispatch";
import Swal from "sweetalert2";
import {setCouponUser} from "../../../../redux/state/slices/configuration/configurationSlice";

const CheckoutForm = ({setSubscription}: any) => {
    const dispatch = useAppDispatch();
    const {
        email: emailPerfil,
        last_name,
        name,
    } = useAppSelector((state) => state.user.user);
    const [email, setEmail] = useState(emailPerfil);
    const [fullName, setFullName] = useState(`${name} ${last_name}`);
    const [coupon, setCoupon] = useState<any>("");
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState<any>("");

    useEffect(() => {
        setEmail(emailPerfil);
        setFullName(`${name} ${last_name}`);
    }, []);

    useEffect(() => {
        if (coupon !== ''){
            dispatch(setCouponUser(coupon));
        }

    }, [coupon]);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) return;
        console.log("cardElement", cardElement);

        const {error, token} = await stripe.createToken(cardElement, {
            email,
            name: fullName
        } as any);
        console.log("por aca si pasa", token);
        setSubscription(token);
        if (error) {
            setCardError(error.message);
            Swal.fire(cardError, "", "info");
            console.log(error);
            return;
        }

        // Aquí puedes utilizar el customerId para crear una suscripción o realizar otro tipo de operación en Stripe
    };

    return (
        <div
            style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label>Nombre completo</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="form-control"
                            placeholder="Ingresa tu nombre completo"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-control"
                            placeholder="Ingresa tu correo electronico"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label>Cupón</label>
                        <input
                            type="text"
                            value={coupon}
                            onChange={(e) => {
                                setCoupon(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Ingresa tu cupón"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label>Tarjeta de crédito</label>
                        <CardElement/>
                    </div>
                </div>
                <ButtonCreate
                    className="btn btn-add mr-2 font-14 mt-2"
                    type="submit"
                    disabled={!stripe}
                >
                    Paga Ahora
                </ButtonCreate>
                {cardError && <div>{cardError}</div>}
                {/* <button type="submit">Pagar</button> */}
            </form>
        </div>
    );
};

export default CheckoutForm;
