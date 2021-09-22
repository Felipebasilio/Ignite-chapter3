import styles from "./subscribeButton.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
};
