import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "What should I wear to the wedding?",
    answer:
      "We kindly ask guests to follow the dress code specified in the invitation. If you're unsure, feel free to reach out – we'd be happy to help!",
  },
  {
    question: "Can I bring a guest with me?",
    answer:
      "If your invitation includes a plus-one, we’d love for you to bring them. If not, we kindly ask that you attend solo. Thank you for understanding.",
  },
  {
    question: "Are children welcome?",
    answer:
      "While we love little ones, this will be an adult-only celebration. We hope this will allow all guests to relax and enjoy themselves.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving 15–30 minutes before the ceremony begins to allow time to find your seat and settle in comfortably.",
  },
  {
    question: "Where is the ceremony and reception taking place?",
    answer:
      "All event details, including addresses, parking, and directions, are provided on the invitation and our wedding website.",
  },
  {
    question: "Is there a gift registry?",
    answer:
      "Your presence is truly the best gift we could ask for. If you'd still like to give something, we’ve included registry information on our website.",
  },
  {
    question: "What should I do if I can’t attend?",
    answer:
      "We’ll miss you, but we understand! Kindly RSVP as soon as possible so we can plan accordingly.",
  },
  {
    question: "Is there assigned seating?",
    answer:
      "Yes, there will be assigned seating for the reception. You’ll find your seat number displayed at the venue entrance.",
  },
  {
    question: "Will food and drinks be provided?",
    answer:
      "Absolutely! A delicious meal and drinks will be served. Please let us know of any dietary restrictions when you RSVP.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask guests to keep phones tucked away during the ceremony so our photographers can capture the moment beautifully. After that—snap away!",
  },
  {
    question: "Where can I park?",
    answer:
      "Parking information is listed on the invitation and wedding website. Valet service may also be available, depending on the venue.",
  },
  {
    question: "Where are the couple going on their honeymoon?",
    answer:
      "We’re so excited for some rest and adventure after the big day! Feel free to ask us in person—we’d love to share!",
  },
];


const FAQ = () => {
  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          {faqs.map((faq, i) => (
            <Disclosure key={i} as="div" defaultOpen={true}>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-gray-900 hover:text-gray-700 focus:outline-none">
                    {faq.question}
                    <span className="ml-4 text-sm">{open ? "−" : "+"}</span>
                  </DisclosureButton>
                  <DisclosurePanel className="pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </DisclosurePanel>
                  <hr className="border-gray-200" />
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
