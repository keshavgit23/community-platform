import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="mb-4">
            Welcome to Community, your platform for building meaningful connections 
            and growing together. We believe in the power of community to transform 
            ideas into reality.
          </p>
          <p className="mb-4">
            Our mission is to provide the tools and space for people to connect, 
            share knowledge, and collaborate on projects that matter.
          </p>
          <p>
            Whether you're looking to join events, share your thoughts through posts, 
            or connect with like-minded members, we're here to help you build your community.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
