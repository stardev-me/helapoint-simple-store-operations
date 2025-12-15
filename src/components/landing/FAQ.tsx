import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does HelaPoint work offline?",
    answer: "HelaPoint is designed with offline-first workflows so day-to-day operations can continue during connectivity issues. Data syncs automatically when you're back online."
  },
  {
    question: "Can I scan barcodes?",
    answer: "Yes. HelaPoint supports camera-based barcode scanning for quick product lookup. Just point your device camera at any barcode to instantly find and add products to your cart."
  },
  {
    question: "Can I manage inventory and categories?",
    answer: "Yes. You can organize products into categories and manage stock and pricing. The system includes batch workflows for faster product onboarding and daily inventory updates."
  },
  {
    question: "Do you support wholesale pricing?",
    answer: "HelaPoint supports retail/wholesale modes when enabled for a store. You can easily switch between pricing modes during checkout based on your customer type."
  },
  {
    question: "Can I track customer credit and payments?",
    answer: "Yes. You can track customer balances and record payments. The system monitors due dates and provides clear visibility into outstanding balances."
  },
  {
    question: "How do backups work?",
    answer: "HelaPoint supports scheduled local backups and a user-controlled export/restore flow. You can export your data to Google Drive, local files, or any storage location of your choice."
  },
  {
    question: "Can I use a Bluetooth receipt printer?",
    answer: "HelaPoint includes Bluetooth printer connection workflows. You can scan for devices, connect to your printer, and save preferences for automatic printing."
  },
  {
    question: "Is HelaPoint available on iOS and Android?",
    answer: "HelaPoint is built as a cross-platform app and can be deployed to both iOS and Android devices, giving you flexibility in hardware choices."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
