import Navbar from "../components/Navbar";
import BlogMediaHero from "../components/v2/blogmediapage/BlogMediaHero";
import BlogPosts from "../components/v2/blogmediapage/BlogPosts";
import SocialMediaFeed from "../components/v2/blogmediapage/SocialMediaFeed";

export default function BlogMediaPage() {
  return (
    <>
      <Navbar className="bg-white text-black"/>
      <main className="bg-white text-brand-text">
        <BlogMediaHero />
        <BlogPosts />
        <SocialMediaFeed />
      </main>
    </>
  );
}
