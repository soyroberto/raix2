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
            <div className="h-20 flex items-center">
              <svg 
                width="120" 
                height="70" 
                viewBox="0 0 1080 625"
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <path 
                  fill="rgb(255,255,255)" 
                  fillOpacity="1" 
                  d="M533.4696044921875,128.31903076171875 C528.5718383789062,210.188232421875 472.90899658203125,266.23199462890625 390.1319885253906,266.23199462890625 C343.12200927734375,266.23199462890625 301.1700134277344,244.5919952392578 273.7099914550781,210.71499633789062 C255.2050018310547,272.46600341796875 185.4952392578125,309.0014953613281 118.17196655273438,303.32098388671875 C51.19625473022461,296.7384033203125 10.297713279724121,254.84800720214844 -7.6106157302856445,204.95166015625 C-21.1815242767334,257.02496337890625 -53.372222900390625,306.5339660644531 -136.6733856201172,310.9396057128906 C-204.35389709472656,313.6692199707031 -255.2050018310547,272.46600341796875 -273.7099914550781,210.71499633789062 C-301.1700134277344,244.5919952392578 -343.12200927734375,266.23199462890625 -390.1319885253906,266.23199462890625 C-472.90899658203125,266.23199462890625 -540,199.12451171875 -540,116.34751892089844 C-540,34.48251724243164 -474.3349914550781,-32.077999114990234 -392.7850036621094,-33.48699951171875 C-417.19830322265625,-59.262359619140625 -431.2546691894531,-97.11054992675781 -432.21209716796875,-122.61190795898438 C-435.5191650390625,-208.0864715576172 -363.3871765136719,-290.0140380859375 -267.6512451171875,-282.8193359375 C-213.3513641357422,-278.6711730957031 -155.70372009277344,-252.30523681640625 -138.5433807373047,-194.3686065673828 C-123.40390014648438,-261.12762451171875 -60.13972854614258,-304.10833740234375 10.331439018249512,-296.24676513671875 C77.44377899169922,-289.1197814941406 136.20774841308594,-231.31182861328125 130.9082794189453,-166.59849548339844 C150.2538604736328,-211.4908447265625 202.20082092285156,-240.4938201904297 258.9449157714844,-236.0199432373047 C341.3683166503906,-230.5297088623047 395.207763671875,-169.4733123779297 395.207763671875,-86.69631958007812 C395.207763671875,-61.160316467285156 388.8237609863281,-37.11631774902344 377.5477600097656,-16.07331657409668 C465.2915954589844,-24.473342895507812 538.385009765625,46.740440368652344 533.4696044921875,128.31903076171875z"
                />
              </svg>
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px) scale(1); }
                  50% { transform: translateY(-8px) scale(1.02); }
                }
              `}</style>
            </div>
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