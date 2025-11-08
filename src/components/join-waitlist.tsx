"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { addEmail } from "@/lib/server/actions/google/spreadsheet";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

type JoinWaitlistProps = {
  width?: string;
  marginTop?: string;
};

export default function JoinWaitlist({
  width = "w-1/2",
  marginTop = "mt-0",
}: JoinWaitlistProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const email = (e.target as HTMLFormElement).email.value;
      const { success, code } = await addEmail(email);
      if (success) {
        toast.success("You are on the waitlist!");
      }
      if (code === "EMAIL_ALREADY_EXISTS") {
        toast.error("You are already on the waitlist!");
      }
      if (code === "INVALID_EMAIL_FORMAT") {
        toast.error("Invalid email format");
      }
      if (code === "UNKNOWN_ERROR") {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 bg-background p-3 rounded-full h-20 dummy-trigger-abm ${width} ${marginTop}`}
    >
      <Input
        placeholder="Your Email Address"
        className="rounded-full w-full h-full px-6"
        name="email"
        type="email"
      />
      <Button
        variant="outline"
        className="shrink-0 rounded-full h-full border-[#0563FF] hover:bg-white hover:text-[#0563FF] bg-[#0563FF] text-white transition-all duration-200 md:px-10 px-6"
        size="lg"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <span className="hidden sm:inline">Join Waitlist</span>
            <span className="sm:hidden">Join</span>
          </>
        )}
      </Button>
    </form>
  );
}