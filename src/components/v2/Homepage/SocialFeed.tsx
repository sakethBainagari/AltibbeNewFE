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
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E3E6EA] z-10">
      <div className="max-w-7xl mx-auto">
  <h2 className="font-poppins text-4xl md:text-5xl font-semibold mb-14 text-[#0B5345] text-center drop-shadow-lg tracking-tight">Social & Media Feeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Instagram Feed Embed */}
          <div className="rounded-2xl shadow-xl p-6 bg-white/80 backdrop-blur-md flex flex-col items-center min-h-[220px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
            <h3 className="text-xl font-semibold mb-3 text-[#0B5345]">Instagram</h3>
            <iframe
              src="https://www.instagram.com/altibbe/embed"
              title="Instagram Feed"
              className="w-full h-40 border-none rounded"
              loading="lazy"
            />
          </div>
          {/* LinkedIn Feed Embed */}
          <div className="rounded-2xl shadow-xl p-6 bg-white/80 backdrop-blur-md flex flex-col items-center min-h-[220px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
            <h3 className="text-xl font-semibold mb-3 text-[#0B5345]">LinkedIn</h3>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:123456789"
              title="LinkedIn Feed"
              className="w-full h-40 border-none rounded"
              loading="lazy"
            />
          </div>
          {/* Blog Previews */}
          <div className="rounded-2xl shadow-xl p-6 bg-white/80 backdrop-blur-md flex flex-col items-center min-h-[220px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
            <h3 className="text-xl font-semibold mb-3 text-[#0B5345]">From Our Blog</h3>
            <div className="flex flex-col gap-4 w-full">
              {/* Example blog posts, replace with dynamic data as needed */}
              <a
                href="/blog/empower-health"
                className="flex items-center gap-3 group border-b border-transparent hover:border-[#D4AF37] pb-2 transition-all"
              >
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="How Altibbe Empowers Global Health" className="w-14 h-14 object-cover rounded shadow-md group-hover:scale-105 transition-transform duration-300" />
                <span className="text-base font-medium group-hover:text-[#D4AF37] transition-colors">How Altibbe Empowers Global Health</span>
              </a>
              <a
                href="/blog/hedamo-standard"
                className="flex items-center gap-3 group border-b border-transparent hover:border-[#D4AF37] pb-2 transition-all"
              >
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Hedamo: Setting the Standard for Transparency" className="w-14 h-14 object-cover rounded shadow-md group-hover:scale-105 transition-transform duration-300" />
                <span className="text-base font-medium group-hover:text-[#D4AF37] transition-colors">Hedamo: Setting the Standard for Transparency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}