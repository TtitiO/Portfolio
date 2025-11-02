import React from 'react';
import { Education, Experience, Publication, Blog } from '../types';
import { ExternalLinkIcon, GithubIcon } from './Icons';

// Because marked is loaded from a CDN, we need to declare it for TypeScript
declare const marked: any;

// FIX: Refactored the `Card` component to be a `React.FC` which resolves a
// TypeScript type inference issue that was incorrectly reporting the
// `children` prop as missing.
interface CardProps {
  children: React.ReactNode;
  link?: string;
}

const Card: React.FC<CardProps> = ({ children, link }) => {
  const content = (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-overlay/70 dark:lg:group-hover:bg-dark-overlay/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      {children}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noreferrer noopener" className="block">{content}</a>
  ) : (
    <div>{content}</div>
  );
}


interface EducationCardProps {
    education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
    const parsedDescription = { __html: marked.parse(education.description) };
    return (
        <Card>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-secondary dark:text-dark-secondary sm:col-span-2" aria-label={education.period}>
            {education.period}
          </header>
          <div className="z-10 sm:col-span-6">
            <div>
              <h3 className="font-medium leading-snug text-heading dark:text-dark-heading group-hover:text-accent dark:group-hover:text-dark-accent font-bold">{education.degree}</h3>
              <p className="text-secondary dark:text-dark-secondary">{education.institution}</p>
            </div>
            <div 
                className="mt-2 text-sm leading-normal markdown-content"
                dangerouslySetInnerHTML={parsedDescription}
            />
          </div>
        </Card>
    );
};

interface PublicationCardProps {
    publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
    const parsedDescription = { __html: marked.parse(publication.description) };
    return (
        <Card link={publication.link}>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-secondary dark:text-dark-secondary sm:col-span-2" aria-label={`${publication.year}`}>
                {publication.year}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-heading dark:text-dark-heading group-hover:text-accent dark:group-hover:text-dark-accent">{publication.title} <ExternalLinkIcon className="inline-block h-4 w-4 ml-1" /></h3>
                <p className="mt-2 text-sm leading-normal font-semibold">{publication.authors.join(', ')}</p>
                <p className="mt-1 text-sm leading-normal text-secondary dark:text-dark-secondary">{publication.journal}</p>
                <div 
                    className="mt-2 text-sm leading-normal markdown-content"
                    dangerouslySetInnerHTML={parsedDescription}
                />
            </div>
        </Card>
    );
};

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const parsedDescription = { __html: marked.parse(experience.description) };
    return (
        <Card link={experience.link}>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-secondary dark:text-dark-secondary sm:col-span-2" aria-label={experience.period}>
                {experience.period}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-heading dark:text-dark-heading group-hover:text-accent dark:group-hover:text-dark-accent">
                    {experience.role} · {experience.company}
                    {experience.link && <ExternalLinkIcon className="inline-block h-4 w-4 ml-1" />}
                </h3>
                <div 
                    className="mt-2 text-sm leading-normal markdown-content"
                    dangerouslySetInnerHTML={parsedDescription}
                />
                 <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {experience.tags.map((tag, i) => (
                        <li key={i} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green dark:text-dark-green ">{tag}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

interface BlogCardProps {
    blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const parsedDescription = { __html: marked.parse(blog.description) };

    return (
        <Card link={blog.link}>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-secondary dark:text-dark-secondary sm:col-span-2" aria-label={blog.date}>
                {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-heading dark:text-dark-heading group-hover:text-accent dark:group-hover:text-dark-accent">{blog.title} <ExternalLinkIcon className="inline-block h-4 w-4 ml-1" /></h3>
                <div 
                    className="mt-2 text-sm leading-normal markdown-content" 
                    dangerouslySetInnerHTML={parsedDescription} 
                />
                <ul className="mt-2 flex flex-wrap" aria-label="Tags:">
                    {blog.tags.map((tag, i) => (
                        <li key={i} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green dark:text-dark-green ">{tag}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};