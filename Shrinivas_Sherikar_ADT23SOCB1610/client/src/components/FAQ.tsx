import  { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is DrawKit?",
    answer: "DrawKit is a real-time collaborative whiteboard designed for teams. It's perfect for brainstorming sessions, system design, wireframing, or any task where you need a shared visual space."
  },
  {
    question: "Is DrawKit free to use?",
    answer: "Yes! We offer a generous free plan that includes up to 3 collaborative boards. For more advanced features, unlimited boards, and priority support, you can upgrade to our Pro plan."
  },
  {
    question: "How does real-time collaboration work?",
    answer: "Once you share a board link with your team, you'll all be on the same canvas. You can see everyone's cursors moving in real-time, and any shape, drawing, or note you create will instantly appear for everyone else."
  },
  {
    question: "Can I save my drawings and boards?",
    answer: "Absolutely. Your boards are saved automatically to your account. You can access them from your dashboard, and the Pro plan also allows you to export your boards as high-quality PNG, SVG, or PDF files."
  },
  {
    question: "Are my boards private?",
    answer: "Boards on the Free plan are accessible via a shareable link. Upgrading to the Pro plan gives you access to private boards, which are only visible to you and the specific team members you invite."
  }
];


type FaqData = {
  question: string,
  answer: string
}
type AccordionType = {
  item: FaqData,
  isOpen: boolean,
  onClick: () => void
}

const AccordionItem = ({ item, isOpen, onClick }: AccordionType) => {
  return (
    <div className="border-b border-gray-700 py-3 px-3 w-full">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-base font-medium text-white">{item.question}</h3>
        <span className={`text-primary-custom text-2xl transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          {'+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-300 text-sm">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | undefined>();

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? undefined : index);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 sm:p-10 text-balance items-start lg:items-center justify-start w-full">
      <div className="flex flex-col gap-5 md:gap-6 items-start justify-start lg:w-2/5">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-custom/10 text-primary-custom text-sm font-medium">
          <span>FAQ</span>
        </div>
        <div className="text-3xl md:text-4xl font-semibold text-wrap">
          <p>Frequently Asked Questions</p>
        </div>
        <div className="max-w-sm md:max-w-lg text-gray-400 text-sm md:text-base text-wrap">
          <p>
            Have more questions? Feel free to{" "}
            <Link to="/contact" className="text-primary-custom hover:underline">
              contact us
            </Link>.
          </p>
        </div>
      </div>
      <div className="grid gap-3 p-1 lg:p-10 pt-16 md:pt-10 w-full lg:w-3/5 max-w-3xl">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}