import styles from './Steps.module.css';

// try adding icon to each step

const stepsData = [
  {
    order: '01',
    action: 'Review Your Cart',
    description:
      'Make sure you have all your favorite fashion items selected. Check sizes, colors, and quantities before proceeding.',
  },
  {
    order: '02',
    action: 'Proceed to Checkout',
    description:
      "Let's get your fashion finds to you! Fill in your shipping details below to ensure a smooth delivery experience.",
  },
  {
    order: '03',
    action: 'Secure Payment',
    description:
      'Time to complete your purchase! Enter your payment details securely to make your fashion dreams a reality.',
  },
  {
    order: '04',
    action: 'Order Summary',
    description:
      'Double-check your order details before finalizing. Confirm sizes, colors, and delivery information here.',
  },
  {
    order: '05',
    action: 'Order Confirmed',
    description:
      'Congratulations! Your fashion order is confirmed. Keep an eye on your email for order details and tracking information.',
  },
];

function Steps() {
  return (
    <div className={styles.stepsSection}>
      <div className={styles.label}>How it Works</div>
      <div className={styles.steps}>
        {stepsData.map(step => (
          <div key={step.order}>
            <div className={styles.stepOrder}>{step.order}</div>
            <p className={styles.stepAction}>{step.action}</p>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
