"use client";

import DetailedPricinSection from "../../../src/business/sections/detailed_pricing_section";
import BusinessNavigation from "../../../src/business/components/navigation";
import FAQSection from "../../../src/business/sections/FAQ_section";
import { useState, useEffect } from "react";
import FooterSection from "../../../src/common/sections/footer";

export default function BusinessPricingPage() {

  const [allShow, setAllShow] = useState("monthly");
  const [refQuery, setRefQuery] = useState<string | null>(null);
  const [queryLg, setQueryLg] = useState("");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

	return (
		<>
			<BusinessNavigation refQuery={refQuery} page="pricing" lgQuery={queryLg} setQueryLg={setQueryLg} setShowLanguageModal={setShowLanguageModal} />
			<div className="flex pt-8 flex-col gap-y-8">
				<div className="px-6 sm:px-8  md:px-0">
					<p className="font-[800] text-[32px] leading-normal text-center text-[#000000DE]">Choose the Right Plan for Your Hiring Needs</p>
					<p className="text-base leading-normal text-center text-[#00000099]">Flexible plans designed to help you find the best blue-collar and skilled labor talent.</p>
				</div>

				<div className="px-6 sm:px-8  md:px-0 flex flex-col gap-y-2">
					<div className="flex item-center justify-center gap-x-4">
						<button onClick={() => setAllShow("monthly")}
							className={`${allShow === "monthly" ? "bg-[#FF6633] text-white text-[#252430]" : "border_05 border-[#858BA0]"} py-[10px] px-[20px] rounded-[22px]  text-center leading-normal text-base`}>Monthly Plans</button>
						<button onClick={() => setAllShow("annually")}
							className={`${allShow === "annually" ? "bg-[#FF6633] text-white text-[#252430]" : "border_05 border-[#858BA0]"} py-[10px] px-[20px] rounded-[24px]  text-center leading-normal text-base`}>See Annual Plans</button>
					</div>
					<p className="text-[#FF6633] text-sm leading-normal font-medium text-center">Save up to 25% when you purchase an annual plan.</p>
				</div>

				<div className="px-6 sm:px-8 md:px-0 flex justify-center">
					<DetailedPricinSection refQuery={refQuery} allShow={allShow} />
				</div>
				<FAQSection />
			</div>
			<FooterSection refQuery={refQuery} />
		</>
	)
}
