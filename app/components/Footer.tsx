

/* eslint-disable @typescript-eslint/no-explicit-any */
interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }

  interface Footer2Props {
    logo?: {
      src: any;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }

  const Footer= ({
    copyright = "© 2025 Anicypher. All rights reserved."
  }: Footer2Props) => {
    return (
      <section className="py-20">
        <div className="ml-20 container w-full">
          <footer>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center lg:w-100%">
              <p>{copyright}</p>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  export { Footer };