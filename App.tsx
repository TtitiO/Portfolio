import React, { useState, useEffect } from 'react';
import { profileData } from './data/profileData';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { EducationCard, PublicationCard, ExperienceCard, BlogCard } from './components/Cards';
import { BookOpen, Briefcase, DocumentDuplicateIcon, NewspaperIcon } from './components/Icons';
import Gallery from './components/Gallery';

declare const marked: any;

const App: React.FC = () => {
  const getActivePage = () => window.location.hash.substring(1) || 'about';
  const [activePage, setActivePage] = useState(getActivePage());

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getActivePage());
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const allBlogs = [...profileData.blogs]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const recentBlogs = allBlogs.slice(0, 3);

  const parsedAbout = { __html: marked.parse(profileData.about) };

  const renderContent = () => {
    switch (activePage) {
      case 'publications':
        return (
          <Section id="publications" title="Publications" Icon={DocumentDuplicateIcon}>
            <div className="space-y-8">
              {profileData.publications.map((pub, index) => (
                <PublicationCard key={index} publication={pub} />
              ))}
            </div>
          </Section>
        );
      case 'experiences':
        return (
          <Section id="experiences" title="Experiences" Icon={Briefcase}>
            <div className="space-y-8">
              {profileData.experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </Section>
        );
      case 'blogs':
        return (
          <Section id="blogs" title="All Blogs" Icon={NewspaperIcon}>
            <div className="space-y-8">
              {allBlogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </Section>
        );
      default:
        return (
          <>
            <Section id="about" title="About Me">
              <div
                className="leading-relaxed markdown-content"
                dangerouslySetInnerHTML={parsedAbout}
              />
            </Section>

            <Section id="education" title="Education" Icon={BookOpen}>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <EducationCard key={index} education={edu} />
                ))}
              </div>
            </Section>

            <Section
              id="recents"
              title="Recents"
              Icon={NewspaperIcon}
              actionLink={{ href: '#blogs', text: 'View All Blogs' }}
            >
              <div className="space-y-8">
                {recentBlogs.map((blog, index) => (
                  <BlogCard key={index} blog={blog} />
                ))}
              </div>
            </Section>
          </>
        );
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <div className="lg:flex lg:justify-between lg:gap-12">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-12">
          <Sidebar
            name={profileData.name}
            title={profileData.title}
            bio={profileData.bio}
            contact={profileData.contact}
            currentPage={activePage}
          />
        </header>

        <main className="mt-12 lg:mt-0 lg:w-2/3 lg:py-12">
          <div className="animate-fade-in">
            {renderContent()}

            {/* Gallery Section for Mobile/Tablet */}
            <div className="lg:hidden">
              <Section id="gallery" title="Gallery">
                <Gallery images={profileData.gallery} />
              </Section>
            </div>
          </div>
        </main>
        <footer className="mt-16 text-center text-sm text-secondary dark:text-dark-secondary">
          <p>Designed & Built by {profileData.name}.</p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
