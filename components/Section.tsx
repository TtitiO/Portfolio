import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  Icon?: React.FC<{ className?: string }>;
  children: React.ReactNode;
  actionLink?: { href: string; text: string; };
  actionControls?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, Icon, children, actionLink, actionControls }) => {
  return (
    <section id={id} aria-label={title} className="mb-16 last:mb-0 scroll-mt-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-mauve dark:text-dark-mauve flex items-center">
            {Icon && <Icon className="mr-2 h-5 w-5" />}
            {title}
        </h2>
        <div className="flex items-center gap-4">
            {actionControls}
            {actionLink && (
                <a href={actionLink.href} className="text-sm font-medium text-primary dark:text-dark-primary hover:text-accent dark:hover:text-dark-accent group">
                    {actionLink.text} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                </a>
            )}
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
