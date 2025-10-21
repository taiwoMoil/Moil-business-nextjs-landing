import MobilePricingItem from "../components/mobile_pricing_item";
import PricingHeaderForPringItem from "../components/pricing_header";
import {nanoid} from "nanoid";

export default function DetailedPricinSection({ refQuery, lgQuery, allShow }: any) {

  const pricingHeaders = [
    {
      plan: "BASIC",
      price: {
        monthly: 40,
        annually: 408
      },
      percentage_off: 15,
      cta: "Start Free 14-day Trial",
      flowId: {
        monthly: nanoid() + nanoid() + '_basic_monthly',
        annually: nanoid() + nanoid() + '_basic_yearly'
      }
    },
    {
      plan: "STANDARD",
      price: {
        monthly: 75,
        annually: 720
      },
      percentage_off: 20,
      cta: "Start Free 30-day Trial",
      flowId: {
        monthly: nanoid() + nanoid() + '_standard_monthly',
        annually: nanoid() + nanoid() +  '_standard_yearly'
      }
    },
    {
      plan: "PROFESSIONAL",
      price: {
        monthly: 150,
        annually: 1350
      },
      percentage_off: 25,
      cta: "Sign Up Now",
      flowId: {
        monthly:  nanoid() + nanoid() + '_professional_monthly',
        annually:  nanoid() + nanoid() + '_professional_yearly'
      }
    }
  ];

  const pricingDetails = [
    {
      label: "Job Postings",
      values: ["1 per month", "Up to 3 per month", "Unlimited"]
    },
    {
      label: "Skill Tests",
      values: ["Included", "Included", "Included"]
    },
    {
      label: "Featured Listings",
      values: ["N/A", "2 per month", "10 per month"]
    },
    {
      label: "Support",
      values: ["Email", "Priority Email", "Priority Email and Phone"]
    },
    {
      label: "Add-Ons",
      values: ["$50 per additional featured listing", "$50 per additional featured listing", ""]
    }
  ];

const mobilePricingDetails = [
    {
      "pricing_header": {
        plan: "BASIC",
        price: {
          monthly: 40,
          annually: 408
        },
        percentage_off: 15,
        cta: "Sign Up Now",
        flowId: {
          monthly:  nanoid() + nanoid() + '_basic_monthly',
          annually:  nanoid() + nanoid() + '_basic_yearly'
        }
      },
      label: ["job_postings", "skill_tests", "featured_listings", "support", "addons"],
      values: [
        ["Job Postings", "1 per month"],
        ["Skill Tests", "Included"],
        ["Featured Listings", "N/A"],
        ["Support", "Email"],
        ["Add-Ons", "$50 per additional featured listing"]
      ]
    },
    {
      "pricing_header": {
        plan: "STANDARD",
        price: {
          monthly: 75,
          annually: 720
        },
        percentage_off: 20,
        cta: "Start Free 14-day Trial",
        flowId: {
          monthly: nanoid() + nanoid() + '_standard_monthly',
          annually: nanoid() + nanoid() + '_standard_yearly'
        }
      },
      label: ["job_postings", "skill_tests", "featured_listings", "support", "addons"],
      values: [
        ["Job Postings", "Up to 3 per month"],
        ["Skill Tests", "Included"],
        ["Featured Listings", "2 per month"],
        ["Support", "Priority Email"],
        ["Add-Ons", "$50 per additional featured listing"]
      ]
    },
    {
      "pricing_header": {
        plan: "PROFESSIONAL",
        price: {
          monthly: 150,
          annually: 1350
        },
        percentage_off: 25,
        cta: "Sign Up Now",
        flowId: {
          monthly: nanoid() + nanoid() + '_professional_monthly',
          annually:  nanoid() + nanoid() + '_professional_yearly'
        }
      },
      label: ["job_postings", "skill_tests", "featured_listings", "support", "addons"],
      values: [
        ["Job Postings", "Unlimited"],
        ["Skill Tests", "Included"],
        ["Featured Listings", "10 per month"],
        ["Support", "Priority Email and Phone"],
        ["Add-Ons", ""]
      ]
    }
  ];



  return (
    <div className="xl:max-w-[1000px] xtraxl:max-w-[1200px]">
      <table className="hidden md:table table-fixed w-full border-collapse border border-[#E6E9F5]">
        <thead>
          <th className="w-[90%]">
            <p className="text-[30px] font-[700] leading-[1.2] text-[#252430]">Annual Plans</p>
          </th>

          {
            pricingHeaders.map((head, index) => {
              return (
                <th className={` ${head.plan === "STANDARD" ? "w-[115%] bg-[#EEECF8]" : "w-full"} border border-[#E6E9F5]`}>
                  <PricingHeaderForPringItem refQuery={refQuery} lgQuery={lgQuery} flowId={head.flowId} allShow={allShow} plan={head.plan} percentage_off={head.percentage_off} price={head.price} cta={head.cta} key={index} />
                </th>
              )
            })
          }

        </thead>

        <tbody>
          {
            pricingDetails.map((det, index) => {
              return (
                <tr key={index}>
                  <td className="border border-[#E6E9F5]">
                    <div className="py-6 px-8">
                      <p className="text-[18px] font-mdeium font-medium leading-[1.3] text-[#252430]">{det.label}</p>
                    </div>
                  </td>
                  {
                    det.values.map((d, i) => {
                      return (
                        <td className="border border-[#E6E9F5]">
                          <div className="py-6 px-8">
                            <p className="text-[14px] font-mdeium font-medium leading-[1.3] text-[#252430]">{d}</p>
                          </div>
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div className="md:hidden flex flex-col">
        {
          mobilePricingDetails.map((head, index) => {
            return (
              <MobilePricingItem flowId={head.pricing_header.flowId} values={head.values} allShow={allShow} plan={head.pricing_header.plan} percentage_off={head.pricing_header.percentage_off} price={head.pricing_header.price} cta={head.pricing_header.cta} refQuery={refQuery} lgQuery={lgQuery} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}