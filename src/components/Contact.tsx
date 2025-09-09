import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    division: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "", division: "" });
  };

  const divisions = [
    "Stone Works & Foundations",
    "Dar Al-Siyana – General Maintenance",
    "Dar Al-Aman – Safety & Security",
    "Digital Roots – Creative & Digital",
    "Rent Easy UAE – Leasing & Rental",
    "General Inquiry"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 62385 33609"],
      action: "tel:+916238533609"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+91 62385 33609"],
      action: "https://wa.me/916238533609"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@tectonagroup.ae", "support@tectonagroup.ae"],
      action: "mailto:info@tectonagroup.ae"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Dubai, UAE", "Business Bay Area"],
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sun - Thu: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Contact us today for a consultation 
            and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-tectona-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-tectona-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="division" className="block text-sm font-medium text-foreground mb-2">
                      Service Division
                    </label>
                    <Select value={formData.division} onValueChange={(value) => setFormData({ ...formData, division: value })}>
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-tectona-orange">
                        <SelectValue placeholder="Select a division" />
                      </SelectTrigger>
                      <SelectContent>
                        {divisions.map((division) => (
                          <SelectItem key={division} value={division}>
                            {division}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project or requirements..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-tectona-orange resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-accent text-white font-semibold py-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={info.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {info.title}
                          </h4>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {info.action ? (
                                  <a 
                                    href={info.action}
                                    className="hover:text-tectona-orange transition-colors duration-300"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;