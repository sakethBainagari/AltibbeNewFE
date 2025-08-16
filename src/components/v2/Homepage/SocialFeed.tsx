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
    <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-[#FEFEFE] via-[#FDFDFD] to-[#F8F9FA] z-10">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-light mb-16 text-[#0B5345] text-center tracking-tight leading-tight"
          style={{ 
            fontFamily: '"Playfair Display", "Georgia", serif', 
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: '1.1'
          }}
        >
          Social & Media Feeds
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instagram Feed Embed */}
          <div className="rounded-lg shadow-lg p-8 bg-white border border-gray-100 flex flex-col items-center min-h-[280px] transition-all duration-300 hover:shadow-xl hover:border-gray-200">
            <h3 
              className="text-xl font-medium mb-6 text-[#0B5345]"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}
            >
              Instagram
            </h3>
            <iframe
              src="https://www.instagram.com/altibbe/embed"
              title="Instagram Feed"
              className="w-full h-48 border border-gray-200 rounded-md"
              loading="lazy"
            />
          </div>

          {/* LinkedIn Feed Embed */}
          <div className="rounded-lg shadow-lg p-8 bg-white border border-gray-100 flex flex-col items-center min-h-[280px] transition-all duration-300 hover:shadow-xl hover:border-gray-200">
            <h3 
              className="text-xl font-medium mb-6 text-[#0B5345]"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}
            >
              LinkedIn
            </h3>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:123456789"
              title="LinkedIn Feed"
              className="w-full h-48 border border-gray-200 rounded-md"
              loading="lazy"
            />
          </div>

          {/* Blog Previews */}
          <div className="rounded-lg shadow-lg p-8 bg-white border border-gray-100 flex flex-col items-center min-h-[280px] transition-all duration-300 hover:shadow-xl hover:border-gray-200">
            <h3 
              className="text-xl font-medium mb-6 text-[#0B5345]"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}
            >
              From Our Blog
            </h3>
            <div className="flex flex-col gap-6 w-full">
              {/* Example blog posts, replace with dynamic data as needed */}
              <a
                href="/blog/empower-health"
                className="flex items-center gap-4 group border-b border-gray-100 hover:border-[#D4AF37] pb-4 transition-all duration-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" 
                  alt="How Altibbe Empowers Global Health" 
                  className="w-16 h-16 object-cover rounded-md shadow-sm group-hover:shadow-md transition-all duration-300" 
                />
                <span 
                  className="text-sm font-medium group-hover:text-[#D4AF37] transition-colors leading-relaxed"
                  style={{ 
                    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                    fontWeight: 400,
                    lineHeight: '1.5'
                  }}
                >
                  How Altibbe Empowers Global Health
                </span>
              </a>
              <a
                href="/blog/hedamo-standard"
                className="flex items-center gap-4 group border-b border-gray-100 hover:border-[#D4AF37] pb-4 transition-all duration-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" 
                  alt="Hedamo: Setting the Standard for Transparency" 
                  className="w-16 h-16 object-cover rounded-md shadow-sm group-hover:shadow-md transition-all duration-300" 
                />
                <span 
                  className="text-sm font-medium group-hover:text-[#D4AF37] transition-colors leading-relaxed"
                  style={{ 
                    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                    fontWeight: 400,
                    lineHeight: '1.5'
                  }}
                >
                  Hedamo: Setting the Standard for Transparency
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}