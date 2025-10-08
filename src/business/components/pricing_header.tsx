`use client`

import { businessBaseUrl } from "../../common/constants/baseUrl";
import { safeWindow } from "../../../utils/safe_window";

export default function PricingHeaderForPringItem({ flowId, plan, percentage_off, cta, price, allShow, refQuery }: { flowId: any, plan: string, percentage_off: number, cta: string, price: { monthly: number, annually: number }, allShow: string, refQuery: string }) {

	const handleClick = () => {
		const url = new URL(`${businessBaseUrl}/register`);
		url.searchParams.append('flowId', flowId[allShow]);
		if (refQuery && refQuery !== "null") {
			url.searchParams.append('ref', refQuery);
		}
		safeWindow?.open(url.toString(), '_blank');
	};

	return (
		<div className={`flex relative  flex-col ${plan === "STANDARD" ? "gap-y-6" : "gap-y-10"} p-6`}>
			{plan === "STANDARD" &&
				<div className="text-white absolute top-0 left-0 w-full py-2 text-center bg-[#FF6633] ">
					Recommended
				</div>
			}

			<p className={`text-[20px] lg:text-[24px] ${plan === "STANDARD" && "mt-[30px]"} text-center leading-[1.2] font-medium`}>{plan}</p>
			<div>
				<p className="text-[#858BA0] text-center text-sm leading-normal"><span className="text-[#252430] text-[40px] font-[700]">{`$${allShow === "monthly" ? price.monthly : price.annually} `}</span>/Month</p>
				{allShow === "annually" && <p className="text-[#FF6633] text-sm leading-normal font-medium text-center">{percentage_off}% Off</p>}
			</div>
			<button onClick={handleClick} className={`py-4 rounded-[4px] whitespace-nowrap px-6 text-center w-full ${plan === "STANDARD" ? "bg-[#5843BD] text-[#E6E9F5]" : "text-[#5843BD] bg-[#EEECF8]"} text-sm md:text-xs lg:text-sm leading-normal`}>{cta}</button>
		</div>
	)
}