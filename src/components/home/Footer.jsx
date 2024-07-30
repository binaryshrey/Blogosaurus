import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navigation = [
  { name: 'LinkedIn', href: 'https://in.linkedin.com/in/shreyanshsaurabh' },
  { name: 'Github', href: 'https://github.com/binaryshrey/Blogosaurus' },
  { name: 'Public', href: 'https://blogosaurus.vercel.app/' },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 p-4">
      <footer className="px-4 md:px-6 ">
        <div className="container mx-auto">
          <div className="border-t border-muted-foreground/20 pt-4 flex items-center justify-between">
            <div className="text-sm text-white font-medium text-muted-foreground opacity-70">&copy; 2024 Blogosaurus Inc.</div>
            <div>
              <div className="flex items-center gap-4">
                <a href={navigation[0].href} className="text-muted-foreground opacity-70 hover:text-foreground">
                  <LinkedInIcon style={{ color: 'white' }} />
                </a>

                <a href={navigation[1].href} className="text-muted-foreground opacity-70 hover:text-foreground">
                  <GitHubIcon style={{ color: 'white' }} />
                </a>

                <a href={navigation[2].href} className="text-muted-foreground opacity-70 hover:text-foreground">
                  <PublicIcon style={{ color: 'white' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
