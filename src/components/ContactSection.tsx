import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ EmailJS

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_nbydr6r",  // ✅ Your EmailJS Service ID
        "template_sra4ujn", // ✅ Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          inquiry_type: formData.inquiryType || "Not specified",
          message: formData.message
        },
        "S6WKi-CkRNAQzwO8j" // ✅ Your EmailJS Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours."
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive"
      });
      console.error("EmailJS Error:", error);
    }

    setLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-healthcare-light">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-healthcare-navy mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-healthcare-gray max-w-2xl mx-auto">
            Ready to optimize your operations and boost your revenue? 
            Reach out to us today and let's build a tailored solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-healthcare-navy">Get in Touch</CardTitle>
                <CardDescription className="text-healthcare-gray">
                  We're here to help transform your healthcare operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-healthcare-navy mb-1">Email Us</h4>
                    <a href="mailto:info@revenuescare.com" className="text-healthcare-gray hover:text-primary transition-colors">info@revenuescare.com</a>
                    <p className="text-sm text-healthcare-gray">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-healthcare-navy mb-1">Office Location</h4>
                    <p className="text-healthcare-gray">Revenue's Care, Rajapark, 302004,</p>
                    <p className="text-healthcare-gray">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white border-0 shadow-lg">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl text-healthcare-navy">Send Us a Message</CardTitle>
              <CardDescription className="text-healthcare-gray">
                Fill out the form below and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-healthcare-navy">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-healthcare-navy">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-healthcare-navy">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiryType" className="text-healthcare-navy">Inquiry Type</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rcm">RCM Services</SelectItem>
                        <SelectItem value="call-center">Call Center</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-healthcare-navy">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your needs and how we can help..."
                    className="mt-1 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-6 text-lg"
                  disabled={loading}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {loading ? "Sending..." : "Schedule a Free Demo"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
