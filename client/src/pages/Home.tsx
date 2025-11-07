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
            <div className="h-28 flex items-center relative floating-cloud">
              {/* Cloud SVG Background */}
              <svg 
                width="200" 
                height="110" 
                viewBox="0 0 1080 625"
                className="absolute"
                style={{
                  left: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                <path 
                  fill="rgb(255,255,255)" 
                  fillOpacity="1" 
                  d="M534.3162231445312,126.76692962646484 C530.0534057617188,208.75381469726562 472.90899658203125,266.23199462890625 390.1319885253906,266.23199462890625 C343.12200927734375,266.23199462890625 301.1700134277344,244.5919952392578 273.7099914550781,210.71499633789062 C255.2050018310547,272.46600341796875 187.1074676513672,310.099365234375 119.72406768798828,305.15533447265625 C54.2103157043457,299.4261169433594 12.310864448547363,259.0260314941406 -6.6229071617126465,209.74905395507812 C-21.783653259277344,260.9207763671875 -56.10405349731445,307.9517517089844 -135.82676696777344,311.7862243652344 C-203.5210723876953,314.1619567871094 -255.2050018310547,272.46600341796875 -273.7099914550781,210.71499633789062 C-301.1700134277344,244.5919952392578 -343.12200927734375,266.23199462890625 -390.1319885253906,266.23199462890625 C-472.90899658203125,266.23199462890625 -540,199.12445068359375 -540,116.34745025634766 C-540,34.48244857788086 -474.3349914550781,-32.077999114990234 -392.7850036621094,-33.48699951171875 C-415.4951171875,-58.64883804321289 -428.55682373046875,-94.70738983154297 -429.39013671875,-120.21324920654297 C-432.2684631347656,-205.3380889892578 -360.7900085449219,-285.3421936035156 -266.7341003417969,-279.0802307128906 C-213.5276336669922,-275.4698486328125 -158.02879333496094,-249.85000610351562 -139.53109741210938,-195.21524047851562 C-124.39154052734375,-261.9742431640625 -61.590091705322266,-305.8406066894531 8.990991592407227,-298.99822998046875 C76.6509017944336,-292.79522705078125 135.5354461669922,-236.02169799804688 132.88363647460938,-171.0431365966797 C153.2832794189453,-214.3268280029297 203.82061767578125,-242.24195861816406 259.156494140625,-238.3480987548828 C341.625732421875,-233.56964111328125 397.1831970214844,-171.73089599609375 397.1831970214844,-88.95389556884766 C397.1831970214844,-63.41790008544922 390.7991943359375,-39.373897552490234 379.523193359375,-18.33089828491211 C466.4640197753906,-25.45924186706543 538.5943603515625,45.15120315551758 534.3162231445312,126.76692962646484z"
                />
              </svg>
              {/* Text Overlay */}
              <div className="relative z-10 flex flex-col items-center" style={{ marginLeft: '30px' }}>
                <span className="text-black font-black text-4xl tracking-tight" style={{ letterSpacing: '-0.074em' }}>
                  raix
                </span>
                <span className="text-black font-bold text-[10px] uppercase tracking-normal mt-[-4px]">
                  (Cyber & AI consultancy)
                </span>
              </div>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-tight">
                Empowering Australian Businesses with Copilot Studio & Cybersecurity Expertise
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">About RAIX</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-black mb-12 text-center">
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
            Get in Touch
          </h2>
          <Card className="bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-[150px] bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="mailto:roberto@raix.au"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>roberto@raix.au</span>
            </a>
            <a
              href="https://www.linkedin.com/in/roberto-martinez-b2b48b18/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20">
        <div className="container">
          <p className="text-center text-white/60">
            © {new Date().getFullYear()} RAIX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
