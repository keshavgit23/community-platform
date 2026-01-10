import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Community, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily use the platform for personal, 
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password 
              and for restricting access to your computer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. User Content</h2>
            <p>
              You retain ownership of any content you submit, post, or display on or through the service. 
              By posting content, you grant us a license to use, modify, and display that content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Prohibited Activities</h2>
            <p>
              You may not use our platform for any illegal or unauthorized purpose. 
              You must not violate any laws in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@community.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
