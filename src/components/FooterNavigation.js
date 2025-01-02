import React from 'react';
import './FooterNavigation.css';

const FooterNavigation = () => {
  const navigationItems = [
    {
      title: 'Product',
      links: [
        { label: 'Overview' },
        { label: 'Features' },
        { label: 'Solutions', isNew: true },
        { label: 'Tutorials' },
        { label: 'Pricing' },
        { label: 'Releases' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'AboutUs' },
        { label: 'Careers' },
        { label: 'Press' },
        { label: 'News' },
        { label: 'MediaKit' },
        { label: 'Contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog' },
        { label: 'Newsletter' },
        { label: 'Events' },
        { label: 'HelpCentre' },
        { label: 'Tutorials' },
        { label: 'Support' },
      ],
    },
    {
      title: 'Use cases',
      links: [
        { label: 'Startups' },
        { label: 'Enterprise' },
        { label: 'Government' },
        { label: 'SaaS centre' },
        { label: 'Marketplaces' },
        { label: 'Ecommerce' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Twitter' },
        { label: 'LinkedIn' },
        { label: 'Facebook' },
        { label: 'GitHub' },
        { label: 'AngelList' },
        { label: 'Dribbble' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms' },
        { label: 'Privacy' },
        { label: 'Cookies' },
        { label: 'Licenses' },
        { label: 'Settings' },
        { label: 'Contact' },
      ],
    },
  ];

  return (
    <footer className="footer-navigation">
      <div className="container">
        <div className="navigation-grid">
          {navigationItems.map((section, index) => (
            <div key={index} className="navigation-column">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isNew ? (
                      <>
                        <a href="#">{link.label}</a>
                        <span className="new-badge">New</span>
                      </>
                    ) : (
                      <a href="#">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;