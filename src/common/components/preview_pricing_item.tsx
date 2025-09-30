interface PreviewPricingItemProps {
  benefits: string[];
  plan: string;
  price: {
    monthly: number;
    annually: number;
  };
  cta: string;
  preShow: string;
}

export default function PreviewPricingItem({ benefits, plan, price, cta, preShow }: PreviewPricingItemProps) {
  return (
    <div className={`border w-full cursor-pointer min-h-full ${plan === "STANDARD" && 'bg-[#F9F4FD]'} hover:mx-4 hover:scale-110 transform transition-transform flex flex-col justify-between gap-y-5 border-[#E6E9F5] px-4 py-7`}>
      <div className="flex text-[#000000DE] flex-col gap-y-4">
        <p className="text-[24px] text-center leading-[1.2] font-medium">{plan}</p>
        <ul className="flex flex-col gap-y-1">
          {
            benefits.map((ben, index) => {
              return <li key={index} className="text-base leading-[1.5] style-list ml-4 font-medium">{ben}</li>
            })
          }
        </ul>
      </div>

      <div>
        <p className="text-[#858BA0] text-center text-sm leading-normal"><span className="text-[#252430] text-[40px] font-[700]">{`$${preShow === "monthly" ? price.monthly : price.annually}`}</span>/Month</p>
        <button className={`py-4 px-6 text-center w-full ${plan === "STANDARD" ? "bg-[#5843BD] text-[#E6E9F5]" : "text-[#5843BD] bg-[#EEECF8]"}  text-sm leading-normal`}>{cta}</button>
      </div>
    </div>
  )
}