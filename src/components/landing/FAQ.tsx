import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does HelaPoint work offline?",
    answer: "Yes! HelaPoint is built offline-first so your store keeps running during network outages and power cuts. All transactions are saved locally and sync automatically when connectivity returns."
  },
  {
    question: "How does multi-cashier tracking prevent losses?",
    answer: "Each cashier logs in with their own account. Every sale, refund, and credit transaction is recorded with the cashier's name and timestamp. You can see exactly who sold what and when—no more disputes or missing money."
  },
  {
    question: "Can I track customer credit and due dates?",
    answer: "Absolutely. HelaPoint has built-in credit management—record what customers owe, set due dates, log payments, and see outstanding balances at a glance. No more paper ledgers or forgotten debts."
  },
  {
    question: "Is HelaPoint available on my Android phone?",
    answer: "Yes! HelaPoint is available on the Google Play Store. It works on Android phones and tablets, so you can use the device you already have."
  },
  {
    question: "Can I manage multiple stores?",
    answer: "Yes. Create multiple stores under one business account. Data syncs across all stores when online, and each store can operate independently when offline."
  },
  {
    question: "How does barcode scanning work?",
    answer: "Just point your phone camera at any barcode. HelaPoint instantly finds the product and adds it to the cart. Great for busy checkout lines and large product catalogs."
  },
  {
    question: "What about receipt printing?",
    answer: "Connect any compatible Bluetooth receipt printer. HelaPoint remembers your printer and can auto-print receipts after each sale."
  },
  {
    question: "Do I need internet to use HelaPoint?",
    answer: "No. HelaPoint works fully offline. You can sell, manage inventory, and track credit without any internet. When you do connect, everything syncs automatically in the background."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
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
                className="bg-background rounded-xl px-6 border border-border animate-fade-in hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
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
