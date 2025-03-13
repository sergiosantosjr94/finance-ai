"use client";
import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AcquirePlanButton = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleAcquirePlanClick = async () => {
    setIsLoading(true);
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found");
    }

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error("Stripe not found");
    }
    await stripe.redirectToCheckout({ sessionId });
  };
  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";
  if (hasPremiumPlan) {
    return (
      <Button
        className="w-full rounded-full border-2 border-solid border-primary font-bold"
        variant="link"
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
        >
          {isLoading && <LoaderCircle className="animate-spin" />}
          Gerenciar Plano
        </Link>
      </Button>
    );
  }
  return (
    <Button
      className="w-full rounded-full border-2 border-solid border-primary font-bold"
      onClick={handleAcquirePlanClick}
    >
      {isLoading && <LoaderCircle className="animate-spin" />}
      Aquirir Plano
    </Button>
  );
};

export default AcquirePlanButton;
