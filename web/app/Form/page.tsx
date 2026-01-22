import { ContactForm } from "@/components/ui/ContactForm";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function FormPage() {
  return (
    <div className="flex min-h-screen w-screen bg-background items-center justify-center font-sans p-4 sm:p-6 md:p-8">
      <ThemeToggle />
      <main className="flex flex-col items-center justify-center w-full max-w-2xl">
        <ContactForm />
      </main>
    </div>
  );
}
        
        