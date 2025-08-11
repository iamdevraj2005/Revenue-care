import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Phone, 
  DollarSign, 
  Users, 
  Clock, 
  Shield,
  TrendingUp,
  FileText,
  Headphones,
  MessageSquare
} from "lucide-react";
import healthcareImage from "@/assets/healthcare-services.jpg";
import callCenterImage from "@/assets/call-center.jpg";

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-healthcare-light">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-healthcare-navy mb-4">
            What Services We Offer
          </h2>
          <p className="text-lg text-healthcare-gray max-w-2xl mx-auto">
            Comprehensive healthcare BPO solutions and 24/7 contact center services designed to 
            optimize your operations and boost revenue.
          </p>
        </div>

        {/* Healthcare Services */}
        <div className="mb-20">
          <Card className="overflow-hidden shadow-lg border-0 bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={healthcareImage} 
                  alt="Healthcare Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-healthcare-navy">
                    Healthcare Services
                  </h3>
                </div>
                <p className="text-healthcare-gray mb-6 leading-relaxed">
                  Revenue's Care is a leading healthcare BPO company, delivering cost-effective, 
                  process-driven solutions tailored to the healthcare industry. We work with 
                  physician practices, hospitals, billing companies, and intermediaries to improve 
                  revenue cycles using smart technology and analytics.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-healthcare-navy mb-3">We Help You:</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-accent" />
                      <span className="text-sm">Reduce payroll and operational costs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <span className="text-sm">Enhance revenue and maximize shareholder value</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span className="text-sm">Improve patient and physician satisfaction</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="text-sm">Decrease staffing challenges and training time</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-accent" />
                      <span className="text-sm">Maximize efficiencies and economies of scale</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span className="text-sm">Improve overall service levels</span>
                    </div>
                  </div>
                </div>

                <div className="bg-healthcare-light/30 p-4 rounded-lg mb-6">
                  <h4 className="text-md font-semibold text-healthcare-navy mb-2">Our Approach:</h4>
                  <p className="text-sm text-healthcare-gray leading-relaxed">
                    Whether you're a small practice or a large healthcare system, we bring together 
                    the right people, process, and technology to streamline your operations so you 
                    can focus on patient care.
                  </p>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-primary to-accent text-white"
                  onClick={scrollToContact}
                >
                  Learn More About RCM
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Center Services */}
        <div className="mb-20">
          <Card className="overflow-hidden shadow-lg border-0 bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <Phone className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-healthcare-navy">
                    Contact Center Services
                  </h3>
                </div>
                <p className="text-healthcare-gray mb-6 leading-relaxed">
                  For just a few dollars a day, small businesses get access to 24/7/365 live 
                  customer service through Revenue's Care. Our call center services help 
                  businesses stay competitive and provide top-tier client experiences.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-healthcare-navy mb-3">Small Business, Big Impact:</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Friendly, professionally trained agents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm">Robust call center technology</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="text-sm">Custom scripts tailored to your brand</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-healthcare-navy mb-3">Why Choose Us:</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">Always-on Availability - Calls answered 24/7 within 3 rings</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Headphones className="h-5 w-5 text-primary" />
                      <span className="text-sm">Exceptional Experience - Warm, empathetic agents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span className="text-sm">Affordable Pricing - Shared or dedicated models</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <span className="text-sm">CRM Integration - Salesforce, Zendesk, etc.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg mb-6">
                  <h4 className="text-md font-semibold text-healthcare-navy mb-2">Inbound & Outbound Services:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-healthcare-gray">
                    <div>
                      <strong>Inbound:</strong> Customer service, help desk, emergency dispatch, order support
                    </div>
                    <div>
                      <strong>Outbound:</strong> Lead generation, telesales, appointment booking, surveys
                    </div>
                  </div>
                  <p className="text-sm text-healthcare-gray mt-2">
                    <strong>Channels:</strong> Phone, email, live chat, SMS
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={scrollToContact}
                >
                  Explore Call Center Solutions
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative h-64 lg:h-auto">
                <img 
                  src={callCenterImage} 
                  alt="Call Center Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Services Overview */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-healthcare-navy mb-4">
            End-to-End Healthcare Revenue Cycle Management
          </h3>
          <p className="text-healthcare-gray mb-8 max-w-3xl mx-auto">
            We deliver comprehensive RCM services tailored for physician practices, hospitals, and intermediaries. 
            Our goal is to drive revenue, reduce costs, and improve satisfaction.
          </p>
          
          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
            <h4 className="text-xl font-semibold text-healthcare-navy mb-4">Key RCM Processes We Handle:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Appointment Scheduling",
                "Insurance Verification (VoB / Eligibility)", 
                "Patient Demographic Entry & Pre-Registration",
                "Medical Coding (ICD-10, CPT, HCPCS)",
                "Charge Entry & Electronic Claim Submission",
                "EDI Rejection Management & Scrubbing",
                "Payment Posting (Payer & Patient)",
                "Denial Analysis & Appeals",
                "Patient Billing & Collections",
                "AR Follow-Up & A/R Aging Management",
                "Custom Reporting (Daily, Monthly, Ad-hoc)"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 hover:bg-healthcare-light/20 rounded">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-healthcare-navy text-left">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-0">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-3" />
                <h5 className="font-semibold text-healthcare-navy mb-2">Exceptional Accuracy</h5>
                <p className="text-sm text-healthcare-gray">We maintain industry-leading quality standards</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-0">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h5 className="font-semibold text-healthcare-navy mb-2">Client-Centric Flexibility</h5>
                <p className="text-sm text-healthcare-gray">Custom service models that adapt to your needs</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-0">
              <CardContent className="p-0 text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-3" />
                <h5 className="font-semibold text-healthcare-navy mb-2">Engaged Workforce</h5>
                <p className="text-sm text-healthcare-gray">Dedicated teams focused on your success</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-white px-8"
            onClick={scrollToContact}
          >
            Ready to Elevate Your Revenue Cycle?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;