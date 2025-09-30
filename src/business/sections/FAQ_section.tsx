import { useState } from "react";
import FAQItem from "../components/faq_item";
import Link from "next/link";

export default function FAQSection() {

  const [active, setActive] = useState('');
  const FAQ = [
    {
      question: "What is Moil?",
      answer: "Moil is a platform designed to connect skilled professionals, such as carpenters, plumbers, and painters, with job opportunities. It uses AI-powered technology to match skilled workers with on-demand jobs."
    },
    {
      question: "How does Moil work?",
      answer: "Moil leverages AI to match skilled professionals with job opportunities posted by individuals or businesses in need of services. Users can sign up, create profiles, and start connecting with job opportunities or service providers."
    },
    {
      question: "How do I post a job on Moil?",
      answer: "To post a job, sign in to your Moil account, navigate to the job posting section, and fill in the details of the job, including the required skills, duration, and payment terms."
    },
    {
      question: "How are job matches made?",
      answer: "Moil's AI technology analyzes job requirements and matches them with the profiles of registered professionals, ensuring a good fit for the job."
    },
    {
      question: "Is there a fee to post a job on Moil?",
      answer: "Posting a job may be free or involve a fee depending on the level of service and visibility you choose. Check the pricing section on the website for detailed information."
    },
    {
      question: "How secure is my data on Moil?",
      answer: (
        <span>
          Moil prioritizes the security of your data with robust encryption and regular security audits. For more information, refer to our <Link href="/privacy" className="text-blue-500 underline">privacy policy</Link>.
        </span>
      )
    },
    {
      question: "How do I report a problem or get support?",
      answer: (
        <span>
          If you encounter any issues or need support, you can contact our support team through the app or by emailing <a href="mailto:cs@moilapp.com" className="text-blue-500 underline">cs@moilapp.com</a>.
        </span>
      )
    },
    {
      question: "How can I provide feedback or suggest improvements?",
      answer: (
        <span>
          We value your feedback! You can provide feedback or suggest improvements by emailing <a href="mailto:cs@moilapp.com" className="text-blue-500 underline">cs@moilapp.com</a>.
        </span>
      )
    }
  ];
  


  const onClick = (question: string) => {
    if (active !== question) {
      setActive(question);
    } else {
      setActive('');
    }
  }
  return (
    <div className="flex justify-center flex-col gap-y-4 py-6">
      <p className="font-[800] text-[20px] md:text-[32px] leading-normal text-center text-[#000000DE]">Frequently Asked Questions</p>
      <div className="flex w-full px-6 md:px-8 lg:px-12 xl:px-0 self-center flex-col gap-y-4 container xl:max-w-[950px] xtraxl:xl:max-w-[1152px]">
        {
          FAQ?.map((faq, i) => {
            return <FAQItem onClick={() => onClick(faq.question)} key={i} question={faq.question} answer={faq.answer} active={faq.question === active} />
          })
        }
      </div>
    </div>
  )
}