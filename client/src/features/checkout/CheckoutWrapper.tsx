import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51KjdWsEujlUNlgdHjmby3ncHHMHeEMTOjLbka98BFGBw44D0aEhuwsP7d2Lu16CQziavcXbK8cf5c5lQhFP4gCZB00ra5FUUpF');


export default function CheckoutWrapper() {
    return (
        <Elements stripe={stripePromise} >
            <CheckoutPage />
        </Elements>
    )
}