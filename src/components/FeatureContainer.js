import React from 'react';
import './FeatureContainer.css'; // Import the CSS file for styling
import FeatureCard from './FeatureCard';

function FeaturesContainer() {
  return (
    <div className="features-container"> 
      <div className="features-header">
        <button className="features-button">Features</button>
      </div>
      <div className="features-content">
        <h1 className="features-title">Cutting-edge features for advanced analytics</h1>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className='image-container'>
        <img id="img1" src='/images/Desktop.png' alt="Desktop"></img>
        <img id="img2" src='/images/Mobile.png' alt="Mobile"></img>
      </div>
      <div className='container'>
      <section className="features">
        <div className="feature-cards">
          <FeatureCard
            icon={<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_13141_672)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                <path d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_13141_672" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13141_672" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13141_672" result="shape" />
                </filter>
              </defs>
            </svg>}
            title="Share team inboxes"
            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop." />
          <FeatureCard
            icon={<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_13141_680)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                <path d="M27 15L18.0935 25.6879C17.7446 26.1064 17.5702 26.3157 17.5676 26.4925C17.5653 26.6461 17.6337 26.7923 17.7533 26.8889C17.8907 27 18.1632 27 18.708 27H26L25 35L33.9065 24.3121C34.2554 23.8936 34.4298 23.6843 34.4324 23.5075C34.4347 23.3539 34.3663 23.2077 34.2467 23.1111C34.1093 23 33.8368 23 33.292 23H26L27 15Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_13141_680" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13141_680" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13141_680" result="shape" />
                </filter>
              </defs>
            </svg>}
            title="Deliver instant answers"
            description="An all-in-one customer service platform that helps you balance everything your customers need to be happy." />
          <FeatureCard
            icon={<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_13141_688)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                <path d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_13141_688" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13141_688" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13141_688" result="shape" />
                </filter>
              </defs>
            </svg>}
            title="Manage your team with reports"
            description="Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." />
        </div>
      </section>
    </div>
    </div>
  );
}

export default FeaturesContainer;