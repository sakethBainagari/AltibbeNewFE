// Dummy data for blog posts
const blogPosts = [
  {
    title: 'How Altibbe Empowers Global Health',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '/blog/empower-health',
  },
  {
    title: 'Hedamo: Setting the Standard for Transparency',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    link: '/blog/hedamo-standard',
  },
];

export default function SocialFeed() {
  return (
    <section className="bg-white py-16 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0B5345] text-center">Social & Media Feeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instagram Feed Embed */}
          <div className="rounded-xl shadow-md p-4 bg-[#F8F9FA] flex flex-col items-center min-h-[200px]">
            <h3 className="text-lg font-semibold mb-2">Instagram</h3>
            <iframe
              src="https://www.instagram.com/altibbe/embed"
              title="Instagram Feed"
              className="w-full h-40 border-none rounded"
              loading="lazy"
            />
          </div>
          {/* LinkedIn Feed Embed */}
          <div className="rounded-xl shadow-md p-4 bg-[#F8F9FA] flex flex-col items-center min-h-[200px]">
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:123456789"
              title="LinkedIn Feed"
              className="w-full h-40 border-none rounded"
              loading="lazy"
            />
          </div>
          {/* Blog Previews */}
          <div className="rounded-xl shadow-md p-4 bg-[#F8F9FA] flex flex-col items-center min-h-[200px]">
            <h3 className="text-lg font-semibold mb-2">From Our Blog</h3>
            <div className="flex flex-col gap-4 w-full">
              {/* Example blog posts, replace with dynamic data as needed */}
              <a
                href="/blog/empower-health"
                className="flex items-center gap-3 group border-b border-transparent hover:border-[#D4AF37] pb-2 transition-all"
              >
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="How Altibbe Empowers Global Health" className="w-12 h-12 object-cover rounded" />
                <span className="text-base font-medium group-hover:text-[#D4AF37] transition-colors">How Altibbe Empowers Global Health</span>
              </a>
              <a
                href="/blog/hedamo-standard"
                className="flex items-center gap-3 group border-b border-transparent hover:border-[#D4AF37] pb-2 transition-all"
              >
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Hedamo: Setting the Standard for Transparency" className="w-12 h-12 object-cover rounded" />
                <span className="text-base font-medium group-hover:text-[#D4AF37] transition-colors">Hedamo: Setting the Standard for Transparency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}