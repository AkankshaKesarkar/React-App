import logo from './logo.svg';
import './App.css';
import Testimonial from './Component/Testimonial';
import FaqSection from './Component/FaqSection';
import FaqQueSection from './Component/FaqQueSection';
import StillHaveQuestions from './Component/StillHaveQuestions';
import BlogSection from './Component/BlogSection';
import BlogPostCard from './Component/BlogPostCard';
import FreeTrialSection from './Component/FreeTrialSection';
import FooterNavigation from './Component/FooterNavigation';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';

function App() {
  const blogPosts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      authors: [
        { name: 'Olivia Rhye', image: 'path/to/olivia-rhye.jpg' }, 
      ],
      date: '20 Jan 2024',
      image: 'path/to/blog-post-1.jpg' 
    },
    // ... other blog post data
  ];
  return (
    <>
    <div>
      <Testimonial/>
    </div>
    <div>
      <FaqSection/>
    </div>
    <div>
      <FaqQueSection/>
    </div>
    <div>
      <StillHaveQuestions/>
    </div>
    <div className="container"> 
      {blogPosts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
    </div>
    <div>
      <BlogPostCard/>
    </div>
    <div>
      <FreeTrialSection/>
    </div>
    <div>
      <FooterNavigation/>
    </div>
    <div>
      {/* ... other content ... */}
      <Footer/>
    </div>
    <div>
      <Sidebar/>
    </div>
    </>
  );
}

export default App;
