import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "daac3f83-bef1-43b2-9d23-a632900aef97",
          subject: "New Contact Form Submission from RAIX Website",
          from_name: "RAIX Website",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/20">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/raix-logo.svg" alt="RAIX Logo" className="h-20 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-foreground/80 font-semibold transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-foreground/80 font-semibold transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-me")}
              className="text-foreground hover:text-foreground/80 font-semibold transition-colors"
            >
              Why Me
            </button>
            <Link href="/blog">
              <button className="text-foreground hover:text-foreground/80 font-semibold transition-colors">
                Blog
              </button>
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-foreground/80 font-semibold transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-2 border-dashed border-white bg-transparent hover:bg-white/10"
              onClick={() => scrollToSection("contact")}
            >
              Book a Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-2 border-dashed border-white bg-transparent hover:bg-white/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex flex-col items-center">
              <img
                src="/hero-image.png"
                alt="Copilot Studio & Cybersecurity"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-white font-semibold mt-6 text-lg">
                Copilot Studio • Cybersecurity
              </p>
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
                Empowering Australian Businesses with Copilot Studio & Cybersecurity Expertise
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About RAIX</h2>
          <p className="text-white text-lg leading-relaxed">
            With over 25 years of experience in IT, RAIX helps Australian businesses harness the
            power of Microsoft Copilot Studio and modern cybersecurity. Passionate about making
            advanced technology accessible, practical, and secure for organizations of all sizes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            My Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-dashed border-primary bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Microsoft Copilot Studio Consulting
                </h3>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Setup, Customisation and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ongoing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Staff Training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-dashed border-primary bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Cybersecurity Assessments & Solutions
                </h3>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Setup, Customisation and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ongoing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Staff Training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Why Work With a Dedicated Consultant?
          </h2>
          <ul className="space-y-4 text-white text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl mt-1">•</span>
              <span>Personalized, hands-on service</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl mt-1">•</span>
              <span>Flexible, affordable packages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl mt-1">•</span>
              <span>Local expertise focused on Australian businesses</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Get in Touch
          </h2>
          <Card className="bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                <div>
                  <label htmlFor="name" className="block text-card-foreground font-semibold mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-card-foreground font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-card-foreground font-semibold mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-border"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <a
                href="mailto:contact@raix.example.com"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="flex gap-6 text-white/80 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Terms & Support
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

