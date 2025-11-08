"use client";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RB2B_ID = process.env.NEXT_PUBLIC_RB2B_ID;

export default function RB2BLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const leadId = searchParams.get("leadId");
    
    if (!leadId) {
      console.warn("Lead ID is required");
      return;
    }

    console.log("Lead ID:", leadId);

    const existing = document.getElementById("rb2b-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "rb2b-script";
    script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${RB2B_ID}/${RB2B_ID}.js.gz`;
    script.async = true;
    document.body.appendChild(script);
  }, [pathname, searchParams]);

  return null;
}
