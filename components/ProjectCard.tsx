import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  SiNextDotJs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  websiteUrl: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  logo,
  websiteUrl,
  codeUrl,
  description,
}) => {
  return (
    <article className="min-h-full grid grid-rows-3 border-2 border-black dark:border-white rounded-md bg-white dark:bg-gray-900 p-4 space-y-4">
      <header className="flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <div className="flex space-x-2 mt-2">
            <SiNextDotJs />
            <SiTailwindcss />
            <SiTypescript />
            <SiGraphql />
          </div>
        </div>
        <div className="grid place-items-center border-2 border-black dark:border-white rounded-md">
          <Image height={64} width={64} src={logo} alt={title} />
        </div>
      </header>
      <p className="text-sm">{description}</p>
      <footer className="grid grid-flow-col justify-between items-end">
        {/* External Links */}
        <div className="space-x-2">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-md text-white dark:text-black bg-black dark:bg-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <span className="mr-2">Website</span>
            <HiOutlineExternalLink className="h-4 w-4" />
          </a>

          {/* Display only if public repo */}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-md text-white dark:text-black bg-black dark:bg-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <span className="mr-2">Code</span>
              <HiOutlineExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Project details page */}
        <Link href={`/projects/${title.toLowerCase().replace(" ", "-")}`}>
          <a className="text-sm font-medium hover:underline">
            Learn more &rarr;
          </a>
        </Link>
      </footer>
    </article>
  );
};

export default ProjectCard;
