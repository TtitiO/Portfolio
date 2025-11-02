import React from 'react';
import { Contact } from '../types';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import Gallery from './Gallery';
import { profileData } from '../data/profileData';

declare const marked: any;

interface SidebarProps {
  name: string;
  title: string;
  bio: string;
  contact: Contact;
  currentPage: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  const indicatorClass = `nav-indicator mr-4 h-px transition-all group-focus-visible:w-16 group-focus-visible:bg-heading dark:group-focus-visible:bg-dark-heading motion-reduce:transition-none ${isActive ? 'w-16 bg-heading dark:bg-dark-heading' : 'w-8 bg-secondary dark:bg-dark-secondary group-hover:w-16 group-hover:bg-heading dark:group-hover:bg-dark-heading'}`;
  const textClass = `nav-text text-xs font-bold uppercase tracking-widest group-focus-visible:text-heading dark:group-focus-visible:text-dark-heading ${isActive ? 'text-heading dark:text-dark-heading' : 'text-secondary dark:text-dark-secondary group-hover:text-heading dark:group-hover:text-dark-heading'}`;
  
  return (
    <a href={href} className="group flex items-center py-2">
      <span className={indicatorClass}></span>
      <span className={textClass}>
        {children}
      </span>
    </a>
  );
};


const Sidebar: React.FC<SidebarProps> = ({ name, title, bio, contact, currentPage }) => {
  const parsedBio = { __html: marked.parse(bio) };
  
  const isMainPageActive = !['publications', 'experiences', 'blogs'].includes(currentPage);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-heading dark:text-dark-heading sm:text-5xl">
          <a href="#about" className="text-blue dark:text-dark-blue">{name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-heading dark:text-dark-heading sm:text-xl">
          {title}
        </h2>
        <div
          className="mt-4 max-w-xs leading-normal markdown-content"
          dangerouslySetInnerHTML={parsedBio}
        />
      
        <nav className="nav lg:block mt-8 lg:mt-16" aria-label="In-page jump links">
            <ul className="w-max">
                {/* FIX: Corrected a reference error by using `isMainPageActive` instead of the undefined `isMainPage`. */}
                <li><NavLink href="#about" isActive={isMainPageActive}>About</NavLink></li>
                <li><NavLink href="#publications" isActive={currentPage === 'publications'}>Publications</NavLink></li>
                <li><NavLink href="#experiences" isActive={currentPage === 'experiences'}>Experiences</NavLink></li>
                <li><NavLink href="#blogs" isActive={currentPage === 'blogs'}>Blogs</NavLink></li>
            </ul>
        </nav>
      </div>

      <div className="flex flex-col">
        <div className="hidden lg:block mt-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-dark-secondary mb-4">Gallery</h3>
            <Gallery images={profileData.gallery} />
        </div>
        <div className="mt-8 flex items-center" aria-label="Social media and theme toggle">
          <a href={contact.github} target="_blank" rel="noreferrer noopener" className="mr-5 text-secondary dark:text-dark-secondary hover:text-heading dark:hover:text-dark-heading transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="mr-5 text-secondary dark:text-dark-secondary hover:text-heading dark:hover:text-dark-heading transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          {contact.twitter && (
            <a href={contact.twitter} target="_blank" rel="noreferrer noopener" className="mr-5 text-secondary dark:text-dark-secondary hover:text-heading dark:hover:text-dark-heading transition-colors">
              <TwitterIcon className="h-6 w-6" />
            </a>
          )}
          <a href={`mailto:${contact.email}`} className="mr-5 text-secondary dark:text-dark-secondary hover:text-heading dark:hover:text-dark-heading transition-colors">
            <MailIcon className="h-6 w-6" />
          </a>
          <div className="border-l border-border dark:border-dark-border h-6 mx-2"></div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;