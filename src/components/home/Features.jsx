import PublicIcon from '@mui/icons-material/Public';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import InsertChartIcon from '@mui/icons-material/InsertChart';

const features = [
  {
    name: 'Content Editor',
    description: 'A rich text editor with support for markdown, HTML, and WYSIWYG (What You See Is What You Get) to create and format blog posts with ease.',
    icon: EditNoteIcon,
  },
  {
    name: 'SEO Tools',
    description: 'Integrated SEO features such as meta tags, keyword suggestions, and readability analysis to optimize blog content for search engines.',
    icon: PublicIcon,
  },
  {
    name: 'Customizable Themes',
    description: 'A selection of customizable themes and templates to alter the appearance of your blog without needing coding skills.',
    icon: FormatPaintIcon,
  },
  {
    name: 'Analytics Dashboard',
    description: 'A dashboard that provides insights into blog traffic, user engagement, and other key metrics to track performance.',
    icon: InsertChartIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-white">Write faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-3xl">Everything you need for blog management</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Instantly share your thoughts with our blazing-fast blogging platform. Write, publish, and connect effortlessly—at the speed of light.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
