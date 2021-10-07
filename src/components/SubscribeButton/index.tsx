import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./subscribeButton.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

// Existem 3 lugares aonde podemos usar variaveis de ambiente de forma segura:
//
// - getServerSideProps
// - getStaticProps
// - API routes (o indicado quando é disparado por algum clicki/interacao do usuario)

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe Now
    </button>
  );
};
